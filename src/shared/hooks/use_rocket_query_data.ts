import { SharedTypes } from '@shared';

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
