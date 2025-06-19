HeartCare: Heart Attack Predictor
A professional Django-based web application for predicting heart attack risk using AI, featuring a cutting-edge, health-focused frontend UI.
Setup Instructions

Clone the repository
Create a virtual environment:

python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate


Install dependencies:

pip install -r requirements.txt


Place your trained model file (heart_attack_model.pkl) in predictor/static/model/

Run migrations:


python manage.py makemigrations
python manage.py migrate


Collect static files:

python manage.py collectstatic


Start the development server:

python manage.py runserver


Access the application at http://localhost:8000


Requirements

Python 3.8+
Django 5.0+
Trained scikit-learn model (heart_attack_model.pkl)

Model Input Parameters

Age (years)
Gender (0: Female, 1: Male)
Heart Rate (bpm)
Systolic Blood Pressure (mmHg)
Diastolic Blood Pressure (mmHg)
Blood Sugar (mg/dL)
CK-MB (ng/mL)
Troponin (ng/mL)

Notes

Ensure the heart_attack_model.pkl is compatible with scikit-learn 1.5+
Uses Tailwind CSS, Font Awesome, and Inter font
Client-side and server-side input validation
Update SECRET_KEY in settings.py before deployment
Run python manage.py collectstatic --clear if styles don't apply
Disable ad-blockers if animations or icons don't load

