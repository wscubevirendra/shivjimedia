import React from 'react'
import Courses from '../Courses'
import Projects from '../Project'
import Offerings from '../Offerings'
import ServiceCard from '../ServiceCard'
import Services from '../Services'
import { EmblaCarousel } from '../EmblaCarousel'


export default function Home() {
    return (
        <>
            <EmblaCarousel />
            <Courses />
            <Projects />
            <Offerings />
            <ServiceCard />
            <Services />
        </>
    )
}
