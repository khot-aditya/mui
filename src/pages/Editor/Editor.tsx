import { Box } from "@mui/material"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { EditorContainer } from "../../styles"
import Header from "../../components/app/Header"
import CodeEditor from "../../components/app/CodeEditor"
import Preview from "../../components/app/Preview"

const Editor = () => {

    return (
        <Box>
            <PanelGroup autoSaveId="root-layout" direction="horizontal">
                <Panel
                    defaultSize={40}
                    minSize={30}
                    maxSize={60}
                >
                    <EditorContainer>
                        <Header />
                        <CodeEditor />
                    </EditorContainer>
                </Panel>
                <PanelResizeHandle style={{
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

export default Editor