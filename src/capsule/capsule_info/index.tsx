import { Hooks, SharedComponents, SharedTypes } from '@shared';
import { CapsuleDetails } from '../capsule_details';

export const CapsuleInfo = ({ id }: SharedTypes.IDataSection) => {
    const { data, fetching, error } = Hooks.useEachCapsuleQuery({ dragonId: `${id}` });

    if (fetching ) {
        return <SharedComponents.Progress />;
    }

    if (!data || !data.dragon) {
        return <SharedComponents.WarningMessage text="No info." />;
    }

    if (error) {
        return <SharedComponents.WarningMessage text="Error. Please, try later." />;
    }

    return <CapsuleDetails dragon={data.dragon} />;
};
