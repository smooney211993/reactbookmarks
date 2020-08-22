import React from 'react';
import Item from '../Item/Item';
const ItemList = (props) => {
    const {
        bookmarks
    } = props;
    const renderItemList = () => {
        return bookmarks.map((bookmark, i)=>{
            return <Item bookmark={bookmark} key={i}/>
        })
    }
    
    return (
        <div className = "container" id = "container">  
            {renderItemList()}
        </div>
     )

}


export default ItemList;