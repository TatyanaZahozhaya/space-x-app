import { useParams } from 'react-router-dom';
import { SharedComponents } from '@shared';
import { CapsuleInfo } from './capsule_info';

export const Capsule = () => {
    const { id } = useParams();

    if (!id) {
        return <SharedComponents.WarningMessage text="Incorrect URL" />;
    }


    return (
        <SharedComponents.InfoPartContainer>
            <CapsuleInfo id={id} />
        </SharedComponents.InfoPartContainer>
    );
};
