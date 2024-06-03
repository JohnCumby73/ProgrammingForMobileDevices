import { useState} from "react";


function NavBar() {
    // define the initial state, and the state setter.
    const [buttonText, setButtonText] = useState(true);
    
    // function to toggle state
    const toggleText = () => {
        setButtonText(previousState => !previousState);
    }
    return (
        <div className = "NavBar">
            <h1>Assignment1</h1>
            <button onClick={toggleText}>{buttonText ? "login" : "logout"}</button>
            
        </div>
    )
}

export default NavBar;