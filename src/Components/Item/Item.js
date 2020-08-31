import React, { useState } from 'react';
import validate from '../../Helpers/validateform';
import validateName from '../../Helpers/namevalidation';
import fetchDataBase from '../../Utils/database';

const Item = (props) => {
  const {
    bookmark,
    bookmark: { bookmarks_id, bookmarks_name, bookmarks_url },
    onRemove,
    onUpdate,
    setLoader,
  } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    url: '',
  });
  const [validFormState, setValidFormState] = useState({
    name: true,
    url: true,
  });
  const handleFormStateChange = (key) => (e) => {
    setFormState({
      ...formState,
      [key]: e.target.value,
    });
  };
  const deleteBookmarks = async () => {
    try {
      setLoader(true);
      const deleteResponse = await fetchDataBase.deleteBookMark(bookmarks_id);
      if (deleteResponse === 'succesfully deleted') {
        onRemove(bookmark);
      }
    } catch (error) {
    } finally {
      setLoader(false);
    }
    // if the bookmark has been sucessfully deleted from the database, delete the bookmark from the bookmarks state which will re render the displayed bookmarks
  };
  const updateBookmarks = async (e) => {
    e.preventDefault();
    const { name, url } = formState;
    const isValidName = validateName(name);
    let websiteUrl = '';
    if (!url.includes('http://', 'https://')) {
      websiteUrl = `https://${url}`;
    }
    const isValidUrl = validate.validateUrl(websiteUrl);
    setValidFormState({
      name: isValidName,
      url: isValidUrl,
    });

    if (!isValidName || !isValidUrl) {
      return;
    }
    try {
      setLoader(true);
      const response = await fetchDataBase.updateBookmarks(
        bookmarks_id,
        name,
        websiteUrl
      );
      if (response.bookmarks_id === bookmarks_id) {
        onUpdate(bookmarks_id, formState.name, websiteUrl);
        setIsEdit(false);
      } else {
        throw new Error('unable to update');
      }
    } catch (error) {
      console.log('unable to update');
    } finally {
      setLoader(false);
    }

    setIsEdit(false);
    // if the bookmark has been sucessfully updated in the database, delete the bookmark from the bookmarks state which will re render the displayed bookmarks
  };
  return isEdit ? (
    <div className='item'>
      <i
        className='fas fa-times'
        id='delete-bookmark'
        title='delete bookmark'
        onClick={deleteBookmarks}></i>
      <div className='name'>
        <img
          src={`https://s2.googleusercontent.com/s2/favicons?domain=${bookmarks_url}`}
          alt='favicon'
        />
        <a href={bookmarks_url} target='_blank' rel='noopener noreferrer'>
          {' '}
          {bookmarks_name}{' '}
        </a>
      </div>
      <div>
        <form onSubmit={updateBookmarks} className='edit-form'>
          <label htmlFor='website-name'>Name</label>
          <input
            type='text'
            onChange={handleFormStateChange('name')}
            value={formState.name}></input>
          {!validFormState.name ? 'Please enter website name' : <></>}
          <label htmlFor={'website-url'}>Url</label>
          <input
            type='text'
            onChange={handleFormStateChange('url')}
            value={formState.url}></input>
          {!validFormState.url ? 'Please use a valid Url' : <></>}
          <br />
          <button className='edit-save' type='submit'>
            Save
          </button>
          <button
            className='edit-cancel'
            type='button'
            onClick={() => setIsEdit(false)}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div className='item'>
      <div className='edit' onClick={() => setIsEdit(true)}>
        Edit
      </div>
      <i
        className='fas fa-times'
        id='delete-bookmark'
        title='delete bookmark'
        onClick={deleteBookmarks}></i>
      <div className='name'>
        <img
          src={`https://s2.googleusercontent.com/s2/favicons?domain=${bookmarks_url}`}
          alt='favicon'
        />
        <a href={bookmarks_url} target='_blank' rel='noopener noreferrer'>
          {' '}
          {bookmarks_name}{' '}
        </a>
      </div>
    </div>
  );
};

export default Item;
