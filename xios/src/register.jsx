import React from 'react'
import { useRef, useEffect, useState } from 'react'
import {faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



const USER_REGEX = /^[a-zA-z][a-zA-Z0-9-_]{3,23}$/

// USER_REGEX is used to check the user input name in the form.
// It requires the user to start with a lower or upper case letter and then be followed by anywhere between 3 to 23 characters which can be lower or upper case letters, digits, hyphens and underscores

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

//the PWD_REGEX validates the password section in the form
//it requires that the password have at least one lower case character, one upper case character, one digit and one special character,and can be anywhere from 8 to 24 characters.






function Register() {


  const userRef = useRef() // sets focus on user input when component loads
  const errRef = userRef() // sets focus on error

  const [user, setUser] = useState('') // tied to the user input
  const [validName, setValidName] = useState(false) // checks whether name validates or not
  const [userFocus, setUserFocus] = useState(false) // whether we have focus on the input field

  const [pwd, setpwd] = useState('')
  const [validpwd, setValidpwd] = useState(false) 
  const [pwdFocus, setpwdFocus] = useState(false)


  const [matchpwd, setMatchpwd] = useState('')
  const [validmatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)


  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)


    useEffect(()=>{

      userRef.current.focus() // sets the focus on the username input

    }, [])                                    // setting the focus when the component loads
    
    useEffect(()=>{

      const result = USER_REGEX.test(user)  // the useEffect is set on the username and this validates the username
      console.log(result)     // anytime it changes it checks the validation of the field
      console.log(user)
      setValidName(user)


    }, [user])

    useEffect(()=>{

      const result = PWD_REGEX.test(pwd)
      console.log(result)             
      console.log(pwd)
      setValidpwd(result)
      const match = pwd === matchpwd
      setValidMatch(match)


    }, [pwd, matchpwd])

    useEffect(()=>{

      setErrMsg('')     // anytime the user changes one of the items in the dependency array the error-message is cleared


    }, [user, pwd, matchpwd])




  return (

    <>
    
    

        <div>
          
          <p ref = {errRef} className ={errMsg ? 'errmsg' : 'offscreen' } aria-live = 'assertive'>{errMsg}</p>

          <h1>Register</h1>

          <form>

            <label htmlfor = 'username'> Username: </label>
            <input

            type = 'text'
            id = 'username'
            ref = {userRef}
            autocomplete = 'off'
            onChange={(e) => setUser(e.target.value)}
            required
            aria-invalid ={validName ? 'false' : 'true'}
            aria-describedby = 'uidnote'
            onFocus = {()=> setUserFocus(true)}
            onBlur = {() => setUserFocus(false)}            
            
            />


          </form>
          
          
          
          
        </div>



    </>


  )
}

export default Register