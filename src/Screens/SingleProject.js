import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

function SingleProject() {

    const [data, setData] = useState({});
    const { course_id } = useParams();

    const getSingleProject = (course_id) => {

        fetch(`http://localhost:8000/api/project/${course_id}`)
            .then(res => res.json())
            .then(json => {

                console.log('json', json)
                // localStorage.setItem('data',JSON.stringify(json));
                setData(json);
            })

    }

    useEffect(() => {
        console.log('course_id is', course_id)
        getSingleProject(course_id);
    }, [])

    return (

        <div style={{ marginTop: "60px" }}>
            <h1>Course Tite: {data.title}</h1>
            <p>Course Price: {data.price}</p>
            <p>Course Image:
                <img src="https://www.w3schools.com/w3images/house2.jpg" /></p>
        </div>
    )
}

export default SingleProject
