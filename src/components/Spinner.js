import React from 'react'
import loading from "./loading.gif"
import "./spinner.css"
const Spinner=()=> {
        return (
            <div className="text-center ext">
                <img src={loading} alt="loading..."></img>
            </div>
        )
}
export default Spinner;