import { Box, Button, Typography } from '@mui/material'
import { Card } from './styles.ts'
import ColorPalette from '../ColorPalette/index.ts'
import RightArrowIcon from '../../../assets/icons/arrow-right.svg?react'

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
                    variant="h6"
                    fontWeight={600}
                >
                    This is a theme name
                </Typography>

                <Box>
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
                </Box>

                <Box
                    display={'flex'}
                    gap={0.5}
                >
                    <Button
                        variant='outlined'
                        size='small'
                        sx={{
                            borderRadius: '5px',
                        }}
                    >
                        Edit
                    </Button>

                    <Button
                        variant='contained'
                        size='small'
                        fullWidth
                        sx={{
                            borderRadius: '5px',
                        }}
                        endIcon={
                            <RightArrowIcon style={{
                                width: '20px',
                                height: '20px'
                            }} />
                        }
                    >
                        Preview
                    </Button>
                </Box>
            </Box>
        </Card>
    )
}

export default ThemeCard