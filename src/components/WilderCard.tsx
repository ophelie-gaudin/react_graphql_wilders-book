import blank_profile from "../assets/blank_profile.png";
import { IWilder } from "../interfaces";
import SkillsList from "./SkillsList";

const WilderCard = (props: IWilder) => {
  console.log("HOOOOOOOOOOOOOOOOOOOOO:", props.upvotes);

  return (
    <article className="card">
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>{props.name}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <SkillsList upvotes={props.upvotes} />
    </article>
  );
};

export default WilderCard;
