# ITM University Management Information System

**PROPRIETARY SOFTWARE - FOR ITM UNIVERSITY USE ONLY**  
*Developed by: Shivam Gupta*

## About This Project

This Management Information System (MIS) is developed exclusively for ITM University, Gwalior. It provides a comprehensive platform for managing all aspects of the university's operations, including student management, attendance tracking, course registration, fee management, and more.

## Technology Stack

### Frontend
- React with TypeScript
- TailwindCSS for UI components
- ShadCN UI library
- React Router for navigation

### Backend
- Django 5.0+ 
- Django REST Framework for API
- PostgreSQL for database
- Django Auth with JWT for authentication
- Role-Based Access Control

### Deployment
- Docker for containerization
- Kubernetes/Nginx for orchestration

## Project Structure

The project is organized into two main components:

```
/
├── frontend/              # React frontend application
│   ├── public/            # Static assets
│   ├── src/               # Source code
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions and configurations
│   └── ...                # Configuration files
│
├── backend/               # Django backend application
│   ├── deployment/        # Deployment configurations
│   │   ├── kubernetes/    # Kubernetes manifests
│   │   └── nginx/         # Nginx configurations
│   ├── itmu_mis/          # Main Django project
│   │   ├── accounts/      # User authentication and profiles
│   │   ├── api/           # API endpoints and documentation
│   │   ├── attendance/    # Attendance tracking
│   │   ├── core/          # Core settings and configurations
│   │   ├── courses/       # Course management
│   │   ├── documents/     # Document management
│   │   ├── faculty/       # Faculty management
│   │   ├── payments/      # Payment processing
│   │   ├── results/       # Exam results and grades
│   │   └── students/      # Student management
│   └── ...                # Configuration files
```

## Features

- **User Authentication & Authorization**
  - Role-based access control (Student, Faculty, Staff, Admin)
  - Secure login with JWT tokens

- **Student Portal**
  - Student profile management
  - Course registration
  - View attendance records
  - View exam schedules and results
  - Fee payment and receipt management
  - Document uploads and downloads

- **Faculty Portal**
  - Faculty profile management
  - Course assignment
  - Attendance management
  - Grade and result management
  - Student performance analytics

- **Administration Portal**
  - User management
  - Department and program management
  - Course management
  - Fee structure management
  - Reporting and analytics

## Development Setup

### Prerequisites
- Node.js 18+ for frontend
- Python 3.11+ for backend
- PostgreSQL 14+
- Docker and Docker Compose (optional, for containerized development)

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
cd itmu_mis
python manage.py migrate

# Start the development server
python manage.py runserver
```

### Docker Setup
```bash
docker-compose up
```

## Deployment

For production deployment, follow the instructions in the `deployment` directory.

## Project Status

This project is currently under development. See the Issues section for planned features and known issues.

## License

© ITM University, Gwalior. All rights reserved. 