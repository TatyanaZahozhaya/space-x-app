import { SharedComponents } from '@shared';

export const Home = () => {
    return (
        <SharedComponents.MainPartContainerHomePage>
            <SharedComponents.TitleHomePage text="SpaceX-Info" />
            <SharedComponents.DescriptionText text="Get information about previous SpaceX missions" />
        </SharedComponents.MainPartContainerHomePage>
    );
};
