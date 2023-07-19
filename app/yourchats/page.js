import React from 'react';
import {cookies} from "next/headers"

function YourChats(props) {
    console.log({cookies});
    return (
        <div className='w-full flex justify-center items-center mt-20'>
            your chats...
        </div>
    );
}

export default YourChats;