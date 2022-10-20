import { SharedComponents, SharedTypes } from '@shared';

export const renderPhysicalParams = (item: SharedTypes.IOverviewParam) => {
    return (
        <SharedComponents.DetailedInfo
            key={item.paramName}
            {...item}
        />
    );
};
