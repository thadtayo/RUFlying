import {useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

export default () => {
    let history = useHistory()
    console.log("test")

    useEffect( () => {
        
        

      function logout(){
     
         axios.get("api/customers/logout")

         history.push("/")
 }

            logout()
    }, [1])


    return null
}


