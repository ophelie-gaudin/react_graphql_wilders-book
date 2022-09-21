import { IUpvote } from "../interfaces";
import Skill from "./Skill";

interface IProps {
  upvotes: IUpvote[];
}

const SkillsList = (props: IProps) => {
  return (
    <>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {props.upvotes.map((upvote) => {
          return (
            <Skill
              key={upvote.id}
              name={upvote.skill.name}
              counter={upvote.counter}
            />
          );
        })}
      </ul>
    </>
  );
};

export default SkillsList;
