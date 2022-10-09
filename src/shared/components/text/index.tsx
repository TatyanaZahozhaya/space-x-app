import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import styled from '@emotion/styled';
import { Paths } from '@shared';

interface IText {
    text: string;
}
const LinkStyled = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const TitleHomePage: FC<IText> = memo(({ text }) => {
    const { spacing } = useTheme();
    return (
        <Typography
            variant="h2"
            component="h1"
            sx={{
                mb: `${spacing(4)}`,
                '@media (max-width:600px)': {
                    fontSize: '2.5rem',
                },
            }}>
            {text}
        </Typography>
    );
});

export const DescriptionText: FC<IText> = memo(({ text }) => {
    const { spacing } = useTheme();
    return (
        <Typography
            variant="h5"
            component="div"
            sx={{
                mb: `${spacing(4)}`,
                '@media (max-width:600px)': {
                    fontSize: '1rem',
                },
            }}>
            {text}
        </Typography>
    );
});

export const NavigationText: FC<IText> = memo(({ text }) => {
    return (
        <Typography>
            <LinkStyled to={`${Paths.HOME}`}>{text}</LinkStyled>
        </Typography>
    );
});

export const InfoHeaderText: FC<IText> = memo(({ text }) => {
    return (
        <Typography
            variant="h5"
            component="div">
            {text}
        </Typography>
    );
});

export const InfoSubHeaderText: FC<IText> = memo(({ text }) => {
    const { spacing } = useTheme();
    return (
        <Typography
            variant="subtitle1"
            component="div"
            sx={{
                m: `${spacing(3)} 0 ${spacing(1)} 0`,
                '@media (max-width: 530px)': {
                    fontSize: '0.9rem',
                },
            }}>
            {text}
        </Typography>
    );
});

export const InfoText: FC<IText> = memo(({ text }) => {
    const { spacing } = useTheme();
    return (
        <Typography
            variant="body1"
            component="div"
            sx={{
                textAlign: 'justify',
                m: `${spacing(2)} 0`,
                '@media (max-width: 530px)': {
                    fontSize: '0.9rem',
                },
            }}>
            {text}
        </Typography>
    );
});

export const ParamNameText: FC<IText> = memo(({ text }) => {
    return (
        <Typography
            variant="overline"
            component="div">
            {text}
        </Typography>
    );
});

export const ParamText: FC<IText> = memo(({ text }) => {
    return (
        <Typography
            variant="body2"
            component="div"
            sx={{
                textAlign: 'right',
            }}>
            {text}
        </Typography>
    );
});
