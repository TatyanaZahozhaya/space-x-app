import { SharedComponents, SharedTypes } from "@shared";

interface IResponse {
    name: string;
    id: string;
}

export const renderRocketMenuItem = (handleClose: () => void) => (item: IResponse) => {
    return (
        <SharedComponents.BasicRocketMenuItem
            key={item.id}
            onClick={handleClose}
            {...item}
        />
    );
};

export const renderCapsuleMenuItem = (handleClose: () => void) => (item: IResponse) => {
    return (
        <SharedComponents.BasicCapsuleMenuItem
            key={item.id}
            onClick={handleClose}
            {...item}
        />
    );
};

export const renderMissionMenuItem = (handleClose: () => void) => (item: IResponse) => {
    return (
        <SharedComponents.BasicMissionMenuItem
            key={item.id}
            onClick={handleClose}
            {...item}
        />
    );
};


export const renderGeneralParams = (item: SharedTypes.IOverviewParam) => {
    return (
        <SharedComponents.GeneralInfo
            key={item.paramName}
            {...item}
        />
    );
};

export const renderPhysicalParams = (item: SharedTypes.IOverviewParam) => {
    return (
        <SharedComponents.DetailedInfo
            key={item.paramName}
            {...item}
        />
    );
};

export const renderPayloadItem = (item: SharedTypes.IPayloadItem) => {

    return (
        <SharedComponents.PayloadItem
            key={item.id}
            {...item}
        />
    );
};