import { SharedComponents, SharedTypes } from "@shared";

interface IResponse {
    name: string;
    id: string;
}

export const renderMenuItem = (onClick: (e: React.MouseEvent) => void, path: string) => (item: IResponse) => {
    return (
        <SharedComponents.BasicMenuItem
            key={item.id}
            path={path}
            onClick={onClick}
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