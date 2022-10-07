import { FC, memo } from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import { Grow } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

export const GrigContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
});

const FlexBoxSB = styled(Box)<BoxProps>({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
});

const FlexBoxC = styled(Box)<BoxProps>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

interface IContainer {
    children?: React.ReactNode;
}
export const AppContainer: FC<IContainer> = memo(({ children }) => {
    return (
        <FlexBoxSB
            sx={{
                minHeight: '100vh',
            }}>
            {children}
        </FlexBoxSB>
    );
});

export const MainPartContainer: FC<IContainer> = memo(({ children }) => {
    const { spacing } = useTheme();
    return (
        <FlexBoxC
            component="main"
            sx={{
                flex: '1 1 auto',
                mt: `${spacing(10)}`,
                mb: `${spacing(2)}`,
                gap: `${spacing(2)}`,
                '@media (max-width:600px)': {
                    mt: `${spacing(12)}`,
                },
            }}>
            {children}
        </FlexBoxC>
    );
});

export const MainPartContainerHomePage: FC<IContainer> = memo(({ children }) => {
    return (
        <Grow
            in={true}
            {...{ timeout: 1000 }}>
            <FlexBoxC
                sx={{
                    flex: `1 1 auto`,
                    justifyContent: 'center',
                }}>
                {children}
            </FlexBoxC>
        </Grow>
    );
});

export const MenuContainer: FC<IContainer> = memo(({ children }) => {
    const { spacing } = useTheme();
    return (
        <Grow
            in={true}
            {...{ timeout: 1000 }}>
            <FlexBoxC
                sx={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: `${spacing(2)}`,
                }}>
                {children}
            </FlexBoxC>
        </Grow>
    );
});

export const InfoPartContainer: FC<IContainer> = memo(({ children }) => {
    const { spacing } = useTheme();
    return (
        <Grow
            in={true}
            {...{ timeout: 1000 }}>
            <FlexBoxC
                sx={{
                    width: '600px',
                    alignItems: 'flex-start',
                    padding: `${spacing(2)}`,
                }}>
                {children}
            </FlexBoxC>
        </Grow>
    );
});

export const ParamContainer: FC<IContainer> = memo(({ children }) => {
    const { spacing } = useTheme();
    return (
        <FlexBoxC
            sx={{
                alignSelf: 'left',
                flexDirection: 'row',
                justifyContent: 'left',
                gap: `${spacing(2)}`,
            }}>
            {children}
        </FlexBoxC>
    );
});

export const DetailsContainer: FC<IContainer> = memo(({ children }) => {
    const { spacing } = useTheme();
    return (
        <FlexBoxC
            sx={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: `${spacing(2)}`,
            }}>
            {children}
        </FlexBoxC>
    );
});
