import React from 'react'
import ConCard from '../Components/ConCard'
import Contents from '../Components/Contents'

function About() {
    return (
        <div className="w3-content w3-padding" style={{ maxWidth: "1564px" }}>
            <Contents />
            <div className="w3-row-padding w3-grayscale">
                <ConCard
                    image="https://www.w3schools.com/w3images/team2.jpg"
                    name="Jhon Doe"
                    title="CEO & amp; Founder"
                    text="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
                />
                <ConCard
                    image="https://www.w3schools.com/w3images/team1.jpg"
                    name="Jane Doe"
                    title="Architect"
                    text="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                        sodales pellentesque elementum."
                />
                <ConCard
                    image="https://www.w3schools.com/w3images/team3.jpg"
                    name="Mike Ross"
                    title="Architect"
                    text="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                        sodales pellentesque elementum."
                />
                <ConCard
                    image="https://www.w3schools.com/w3images/team4.jpg"
                    name="Dan Star"
                    title="Architect"
                    text="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                        sodales pellentesque elementum."
                />

            </div>
        </div>
    )
}

export default About
