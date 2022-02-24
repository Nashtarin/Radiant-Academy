import dynamic from 'next/dynamic'
import { useState } from 'react'

const EditorBox = dynamic(() => import('./EditorBox'), {
  ssr: false,
})

export default function EditorSection() {

  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')

  const srcDoc = `
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
  `

  return (
    <>
      <div className="pane top=pane flex">
        <EditorBox
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <EditorBox
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <EditorBox
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}
