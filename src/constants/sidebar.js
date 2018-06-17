import {
    ROUTE_TO_DASHBOARD,
    ROUTE_LOGOUT
} from './routes';

const dashboard = {
    title: 'Dashboard',
    icon: 'icon-dashboard',
    link: ROUTE_TO_DASHBOARD,
    onlyActiveOnIndex: true,
};

export const sidebarProcurementItems = [
    dashboard,
];

export const sidebarOtherItems = [
    dashboard,
];
