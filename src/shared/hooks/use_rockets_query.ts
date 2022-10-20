import { useQuery } from 'urql';
import { Client, SharedTypes } from '@shared';

const {
    RocketsQuery,
    EachRocketQuery,
} = Client;

export const useRocketsQuery = () => {
    const [result, fetch] = useQuery({
        query: RocketsQuery,
        pause: true,
    });
    const { data, fetching, error } = result;
    let empty: Array<{ name: string; id: string }> = [];
    const arr = data && data.rockets ? data.rockets : empty;
    return [arr, fetching, error, fetch];
};

interface IRocketId {
    rocketId: string;
}

interface IRocketOutput {
    data?: SharedTypes.IRocketOutputData | undefined;
    fetching?: boolean;
    error?: any | undefined;
}

export const useEachRocketQuery = ({ rocketId }: IRocketId): IRocketOutput => {
    const [result] = useQuery({
        query: EachRocketQuery,
        variables: { rocketId },
        pause: !rocketId,
    });
    return result;
};
