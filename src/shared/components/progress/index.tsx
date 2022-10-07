import { LinearProgress, Stack, useTheme } from '@mui/material';

export const Progress = () => {
    const { palette } = useTheme();
    return (
        <Stack
            sx={{ width: '100%', color: `${palette.secondary.light}` }}
            spacing={2}>
            <LinearProgress color="inherit" />
        </Stack>
    );
};
