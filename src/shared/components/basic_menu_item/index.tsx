import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import styled from '@emotion/styled';
import { Paths } from '@shared';

interface IMenuItem {
    name?: string;
    id?: string;
    onClick?(e: React.MouseEvent): void;
}

interface IBasicMenuItem {
    children?: React.ReactNode;
    onClick?(e: React.MouseEvent): void;
}

const LinkStyled = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const BasicMenuItem: FC<IBasicMenuItem> = ({ children, onClick }) => {
    return (
        <MenuItem
            onClick={onClick}
            sx={{
                color: 'text.secondary',
            }}>
            {children}
        </MenuItem>
    );
};

export const BasicRocketMenuItem: FC<IMenuItem> = memo(({ name, id, onClick }) => {
    return (
        <BasicMenuItem onClick={onClick}>
            <LinkStyled to={`${Paths.ROCKET}/${id}`}>{name}</LinkStyled>
        </BasicMenuItem>
    );
});

export const BasicCapsuleMenuItem: FC<IMenuItem> = memo(({ name, id, onClick }) => {
    return (
        <BasicMenuItem onClick={onClick}>
            <LinkStyled to={`${Paths.CAPSULE}/${id}`}>{name}</LinkStyled>
        </BasicMenuItem>
    );
});

export const BasicMissionMenuItem: FC<IMenuItem> = memo(({ name, id, onClick }) => {
    return (
        <BasicMenuItem onClick={onClick}>
            <LinkStyled to={`${Paths.MISSION}/${id}`}>{name}</LinkStyled>
        </BasicMenuItem>
    );
});
