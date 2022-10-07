import { createClient } from 'urql';

export const client = createClient({
    url: 'https://api.spacex.land/graphql/',
});

export const RocketsQuery = `
    {
        rockets {
            id
            name
        }
    }
`;

export const CapsulesQuery = `
    {
        dragons {
            id
            name
        }
    }
`;

export const MissionsQuery = `
    {
        missions {
            id
            name
        }
    }
`;

export const EachRocketQuery = `
    query Rocket($rocketId: ID!) {
        rocket(id: $rocketId) {
            name
            type
            company
            country
            first_flight
            active
            description
            diameter {
                meters
            }
            height {
                meters
            }
            mass {
                kg
            }
            engines {
                type
                number
                propellant_1
                propellant_2
            }
        
            stages
            first_stage {
                burn_time_sec
                engines
                fuel_amount_tons
                thrust_sea_level {
                    kN
                }
                thrust_vacuum {
                    kN
                }
            }
            second_stage {
                burn_time_sec
                engines
                fuel_amount_tons
                thrust {
                    kN
                }
            }

        }
    }
`;

export const EachCapsuleQuery = `
    query Dragon($dragonId: ID!) {
        dragon(id: $dragonId) {
            active
            crew_capacity
            description
            diameter {
                meters
            }
            dry_mass_kg
            first_flight
            height_w_trunk {
                meters
            }
            launch_payload_mass {
                kg
            }
            launch_payload_vol {
                cubic_meters
            }
            name
            orbit_duration_yr
        
            return_payload_mass {
                kg
            }
            return_payload_vol {
                cubic_meters
            }
            
            
            trunk {
                cargo {
                unpressurized_cargo
                solar_array
                }
                trunk_volume {
                cubic_meters
                }
            }
            type
        }
    }
`;

export const EachMissionQuery = `
    query Mission($missionId: ID!) {
            mission(id: $missionId) {
            description
            name
            manufacturers
            payloads {
                customers
                id
                manufacturer
                orbit
                payload_mass_kg
                payload_type
            }
        }
    }
`;
