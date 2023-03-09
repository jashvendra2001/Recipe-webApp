import React from 'react'
import {CiPizza} from 'react-icons/ci'
import {GiFruitBowl , GiNoodles,GiCheckMark} from 'react-icons/gi'
import {MdOutlineIcecream} from 'react-icons/md'
import "../styles/Tabs.css";
import Typewriter from 'typewriter-effect/dist/core';


function Tabs() {
   
    var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 1,
});

typewriter
  .pauseFor(1500)
  .typeString('What would you like to have!')
  .pauseFor(400)
  .deleteChars(30)
  .typeString('<strong> Recipe</strong> What would you like to have!')
//   .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
  .pauseFor(1000)
  .start();


    return (
        <div className="container">
        <h1 className='recipeHeading' id="app">What would you like to have!</h1>
        
        <div className="tabs">
                <div className="tablist active">
                    <CiPizza />
                    <span>Pizza</span>
                </div>
                <div className="tablist">
                    <GiNoodles />
                    <span>Noodles</span>
                </div>
                <div className="tablist">
                    <GiFruitBowl />
                    <span>Desert</span>
                </div>
                <div className="tablist">
                    <MdOutlineIcecream />
                    <span>ice cream</span>
                </div>

        </div>
        <div className='recipe_banner row ' >
                <div className="left-col col-lg-6 "   data-aos="fade-right">
                    <span className='badge'>Italian</span>
                    <h1>White Pizza</h1>
                    <p><strong>Recipe by:</strong><small>Food52</small></p>
                    <h3>Ingredients</h3>
                    <div className='ingredients'>
                        <ul>
                            <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Fresh ground pepper</span></li>
                                                        <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Fresh ground pepper</span></li>

                            <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Fresh ground pepper</span></li>

                            <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Fresh ground pepper</span></li>
                                                        <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Fresh ground pepper</span></li>

                            <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Fresh ground pepper</span></li>


                        </ul>
                    </div>
                </div>
                <div className="right-col col-lg-6" data-aos="fade-left">
                    <div className="image-wrapper">
                    <img className='img-fluid' src="https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80" alt="" />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Tabs