import {  SharedTypes } from '@shared';

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


