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
import Forms from '../Forms'



export default function Home() {
    return (
        <>
            <TypeAnim />
            <Courses />
            <Number />
            <Services/>
            <Forms/>
            <Morquu />

        </>
    )
}
