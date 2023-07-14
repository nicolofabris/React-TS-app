import React from 'react'
import {FaArrowRight} from 'react-icons/fa'
import Input from '../../../components/input/Input'
import Button from '../../../components/button/Button'

const login = () => {
  return (
    <div className="auth-inner">
    <div className="alerts" role="alert">
        Error message
    </div>
    <form className="auth-form">
        <div className="form-input-container">
            <Input id="username" name="username" type="text" value='my value' labelText='Username' placeholder="Enter username" handleChange={() => {}}/>
            <Input id="password" name="password" type="password" value='my password' labelText='Password' placeholder="Enter password" handleChange={() => {}}/>
            <Input id="checkbox" name="checkbox" type="checkbox" value={false} handleChange={() => {}}/>
            
            <label className="checkmark-container" htmlFor="checkbox">
                <input id="checkbox" type="checkbox" name="checkbox" />
                Keep me signed in
            </label>
        </div>
        <Button label={'LOGIN'} className="auth-button button" disabled={true}/>

        <span className="forgot-password">
            Forgot password? <FaArrowRight className='arrow-right'/>
        </span>
    </form>
</div>
  )
}

export default login