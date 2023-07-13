import React from 'react';

const Header = () => {
  return (
    <header className="backdrop-blur-sm border-b-[3px] border-black fixed top-0 right-0 left-0 z-10">
      <div className="container mx-auto flex items-center justify-between py-2 px-6">
        <div className="flex items-center">
          <img src="docrob.svg" alt="Logo" className="h-12 mr-2" />
          <a href="#" className="text-2xl font-bold text-black hover:text-gray-100">DOC.ROB</a>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="text-black hover:text-gray-100">Documentation</a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-100">Previous Chats</a>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;