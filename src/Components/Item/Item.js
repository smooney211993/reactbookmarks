import React, {useState} from 'react';
import fetchDataBase from '../../Utils/database';

const Item = (props) => {
    const { 
        bookmark,
        bookmark: {bookmarks_id,bookmarks_name,bookmarks_url},
        onRemove,
        onUpdate,
        setLoader
    } = props;
    const [isEdit, setIsEdit] = useState(false);
    const [formState, setFormState] = useState({
        name: '',
        url: ''
    })
    const handleFormStateChange = (key) =>(e)=>{
        setFormState({
            ...formState,
            [key]: e.target.value
        })
    }
    const deleteBookmarks = async() =>{
        try {
        setLoader(true);
        const deleteResponse = await fetchDataBase.deleteBookMark(bookmarks_id)
        if(deleteResponse === 'succesfully deleted'){
            onRemove(bookmark)
        }
            
        } catch (error) {
            
        }finally {
            setLoader(false);
        }
    }
    const updateBookmarks = () =>{
        onUpdate(bookmarks_id, formState.name, formState.url)
        setIsEdit(false)

    }
    return isEdit ? (
        <div className="item">
            <i className="fas fa-times" id="delete-bookmark" title="delete bookmark" onClick={deleteBookmarks}></i>
            <div className="name">
                <img src = {`https://s2.googleusercontent.com/s2/favicons?domain=${bookmarks_url}`} alt="favicon"/>
                <a href={bookmarks_url} target="_blank" rel="noopener noreferrer"> {bookmarks_name} </a>
            </div>
            <div>
               <form onSubmit={updateBookmarks}> 
                <label htmlFor="website-name">Name</label>
                <input type="text" onChange={handleFormStateChange('name')} value={formState.name}></input>
                <label htmlFor={"website-url"}>Url</label>
                <input type ="text" onChange={handleFormStateChange('url')} value={formState.url}></input>
                <button type="submit">Save</button>
               </form> 
            </div>
        </div>
        )
        : (
            <div className="item">
                <div onClick={()=>setIsEdit(true)}>Edit</div>
                <i className="fas fa-times" id="delete-bookmark" title="delete bookmark" onClick={deleteBookmarks}></i>
                <div className="name">
                    <img src = {`https://s2.googleusercontent.com/s2/favicons?domain=${bookmarks_url}`} alt="favicon"/>
                    <a href={bookmarks_url} target="_blank" rel="noopener noreferrer"> {bookmarks_name} </a>
                </div>
            </div>
    )

};

export default Item;