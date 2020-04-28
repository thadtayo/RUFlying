import React from 'react';

import '../styles/App.scss';
import { Login, Register } from "../components/login/index"

export default class LoginRegister extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
          isLogginActive: true
        }
      }
    
      changeState() {
        const { isLogginActive} = this.state
    
        if(isLogginActive){
          this.rightSide.classList.remove("right")
          this.rightSide.classList.add("left")
        } else {
          this.rightSide.classList.remove("left")
          this.rightSide.classList.add("right")
        }
        this.setState((prevState) => ({ isLogginActive: !prevState.isLogginActive}) )
      }
    
      componentDidMount() {
        this.rightSide.classList.add("right");
      }
    
      render() {
        const { isLogginActive } = this.state
        const current = isLogginActive ? "Register" : "Login"
        const currentActive = isLogginActive ? "login" : "register"
        return (
          
          <div className="Ap">
            <div className ="login">
              <div className = "ap-container">
                  {isLogginActive ? 
                    <Login containerRef = {(ref) => this.current = ref}/> :
                    <Register containerRef = {(ref) => this.current = ref}/>
                  }
              </div>
              <RightSide current = {current} containerRef = {ref => this.rightSide = ref} onClick = {this.changeState.bind(this)}/>
            </div>
          </div>
          
        )
      }
    }
    
    const RightSide = props => {
      return( 
      <div className = "right-side" ref={props.containerRef} onClick={props.onClick}>
        <div className = "inner-container">
          <div className = "text">{props.current}</div>
        </div>
      </div>
      )
    }
