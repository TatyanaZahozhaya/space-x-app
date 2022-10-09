import { FC, memo } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import {  useTheme } from '@mui/material/styles';

interface IAppBar {
    children?: React.ReactNode;
}

interface IToolbar extends IAppBar {}

export const AppBarHeader: FC<IAppBar> = memo(({ children }) => {
    return <AppBar position="fixed">{children}</AppBar>;
});

export const ToolbarHeader: FC<IToolbar> = memo(({ children }) => {
    const { spacing } = useTheme();
    return (
        <Toolbar
            sx={{
                display: 'grid',
                gridTemplateColumns: '90px 1fr 90px',
                '@media (max-width:670px)': {
                    gap: `${spacing(2)}`,
                },
                '@media (max-width:666px)': {
                    gridTemplateColumns: '90px  90px',
                    justifyContent: 'space-between'
                },
            }}>
            {children}
        </Toolbar>
    );
});

export const AppBarFooter: FC<IAppBar> = memo(({ children }) => {
    return (
        <AppBar
            component="footer"
            position="relative"
            sx={{ top: 'auto', bottom: 0 }}>
            {children}
        </AppBar>
    );
});
