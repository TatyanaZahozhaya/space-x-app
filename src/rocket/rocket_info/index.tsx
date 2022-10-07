import { Hooks, SharedComponents, SharedTypes } from '@shared';
import { RocketDetails } from '../rocket_details';

export const RocketInfo = ({ id }: SharedTypes.IDataSection) => {
    const { data, fetching, error } = Hooks.useEachRocketQuery({ rocketId: `${id}` });

    if (fetching ) {
        return <SharedComponents.Progress />;
    }

    if (!data || !data.rocket) {
        return <SharedComponents.WarningMessage text="No info." />;
    }

    if (error) {
        return <SharedComponents.WarningMessage text="Error. Please, try later." />;
    }

    return <RocketDetails rocket={data.rocket} />;
};
