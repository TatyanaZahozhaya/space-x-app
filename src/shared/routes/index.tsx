import { Hooks, SharedTypes } from '@shared';
import { Home } from '@home';
import { Rocket } from '@rocket';
import { Capsule } from '@capsule';
import { Mission } from '@mission';
import { PageNotFound } from '@page_not_found';

const { useRocketsQuery, useCapsulesQuery, useMissionsQuery } = Hooks;

export enum Paths {
    HOME = '/',
    ROCKET = '/rocket',
    ROCKET_DETAILES = '/rocket/:id',
    CAPSULE = '/capsule',
    CAPSULE_DETAILES = '/capsule/:id',
    MISSION = '/mission',
    MISSION_DETAILES = '/mission/:id',
    PAGE_LAYOUT = '',
    PAGE_NOT_FOUND = '*',
}

export const AppRoutes: Array<SharedTypes.IRoute> = [
    {
        element: <Home />,
        path: Paths.HOME,
    },
    {
        element: <Rocket />,
        path: Paths.ROCKET_DETAILES,
    },
    {
        element: <Capsule />,
        path: Paths.CAPSULE_DETAILES,
    },
    {
        element: <Mission />,
        path: Paths.MISSION_DETAILES,
    },
    {
        element: <PageNotFound />,
        path: Paths.PAGE_NOT_FOUND,
    },
];

export const MenuRoutes: Array<SharedTypes.IMenuRoute> = [
    {
        name: 'ROCKET',
        hook: useRocketsQuery,
        path: Paths.ROCKET,
    },
    {
        name: 'CAPSULE',
        hook: useCapsulesQuery,
        path: Paths.CAPSULE,
    },
    {
        name: 'MISSION',
        hook: useMissionsQuery,
        path: Paths.MISSION,
    },
];