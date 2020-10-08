import React from 'react'
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  function SkillCard(props:any) {
    return (
        <div
        className="d-inline-block skill-card text-center "
       >
         <img
          className="skill-card-image justify-content-center"
          src={props.item.imgSrc}
          alt={props.item.imgSrc}
        />   
        {/* <div
        className="d-inline-block skill-card-title align-items-center text-center p-3"
        >
          {props.item.title}
        </div> */}
        <CircularProgressbar className='circular-progress'
        value={props.item.value}
        text={props.item.title}
        // primaryColor={['','']}
        strokeWidth={5}
        styles={buildStyles({
           textSize:'16px',
           pathColor:  `${props.item.pathColor}`
          })}

      />
        </div>
    )
}


export default SkillCard
