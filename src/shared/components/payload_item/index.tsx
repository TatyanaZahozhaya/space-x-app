import { FC, memo } from 'react';
import { Hooks, Utils, SharedComponents, SharedTypes } from '@shared';

export const PayloadItem: FC<SharedTypes.IPayloadItem> = memo((item) => {
    const { renderPhysicalParams } = Utils;
    const { id, payloadsParamsData } = Hooks.usePayloadsParams(item);

    return (
        <>
            <SharedComponents.InfoText text={id} />
            {payloadsParamsData.map(renderPhysicalParams)}
        </>
    );
});
