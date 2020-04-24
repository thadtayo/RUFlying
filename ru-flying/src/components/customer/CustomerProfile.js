import React from 'react'
import './Profile.scss'

export default class CustomerProfile extends React.Component{

    constructor(props){
        super(props)

        // this.onUpdate = this.onUpdate.bind(this)

        // this.state = {userInfo : {} }
    }
    

    // componentDidMount(){

    //     let user = localStorage.getItem("userid") 
    //     axios.get(`http://localhost:5000/customers/:${user}`)
    //     .then(response => {
    //         this.setState = { userInfo: response.data}
    //     })
    // }

    // onUpdate() {
    //     // direct to update page
    // }
    
    render() {
        return (
            <body className ="body">
            <div className = "container">
                <h1 className = "header">Customer Profile</h1>
                
                <div className = "firstname">
                    <p>First Name: </p>
                </div>

                <div className = "firstname">
                    <p>Last Name: </p>
                </div>
                <div className = "firstname">
                    <p>Email: </p>
                </div>
                <div className = "firstname">
                    <p>Phone:</p>
                </div>

                <div className = "firstname">
                    <p>Address:</p>
                </div>

                <div className = "firstname">
                    <p>Zip: </p>
                </div>

                <div className = "firstname">
                    <p>State: </p>
                </div>

                <div className = "footer">
                    <button type = "button" 
                        className = "btn"
                        // onClick = {this.onUpdate}
                    >
                            Update
                        </button>

                </div>

               
             
                </div>
                </body>
           

        )
    }
}

