import { FC, memo, useState } from 'react';
import { List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { SharedComponents, Utils } from '@shared';

interface INestedList {
    path: string;
    name: string;
    onClick: any;
    hook(): Array<any>;
}

export const NestedList: FC<INestedList> = memo(({ name, onClick, hook,  path }) => {
    const { renderMenuItem } = Utils;
    const [arr, fetching, error, fetch] = hook();
    const [open, setOpen] = useState(false);

    const toggleList = (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setOpen(!open);
        fetch();
    };

    if (error) {
        return <SharedComponents.WarningMessage text="Error" />;
    }

    return (
        <List
            sx={{ width: '100%', color: 'text.secondary', padding: '0' }}
            component="nav"
            aria-labelledby="nested-list-subheader">
            <ListItemButton
                onClick={toggleList}
                onKeyDown={toggleList}>
                <ListItemText primary={name} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
                in={open}
                timeout="auto"
                unmountOnExit>
                <List
                    component="div"
                    disablePadding>
                    {fetching ? (
                        <SharedComponents.Progress />
                    ) : (
                        arr.map(renderMenuItem(onClick, path))
                    )}
                </List>
            </Collapse>
        </List>
    );
});
