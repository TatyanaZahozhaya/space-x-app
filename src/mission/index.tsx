import { useParams } from 'react-router-dom';
import { SharedComponents } from '@shared';
import { MissionInfo } from './mission_info';

export const Mission = () => {
    const { id } = useParams();

    if (!id) {
        return <SharedComponents.WarningMessage text="Incorrect URL" />;
    }

    return (
        <SharedComponents.InfoPartContainer>
            <MissionInfo id={id} />
        </SharedComponents.InfoPartContainer>
    );
};
