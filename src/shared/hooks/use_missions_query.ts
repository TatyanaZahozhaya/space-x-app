import { useQuery } from 'urql';
import { Client, SharedTypes } from '@shared';

const { MissionsQuery, EachMissionQuery } = Client;

export const useMissionsQuery = () => {
    const [result, fetch] = useQuery({
        query: MissionsQuery,
        pause: true,
    });
    const { data, fetching, error } = result;
    let empty: Array<{ name: string; id: string }> = [];
    const arr = data && data.missions ? data.missions : empty;
    return [arr, fetching, error, fetch];
};

interface IMissionId {
    missionId: string;
}

interface IMissionOutput {
    data?: SharedTypes.IMissionOutputData | undefined;
    fetching?: boolean;
    error?: any | undefined;
}
export const useEachMissionQuery = ({ missionId }: IMissionId): IMissionOutput => {
    const [result] = useQuery({
        query: EachMissionQuery,
        variables: { missionId },
        pause: !missionId,
    });
    return result;
};
