from django import forms

class PredictionForm(forms.Form):
    GENDER_CHOICES = [
        (0, 'Female'),
        (1, 'Male'),
    ]
    
    age = forms.IntegerField(
        label='Age',
        min_value=0,
        max_value=120,
        widget=forms.NumberInput(attrs={'class': 'form-input'})
    )
    gender = forms.ChoiceField(
        label='Gender',
        choices=GENDER_CHOICES,
        widget=forms.Select(attrs={'class': 'form-input'})
    )
    heart_rate = forms.IntegerField(
        label='Heart Rate (bpm)',
        min_value=0,
        max_value=300,
        widget=forms.NumberInput(attrs={'class': 'form-input'})
    )
    systolic_bp = forms.IntegerField(
        label='Systolic Blood Pressure (mmHg)',
        min_value=0,
        max_value=300,
        widget=forms.NumberInput(attrs={'class': 'form-input'})
    )
    diastolic_bp = forms.IntegerField(
        label='Diastolic Blood Pressure (mmHg)',
        min_value=0,
        max_value=200,
        widget=forms.NumberInput(attrs={'class': 'form-input'})
    )
    blood_sugar = forms.FloatField(
        label='Blood Sugar (mg/dL)',
        min_value=0,
        widget=forms.NumberInput(attrs={'class': 'form-input'})
    )
    ck_mb = forms.FloatField(
        label='CK-MB (ng/mL)',
        min_value=0,
        widget=forms.NumberInput(attrs={'class': 'form-input'})
    )
    troponin = forms.FloatField(
        label='Troponin (ng/mL)',
        min_value=0,
        widget=forms.NumberInput(attrs={'class': 'form-input'})
    )