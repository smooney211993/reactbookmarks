const fetchDataBase = {
    async register (name, email, password) {
        try{
            const response = await fetch(`http://localhost:3001/register`,{
                method: 'post',
                headers: {'Content-type' : 'application/json'},
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password 
                })
             })
            if(response.ok) {
                const user = response.json();
                return user
                 } else {
                throw new Error('Error registering')
            }
    
        } catch(error) {
            console.log(error)
        }
    },
    async signIn(email, password){
        try{
            const response = await fetch('https://calm-peak-57485.herokuapp.com/signin',{
                method: 'post',
                headers: {'Content-type' : 'application/json'},
                body: JSON.stringify({
                    email: email,
                    password: password 
                })
            })
            if(response.ok) {
                const user = response.json();
                return user
                } else {
                throw new Error('Error signing in.Please be sure that credentials are correct!')
            }
 
        } catch(error) {
            console.log(error)
        }
    }
}

export default fetchDataBase;