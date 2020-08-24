import React from 'react';
import FetchDataBase from '../../Utils/database';
import fetchDataBase from '../../Utils/database';

const Item = (props) => {
    const { bookmark,bookmark: {bookmarks_id,bookmarks_name,bookmarks_url}, onRemove
    } = props;
    const deleteBookmarks = async() =>{
        const deleteResponse = await fetchDataBase.deleteBookMark(bookmarks_id)
        if(deleteResponse === 'succesfully deleted'){
            onRemove(bookmark)
        }
        
    }
    console.log(props)
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