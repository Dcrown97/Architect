import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development'
import House from '../Components/House'

function Project() {

    const [data, setData] = useState([]);
    const { id } = useParams();


    const getAllProjects = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(json => {

                console.log('json', json)
                localStorage.setItem('data', JSON.stringify(json));
                setData(json);
            })
    }

    useEffect(() => {
        getAllProjects();

        console.log(id);

    }, [])

    return (
        <div className="w3-content w3-padding" style={{ maxWidth: "1564px" }}>
            <div className="w3-container w3-padding-32" id="projects">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
                    Projects
                </h3>
            </div>

            <div className="w3-row-padding">
                {
                    data.map((house, index) => {
                        return (

                            <House key={index} course_id={house.id} name={house.title} img="https://www.w3schools.com/w3images/house2.jpg" />


                        )
                    })

                }

                {/* <House name="Brick House" img="https://www.w3schools.com/w3images/house5.jpg" />
                <House name="Renovated" img="https://www.w3schools.com/w3images/house3.jpg" />
                <House name="Barn House" img="https://www.w3schools.com/w3images/house4.jpg" />
                <House name="Summer House" img="https://www.w3schools.com/w3images/house2.jpg" />
                <House name="Brick House" img="https://www.w3schools.com/w3images/house5.jpg" />
                <House name="Renovated" img="https://www.w3schools.com/w3images/house3.jpg" />
                <House name="Barn House" img="https://www.w3schools.com/w3images/house4.jpg" /> */}


            </div>

        </div>
    )
}

export default Project
