import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <section className='main-container'>
        <div className='main-content'>
            <h2>Building digital experiences that inspire</h2>
            <p>
                Passionate Frontend developer | Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Voluptates incidunt ipsam
            </p>
        </div>
        <div className='main-img'>
            <div>
                <img src="./assets/images/photo.png" alt=""/>
            </div>
        </div>
    </section>
  )
}

export default Main