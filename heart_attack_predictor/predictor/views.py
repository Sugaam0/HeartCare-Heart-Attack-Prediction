import joblib
import pandas as pd
import os
from django.shortcuts import render
from django.conf import settings
from .forms import PredictionForm

def index(request):
    form = PredictionForm()
    prediction = None
    error = None
    
    if request.method == 'POST':
        form = PredictionForm(request.POST)
        if form.is_valid():
            try:
                # Load model
                model_path = os.path.join(settings.BASE_DIR, 'predictor/static/model/heart_attack_model.pkl')
                model = joblib.load(model_path)
                
                # Prepare input data
                input_data = {
                    'Age': [form.cleaned_data['age']],
                    'Gender': [int(form.cleaned_data['gender'])],
                    'Heart rate': [form.cleaned_data['heart_rate']],
                    'Systolic blood pressure': [form.cleaned_data['systolic_bp']],
                    'Diastolic blood pressure': [form.cleaned_data['diastolic_bp']],
                    'Blood sugar': [form.cleaned_data['blood_sugar']],
                    'CK-MB': [form.cleaned_data['ck_mb']],
                    'Troponin': [form.cleaned_data['troponin']],
                }
                
                # Create DataFrame
                input_df = pd.DataFrame(input_data)
                
                # Make prediction
                prediction_result = model.predict(input_df)[0]
                prediction = 'Heart Attack Likely' if prediction_result == 1 else 'No Heart Attack'
                
            except Exception as e:
                error = f"An error occurred: {str(e)}"
    
    return render(request, 'predictor/index.html', {
        'form': form,
        'prediction': prediction,
        'error': error
    })