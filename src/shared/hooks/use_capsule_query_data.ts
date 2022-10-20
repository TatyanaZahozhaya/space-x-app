import { SharedTypes } from '@shared';

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
