import { SharedComponents } from '@shared';

interface IResponse {
    name: string;
    id: string;
}

export const renderMenuItem =
    (onClick: (e: React.MouseEvent) => void, path: string) => (item: IResponse) => {
        return (
            <SharedComponents.BasicMenuItem
                key={item.id}
                path={path}
                onClick={onClick}
                {...item}
            />
        );
    };
