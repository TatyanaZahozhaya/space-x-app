import { useTheme } from '@mui/material';
import Divider from '@mui/material/Divider';

export const LineDevider = () => {
    const { palette } = useTheme();

    return <Divider sx={{ borderColor: `${palette.secondary.light}`, width: '100%' }} />;
};
