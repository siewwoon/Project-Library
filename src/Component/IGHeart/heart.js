import React, { useState } from "react"
import Heart from "react-heart"
 
function App() {
    const [active, setActive] = useState(false)
    return (
        <div style={{ width: "5px" }}>
            <Heart isActive={active} onClick={() => setActive(!active)} animationTrigger = "none" inactiveColor = "rgba(255,125,125,.75)" activeColor = "#e019ae" style = {{marginTop:'1rem'}}/>
        </div>
    );
}


export default Heart;