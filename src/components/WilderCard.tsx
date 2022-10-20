import axios from "axios";
import blank_profile from "../assets/blank_profile.png";
import { IWilder } from "../interfaces";
import SkillsList from "./SkillsList";

type PropsType = IWilder & { onWilderDeleted: () => void } & {
  onAddSkillsClicked: () => void;
};

const WilderCard = (props: PropsType): JSX.Element => {
  const deleteWilder = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/wilders/${props.id}`);
      console.log("Le wilder a bien été supprimé");
      props.onWilderDeleted();
    } catch (err) {
      console.error("ERROR: Le wilder n'a pas été supprimé:", err);
    }
  };

  return (
    <article className="card">
      <button onClick={deleteWilder}> X </button>

      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>{props.name}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <SkillsList upvotes={props.upvotes} />
      <button
        onClick={() => {
          props.onAddSkillsClicked();
        }}
      >
        Add skills
      </button>
    </article>
  );
};

export default WilderCard;
