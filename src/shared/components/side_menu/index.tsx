import * as React from 'react';
import { Drawer, List, Divider, ListItem } from '@mui/material';
import { SharedComponents, MenuRoutes } from '@shared';

export const SideMenu = () => {
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setState(open);
        console.log(event.target)
    };

    const renderList = () => (
        <SharedComponents.SideMenuListContainer>
            <List>
                {MenuRoutes.map((item) => (
                    <ListItem
                        key={item.name}
                        disablePadding>
                        <SharedComponents.NestedList
                            name={item.name}
                            onClick={toggleDrawer(false)}
                            hook={item.hook}
                            path={item.path}
                        />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </SharedComponents.SideMenuListContainer>
    );

    return (
        <SharedComponents.SideMenuBox>
            <SharedComponents.SideMenuButton
                name="MENU"
                onClick={toggleDrawer(true)}
            />
            <Drawer
                anchor="right"
                open={state}
                onClose={toggleDrawer(false)}>
                {renderList()}
            </Drawer>
        </SharedComponents.SideMenuBox>
    );
};
