import React from "react";
import { animated } from "react-spring";
export default function CardInfo(props: any) {
  return (
    <animated.div className="g-card-info">
      <p className="g-card-title font-weight-bold">{props.title}</p>
      <p className="g-card-sub-title py-1">{props.subTitle}</p>
      {props.link && (
        <a
          className="m-2"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <span  className="lead font-weight-bold">View</span>
        </a>
      )}
    </animated.div>
  );
}
