interface IProps {
  name: string;
  counter: number;
}

const Skill = (props: IProps): JSX.Element => {
  return (
    <li>
      {props.name}
      <span className="votes">{props.counter}</span>
    </li>
  );
};

export default Skill;
