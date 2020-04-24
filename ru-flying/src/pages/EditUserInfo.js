import React from 'react'
import loginImg from '../yeKcim-plane.svg'

export class Register extends React.Component {
    constructor(props) {
        super(props)

        this.onChangeFirstname = this.onChangeFirstname.bind(this)
        this.onChangeLastname = this.onChangeLastname.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onRegister = this.onRegister.bind(this)

        this.state = {
            account_num: '',
            email: '',
            first: '',
            last: '',
            address: '',
            zip: '',
            phone: '',
            pref: {},
            state: ''

        }
    

    }

    onChangeFirstname(e){

        this.setState({
            first: e.target.value
        })
    }

    onChangeLastname(e){

        this.setState({
            last: e.target.value
        })
    }

    onChangeEmail(e){

        this.setState({
            email: e.target.value
        })
    }

    onChangeAddress(e){

        this.setState({
            address: e.target.value
        })
    }

    onChangeZip(e){

        this.setState({
            zip: e.target.value
        })
    }

    onChangePhone(e){

        this.setState({
            phone: e.target.value
        })
    }

    onUpdate(e) {
        e.preventDefault();

        const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        }

        

        //route.post('localhost:5000/customers/update/:user', user)
            
        
    }


    render() {
        return (
            <div className = "base-container" ref= {this.props.containerRef}>
                <div className = "header">Edit User Information</div>
                <div className = "content">

                   <div className = "image">
                     <img src = {loginImg} />  
                    </div>

                    <div className = "form">
                        <div className = "form-group">
                            <label htmlFor = "username">First Name</label>
                            <input type="firstname"
                                required 
                                name =" firstname" 
                                placeholder = "First Name"
                                value = {this.state.firstname}
                                onChange = {this.onChangeFirstname}
                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "username">Last Name</label>
                            <input type="lastname" 
                                name =" lastname" 
                                placeholder = "Last Name"
                                value = {this.state.lastname}
                                onChange = {this.onChangeLastname}
                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "email">Email</label>
                            <input type="text"
                                required
                                name =" email" 
                                placeholder = "email"
                                value = {this.state.email}
                                onChange = {this.onChangeEmail}
                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "address">Address</label>
                            <input type="text"
                                required 
                                name ="address" 
                                placeholder = "address"
                                value = {this.state.address}
                                onChange = {this.onChangeAddress}
                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "address">Zip</label>
                            <input type="text"
                                required 
                                name ="zip" 
                                placeholder = "zip"
                                value = {this.state.zip}
                                onChange = {this.onChangeZip}
                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "address">Phone</label>
                            <input type="text"
                                required 
                                name ="phone" 
                                placeholder = "phone"
                                value = {this.state.phone}
                                onChange = {this.onChangePhone}
                            />
                        </div>
                        
                        
                    </div> 
                </div>
                <div className = "footer">
                    <button type = "button" 
                        className = "btn"
                        onClick = {this.onRegister}
                    >
                        
                        Register
                        
                    </button>
                </div>


            </div>
        )
    }
}
