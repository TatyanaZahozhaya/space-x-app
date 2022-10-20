import { SharedTypes } from '@shared';

export const useMissionQueryData = (mission: SharedTypes.IMission): SharedTypes.IMissionData => {
    const { name, description, manufacturers, payloads } = mission;

    const generalParams = [
        {
            paramName: 'Manufacturers: ',
            param: `${manufacturers && manufacturers.length ? manufacturers.join(', ') : '-'}`,
        },
        {
            paramName: 'Name: ',
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
