import { useParams } from 'react-router-dom';
import { SharedComponents } from '@shared';
import { RocketInfo } from './rocket_info';

export const Rocket = () => {
    const { id } = useParams();

    if (!id) {
        return <SharedComponents.WarningMessage text="Incorrect URL" />;
    }

    return (
        <SharedComponents.InfoPartContainer>
            <RocketInfo id={id} />
        </SharedComponents.InfoPartContainer>
    );
};
