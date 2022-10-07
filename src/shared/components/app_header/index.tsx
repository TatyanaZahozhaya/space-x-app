import { SharedComponents, Hooks, Utils } from '@shared';

export const AppHeader = () => {
    const { renderMissionMenuItem, renderRocketMenuItem, renderCapsuleMenuItem } = Utils;
    const { useRocketsQuery, useCapsulesQuery, useMissionsQuery } = Hooks;

    return (
        <SharedComponents.AppBarHeader>
            <SharedComponents.ToolbarHeader>
                <SharedComponents.NavigationText text="SpaceX-Info" />
                <SharedComponents.MenuContainer>
                    <SharedComponents.BasicMenu
                        name="ROCKET"
                        hook={useRocketsQuery}
                        renderFunction={renderRocketMenuItem}
                    />
                    <SharedComponents.BasicMenu
                        name="CAPSULE"
                        hook={useCapsulesQuery}
                        renderFunction={renderCapsuleMenuItem}
                    />
                    <SharedComponents.BasicMenu
                        name="MISSION"
                        hook={useMissionsQuery}
                        renderFunction={renderMissionMenuItem}
                    />
                </SharedComponents.MenuContainer>
            </SharedComponents.ToolbarHeader>
        </SharedComponents.AppBarHeader>
    );
};
