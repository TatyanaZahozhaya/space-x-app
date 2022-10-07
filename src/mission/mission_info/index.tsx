import { Hooks, SharedComponents, SharedTypes } from '@shared';
import { MissionDetails } from '../mission_details';

export const MissionInfo = ({ id }: SharedTypes.IDataSection) => {
    const { data, fetching, error } = Hooks.useEachMissionQuery({ missionId: `${id}` });

    if (fetching ) {
        return <SharedComponents.Progress />;
    }

    if (!data || !data.mission) {
        return <SharedComponents.WarningMessage text="No info." />;
    }

    if (error) {
        return <SharedComponents.WarningMessage text="Error. Please, try later." />;
    }

    return <MissionDetails mission={data.mission} />;
};
