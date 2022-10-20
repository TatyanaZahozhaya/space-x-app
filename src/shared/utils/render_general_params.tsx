import { SharedComponents, SharedTypes } from '@shared';

export const renderGeneralParams = (item: SharedTypes.IOverviewParam) => {
    return (
        <SharedComponents.GeneralInfo
            key={item.paramName}
            {...item}
        />
    );
};
