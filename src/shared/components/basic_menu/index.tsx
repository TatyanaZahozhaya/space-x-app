import { useState, FC} from 'react';
import { Button, Menu} from '@mui/material';
import './index.css';
import { SharedComponents } from '@shared';

interface IBasicMenu {
    name: string;
    hook: any;
    renderFunction( handleClose: () => void): any
}

export const BasicMenu: FC<IBasicMenu> = ({ name, hook, renderFunction }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [arr, fetching, error, fetch] = hook();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        fetch();
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    if (!arr) {
        return <SharedComponents.WarningMessage text="Information not found" />
    }

    if (error) {
        return <SharedComponents.WarningMessage text="Error. Please, try later." />
    }

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                variant="outlined"
                sx={{
                    borderColor: 'secondary.main',
                    borderRadius: '0',
                    color: 'text.primary',
                    '&:hover': {
                        borderColor: 'secondary.main',
                    },
                }}>
                {name}
            </Button>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}>
                {fetching ? <SharedComponents.Progress/> : arr.map(renderFunction(handleClose))}
            </Menu>
        </div>
    );
};



