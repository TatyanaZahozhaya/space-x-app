import { useQuery } from 'urql';
import { Client, SharedTypes } from '@shared';

const { CapsulesQuery, EachCapsuleQuery } = Client;

export const useCapsulesQuery = () => {
    const [result, fetch] = useQuery({
        query: CapsulesQuery,
        pause: true,
    });
    const { data, fetching, error } = result;
    let empty: Array<{ name: string; id: string }> = [];
    const arr = data && data.dragons ? data.dragons : empty;
    return [arr, fetching, error, fetch];
};

interface ICapsuleId {
    dragonId: string;
}

interface ICapsuleOutput {
    data?: SharedTypes.ICapsuleOutputData | undefined;
    fetching?: boolean;
    error?: any | undefined;
}
export const useEachCapsuleQuery = ({ dragonId }: ICapsuleId): ICapsuleOutput => {
    const [result] = useQuery({
        query: EachCapsuleQuery,
        variables: { dragonId },
        pause: !dragonId,
    });
    return result;
};
