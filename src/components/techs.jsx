import React, { useState } from "react";
import './techs.css';

import reactlogo from '../assets/react-logo.png';
import django from '../assets/django.png'
import html from '../assets/HTML5_logo_and_wordmark.svg.png'
import java from '../assets/java-logo-1.png'

import nodejs from '../assets/nodejs-1-logo-png-transparent.png'
import python from '../assets/Python-logo-notext.svg.png'
import css from '../assets/css.png'
import swift from '../assets/swift.png'
import vue from '../assets/vue.png'
import php from '../assets/php.png'
const Techs =()=> {
    const[index,setIndex]=useState(0);
    console.log(index);

    return(
    <div className="tab">
        <h1>Technologies we work with</h1>
        <div className="tablist">
            <div className="tabname" onClick={()=>{setIndex(0)}}>
                FrontEnd
            </div>
            <div className="tabname" onClick={()=>{setIndex(1)}}>
                BackEnd
            </div>
            <div className="tabname" onClick={()=>{setIndex(2)}}>
                Mobile
            </div>
            <div className="tabname" onClick={()=>{setIndex(3)}}>
                Database
            </div>
        </div>
        <div className="tabcontent">
            <div className="content" hidden={index!=0}>
                <ul>
                    <li><img src={reactlogo} /><p>React.js</p></li>
                    <li><img src={vue} /><p></p>Vue</li>
                    <li><img src={reactlogo} /><p></p>ReactNative</li>
                    
                    <li><img src={html} /><p></p>HTML5</li>
                    <li><img src={css} /><p></p>CSS</li>

                </ul>
            </div>
            <div className="content" hidden={index !=1}>
                <ul>
                    <li><img src={nodejs} /><p></p>Node.JS</li>
                    <li><img src={python} /><p></p>Python</li>
                    <li><img src={php} /><p></p>PHP</li>
                    <li><img src={java} /><p></p>java</li>
                    <li><img src={django} /><p></p>Django</li>
                </ul>
            </div>
            <div className="content" hidden={index !=2}>
                <ul>
                    <li><img src={reactlogo} />Kotlin</li>
                    <li><img src={reactlogo} />React Native</li>
                    <li><img src={reactlogo} />iOS</li>
                    <li><img src={reactlogo} />Android</li>
                    <li><img src={swift} />Swift</li>
                </ul>
            </div>
            <div className="content" hidden={index !=3}>
                <ul>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>MsSQL</li>
                    <li>Firebase</li>
                    <li>Oracle</li>
                    <li>PostgreSQL</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Techs ;

