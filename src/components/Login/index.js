import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    
    let history = useHistory();

    let back = e => {
        e.stopPropagation();
        history.goBack();
    };



    return (
        <div
            onClick={back}
            style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: "rgba(0, 0, 0, 0.15)"
            }}
        >
            <div
                className="modal"
                style={{
                    position: "absolute",
                    background: "#fff",
                    top: 25,
                    left: "10%",
                    right: "10%",
                    padding: 15,
                    border: "2px solid #444"
                }}
            >
                <h1>Olá</h1>
                <p>Area de login</p>
            <button type="button" onClick={back}>
                Close
            </button>
            </div>
        </div>
    )
}


export default Login;