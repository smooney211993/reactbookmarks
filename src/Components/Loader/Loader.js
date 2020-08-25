import React from 'react';
import './Loader.css'

const Loader = (props) =>{
    return (
       <div className="loader">
            <div class="lds-ripple">
                <div>
                    </div><div>
                </div>
            </div>
        </div> 
    )
}

export default Loader;