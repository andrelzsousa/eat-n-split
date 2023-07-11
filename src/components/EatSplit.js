import FriendList from './FriendList.js';
import AddFriend from './AddFriend.js';
import Split from './Split.js';
import React, { useState } from 'react';
import rosto from '../assets/images/rosto.png'


function EatSplit() {
    const [friends, setFriends] = useState([
      {
          name: 'Clark',
          picture: rosto,
          debt: 0,
          id: 0
      },
      {
          name: 'Sarah',
          picture: rosto,
          debt: 0,
          id: 1
      },
      {
          name: 'Anthony',
          picture: rosto,
          debt: 0,
          id: 2
      }
  ])

  const [selected, setSelected] = useState(null)

    function handleAddFriend(newFriend){
        setFriends((friends) => [...friends, newFriend])
    }

    return (
        <div className='app'>
          <div className='app-container'>
            <FriendList friends={friends} onSelect={setSelected} selected={selected} />
            <AddFriend friends={friends} onAddFriend={handleAddFriend}/>
          </div>
            <Split selected={selected} />
        </div>
      )
}

export default EatSplit
