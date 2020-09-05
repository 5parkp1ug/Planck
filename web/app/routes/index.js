import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router';

// ----------- Pages Imports ---------------
import Analytics from './Dashboards/Analytics';
import NavbarOnly from './Layouts/NavbarOnly';
import SidebarWithNavbar from './Layouts/SidebarWithNavbar';

import ReCharts from './Graphs/ReCharts';


import Tables from './Tables/Tables';
import ExtendedTable from './Tables/ExtendedTable';
import AgGrid from './Tables/AgGrid';

import ComingSoon from './Pages/ComingSoon';
import Confirmation from './Pages/Confirmation';
import Danger from './Pages/Danger';
import Error404 from './Pages/Error404';
import ForgotPassword from './Pages/ForgotPassword';
import LockScreen from './Pages/LockScreen';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Success from './Pages/Success';
import Timeline from './Pages/Timeline';

// Used Components
import Links from './Links';
import ProfileEdit from './Settings/ProfileEdit';
import AccountEdit from './Settings/AccountEdit';
import Geographic from './Analytics/Geographic'
import Overview from "./Analytics/Overview";


// ----------- Layout Imports ---------------
import { DefaultNavbar } from './../layout/components/DefaultNavbar';
import { DefaultSidebar } from './../layout/components/DefaultSidebar';

import { SidebarANavbar } from './../layout/components/SidebarANavbar';
import { SidebarASidebar } from './../layout/components/SidebarASidebar';


//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
    return (
        <Switch>
            <Redirect from="/" to="/dashboard" exact />
            
            <Route path="/dashboard" exact component={Analytics} />

            { /*    Pages Routes    */ }
            {/*<Route component={ ComingSoon } path="/pages/coming-soon" />*/}
            {/*<Route component={ Confirmation } path="/pages/confirmation" />*/}
            {/*<Route component={ Danger } path="/pages/danger" />*/}
            <Route component={ ForgotPassword } path="/pages/forgot-password" />
            {/*<Route component={ LockScreen } path="/pages/lock-screen" />*/}
            <Route component={ Login } path="/pages/login" />
            <Route component={ Register } path="/pages/register" />
            {/*<Route component={ Success } path="/pages/success" />*/}

            {/* Link Routes */}
            <Route component={ Links } path="/links/" />

            {/* Analtics Routes */}
            <Route component={ Overview } path="/analytics/overview/" />
            <Route component={ Geographic } path="/analytics/geographic/" />

            { /*    Settings Routes    */ }
            <Route component={ ProfileEdit } path="/settings/profile-edit" />
            <Route component={ AccountEdit } path="/settings/account-edit" />

            { /*    404    */ }
            <Redirect to="/pages/error-404" />
        </Switch>
    );
};

//------ Custom Layout Parts --------
export const RoutedNavbars  = () => (
    <Switch>
        { /* Other Navbars: */}
        <Route
            component={ SidebarANavbar }
            path="/layouts/sidebar-a"
        />
        <Route
            component={ NavbarOnly.Navbar }
            path="/layouts/navbar"
        />
        <Route
            component={ SidebarWithNavbar.Navbar }
            path="/layouts/sidebar-with-navbar"
        />
        { /* Default Navbar: */}
        <Route
            component={ DefaultNavbar }
        />
    </Switch>  
);

export const RoutedSidebars = () => (
    <Switch>
        { /* Other Sidebars: */}
        <Route
            component={ SidebarASidebar }
            path="/layouts/sidebar-a"
        />
        <Route
            component={ SidebarWithNavbar.Sidebar }
            path="/layouts/sidebar-with-navbar"
        />
        { /* Default Sidebar: */}
        <Route
            component={ DefaultSidebar }
        />
    </Switch>
);
