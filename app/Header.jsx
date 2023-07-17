import React from 'react';

const Header = () => {
  return (
    <header className="backdrop-blur-sm border-b-2 border-black bg-gray-50 bg-opacity-30 fixed top-0 right-0 left-0 z-10">
      <div className="container mx-auto flex items-center justify-between py-2 px-6">
        <div className="flex items-center">
          <img src="docrob.svg" alt="Logo" className="h-12 mr-2" />
          <a href="/" className="text-3xl font-extrabold text-black hover:text-gray-100">DOC.ROB</a>
        </div>
        <nav>
          <ul className="flex items-center space-x-1">
            <li>
              <a href="/yourchats" className="text-black hover:text-gray-100">your chats</a>
            </li>
            <li>
              <img
            className="h-8 w-8 mr-2"
            src={"user.svg"}
            alt={"user"}
          />
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;