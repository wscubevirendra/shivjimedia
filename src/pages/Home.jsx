import React from 'react'
import Courses from '../Courses'
import Projects from '../Project'
import Offerings from '../Offerings'
import ServiceCard from '../ServiceCard'
import Services from '../Services'
import { EmblaCarousel } from '../EmblaCarousel'
import Intro from './Intro'
import Number from '../Number'


export default function Home() {
    return (
        <>
            <Intro />
            <Number/>
            <Courses />
            <Projects />
            
            
            <Services />
        </>
    )
}
