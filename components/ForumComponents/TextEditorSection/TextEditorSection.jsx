import React from 'react';
import Dynamic from 'next/dynamic';

const QuillNoSSRWrapper = Dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})

const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'link'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
            { 'align': [] },
        ],
        [
            { 'color': [] },
            { 'background': [] },
            'image', 'video'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
}

const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'code-block',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
]

const TextEditorSection = () => {
    return <QuillNoSSRWrapper
        modules={modules}
        formats={formats}
        theme="snow"
        className="h-[135px] sm:h-[210px] md:h-[260px] lg:h-[235px]"
    />
}

export default TextEditorSection;