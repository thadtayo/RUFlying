import React from 'react'
import loginImg from '../yeKcim-plane.svg'

export default class Register extends React.Component {
    constructor(props) {
        super(props)

        this.onChangeFirstname = this.onChangeFirstname.bind(this)
        this.onChangeLastname = this.onChangeLastname.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangeAddress = this.onChangeAddress.bind(this)
        this.onChangeZip = this.onChangeZip.bind(this)
        this.onChangePhone = this.onChangePhone.bind(this)
        this.onChangeState = this.onChangeState.bind(this)
        this.onChangeCredit = this.onChangeCredit.bind(this)

        this.state = {
            account_num: '',
            email: '',
            first: '',
            last: '',
            address: '',
            zip: '',
            phone: '',
            pref: {},
            state: '',
            creditcard: ''

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

    onChangeState(e){

        this.setState({
            state: e.target.value
        })
    }

    onChangeCredit(e){

        this.setState({
            creditcard: e.target.value
        })
    }

    onUpdate(e) {
        e.preventDefault();

        const user = {
            first: this.state.first,
            last: this.state.last,
            email: this.state.email,
            address: this.state.address,
            zip: this.state.zip,
            state: this.state.state,
            creditcard: this.state.creditcard
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
                            <label htmlFor = "phone">Phone</label>
                            <input type="text"
                                required 
                                name ="phone" 
                                placeholder = "phone"
                                value = {this.state.phone}
                                onChange = {this.onChangePhone}
                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "state">State</label>
                            <input type="text"
                                required 
                                name ="state" 
                                placeholder = "State"
                                value = {this.state.state}
                                onChange = {this.onChangeState}
                            />
                        </div>
                        
                        <div className = "form-group">
                            <label htmlFor = "creditcard">Credit Card</label>
                            <input type="text"
                                required 
                                name ="creditcard" 
                                placeholder = "Credit Card"
                                value = {this.state.creditcard}
                                onChange = {this.onChangeCredit}
                            />
                        </div>
                        
                    </div> 
                </div>
                <div className = "footer">
                    <button type = "button" 
                        className = "btn"
                        onClick = {this.onUpdate}
                    >
                        
                        Save
                        
                    </button>
                </div>


            </div>
        )
    }
}
