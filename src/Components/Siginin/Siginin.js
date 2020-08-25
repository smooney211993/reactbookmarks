import React , {useState} from 'react';
import fetchDataBase from '../../Utils/database'

const Sigin = (props) => {
    const  {
        onRouteChange,
        route,
        loadUser,
        loadBookMarks,
        setLoader
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
        try {
            const user = await fetchDataBase.register(name, email, password)
            if(user){
                loadUser(user)
                onRouteChange('home')
                
            }
            
            
        } catch (error) {
            console.log(error)
        }
       
       }
    const signInUser = async() =>{
        const {email, password} = formState;
        try {
            setLoader(true)
            const {user, bookmarks} = await fetchDataBase.signIn(email, password);
            if(user){
             loadUser(user)
             onRouteChange('home')
             loadBookMarks(bookmarks)
            } 
        } catch (error) {
            console.log(error)
        } finally {
            setLoader(false)
        }
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
            <div className="modal-header">
                <h3>{route === "register" ? "Register" : "Sign In"}</h3>
            </div>
            <div className="modal-content">
                    {renderRegisterForm()}
                    <br/>
                    <div className="form-group">
                        <label htmlFor="website-url" className="form-label">Email </label>
                        <input type="text" className="form-input" id="website-url" onChange={handleFormStateChange('email')} value={formState.email}/>
                        
                    </div>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="website-name" className="form-label"> Password</label>
                        <input type="text" className="form-input" id="website-name" onChange={handleFormStateChange('password')} value ={formState.password} />
                    </div>
                    {route === "signin" ?
                    <> <button type="button" onClick={signInUser}  >Sign in</button> <button type="button" onClick={(e)=>onRouteChange('register')} className="register-button" >Register</button></>
                     : 
                     <>
                      <button type="button" onClick={registerUser} >Register</button>
                      <button type="button" className="signin-button" onClick={(e)=>onRouteChange('signin')} >Sign in</button>
                     </>} 
                
            </div>
        </div>
    </div>
    )
}

export default Sigin;