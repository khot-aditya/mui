import { Box } from "@mui/material"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import Header from "../../components/app/Header"
import Preview from "../../components/app/Preview"
import { Outlet } from "react-router-dom"
import { useLightTheme } from "../../template/LightTheme"

const Builder = () => {
    useLightTheme();

    return (
        <Box>
            <PanelGroup autoSaveId="root-layout" direction="horizontal">
                <Panel
                    defaultSize={40}
                    minSize={30}
                    maxSize={60}
                >
                    <Header />
                    <Box
                        height={"92vh"}
                        overflow={"auto"}
                    >
                        <Outlet />
                    </Box>
                </Panel>
                <PanelResizeHandle
                    style={{
                        width: 10,
                        background: '#ccc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    |
                </PanelResizeHandle>
                <Panel
                    defaultSize={20} minSize={20}
                >
                    <Preview />
                </Panel>
            </PanelGroup>
        </Box>
    )
}

export default Builder