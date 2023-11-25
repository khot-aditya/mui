import { FC } from 'react'
import { ColorPaletteProps } from './ColorPalette.types'
import For from '../For'
import { PaletteContainer } from './styles'
import { Box } from '@mui/material'

const ColorPalette: FC<ColorPaletteProps> = ({ colors }) => {
    return (
        <PaletteContainer>
            <For
                each={colors}
            >
                {(color: string) => (
                    <Box sx={{ backgroundColor: color }} />
                )}
            </For>
        </PaletteContainer>
    )
}

export default ColorPalette