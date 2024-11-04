# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 04, 2024 08:21:15
# Database: sqlite:////tmp/tmp.IfLLSzbxHQ/payment_management/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Client(SAFRSBaseX, Base):
    __tablename__ = 'clients'
    _s_collection_name = 'Client'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    contact_email = Column(String)
    contact_phone = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    InvoiceList : Mapped[List["Invoice"]] = relationship(back_populates="client")



class Employee(SAFRSBaseX, Base):
    __tablename__ = 'employees'
    _s_collection_name = 'Employee'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    position = Column(String)
    hire_date = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    ProjectEmployeeList : Mapped[List["ProjectEmployee"]] = relationship(back_populates="employee")



class Material(SAFRSBaseX, Base):
    __tablename__ = 'materials'
    _s_collection_name = 'Material'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    cost = Column(Float)

    # parent relationships (access parent)

    # child relationships (access children)
    ProjectMaterialList : Mapped[List["ProjectMaterial"]] = relationship(back_populates="material")



class PaymentMethod(SAFRSBaseX, Base):
    __tablename__ = 'payment_methods'
    _s_collection_name = 'PaymentMethod'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    method_name = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    ProjectPaymentMethodList : Mapped[List["ProjectPaymentMethod"]] = relationship(back_populates="payment_method")



class Project(SAFRSBaseX, Base):
    __tablename__ = 'projects'
    _s_collection_name = 'Project'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    ClientFeedbackList : Mapped[List["ClientFeedback"]] = relationship(back_populates="project")
    InvoiceList : Mapped[List["Invoice"]] = relationship(back_populates="project")
    PaymentList : Mapped[List["Payment"]] = relationship(back_populates="project")
    ProjectEmployeeList : Mapped[List["ProjectEmployee"]] = relationship(back_populates="project")
    ProjectMaterialList : Mapped[List["ProjectMaterial"]] = relationship(back_populates="project")
    ProjectPaymentMethodList : Mapped[List["ProjectPaymentMethod"]] = relationship(back_populates="project")
    TaskList : Mapped[List["Task"]] = relationship(back_populates="project")



class ClientFeedback(SAFRSBaseX, Base):
    __tablename__ = 'client_feedbacks'
    _s_collection_name = 'ClientFeedback'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    project_id = Column(ForeignKey('projects.id'), nullable=False)
    feedback = Column(String)
    feedback_date = Column(DateTime)

    # parent relationships (access parent)
    project : Mapped["Project"] = relationship(back_populates=("ClientFeedbackList"))

    # child relationships (access children)



class Invoice(SAFRSBaseX, Base):
    __tablename__ = 'invoices'
    _s_collection_name = 'Invoice'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    client_id = Column(ForeignKey('clients.id'), nullable=False)
    project_id = Column(ForeignKey('projects.id'), nullable=False)
    total_amount = Column(Float, nullable=False)
    issue_date = Column(DateTime)

    # parent relationships (access parent)
    client : Mapped["Client"] = relationship(back_populates=("InvoiceList"))
    project : Mapped["Project"] = relationship(back_populates=("InvoiceList"))

    # child relationships (access children)



class Payment(SAFRSBaseX, Base):
    __tablename__ = 'payments'
    _s_collection_name = 'Payment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    amount = Column(Float, nullable=False)
    date = Column(DateTime)
    project_id = Column(ForeignKey('projects.id'), nullable=False)

    # parent relationships (access parent)
    project : Mapped["Project"] = relationship(back_populates=("PaymentList"))

    # child relationships (access children)



class ProjectEmployee(SAFRSBaseX, Base):
    __tablename__ = 'project_employees'
    _s_collection_name = 'ProjectEmployee'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    project_id = Column(ForeignKey('projects.id'), nullable=False)
    employee_id = Column(ForeignKey('employees.id'), nullable=False)
    role = Column(String)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("ProjectEmployeeList"))
    project : Mapped["Project"] = relationship(back_populates=("ProjectEmployeeList"))

    # child relationships (access children)



class ProjectMaterial(SAFRSBaseX, Base):
    __tablename__ = 'project_materials'
    _s_collection_name = 'ProjectMaterial'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    project_id = Column(ForeignKey('projects.id'), nullable=False)
    material_id = Column(ForeignKey('materials.id'), nullable=False)
    quantity = Column(Integer, nullable=False)

    # parent relationships (access parent)
    material : Mapped["Material"] = relationship(back_populates=("ProjectMaterialList"))
    project : Mapped["Project"] = relationship(back_populates=("ProjectMaterialList"))

    # child relationships (access children)



class ProjectPaymentMethod(SAFRSBaseX, Base):
    __tablename__ = 'project_payment_methods'
    _s_collection_name = 'ProjectPaymentMethod'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    project_id = Column(ForeignKey('projects.id'), nullable=False)
    payment_method_id = Column(ForeignKey('payment_methods.id'), nullable=False)

    # parent relationships (access parent)
    payment_method : Mapped["PaymentMethod"] = relationship(back_populates=("ProjectPaymentMethodList"))
    project : Mapped["Project"] = relationship(back_populates=("ProjectPaymentMethodList"))

    # child relationships (access children)



class Task(SAFRSBaseX, Base):
    __tablename__ = 'tasks'
    _s_collection_name = 'Task'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    description = Column(String, nullable=False)
    due_date = Column(DateTime)
    project_id = Column(ForeignKey('projects.id'), nullable=False)

    # parent relationships (access parent)
    project : Mapped["Project"] = relationship(back_populates=("TaskList"))

    # child relationships (access children)
