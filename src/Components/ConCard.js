import React from 'react'

function ConCard({image, name, title, text }) {
    return (
        
            <div className="w3-col l3 m6 w3-margin-bottom">
                <img
                    src={image}
                    alt="John"
                    style={{ width: "100%" }}
                />
                <h3>{name}</h3>
                <p className="w3-opacity">{ title }</p>
                <p>
                {text}
                </p>
                <p>
                    <button className="w3-button w3-light-grey w3-block">
                        Contact
                    </button>
                </p>
            </div>
    )
}

export default ConCard
