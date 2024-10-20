
import { useState } from 'react'
import  Profile from './Profile'
import { avatar, username, tag, location, stats } from './ProfileData.json'
import './App.css'


function App() { 
  return (
    <>

      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </>
  )
}

export default App
