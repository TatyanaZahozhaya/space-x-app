import { SharedComponents, SharedTypes, Hooks, Utils } from '@shared';

export const CapsuleDetails = ({ dragon }: SharedTypes.ICapsuleOutputData) => {
    const { renderGeneralParams, renderPhysicalParams } = Utils;
    const { name, description, generalParams, physicalParams, truncParams } =
        Hooks.useCapsuleQueryData(dragon);

    return (
        <>
            <SharedComponents.InfoHeaderText text={name} />
            {generalParams.map(renderGeneralParams)}
            <SharedComponents.InfoText text={description} />
            {physicalParams.map(renderPhysicalParams)}
            <SharedComponents.InfoSubHeaderText text="TRUNC" />
            {truncParams.map(renderPhysicalParams)}
        </>
    );
};
