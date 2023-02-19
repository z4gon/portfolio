import React from 'react'
import ReactMarkdown from 'react-markdown'

import SyntaxHighlighter from 'react-syntax-highlighter'
import styles from '../../../styles/components/markdown/MarkdownContent.module.sass'

// https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight
const CodeSnippetRenderer = ({
  node: _node,
  inline,
  className,
  children,
  ...props
}) => {
  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <SyntaxHighlighter
      showLineNumbers
      language={match[1]}
      PreTag="div"
      {...props}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  )
}

function flatten(text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)
}

/**
 * HeadingRenderer is a custom renderer
 * It parses the heading and attaches an id to it to be used as an anchor
 */
// https://github.com/remarkjs/react-markdown/issues/69#issuecomment-289860367
const HeadingRenderer = (props) => {
  var children = React.Children.toArray(props.children)
  var text = children.reduce(flatten, '')
  var slug = text.toLowerCase().replace(/\W/g, '-')
  return React.createElement('h' + props.level, { id: slug }, props.children)
}

type Props = {
  markdownString: string
}

const MarkdownContent = ({ markdownString }: Props) => {
  return (
    <div className={styles.markdownContent}>
      <ReactMarkdown
        components={{
          code: CodeSnippetRenderer,
          h1: HeadingRenderer,
          h2: HeadingRenderer,
          h3: HeadingRenderer,
          h4: HeadingRenderer,
          h5: HeadingRenderer,
          h6: HeadingRenderer,
        }}
      >
        {markdownString}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownContent
