import React from 'react';

const Item = (props) => {
    const { bookmark: {name, url}
    } = props;
    console.log(props)
     return(
            <div className="item">
                <i className="fas fa-times" id="delete-bookmark" title="delete bookmark"></i>
                <div className="name">
                    <img src = {`https://s2.googleusercontent.com/s2/favicons?domain=${url}`} alt="favicon"/>
                    <a href={url} target="_blank" rel="noopener noreferrer"> {name} </a>
                </div>
            </div>
    )

};

export default Item;