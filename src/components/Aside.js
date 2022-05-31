import { useState } from 'react';
import "./aside.css";
import ErrorIcon from '../images/icon-error.svg';

function Aside() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const checkFirstName = () => {
        if (firstName.length === 0) {
            setFirstNameError(true);
            return false;
        } else 
            return true;
    }

    const checkLastName = () => {
        if (lastName.length === 0) {
            setLastNameError(true);
            return false;
        } else 
            return true;
    }

    const checkEmail = () => {
        const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if(re.test(email)) {
            return true;
        } else {
            setEmailError(true);
            return false;
        }
    }

    const checkPassword = () => {
        if (password.length === 0) {
            setPasswordError(true);
            return false;
        } else 
            return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let checkFirstNameResult = checkFirstName();
        let checkLastNameResult = checkLastName();
        let checkEmailResult = checkEmail();
        let checkPasswordResult = checkPassword();
        if (checkFirstNameResult && checkLastNameResult && checkEmailResult && checkPasswordResult) {
            console.log("submit");
        }
    }

    const handleFirstName = (e) => {
        setFirstNameError(false);
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastNameError(false);
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmailError(false);
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPasswordError(false);
        setPassword(e.target.value);
    }

    return (
        <aside>
            <div className="bar"><span>Try it free 7 days</span> then $20/mo. thereafter</div>
            <form>
                <div className={"input" + (firstNameError ? " error" : "")}>
                    <input type="text" placeholder={firstNameError ? "" : "First Name"} value={firstName} onChange={handleFirstName} />
                    {firstNameError && (
                        <>
                            <img src={ErrorIcon}  alt="error"></img>
                            <i>First Name cannot be empty</i>
                        </>
                    )}
                </div>
                <div className={"input" + (lastNameError ? " error" : "")}>
                    <input type="text" placeholder={lastNameError ? "" : "Last Name "} value={lastName} onChange={handleLastName} />
                    {lastNameError && (
                        <>
                            <img src={ErrorIcon}  alt="error"></img>
                            <i>Last Name cannot be empty</i>
                        </>
                    )}
                </div>
                <div className={"input" + (emailError ? " error" : "")}>
                    <input type="email" placeholder={emailError ? "" : "Email Address"} value={email} onChange={handleEmail}/>
                    {emailError && (
                        <>
                            <img src={ErrorIcon}  alt="error"></img>
                            <i>Looks like this is not an email</i>
                        </>
                    )}
                </div>
                <div className={"input" + (passwordError ? " error" : "")}>
                    <input type="password" autoComplete="new-password" placeholder={passwordError ? "" : "Password"} value={password} onChange={handlePassword} />
                    {passwordError && (
                        <>
                            <img src={ErrorIcon}  alt="error"></img>
                            <i>Password cannot be empty</i>
                        </>
                    )}
                </div>      
                <button onClick={handleSubmit}>Claim your free trial</button>
                <div className="tos">By clicking the button, you are agreeing to our <span>Terms and Services</span></div>
            </form>
        </aside>
    );
}

export default Aside;

 


