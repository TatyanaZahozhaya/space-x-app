import { SharedComponents, MenuRoutes } from '@shared';

export const AppHeader = () => {
    return (
        <SharedComponents.AppBarHeader>
            <SharedComponents.ToolbarHeader>
                <SharedComponents.NavigationText text="SpaceX-Info" />
                <SharedComponents.MenuContainer>
                    {MenuRoutes.map((item) => (
                        <SharedComponents.BasicMenu
                            key={item.name}
                            name={item.name}
                            hook={item.hook}
                            path={item.path}
                        />
                    ))}
                </SharedComponents.MenuContainer>
                <SharedComponents.SideMenu />
            </SharedComponents.ToolbarHeader>
        </SharedComponents.AppBarHeader>
    );
};
