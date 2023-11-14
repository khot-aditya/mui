import CodeEditor from "./components/app/CodeEditor";
import { EditorContainer } from "./styles";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Preview from "./components/app/Preview";
import { Box } from "@mui/material";
import Header from "./components/app/Header";

function App() {

  return (
    <Box >
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

export default App
