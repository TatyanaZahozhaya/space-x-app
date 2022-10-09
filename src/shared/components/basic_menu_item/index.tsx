import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import styled from '@emotion/styled';

interface IBasicMenuItem {
    name: string;
    id: string;
    path: string;
    children?: React.ReactNode;
    onClick?(e: React.MouseEvent): void;
}

const LinkStyled = styled(Link)`
    text-decoration: none;
    display: block;
`;

export const BasicMenuItem: FC<IBasicMenuItem> = memo(({ name, id, path, onClick }) => {
    return (
        <LinkStyled
            tabIndex={0}
            onClick={onClick}
            to={`${path}/${id}`}>
            <MenuItem
                sx={{
                    color: 'text.secondary',
                    '@media (max-width:670px)': {
                        fontSize: '0.9rem',
                    },
                }}>
                {name}
            </MenuItem>
        </LinkStyled>
    );
});
