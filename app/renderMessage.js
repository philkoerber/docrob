import React from 'react';


const renderMessage = (message) => {
  // Check if the message contains a link
  if (message.type === 'text_with_link') {
    // Parse the HTML string to a Document object using DOMParser
    const parser = new DOMParser();
    const parsedDoc = parser.parseFromString(message.text, 'text/html');

    // Get the link element from the parsed document
    const linkElement = parsedDoc.querySelector('a');

    if (linkElement) {
      // Extract link URL and text from the link element
      const linkUrl = linkElement.getAttribute('href');
      const linkText = linkElement.textContent;

      // Replace the original message with the formatted link
      return (
        <span>
          {parsedDoc.body.textContent}
          <a
            href={linkUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal"
          >
            {linkText}
          </a>
        </span>
      );
    }
  }

  // You can add more checks for other message types (e.g., codeboxes)

  // For regular text messages
  return <span>{message.text}</span>;
};

export default renderMessage;