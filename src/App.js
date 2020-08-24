import React, {useState, useEffect} from 'react';
import ItemList from './Components/Itemlist/Itemlist';
import Modal from './Components/Modal/Modal'
import Signin from './Components/Siginin/Siginin';
import Navbar from './Components/Navbar/Navbar';
import './App.css';



const App = () =>{
  let [bookmarks, setBookmarks] = useState([]);
  const [route, setRoute] = useState('signin')
  const [user, setUser] = useState({
  id: '',
  name: '',
  email: '',
  joined: ''})

  const [isSignedin, setSignedIn] = useState(false)
  const [displayModal, setDisplayModal] = useState(false)
  const loadBookMarks = (data) =>{
    setBookmarks(data)
  }
  const addBookmark = (newBookMarks) =>{
    setBookmarks([...bookmarks, newBookMarks])
    setDisplayModal(false)
    }
  const deleteBookMarks =(bookmark) =>{
    setBookmarks(bookmarks.filter(item=>item.bookmarks_id !== bookmark.bookmarks_id ))
  }

  const renderModal = () =>{
    if(displayModal){
      return <Modal 
       hideModal={()=>setDisplayModal(false)}
       addBookmark={addBookmark}
       userId={user.id}
       />
    }
  }
  const onRouteChange = (routeAdress) =>{
    setRoute(routeAdress)
    if(routeAdress === 'signout'){
      setSignedIn(false)
      setUser({
        id: '',
        name: '',
        email: '',
        joined: ''})
    

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
      <Navbar onRouteChange={onRouteChange}/>
      <h1 id="show-modal" onClick ={()=>setDisplayModal(true)} >Add Bookmark</h1>
      <ItemList bookmarks={bookmarks} onRemove={deleteBookMarks}/>
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
