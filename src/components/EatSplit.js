import FriendList from './FriendList.js';
import AddFriend from './AddFriend.js';
import Split from './Split.js';
import React, { useState } from 'react';


function EatSplit() {
    const [friends, setFriends] = useState([])

    function handleAddFriend(newFriend){
        setFriends((friends) => [...friends, newFriend])
    }

    return (
        <div className='app'>
          <div className='app-container'>
            <FriendList friends={friends}/>
            <AddFriend friends={friends} onAddFriend={handleAddFriend}/>
          </div>
            <Split />
        </div>
      )
}

export default EatSplit
