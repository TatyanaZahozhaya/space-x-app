import { FC, memo } from 'react';
import { Card, Typography, useTheme } from '@mui/material';

interface IWarningMessage {
    text: string;
}

export const WarningMessage: FC<IWarningMessage> = memo(({ text }) => {
    const { spacing, palette } = useTheme();

    return (
        <Card
            sx={{
                minWidth: 250,
                textAlign: 'center',
                padding: `${spacing(1)}`,
                borderRadius: '0',
                alignSelf: 'center',
            }}>
            <Typography
                sx={{
                    padding: `${spacing(1)}`,
                    color: 'warning.dark',
                    border: `${palette.primary.main} ${spacing(0.1)} solid`,
                }}
                variant="h5"
                component="div">
                {text}
            </Typography>
        </Card>
    );
});
