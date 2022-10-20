import { FC, memo } from 'react';
import Button from '@mui/material/Button';

interface IMenuButton {
    name: string;
    onClick: any;
    onKeyDown?: any;
    id?: string;
    ariaControls?: string | undefined;
    ariaHaspopup?: any;
    ariaExpanded?: any;
}
export const MenuButton: FC<IMenuButton> = memo(
    ({ name, onClick, id, ariaControls, ariaHaspopup, ariaExpanded }) => {
        return (
            <Button
                variant="outlined"
                sx={{
                    borderColor: 'secondary.main',
                    borderRadius: '0',
                    color: 'text.primary',
                    '&:hover': {
                        borderColor: 'secondary.main',
                    },
                }}
                onClick={onClick}
                id={id}
                aria-controls={ariaControls}
                aria-haspopup={ariaHaspopup}
                aria-expanded={ariaExpanded}>
                {name}
            </Button>
        );
    },
);

export const SideMenuButton: FC<IMenuButton> = memo(({ name, onClick, onKeyDown }) => {
    return (
        <MenuButton
            name={name}
            onClick={onClick}
            onKeyDown={onKeyDown}
        />
    );
});

export const HeaderMenuButton: FC<IMenuButton> = memo(
    ({ name, onClick, ariaControls, ariaExpanded }) => {
        return (
            <MenuButton
                name={name}
                onClick={onClick}
                id="basic-button"
                ariaControls={ariaControls}
                ariaHaspopup="true"
                ariaExpanded={ariaExpanded}
            />
        );
    },
);
