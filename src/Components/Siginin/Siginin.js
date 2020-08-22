import React , {useState} from 'react';
import fetchDataBase from '../../Utils/database'

const Sigin = (props) => {
    const  {
        onRouteChange,
        route,
        loadUser
    } = props;
    const [formState, setFormState] = useState({
        name: '',
        email : '',
        password : ''
    })

    const handleFormStateChange = (key) => (event) => {
        setFormState({
            ...formState,
            [key] : event.target.value
        })
    }

    const registerUser = async () => {
        const {name, email, password} = formState;
        
        const user = await fetchDataBase.register(name, email, password)
        console.log(user)
        if(!user){
            return
        }
        loadUser(user)
        debugger;
      

    }

    const renderRegisterForm = ()=>{
        if(route === 'register'){
            return (
                <div className="form-group">
                        <label htmlFor="website-name" className="form-label"> First Name</label>
                        <input type="text" className="form-input" id="website-name" onChange={handleFormStateChange('name')} value ={formState.name} />
                </div>
            )
        }
    }

    
    return (
    <div className="modal-container " id="modal">
        <div className="modal">
            <i className="fas fa-times close-icon" ></i>
            <div className="modal-header">
                <h3>{route === "register" ? "Register" : "Sign In"}</h3>
            </div>
            <div className="modal-content">
                    {renderRegisterForm()}
                    <div className="form-group">
                        <label htmlFor="website-url" className="form-label">Email </label>
                        <input type="text" className="form-input" id="website-url" onChange={handleFormStateChange('email')} value={formState.email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="website-name" className="form-label"> Password</label>
                        <input type="text" className="form-input" id="website-name" onChange={handleFormStateChange('password')} value ={formState.password} />
                    </div>
                    {route === "signin" ?
                    <> <button type="submit" >Sign in</button> <button type="button" onClick={(e)=>onRouteChange('register')} >Register</button></>
                     : 
                      <button type="button" onClick={registerUser} >Register</button>}
                
            </div>
        </div>
    </div>
    )
}

export default Sigin;