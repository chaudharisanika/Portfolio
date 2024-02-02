import React,{useRef} from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard/ProjectCard';
import {Project} from "../../utils/data";
import Slider from 'react-slick';

const Projects = () => {
    const sliderRef = useRef();
    const settings = {
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow :2,
        slideToScroll:1,
        arrows:false,
        responsive:[
            {
                breakpoint:769,
                settings:{
                    slidesToShow:1,
                    slideToScroll:1,
                },
            },
        ],

    }

    const sliderRight = () => {
        sliderRef.current.slickNext();
    }
    const sliderLeft = () => {
        sliderRef.current.slickPrev();
    }

  return (
    <section className='project-container'>
        <h5>Projects</h5>
        <div className='project-content'>
            <div className='arrow-right' onClick={sliderRight}>
                <span class="material-symbols-out">r</span>
            </div>
            <div className="arrow-left" onClick={sliderLeft}>
                <span class="material-symbols-outline">l</span>
            </div>
            <Slider ref={sliderRef} {...settings}>
            {Project.map((item) => (
                <ProjectCard key={item.title} details={item}/>
            ))}
            </Slider>
        </div>
    </section>
    )
}

export default Projects