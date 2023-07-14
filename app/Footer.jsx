import React from 'react';

const Footer = () => {
  return (
    <footer className="backdrop-blur-sm border-t-2 border-black fixed bottom-0 right-0 left-0 z-10 p-2">
      <div className="flex justify-center items-center">
        <textarea
          id="text_input"
          className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded block w-full max-w-[560px] p-2.5 resize-y overflow-auto"
          placeholder="Don't be shy! Send something!"
        ></textarea>
      </div>
    </footer>
  );
};

export default Footer;