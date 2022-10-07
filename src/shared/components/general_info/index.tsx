import { FC, memo } from 'react';
import { SharedComponents, SharedTypes } from '@shared';

export const GeneralInfo: FC<SharedTypes.IOverviewParam> = memo((item) => {
    return (
        <SharedComponents.ParamContainer>
            <SharedComponents.ParamNameText text={item.paramName} />
            <SharedComponents.ParamText text={item.param} />
        </SharedComponents.ParamContainer>
    );
});
