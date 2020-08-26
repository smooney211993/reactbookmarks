import React from 'react';
import Item from '../Item/Item';
const ItemList = (props) => {
    const {
        bookmarks,
        onRemove,
        onUpdate,
        setLoader
    } = props;
    const renderItemList = () => {
        return bookmarks.map((bookmark, i)=>{
            return <Item 
            bookmark={bookmark}
            key={i} 
            onRemove={onRemove}
            onUpdate={onUpdate} 
            setLoader={setLoader}/>
        })
    }
    
    return (
        <div className = "container" id = "container">  
            {renderItemList()}
        </div>
     )

}


export default ItemList;