import { SharedComponents, SharedTypes, Hooks, Utils } from '@shared';

export const RocketDetails = ({ rocket }: SharedTypes.IRocketOutputData) => {
    const { renderGeneralParams, renderPhysicalParams } = Utils;
    const {
        name,
        description,
        generalParams,
        physicalParams,
        firstStage,
        secondStage,
        enginesParams,
    } = Hooks.useRocketQueryData(rocket);

    return (
        <>
            <SharedComponents.InfoHeaderText text={name} />
            {generalParams.map(renderGeneralParams)}
            <SharedComponents.InfoText text={description} />
            {physicalParams.map(renderPhysicalParams)}
            <SharedComponents.InfoSubHeaderText text="FIRST STAGE" />
            {firstStage.map(renderPhysicalParams)}
            <SharedComponents.InfoSubHeaderText text="SECOND STAGE" />
            {secondStage.map(renderPhysicalParams)}
            <SharedComponents.InfoSubHeaderText text="ENGINES" />
            {enginesParams.map(renderPhysicalParams)}
        </>
    );
};
