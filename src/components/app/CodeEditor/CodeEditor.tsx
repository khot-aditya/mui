import CodeEditor from "@monaco-editor/react";
import { useLightTheme } from "../../../template/LightTheme";
import { ThemeOptions } from "@mui/material";

// Editor functional component
function Editor() {
  const { theme, setTheme } = useLightTheme();
  const themeString = JSON.stringify(theme!, null, 2);

  return (
    <>
      <CodeEditor
        height="90vh"
        language="json"
        onValidate={(markers) => {
          markers.forEach((marker) => console.log('onValidate:', marker.message));
        }}
        value={themeString}
        onChange={(value) => {
          setTheme(JSON.parse(value!) as ThemeOptions)
        }}
        options={{
          quickSuggestions: true,
          suggestSelection: "first",
          language: 'json',
          minimap: {
            enabled: false
          }
        }}
      />
    </>
  );
}

export default Editor;
