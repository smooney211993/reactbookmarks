import React, { useState } from 'react';
import ItemList from './Components/Itemlist/Itemlist';
import Modal from './Components/Modal/Modal';
import Signin from './Components/Siginin/Siginin';
import Navbar from './Components/Navbar/Navbar';
import Loader from './Components/Loader/Loader';
import './App.css';

const App = () => {
  let [bookmarks, setBookmarks] = useState([]);
  const [route, setRoute] = useState('signin');
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    joined: '',
  });

  const [isSignedin, setSignedIn] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const loadBookMarks = (data) => {
    setBookmarks(data);
  };
  const addBookmark = (newBookMarks) => {
    setBookmarks([...bookmarks, newBookMarks]);
    setDisplayModal(false);
    //add bookmarks to new state
  };
  const deleteBookMarks = (bookmark) => {
    setBookmarks(
      bookmarks.filter((item) => item.bookmarks_id !== bookmark.bookmarks_id)
      // filters the bookmarks that have not been selected
    );
  };
  const updateBookmarks = (id, updatedName, updatedUrl) => {
    const updated = bookmarks.map((item) => {
      if (item.bookmarks_id === id) {
        return {
          ...item,
          bookmarks_name: updatedName,
          bookmarks_url: updatedUrl,
        };
      }
      return item;
    });

    setBookmarks([...updated]);
    // updates bookmarks with the value inputs from the form
  };
  const renderModal = () => {
    if (displayModal) {
      return (
        <Modal
          hideModal={() => setDisplayModal(false)}
          addBookmark={addBookmark}
          userId={user.id}
          setLoader={setLoader}
        />
      );
    }
  };
  const onRouteChange = (routeAdress) => {
    setRoute(routeAdress);
    if (routeAdress === 'signin') {
      setSignedIn(false);
      setUser({
        id: '',
        name: '',
        email: '',
        joined: '',
      });
      setBookmarks([]);
    } else if (routeAdress === 'home') {
      setSignedIn(true);
    }
    // changes the route of the app depending on state route
  };

  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      joined: data.joined,
    });
    // load user function used when fetching data from the database
  };

  const renderLoader = () => {
    if (!loading) {
      return;
    }
    return <Loader />;
    // renders loading bar
  };

  const setLoader = (bolean) => {
    setLoading(bolean);
    // sets loading state which the renderloader function is dependant on
  };
  const homepage = () => {
    return route === 'home' ? (
      <>
        <h1 id='show-modal' onClick={() => setDisplayModal(true)}>
          Add Bookmark
        </h1>
        <ItemList
          bookmarks={bookmarks}
          onRemove={deleteBookMarks}
          onUpdate={updateBookmarks}
          setLoader={setLoader}
        />
        {renderModal()}
      </>
    ) : (
      <Signin
        onRouteChange={onRouteChange}
        route={route}
        loadUser={loadUser}
        loadBookMarks={loadBookMarks}
        setLoader={setLoader}
      />
    );
  };
  return (
    <div>
      <Navbar isSignedin={isSignedin} onRouteChange={onRouteChange} />
      {homepage()}
      {renderLoader()}
    </div>
  );
};

export default App;
