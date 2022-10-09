import { useState, FC } from 'react';
import { Menu } from '@mui/material';
import { SharedComponents, Utils } from '@shared';
import './index.css';

interface IBasicMenu {
    path: string;
    name: string;
    hook(): Array<any>;
}

export const BasicMenu: FC<IBasicMenu> = ({ name, hook, path }) => {
    const { renderMenuItem } = Utils;
    const [arr, fetching, error, fetch] = hook();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        fetch();
    };

    const handleClose = (event: React.KeyboardEvent | React.MouseEvent) => {
        console.log(event.target);
        setAnchorEl(null);
    };

    if (!arr) {
        return <SharedComponents.WarningMessage text="Information not found" />;
    }

    if (error) {
        return <SharedComponents.WarningMessage text="Error. Please, try later." />;
    }

    return (
        <SharedComponents.HeaderMenuBox>
            <SharedComponents.HeaderMenuButton
                name={name}
                onClick={handleClick}
                ariaControls={open ? 'basic-menu' : undefined}
                ariaExpanded={open ? 'true' : undefined}
            />

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}>
                {fetching ? (
                    <SharedComponents.Progress />
                ) : (
                    arr.map(renderMenuItem(handleClose, path))
                )}
            </Menu>
        </SharedComponents.HeaderMenuBox>
    );
};
