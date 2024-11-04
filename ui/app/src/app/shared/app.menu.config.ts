import { MenuRootItem } from 'ontimize-web-ngx';

import { ClientCardComponent } from './Client-card/Client-card.component';

import { ClientFeedbackCardComponent } from './ClientFeedback-card/ClientFeedback-card.component';

import { EmployeeCardComponent } from './Employee-card/Employee-card.component';

import { InvoiceCardComponent } from './Invoice-card/Invoice-card.component';

import { MaterialCardComponent } from './Material-card/Material-card.component';

import { PaymentCardComponent } from './Payment-card/Payment-card.component';

import { PaymentMethodCardComponent } from './PaymentMethod-card/PaymentMethod-card.component';

import { ProjectCardComponent } from './Project-card/Project-card.component';

import { ProjectEmployeeCardComponent } from './ProjectEmployee-card/ProjectEmployee-card.component';

import { ProjectMaterialCardComponent } from './ProjectMaterial-card/ProjectMaterial-card.component';

import { ProjectPaymentMethodCardComponent } from './ProjectPaymentMethod-card/ProjectPaymentMethod-card.component';

import { TaskCardComponent } from './Task-card/Task-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Client', name: 'CLIENT', icon: 'view_list', route: '/main/Client' }
    
        ,{ id: 'ClientFeedback', name: 'CLIENTFEEDBACK', icon: 'view_list', route: '/main/ClientFeedback' }
    
        ,{ id: 'Employee', name: 'EMPLOYEE', icon: 'view_list', route: '/main/Employee' }
    
        ,{ id: 'Invoice', name: 'INVOICE', icon: 'view_list', route: '/main/Invoice' }
    
        ,{ id: 'Material', name: 'MATERIAL', icon: 'view_list', route: '/main/Material' }
    
        ,{ id: 'Payment', name: 'PAYMENT', icon: 'view_list', route: '/main/Payment' }
    
        ,{ id: 'PaymentMethod', name: 'PAYMENTMETHOD', icon: 'view_list', route: '/main/PaymentMethod' }
    
        ,{ id: 'Project', name: 'PROJECT', icon: 'view_list', route: '/main/Project' }
    
        ,{ id: 'ProjectEmployee', name: 'PROJECTEMPLOYEE', icon: 'view_list', route: '/main/ProjectEmployee' }
    
        ,{ id: 'ProjectMaterial', name: 'PROJECTMATERIAL', icon: 'view_list', route: '/main/ProjectMaterial' }
    
        ,{ id: 'ProjectPaymentMethod', name: 'PROJECTPAYMENTMETHOD', icon: 'view_list', route: '/main/ProjectPaymentMethod' }
    
        ,{ id: 'Task', name: 'TASK', icon: 'view_list', route: '/main/Task' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    ClientCardComponent

    ,ClientFeedbackCardComponent

    ,EmployeeCardComponent

    ,InvoiceCardComponent

    ,MaterialCardComponent

    ,PaymentCardComponent

    ,PaymentMethodCardComponent

    ,ProjectCardComponent

    ,ProjectEmployeeCardComponent

    ,ProjectMaterialCardComponent

    ,ProjectPaymentMethodCardComponent

    ,TaskCardComponent

];