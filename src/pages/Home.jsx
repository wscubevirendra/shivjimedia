import React from 'react'
import Courses from '../Courses'
import Projects from '../Project'
import Offerings from '../Offerings'
import ServiceCard from '../ServiceCard'
import Services from '../Services'
import Intro from './Intro'
import Number from '../Number'
import TypeAnim from '../TypeAnim'
import Morquu from './Morquu'



export default function Home() {
    return (
        <>
            <TypeAnim />
            <Intro />
            <Courses />
            <Number />
            <Projects />
            <Morquu />

        </>
    )
}
