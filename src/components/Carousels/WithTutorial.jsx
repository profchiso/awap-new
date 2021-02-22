import React from "react";
import Carousel from "react-multi-carousel";
import {TutorialData} from "../../DB/Tutorial"
import ClassCards from "../ExploreClasses/ClassCards";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 580, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  },
};

export default class WithTutorial extends React.Component {
  render() {
    return (
      <Carousel 
      swipeable={true} 
      draggable={true} 
      itemClass="p-5 pr-0"
      responsive={responsive}>
        {TutorialData.map((item, i) => {
          return <ClassCards  key={i} item={item} />;
        })}
      </Carousel>
    );
  }
}
