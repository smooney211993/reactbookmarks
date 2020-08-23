import React from 'react';

const Item = (props) => {
    const { bookmark: {bookmarks_name,bookmarks_url}
    } = props;
    console.log(props)
     return(
            <div className="item">
                <i className="fas fa-times" id="delete-bookmark" title="delete bookmark"></i>
                <div className="name">
                    <img src = {`https://s2.googleusercontent.com/s2/favicons?domain=${bookmarks_url}`} alt="favicon"/>
                    <a href={bookmarks_url} target="_blank" rel="noopener noreferrer"> {bookmarks_name} </a>
                </div>
            </div>
    )

};

export default Item;