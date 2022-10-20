import { SharedComponents, SharedTypes } from "@shared";

export const renderPayloadItem = (item: SharedTypes.IPayloadItem) => {

    return (
        <SharedComponents.PayloadItem
            key={item.id}
            {...item}
        />
    );
};