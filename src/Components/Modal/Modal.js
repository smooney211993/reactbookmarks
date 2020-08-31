import React, { useState } from 'react';
import fetchDataBase from '../../Utils/database';
import './Modal.css';
import validate from '../../Helpers/validateform';

const Modal = (props) => {
  const { hideModal, addBookmark, userId, setLoader } = props;
  const [formState, setFormState] = useState({
    name: '',
    url: '',
  });
  const [validUrl, setValidUrl] = useState(true);
  const handleFormStateChange = (key) => (event) => {
    setFormState({
      ...formState,
      [key]: event.target.value,
    });
  };

  const addBookmarkOnSubmit = async (e) => {
    e.preventDefault();
    const { name, url } = formState;
    let websiteUrl = '';
    if (!url.includes('http://', 'https://')) {
      websiteUrl = `https://${url}`;
    } // adds the prefix https on value input
    try {
      setLoader(true);
      const isValidName = validate.validateName(name);
      const isValidUrl = validate.validateUrl(websiteUrl);
      if (isValidName && isValidUrl) {
        const newBookMark = await fetchDataBase.addBookMark(
          name,
          websiteUrl,
          userId
        );
        addBookmark(newBookMark);
        setValidUrl(true);
      } else {
        setValidUrl(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
    // if both name and value are validated, the addbookmark http post request will be made to the database which will then return the new bookmark of which will be added to the bookmark state in app
  };
  const renderError = () => {
    if (validUrl) {
      return;
    }
    return <div className='error-message'>Please use a valid url</div>;
  };
  return (
    <div className='modal-container ' id='modal'>
      <div className='modal'>
        <i className='fas fa-times close-icon' onClick={hideModal}></i>
        <div className='modal-header'>
          <h3>Add Bookmark</h3>
        </div>
        <div className='modal-content'>
          <form onSubmit={addBookmarkOnSubmit}>
            <div className='form-group'>
              <label htmlFor='website-name' className='form-label'>
                {' '}
                Website Name
              </label>
              <input
                type='text'
                className='form-input'
                id='website-name'
                onChange={handleFormStateChange('name')}
                value={formState.websiteName}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='website-url' className='form-label'>
                {' '}
                Website Url
              </label>
              <input
                type='text'
                className='form-input'
                id='website-url'
                onChange={handleFormStateChange('url')}
                value={formState.websiteUrl}
              />
            </div>
            {renderError()}
            <button type='submit'>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
