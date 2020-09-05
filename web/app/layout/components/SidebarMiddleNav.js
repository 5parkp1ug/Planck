import React from 'react';

import { SidebarMenu } from './../../components';

export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-home"></i>}
            title="Dashboard"
            to={'/dashboard'}
        />

        {/* ------- Link Management ---------*/}
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-chain"></i>}
            title="Links" exact
            to={"/links"}
        />

        {/* ------- Analytics ---------*/}
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-bar-chart"></i>}
            title="Analytics"
        >
            <SidebarMenu.Item title="Overview" to="/analytics/overview" />
            <SidebarMenu.Item title="Geographic" to="/analytics/geographic" />
            <SidebarMenu.Item title="Device" to="/analytics/device" />
        </SidebarMenu.Item>

        {/* ------- Settings ---------*/}
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-cogs"></i>}
            title="Settings"
        >
            <SidebarMenu.Item title="Profile Edit" to="/settings/profile-edit" />
            <SidebarMenu.Item title="Account Edit" to="/settings/account-edit" />
        </SidebarMenu.Item>

        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-bookmark-o"></i>}
            title="Docs"
            href='https://webkom.gitbook.io/spin/v/airframe/airframe-react/documentation-react'
        />
    </SidebarMenu >
);
