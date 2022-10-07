import { FC, memo } from 'react';
import { SharedComponents, SharedTypes } from '@shared';

export const DetailedInfo: FC<SharedTypes.IOverviewParam> = memo((item) => {
    return (
        <>
            <SharedComponents.DetailsContainer>
                <SharedComponents.ParamNameText text={item.paramName} />
                <SharedComponents.ParamText text={item.param} />
            </SharedComponents.DetailsContainer>
            <SharedComponents.LineDevider />
        </>
    );
});
