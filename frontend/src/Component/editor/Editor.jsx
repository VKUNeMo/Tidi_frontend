import React from "react";
import config from "./config";
import EditorJS from '@editorjs/editorjs';


function Editor(props){
    config();
    return (
        <>
            <div>
                <h1>Editor</h1>
                <div id="editorjs"></div>
            </div>
        </>
    )
}

export default Editor;
