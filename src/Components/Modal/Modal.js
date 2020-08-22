import React, {useState} from 'react';
import './Modal.css'

const Modal = (props) => {
    const {
        hideModal,
        addBookmark
    } = props
    const [formState, setFormState] = useState({
        name: '',
        url: ''
    });
   
     const handleFormStateChange = (key) => (event) => {
         setFormState({
             ...formState,
             [key] : event.target.value
         })
     }


      const addBookmarkOnSubmit = (e) =>{
        e.preventDefault()
          addBookmark(formState);
      }

    return (
    <div className="modal-container " id="modal">
        <div className="modal">
            <i className="fas fa-times close-icon" onClick={hideModal}></i>
            <div className="modal-header">
                <h3>Add Bookmark</h3>
            </div>
            <div className="modal-content">
                <form  id="bookmark-form" onSubmit={addBookmarkOnSubmit}>
                    <div className="form-group">
                        <label htmlFor="website-name" className="form-label"> Website Name</label>
                        <input type="text" className="form-input" id="website-name" onChange={handleFormStateChange('name')} value ={formState.websiteName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="website-url" className="form-label"> Website Url</label>
                        <input type="text" className="form-input" id="website-url" onChange={handleFormStateChange('url')} value={formState.websiteUrl}/>
                    </div>
                    <button type="submit" >Save</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Modal;

