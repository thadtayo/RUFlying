import React from 'react'
import loginImg from '../../yeKcim-plane.svg'

export class Register extends React.Component {
    constructor(props) {
        super(props)

        this.onChangeFirstname = this.onChangeFirstname.bind(this)
        this.onChangeLastname = this.onChangeLastname.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onRegister = this.onRegister.bind(this)

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }
    

    }

    onChangeFirstname(e){

        this.setState({
            firstname: e.target.value
        })
    }

    onChangeLastname(e){

        this.setState({
            lastname: e.target.value
        })
    }

    onChangeEmail(e){

        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e){

        this.setState({
            password: e.target.value
        })
    }

    onRegister(e) {
        e.preventDefault();

        const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        }

        //add user to database

        //send user to login page
        
    }


    render() {
        return (
            <div className = "base-container" ref= {this.props.containerRef}>
                <div className = "header">Register</div>
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
                            <label htmlFor = "password">Password</label>
                            <input type="password"
                                required 
                                name ="password" 
                                placeholder = "password"
                                value = {this.state.password}
                                onChange = {this.onChangePassword}

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
