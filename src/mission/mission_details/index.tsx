import { SharedComponents, SharedTypes, Hooks, Utils } from '@shared';

export const MissionDetails = ({ mission }: SharedTypes.IMissionOutputData) => {
    const { renderGeneralParams, renderPayloadItem } = Utils;
    const { name, description, generalParams, payloadsParams } = Hooks.useMissionQueryData(mission);

    return (
        <>
            <SharedComponents.InfoHeaderText text={name} />
            {generalParams.map(renderGeneralParams)}
            <SharedComponents.InfoText text={description} />
            {payloadsParams.map(renderPayloadItem)}
        </>
    );
};
