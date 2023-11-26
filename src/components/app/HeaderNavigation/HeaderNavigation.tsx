import { List, ListItemButton, MenuContainer } from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from '../../../constants/RoutesConstants';
import For from '../For';

const HeaderNavigation = () => {

    const navigation = useNavigate();
    const location = useLocation();

    const menuArray = [
        {
            label: 'Themes',
            url: routes.builder.community
        },
        {
            label: 'Editor',
            url: routes.builder.editor
        },
        {
            label: 'Colors',
            url: routes.builder.colors
        },
        {
            label: 'Collection',
            url: routes.builder.collection
        }
    ]

    const handleNavigate = (url: string) => {
        navigation(url)
    }

    return (
        <MenuContainer>
            <List >
                <For each={menuArray}>
                    {
                        (item) => (
                            <ListItemButton
                                selected={location.pathname === item.url}
                                onClick={() => handleNavigate(item.url)}
                            >
                                {item.label}
                            </ListItemButton>
                        )
                    }
                </For>
            </List>
        </MenuContainer>
    )
}

export default HeaderNavigation