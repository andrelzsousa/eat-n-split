import FriendList from './components/FriendList.js';
import Friend from './components/Friend.js';
import './index.css'
import './reset.css'
import AddFriend from './components/AddFriend.js';
import Split from './components/Split.js';

function App() {
  return (
    <div className='app'>
      <div className='app-container'>
        <FriendList />
        <AddFriend />
      </div>
        <Split />
    </div>
  )

}

export default App;
