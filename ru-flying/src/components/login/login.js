import React from 'react'
import loginImg from '../../yeKcim-plane.svg'

export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSignIn = this.onSignIn.bind(this)

        this.state = {
            username: '',
            password: ''
        }
    }


    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })

    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })

    }

    onSignIn(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password,
            
        }

        console.log(user)

        
    }

    render() {
        return (
            <div className = "base-container" ref= {this.props.containerRef}>
                <div className = "header">Login</div>
                <div className = "content">

                   <div className = "image">
                     <img src = {loginImg} />  
                    </div>

                    <div className = "form">
                        <div className = "form-group">
                            <label htmlFor = "username">Username</label>
                            <input type="text"
                                required 
                                name =" username" 
                                placeholder = "username"
                                value = {this.state.username}
                                onChange = {this.onChangeUsername}
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
                    onClick = {this.onSignIn}>
                        
                        Login
                    
                    </button>
                </div>


            </div>
        )
    }
}


