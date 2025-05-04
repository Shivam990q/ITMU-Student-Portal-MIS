# ITM University MIS Backend

Backend for the ITM University Management Information System built with Django and Django REST Framework.

## Technology Stack

- **Framework**: Django 5.0.4, Django REST Framework 3.14.0
- **Database**: PostgreSQL
- **Authentication**: Django Auth + JWT (using Djoser)
- **Deployment**: Docker, Kubernetes/Nginx

## Project Structure

```
backend/
├── deployment/                 # Deployment configurations
│   ├── kubernetes/             # Kubernetes manifests
│   └── nginx/                  # Nginx configuration
├── itmu_mis/                   # Main Django project
│   ├── accounts/               # User authentication and profiles
│   ├── api/                    # API endpoints and documentation
│   ├── attendance/             # Attendance tracking
│   ├── core/                   # Core settings and configurations
│   ├── courses/                # Course management
│   ├── documents/              # Document management
│   ├── faculty/                # Faculty management
│   ├── payments/               # Payment processing
│   ├── results/                # Exam results and grades
│   ├── students/               # Student management
│   ├── manage.py               # Django management script
│   ├── static/                 # Static files
│   └── templates/              # Django templates
├── docker-compose.yml          # Docker Compose configuration
├── Dockerfile                  # Docker build configuration
├── requirements.txt            # Python dependencies
└── env.example                 # Example environment variables
```

## Development Setup

1. Clone the repository:
   ```
   git clone https://github.com/itm-university/mis-portal.git
   cd mis-portal/backend
   ```

2. Copy the example environment file and modify as needed:
   ```
   cp env.example .env
   ```

3. Run with Docker Compose:
   ```
   docker-compose up
   ```

4. Alternatively, set up a virtual environment and run locally:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   cd itmu_mis
   python manage.py migrate
   python manage.py runserver
   ```

5. Access the API at http://localhost:8000/api/v1/
   - API documentation: http://localhost:8000/swagger/
   - Admin interface: http://localhost:8000/admin/

## API Documentation

The API documentation is available through Swagger UI at `/swagger/` and ReDoc at `/redoc/` endpoints.

## Deployment

For production deployment:

1. Build Docker images:
   ```
   docker build -t itmu-mis-backend .
   ```

2. Deploy to Kubernetes:
   ```
   kubectl apply -f deployment/kubernetes/
   ```

3. Alternative Nginx deployment:
   See configurations in `deployment/nginx/`

## License

© ITM University, Gwalior. All rights reserved. 