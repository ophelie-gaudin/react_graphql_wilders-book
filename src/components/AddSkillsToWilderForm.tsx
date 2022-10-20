import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { ISkill, IWilder } from "../interfaces";

interface IProps {
  wilder: IWilder;
  onCancelClicked: () => void;
  onWilderUpdated: () => void;
}

const AddSkillsToWilderForm = (props: IProps): JSX.Element => {
  // Permet de prendre comme état une propriété de l'interface
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [wilderSkills, setWilderSkills] = useState<number[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const result = await axios.get("http://localhost:5000/api/skills");
      setSkills(result.data);
    };

    fetchSkills();
  }, []);

  const addSkillsToWilder = () => {
    wilderSkills.push(skills[0].id);
    const newArray = wilderSkills.slice();
    setWilderSkills(newArray);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/upvotes", {
      wilderId: props.wilder.id,
      skillsIds: wilderSkills,
    });
    props.onCancelClicked();
    props.onWilderUpdated();
  };

  return (
    <>
      <br />
      <br />
      <h2>Ajouter des skills à {props.wilder.name}: </h2>

      <form action="" onSubmit={onSubmit} id="sign-up-form">
        <br />

        <label htmlFor="name">Choisir une/des skill(s): </label>
        <br />

        {wilderSkills.map((wilderSkill, index) => {
          return (
            <select
              onChange={(e) => {
                wilderSkills[index] = Number(e.target.value);
                setWilderSkills(wilderSkills.slice());
              }}
            >
              {skills.map((skill) => (
                <>
                  <option key={skill.id} value={skill.id}>
                    {skill.name}
                  </option>
                  <br />
                </>
              ))}
            </select>
          );
        })}

        <input type="submit" value="Enregistrer" />
      </form>
      <br />
      <button onClick={addSkillsToWilder}>Ajouter une skill</button>

      <button
        onClick={() => {
          props.onCancelClicked();
        }}
      >
        Annuler l'ajout de skills
      </button>
    </>
  );
};

export default AddSkillsToWilderForm;
