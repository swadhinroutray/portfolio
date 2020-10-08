import React from "react";

//Components
import HeroComponent from "../Components/HeroComponent";
import CarouselComponent from "../Components/CarouselComponent";

//Assets
import ProfilePic from "../assets/swadhin.png";

interface HomePageProps {
  title: String;
  subTitle: String;
  text: String;
  bio: String;
}
const HomePage: React.FC<HomePageProps> = ({ title, subTitle, text, bio}) => {
  return (
    <div>
      <img
        className="rounded-circle mx-auto d-block py-5 profile-pic"
        src={ProfilePic}
        alt="../assets/swadhin.jpeg"
      />
      <HeroComponent title={title} subTitle={subTitle} text={text} bio ={bio}/>  
      <CarouselComponent />
    </div>
  );
};

export default HomePage;
