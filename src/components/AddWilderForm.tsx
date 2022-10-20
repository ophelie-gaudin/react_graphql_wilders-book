import React, { FormEvent, useState } from "react";
import axios from "axios";
import { IWilder } from "../interfaces";

interface IProps {
  onWilderCreated: () => void; //ici, c'est une signature de fonction - pourrait être remplacé pas Function
}

const AddWilderForm = (props: IProps): JSX.Element => {
  // Permet de prendre comme état une propriété de l'interface
  const [name, setName] = useState<IWilder["name"]>("");

  const addWilder = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/wilders`, {
        name: name,
      });
      console.log(name);

      props.onWilderCreated();
    } catch (err) {
      console.log("AddWilder error: ", err);
    }
  };

  return (
    <>
      <br />
      <br />
      <h2>Ajouter un nouveau wilder :</h2>

      <form action="" onSubmit={addWilder} id="sign-up-form">
        <br />

        <label htmlFor="name">Name </label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <div className="name error"></div>
        <br />

        <input type="submit" value="Ajouter un nouveau wilder" />
      </form>
    </>
  );
};

export default AddWilderForm;
