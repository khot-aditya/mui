import { Container, NavigationIconContainer, SettingsContainer } from './styles'
import { FC } from 'react'
import HomeIcon from '../../../assets/icons/home.svg?react'
import CheckListIcon from '../../../assets/icons/checklist.svg?react'
import PaperIcon from '../../../assets/icons/paper.svg?react'
import UserIcon from '../../../assets/icons/user.svg?react'
import CalenderIcon from '../../../assets/icons/availability.svg?react'
import BrainIcon from '../../../assets/icons/brain.svg?react'

import SunIcon from '../../../assets/icons/sun.svg?react'
// import MoonIcon from '../../assets/icons/moon.svg?react'
import SettingsIcon from '../../../assets/icons/settings.svg?react'

import { Box, Typography } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'

interface NavigationItemProps {
  item: {
    icon: any,
    label: string,
    navigateTo: string,
  }
}

const NavigationItem = ({ item }: NavigationItemProps) => {

  const navigate = useNavigate()
  const location = useLocation();

  const handleClick = () => {
    navigate(`/dashboard${item.navigateTo}`)
  }

  const isActive = location.pathname === `/dashboard${item.navigateTo}` ||
    (location.pathname === '/dashboard/' && item.navigateTo === '');

  return (
    <NavigationIconContainer
      onClick={handleClick}
      className={isActive ? 'active' : ""}>
      <Box>
        {item.icon}
      </Box>
      <Typography variant='button'>
        {item.label}
      </Typography>
    </NavigationIconContainer>
  )
}

const SideNavigation: FC = () => {

  const navigationArray = [
    {
      icon: <HomeIcon />,
      label: 'Dashboard',
      navigateTo: '',
    },
    {
      icon: <CheckListIcon />,
      label: 'TimeSheet',
      navigateTo: '/time-sheet',
    },
    {
      icon: <PaperIcon />,
      label: 'Requests',
      navigateTo: '/requests',
    },
    {
      icon: <CalenderIcon />,
      label: "Availability",
      navigateTo: '/availability',
    },
    {
      icon: <BrainIcon />,
      label: 'Brain Storm',
      navigateTo: '/brain-storm',
    },
    {
      icon: <UserIcon />,
      label: 'My Profile',
      navigateTo: '/profile',
    },
    // {
    //   icon: <ThumbIcon />,
    //   label: 'Feedback',
    //   navigateTo: '/feedback',
    // },
  ]

  return (
    <Container display={'flex'} flexDirection={"column"} justifyContent={"space-between"}>
      <Box
        mt={5}
        display={'flex'}
        flexDirection={'column'}
        gap={2}>
        {
          navigationArray.map((item, index) => {
            return <NavigationItem key={index} item={item} />
          })
        }
      </Box>

      <SettingsContainer>
        <Box>
          <SunIcon />
        </Box>
        <Box>
          <SettingsIcon />
        </Box>
      </SettingsContainer>
    </Container>
  )
}

export default SideNavigation