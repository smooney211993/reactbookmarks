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
            const response = await fetch('http://localhost:3001/signin',{
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
    },

    async addBookMark(name, url, id){
        try {
            const response = await fetch('http://localhost:3001/bookmarks', {
            method: 'post',
            headers : {'Content-type': 'application/json'},
            body: JSON.stringify({
                name: name,
                url : url,
                id: id
            })
        })
        if(response.ok){
            const addedBookmark = await response.json()
            return addedBookmark;
        } else {
            throw new Error('Could not add bookmark')
        }

        } catch (error) {
            console.log(error)
            
        }
    }
}

export default fetchDataBase;