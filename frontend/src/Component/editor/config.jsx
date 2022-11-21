// eslint-disable-next-line no-unused-vars
import React from "react";
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import SimpleImage from '@editorjs/simple-image';
import Checklist from '@editorjs/checklist';
import Quote from '@editorjs/quote';
import Warning from '@editorjs/warning';
import Marker from '@editorjs/marker';
import CodeTool from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import LinkTool from '@editorjs/link';
import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import List from '@editorjs/list';

const config = () => {
    return new EditorJS(
        {
            readOnly: false,
            holder: 'editorjs',
            tools: {
                header: {
                    class: Header,
                    inlineToolbar: ['marker', 'link'],
                    config: {
                        placeholder: 'Header'
                    },
                    shortcut: 'CMD+SHIFT+H'
                },
                image: SimpleImage,

                list: {
                    class: List,
                    inlineToolbar: true,
                    shortcut: 'CMD+SHIFT+L'
                },

                checklist: {
                    class: Checklist,
                    inlineToolbar: true,
                },

                quote: {
                    class: Quote,
                    inlineToolbar: true,
                    config: {
                        quotePlaceholder: 'Enter a quote',
                        captionPlaceholder: 'Quote\'s author',
                    },
                    shortcut: 'CMD+SHIFT+O'
                },

                warning: Warning,

                marker: {
                    class: Marker,
                    shortcut: 'CMD+SHIFT+M'
                },

                code: {
                    class: CodeTool,
                    shortcut: 'CMD+SHIFT+C'
                },

                delimiter: Delimiter,

                inlineCode: {
                    class: InlineCode,
                    shortcut: 'CMD+SHIFT+C'
                },

                linkTool: LinkTool,

                embed: Embed,

                table: {
                    class: Table,
                    inlineToolbar: true,
                    shortcut: 'CMD+ALT+T'
                },

            },
            data: {
                blocks: [
                    {
                        type: "header",
                        data: {
                            text: "Title of post",
                            level: 1
                        }
                    },
                    {
                        type: 'paragraph',
                        data: {
                            text: 'What you want to tell everyone'
                        }
                    },
                ]
            },
            onChange: async function (api, event) {
                console.log('something changed', event);

            }
        }
    );
}

export default config;
