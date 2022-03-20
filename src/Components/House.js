import React from 'react'
import { Link } from 'react-router-dom'

function House({ name, img, course_id }) {
    return (
        <div className="w3-col l3 m6 w3-margin-bottom">
            <Link to={`/project/${course_id}`}>
                <div className="w3-display-container">
                    <div className="w3-display-topleft w3-black w3-padding">
                        {name}
                    </div>
                    <img
                        src={img}
                        alt="House"
                        style={{ width: "100%" }}
                    />
                </div>
            </Link>
        </div>

    )
}

export default House
