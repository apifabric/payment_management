# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime

Base = declarative_base()

# Example tables with descriptions
class Project(Base):
    __tablename__ = 'projects'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String)

    """
    description: Contains information about different projects.
    """


class Client(Base):
    __tablename__ = 'clients'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    contact_email = Column(String)
    contact_phone = Column(String)

    """
    description: Stores client information for projects.
    """


class Payment(Base):
    __tablename__ = 'payments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    amount = Column(Float, nullable=False)
    date = Column(DateTime, default=datetime.utcnow)
    project_id = Column(Integer, ForeignKey('projects.id'), nullable=False)

    """
    description: Records payment details related to projects.
    """


class Employee(Base):
    __tablename__ = 'employees'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    position = Column(String)
    hire_date = Column(DateTime, default=datetime.utcnow)

    """
    description: Contains details about project workforce.
    """


class Task(Base):
    __tablename__ = 'tasks'
    id = Column(Integer, primary_key=True, autoincrement=True)
    description = Column(String, nullable=False)
    due_date = Column(DateTime)
    project_id = Column(Integer, ForeignKey('projects.id'), nullable=False)
    
    """
    description: Details individual tasks associated with projects.
    """


class ProjectEmployee(Base):
    __tablename__ = 'project_employees'
    id = Column(Integer, primary_key=True, autoincrement=True)
    project_id = Column(Integer, ForeignKey('projects.id'), nullable=False)
    employee_id = Column(Integer, ForeignKey('employees.id'), nullable=False)
    role = Column(String)

    """
    description: Junction table linking employees with projects.
    """


class Invoice(Base):
    __tablename__ = 'invoices'
    id = Column(Integer, primary_key=True, autoincrement=True)
    client_id = Column(Integer, ForeignKey('clients.id'), nullable=False)
    project_id = Column(Integer, ForeignKey('projects.id'), nullable=False)
    total_amount = Column(Float, nullable=False)
    issue_date = Column(DateTime, default=datetime.utcnow)

    """
    description: Stores invoice records for clients related to projects.
    """


class Material(Base):
    __tablename__ = 'materials'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    cost = Column(Float)

    """
    description: Describes materials used in projects.
    """


class ProjectMaterial(Base):
    __tablename__ = 'project_materials'
    id = Column(Integer, primary_key=True, autoincrement=True)
    project_id = Column(Integer, ForeignKey('projects.id'), nullable=False)
    material_id = Column(Integer, ForeignKey('materials.id'), nullable=False)
    quantity = Column(Integer, nullable=False)

    """
    description: Junction table linking materials with projects specifying usage.
    """


class PaymentMethod(Base):
    __tablename__ = 'payment_methods'
    id = Column(Integer, primary_key=True, autoincrement=True)
    method_name = Column(String, nullable=False)
    
    """
    description: Lists the various payment methods available.
    """


class ProjectPaymentMethod(Base):
    __tablename__ = 'project_payment_methods'
    id = Column(Integer, primary_key=True, autoincrement=True)
    project_id = Column(Integer, ForeignKey('projects.id'), nullable=False)
    payment_method_id = Column(Integer, ForeignKey('payment_methods.id'), nullable=False)

    """
    description: Links available payment methods to projects.
    """


class ClientFeedback(Base):
    __tablename__ = 'client_feedbacks'
    id = Column(Integer, primary_key=True, autoincrement=True)
    project_id = Column(Integer, ForeignKey('projects.id'), nullable=False)
    feedback = Column(String)
    feedback_date = Column(DateTime, default=datetime.utcnow)

    """
    description: Stores feedback from clients about the projects.
    """


# Create a SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite', echo=False)
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# Sample Data Creation
# Projects
project1 = Project(name="Project A", description="A description of Project A")
project2 = Project(name="Project B", description="A description of Project B")

# Clients
client1 = Client(name="Client One", contact_email='client1@example.com', contact_phone='1234567890')
client2 = Client(name="Client Two", contact_email='client2@example.com', contact_phone='0987654321')

# Employees
employee1 = Employee(name="Alice Smith", position="Engineer", hire_date=datetime(2022, 1, 10))
employee2 = Employee(name="Bob Johnson", position="Manager", hire_date=datetime(2021, 3, 22))

# Payments
payment1 = Payment(amount=15000.00, date=datetime(2023, 5, 20), project_id=1)
payment2 = Payment(amount=10000.00, date=datetime(2023, 6, 15), project_id=2)

# Tasks
task1 = Task(description="Design Phase", due_date=datetime(2023, 5, 30), project_id=1)
task2 = Task(description="Implementation Phase", due_date=datetime(2023, 7, 15), project_id=2)

# Project Employees
project_employee1 = ProjectEmployee(project_id=1, employee_id=1, role="Team Lead")
project_employee2 = ProjectEmployee(project_id=2, employee_id=2, role="Consultant")

# Invoices
invoice1 = Invoice(client_id=1, project_id=1, total_amount=20000.00, issue_date=datetime(2023, 5, 21))
invoice2 = Invoice(client_id=2, project_id=2, total_amount=15000.00, issue_date=datetime(2023, 6, 18))

# Materials
material1 = Material(name="Concrete", cost=5000.00)
material2 = Material(name="Steel", cost=3000.00)

# Project Materials
project_material1 = ProjectMaterial(project_id=1, material_id=1, quantity=50)
project_material2 = ProjectMaterial(project_id=2, material_id=2, quantity=30)

# Payment Methods
payment_method1 = PaymentMethod(method_name="Credit Card")
payment_method2 = PaymentMethod(method_name="PayPal")

# Project Payment Methods
project_payment_method1 = ProjectPaymentMethod(project_id=1, payment_method_id=1)
project_payment_method2 = ProjectPaymentMethod(project_id=2, payment_method_id=2)

# Client Feedbacks
client_feedback1 = ClientFeedback(project_id=1, feedback="Excellent work!", feedback_date=datetime(2023, 5, 25))
client_feedback2 = ClientFeedback(project_id=2, feedback="Satisfactory performance.", feedback_date=datetime(2023, 6, 20))

# Adding instances to the session
session.add_all([
    project1, project2, client1, client2, employee1, employee2,
    payment1, payment2, task1, task2, project_employee1, project_employee2,
    invoice1, invoice2, material1, material2, project_material1, project_material2,
    payment_method1, payment_method2, project_payment_method1, project_payment_method2,
    client_feedback1, client_feedback2
])

# Persist data
session.commit()
session.close()
