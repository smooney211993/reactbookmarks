import React from 'react';
import fetchDataBase from '../../Utils/database';

const Item = (props) => {
    const { 
        bookmark,
        bookmark: {bookmarks_id,bookmarks_name,bookmarks_url},
        onRemove,
        setLoader
    } = props;
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
     return(
            <div className="item">
                <i className="fas fa-times" id="delete-bookmark" title="delete bookmark" onClick={deleteBookmarks}></i>
                <div className="name">
                    <img src = {`https://s2.googleusercontent.com/s2/favicons?domain=${bookmarks_url}`} alt="favicon"/>
                    <a href={bookmarks_url} target="_blank" rel="noopener noreferrer"> {bookmarks_name} </a>
                </div>
            </div>
    )

};

export default Item;