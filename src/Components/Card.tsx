import React from "react";
import ReactCardFlip from "react-card-flip";
//Components
import CardInfo from "./CardInfo";

export default function Card(props: any) {
  return (
    <ReactCardFlip isFlipped={props.item.selected} flipDirection="horizontal">
      <div
        className="d-inline-block g-card text-center "
        onClick={(e) => props.click(props.item)}
      >
        <img
          className="g-card-image"
          src={props.item.imgSrc}
          alt={props.item.imgSrc}
        />
      </div>
      <div
        className="d-inline-block g-card align-items-center text-center border p-5"
        onClick={(e) => props.click(props.item)}
      >
        {props.item.selected && (
          <CardInfo
            title={props.item.title}
            subTitle={props.item.subTitle}
            link={props.item.link}
            selected={props.item.selected}
          />
        )}
      </div>
    </ReactCardFlip>
  );
}
