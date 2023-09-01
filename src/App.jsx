import React from 'react';
import './App.css'
import ReactMarkdown from "react-markdown"

export default function Markdown() {
    
  const markdownContent = `# Welcome to my React Markdown Previewer

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
if (firstLine == '\\\`\`\\\`\\\`' && lastLine == '\\\`\`\\\`\\\`') {
  return multiLineCode;
}
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course, there are lists.
- Some are bulleted.
   - With different indentation levels.
      - That looks like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Image](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;






  const [inputValue, setInputValue] = React.useState(markdownContent)


  /* When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text. */

  function handleChange(event) {
      setInputValue(event.target.value)
  }

  return (
      <div className="App">
          <textarea rows={20} cols={210}
              id="editor"
              type="text"
              name="textarea"
              value={inputValue}
              onChange={handleChange}
          />
          <div id="preview">
            <ReactMarkdown>
              {inputValue}
            </ReactMarkdown>
          </div>
          <p className="creator">By Bekzat Kali</p>
      </div>
      
  )
}
