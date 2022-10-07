import { useQuery } from 'urql';
import { Client, SharedTypes } from '@shared';

const {
    RocketsQuery,
    CapsulesQuery,
    MissionsQuery,
    EachRocketQuery,
    EachCapsuleQuery,
    EachMissionQuery,
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

export const useRocketQueryData = (rocket: SharedTypes.IRocket): SharedTypes.IRocketData => {
    const {
        name,
        description,
        company,
        country,
        active,
        first_flight,
        type,
        diameter,
        height,
        mass,
        stages,
        first_stage,
        second_stage,
        engines,
    } = rocket;

    const generalParams = [
        {
            paramName: 'Company: ',
            param: `${company ? company : '-'}`,
        },
        {
            paramName: 'Country: ',
            param: `${country ? country : '-'}`,
        },
        {
            paramName: 'Produced now: ',
            param: `${active ? 'yes' : 'no'}`,
        },
        {
            paramName: 'First flight: ',
            param: `${first_flight ? first_flight : '-'}`,
        },
    ];

    const physicalParams = [
        {
            paramName: 'Type: ',
            param: `${type ? type : '-'}`,
        },
        {
            paramName: 'Diameter: ',
            param: `${diameter && diameter.meters ? diameter.meters : '-'} meters`,
        },
        {
            paramName: 'Height: ',
            param: `${height && height.meters ? height.meters : '-'} meters`,
        },
        {
            paramName: 'Mass: ',
            param: `${mass && mass.kg ? mass.kg : '-'} kg`,
        },
        {
            paramName: 'Stages: ',
            param: `${stages ? stages : '-'}`,
        },
    ];

    const firstStage = [
        {
            paramName: 'Burn time: ',
            param: `${
                first_stage && first_stage.burn_time_sec ? first_stage.burn_time_sec : '-'
            } sec`,
        },
        {
            paramName: 'Number of engines: ',
            param: `${first_stage && first_stage.engines ? first_stage.engines : '-'}`,
        },
        {
            paramName: 'Fuel amount: ',
            param: `${
                first_stage && first_stage.fuel_amount_tons ? first_stage.fuel_amount_tons : '-'
            } tons`,
        },
        {
            paramName: 'Thrust (sea level): ',
            param: `${
                first_stage && first_stage.thrust_sea_level.kN
                    ? first_stage.thrust_sea_level.kN
                    : '-'
            } kN`,
        },
        {
            paramName: 'Thrust (vacuum): ',
            param: `${
                first_stage && first_stage.thrust_vacuum.kN ? first_stage.thrust_vacuum.kN : '-'
            } kN`,
        },
    ];
    const secondStage = [
        {
            paramName: 'Burn time: ',
            param: `${
                second_stage && second_stage.burn_time_sec ? second_stage.burn_time_sec : '-'
            } sec`,
        },
        {
            paramName: 'Number of engines: ',
            param: `${second_stage && second_stage.engines ? second_stage.engines : '-'}`,
        },
        {
            paramName: 'Fuel amount: ',
            param: `${
                second_stage && second_stage.fuel_amount_tons ? second_stage.fuel_amount_tons : '-'
            } tons`,
        },
        {
            paramName: 'Thrust: ',
            param: `${second_stage && second_stage.thrust.kN ? second_stage.thrust.kN : '-'} kN`,
        },
    ];
    const enginesParams = [
        {
            paramName: 'Number of engines: ',
            param: `${engines && engines.number ? engines.number : '-'}`,
        },
        {
            paramName: 'Engines type: ',
            param: `${engines && engines.type ? engines.type : '-'}`,
        },
        {
            paramName: 'Propellant: ',
            param: `${engines && engines.propellant_1 ? engines.propellant_1 : '-'}, ${
                engines && engines.propellant_2 ? engines.propellant_2 : '-'
            }`,
        },
    ];
    return {
        name,
        description,
        generalParams,
        physicalParams,
        firstStage,
        secondStage,
        enginesParams,
    };
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

export const useCapsuleQueryData = (dragon: SharedTypes.ICapsule): SharedTypes.ICapsuleData => {
    const {
        name,
        description,
        active,
        first_flight,
        type,
        diameter,
        height_w_trunk,
        dry_mass_kg,
        crew_capacity,
        orbit_duration_yr,
        launch_payload_mass,
        return_payload_mass,
        launch_payload_vol,
        return_payload_vol,
        trunk,
    } = dragon;

    const generalParams = [
        {
            paramName: 'Produced now: ',
            param: `${active ? 'yes' : 'no'}`,
        },
        {
            paramName: 'First flight: ',
            param: `${first_flight ? first_flight : '-'} `,
        },
    ];

    const physicalParams = [
        {
            paramName: 'Type: ',
            param: `${type ? type : '-'}`,
        },
        {
            paramName: 'Orbit duration: ',
            param: `${orbit_duration_yr ? orbit_duration_yr : '-'} years`,
        },
        {
            paramName: 'Crew capacity: ',
            param: `${crew_capacity ? crew_capacity : '-'}`,
        },
        {
            paramName: 'Diameter: ',
            param: `${diameter && diameter.meters ? diameter.meters : '-'} meters`,
        },
        {
            paramName: 'Height: ',
            param: `${
                height_w_trunk && height_w_trunk.meters ? height_w_trunk.meters : '-'
            } meters`,
        },
        {
            paramName: 'Dry mass: ',
            param: `${dry_mass_kg ? dry_mass_kg : '-'} kg`,
        },
        {
            paramName: 'Launch payload mass: ',
            param: `${
                launch_payload_mass && launch_payload_mass.kg ? launch_payload_mass.kg : '-'
            } kg`,
        },
        {
            paramName: 'Return payload mass: ',
            param: `${
                return_payload_mass && return_payload_mass.kg ? return_payload_mass.kg : '-'
            } kg`,
        },
        {
            paramName: 'Launch payloadvolume: ',
            param: `${
                launch_payload_vol && launch_payload_vol.cubic_meters
                    ? launch_payload_vol.cubic_meters
                    : '-'
            } m3`,
        },
        {
            paramName: 'Return payload volume: ',
            param: `${
                return_payload_vol && return_payload_vol.cubic_meters
                    ? return_payload_vol.cubic_meters
                    : '-'
            } m3`,
        },
    ];

    const truncParams = [
        {
            paramName: 'Trunc volume: ',
            param: `${
                trunk && trunk.trunk_volume && trunk.trunk_volume.cubic_meters
                    ? trunk.trunk_volume.cubic_meters
                    : '-'
            } m3`,
        },
        {
            paramName: 'Unpressurized cargo: ',
            param: `${trunk && trunk.cargo && trunk.cargo.unpressurized_cargo ? 'yes' : 'no'} `,
        },
        {
            paramName: 'Solar array: ',
            param: `${
                trunk && trunk.cargo && trunk.cargo.solar_array ? trunk.cargo.solar_array : '-'
            } `,
        },
    ];

    return { name, description, generalParams, physicalParams, truncParams };
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

export const useMissionQueryData = (mission: SharedTypes.IMission): SharedTypes.IMissionData => {
    const { name, description, manufacturers, payloads } = mission;

    const generalParams = [
        {
            paramName: 'Manufacturers: ',
            param: `${manufacturers && manufacturers.length ? manufacturers.join(', ') : '-'}`,
        },
        {
            paramName: 'First flight: ',
            param: `${name ? name : '-'}`,
        },
    ];

    const payloadsParams =
        payloads && payloads.length
            ? payloads
                  .filter((item) => item !== null)
                  .map((item) => {
                      const { customers } = item;
                      const customersString = customers ? customers.join(', ') : '';
                      return {
                          customersString,
                          ...item,
                      };
                  })
            : [];

    return { name, description, generalParams, payloadsParams };
};

export const usePayloadsParams = (item: SharedTypes.IPayloadItem): SharedTypes.IPayloadsParams => {
    const { customersString, id, manufacturer, orbit, payload_mass_kg, payload_type } = item;

    const payloadsParamsData = [
        {
            paramName: 'Customers: ',
            param: `${customersString ? customersString : '-'}`,
        },
        {
            paramName: 'Manufacturer: ',
            param: `${manufacturer ? manufacturer : '-'}`,
        },
        {
            paramName: 'Orbit: ',
            param: `${orbit ? orbit : '-'}`,
        },
        {
            paramName: 'Payload mass: ',
            param: `${payload_mass_kg ? payload_mass_kg : '-'} kg`,
        },
        {
            paramName: 'Payload type: ',
            param: `${payload_type ? payload_type : '-'} `,
        },
    ];

    return { id, payloadsParamsData };
};
