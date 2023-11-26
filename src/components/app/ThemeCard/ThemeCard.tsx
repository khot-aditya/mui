import { Box, Button, Tooltip, Typography } from '@mui/material'
import { FC } from 'react'
import { Card } from './styles.ts'
import ColorPalette from '../ColorPalette/index.ts'
import BookmarkOutlinedIcon from '../../../assets/icons/bookmark-outline.svg?react'
import BookmarkFilledIcon from '../../../assets/icons/bookmark-filled.svg?react'

const BookmarkToggle: FC<{
    isBookmarked: boolean
}> = ({ isBookmarked }) => {

    const Icon = isBookmarked ? BookmarkFilledIcon : BookmarkOutlinedIcon

    return (
        <Tooltip
            title="Bookmark"
            placement="top"
        >
            <Box>
                <Icon style={{
                    width: '20px',
                    height: '20px',
                    cursor: 'pointer'
                }} />
            </Box>
        </Tooltip>
    )
}

const ThemeCard = () => {
    return (
        <Card>
            <Box
                sx={{
                    width: '100%',
                    height: '200px',
                    boxShadow: 1,
                    borderBottom: '1px solid #eaeaea',
                }}
            >
            </Box>
            <Box
                p={2}
                gap={1.1}
                flexDirection={'column'}
                display={"flex"}>
                <Typography
                    variant="h4"
                    fontWeight={600}
                >
                    This is a theme name
                </Typography>

                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                >
                    <ColorPalette
                        colors={
                            [
                                "#7fb9fe",
                                "#657fcc",
                                "#3f4f7f",
                                "#3f4f7f"
                            ]
                        }
                    />

                    <BookmarkToggle isBookmarked={false} />
                </Box>

                <Box
                    display={'flex'}
                    gap={0.8}
                >
                    <Button
                        variant='outlined'
                        fullWidth
                        sx={{
                            maxWidth: '35%',
                            borderRadius: '999px',
                        }}
                    >
                        Edit
                    </Button>

                    <Button
                        variant='contained'
                        fullWidth
                        sx={{
                            borderRadius: '999px',
                        }}
                    >
                        Preview
                    </Button>
                </Box>
            </Box>
        </Card>
    )
}

export default ThemeCard