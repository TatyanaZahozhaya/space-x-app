export interface IRoute {
    element: React.ReactElement;
    path: string;
}

export interface IDataSection {
    id: string;
}

export interface IOverviewParam {
    paramName: string;
    param: string;
}

interface IMeters {
    meters: number;
}
interface ICubicMeters {
    cubic_meters: number;
}
interface IKg {
    kg: number;
}

interface IKN {
    kN: number;
}

interface IEngeens {
    type: string;
    number: number;
    propellant_1: string;
    propellant_2: string;
}

interface IStage {
    burn_time_sec: number;
    engines: number;
    fuel_amount_tons: number;
}
interface IFirstStage extends IStage {
    thrust_sea_level: IKN;
    thrust_vacuum: IKN;
}
interface ISecondStage extends IStage {
    thrust: IKN;
}

export interface IRocket {
    name: string;
    type: string;
    company: string;
    country: string;
    first_flight: string;
    active: boolean;
    description: string;
    diameter: IMeters;
    height: IMeters;
    mass: IKg;
    engines: IEngeens;
    stages: number;
    first_stage: IFirstStage;
    second_stage: ISecondStage;
}

export interface IRocketOutputData {
    rocket: IRocket;
}

export interface IRocketData {
    name: string;
    description: string;
    generalParams: Array<IOverviewParam>;
    physicalParams: Array<IOverviewParam>;
    firstStage: Array<IOverviewParam>;
    secondStage: Array<IOverviewParam>;
    enginesParams: Array<IOverviewParam>;
}

interface ITrunk {
    cargo: {
        unpressurized_cargo: boolean;
        solar_array: number;
    };
    trunk_volume: ICubicMeters;
}

export interface ICapsule {
    active: boolean;
    crew_capacity: number;
    description: string;
    diameter: IMeters;
    dry_mass_kg: number;
    first_flight: string;
    height_w_trunk: IMeters;
    launch_payload_mass: IKg;
    launch_payload_vol: ICubicMeters;
    name: string;
    orbit_duration_yr: number;
    return_payload_mass: IKg;
    return_payload_vol: ICubicMeters;
    trunk: ITrunk;
    type: string;
}
export interface ICapsuleOutputData {
    dragon: ICapsule;
}

export interface ICapsuleData {
    name: string;
    description: string;
    generalParams: Array<IOverviewParam>;
    physicalParams: Array<IOverviewParam>;
    truncParams: Array<IOverviewParam>;
}

interface IPayload {
    customers: Array<string>;
    id: string;
    manufacturer: string;
    orbit: string;
    payload_mass_kg: number;
    payload_type: string;
}

export interface IMission {
    description: string;
    name: string;
    manufacturers: Array<string>;
    payloads: Array<IPayload>;
}

export interface IMissionOutputData {
    mission: IMission;
}

export interface IPayloadItem {
    customersString: string;
    id: string;
    manufacturer: string;
    orbit: string;
    payload_mass_kg: number;
    payload_type: string;
}

export interface IPayloadsParams {
    id:  string;
    payloadsParamsData: Array<IOverviewParam>
}

export interface IMissionData {
    name: string;
    description: string;
    generalParams: Array<IOverviewParam>;
    payloadsParams: Array<IPayloadItem>
}