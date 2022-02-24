import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'
import 'codemirror/theme/material.css'
import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function EditorBox(props) {
    const {
        language,
        displayName,
        value,
        onChange
    } = props

    function handleChange(editor,data,value){
        onChange(value);
    }

    return (
        <div className='editor-container'>
            <div className='editor-title'>
                {displayName}
                <ControlledEditor
                    onBeforeChange={handleChange}
                    value={value}
                    className="code-mirror-wrapper"
                    options={{
                        lineWrapping: true,
                        lint: true,
                        mode: language,
                        lineNumbers: true
                    }}
                />
            </div>
        </div>
    )
}