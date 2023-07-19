import React from 'react';
import { cookies } from "next/headers"
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';

async function YourChats(props) {
  const supabase = createServerComponentClient({ cookies })
  const session = await getServerSession(options)
  console.log(session)
    
  return (
    <div>
      your chats
    </div>
  )
  
  
    
    
}

export default YourChats;