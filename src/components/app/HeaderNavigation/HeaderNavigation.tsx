import { Button } from '@mui/material'
import { MenuContainer } from './styles'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../../constants/Constants';
import For from '../For';

const HeaderNavigation = () => {

    const navigation = useNavigate();

    const menuArray = [
        {
            label: 'Editor',
            url: routes.builder.editor
        },
        {
            label: 'Colors',
            url: routes.builder.colors
        },
        {
            label: 'Community Themes',
            url: routes.builder.community
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
            <For each={menuArray}>
                {
                    (item) => (
                        <Button
                            onClick={() => handleNavigate(item.url)}
                            key={item.url}>
                            {item.label}
                        </Button>
                    )
                }
            </For>
        </MenuContainer>
    )
}

export default HeaderNavigation