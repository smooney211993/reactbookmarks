import React, {useState} from 'react';
import ItemList from './Components/Itemlist/Itemlist';
import Modal from './Components/Modal/Modal'
import Signin from './Components/Siginin/Siginin';
import './App.css';

const App = () =>{
  let [bookmarks, setBookmarks] = useState([]);
  const [route, setRoute] = useState('signin')
  const [user, setUser] = useState({
  id: '',
  name: '',
  email: '',
  entries: '',
  joined: ''})
  const [isSignin, setSignedIn] = useState(false)
  const [displayModal, setDisplayModal] = useState(false)
  const loadBookMarks = (data) =>{
    setBookmarks(data)
  }
  const addBookmark = (newBookMarks) =>{
    setBookmarks([...bookmarks, newBookMarks])
    setDisplayModal(false)
    }
  const renderModal = () =>{
    if(displayModal){
      return <Modal 
       hideModal={()=>setDisplayModal(false)}
       addBookmark={addBookmark}
       userId={user.id}/>
    }
  }
  const onRouteChange = (routeAdress) =>{
    setRoute(routeAdress)
    if(routeAdress === 'signout'){
      setSignedIn(false)
    

    } else if (routeAdress === 'home') {
      setSignedIn(true)
      
    }
  }

  const loadUser = (data) =>{
    setUser({
      id: data.id,
      name: data.name,
      email : data.email,
      joined: data.joined
    })
  }

  const homepage = () =>{
    return route === 'home'
    ?
    <>
      <h1 id="show-modal" onClick ={()=>setDisplayModal(true)} >Add Bookmark</h1>
      <ItemList bookmarks={bookmarks}/>
      {renderModal()}
    </>
     :
     <Signin onRouteChange={onRouteChange} route={route} loadUser={loadUser} loadBookMarks={loadBookMarks}/>
      

    
    
  }
  return (
    <>
    {homepage()}
    </>
  )
}

export default App;
