import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';





function MarkdownParent({children}) {
    return (
        <ReactMarkdown>
            {children}
        </ReactMarkdown>
    );
}

export default MarkdownParent;