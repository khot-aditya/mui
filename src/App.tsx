import { Box, Button, Checkbox } from "@mui/material"

function App() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  return (
    <Box display={'flex'} flexDirection={"column"} alignItems={'start'} gap={1}>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>

      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>

      <Button variant="contained" disableElevation>
        Disable elevation
      </Button>

      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />

    </Box>
  )
}

export default App
