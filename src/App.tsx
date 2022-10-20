import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { IWilder } from "./interfaces";
import WilderCard from "./components/WilderCard";
import AddWilderForm from "./components/AddWilderForm";
import AddSkillsToWilderForm from "./components/AddSkillsToWilderForm";

function App(): JSX.Element {
  const [wilders, setWilders] = useState<IWilder[]>([]);
  const [selectedWilder, setSelectedWilder] = useState<IWilder | null>(null);

  const fetch = async () => {
    const wilders = await axios.get("http://localhost:5000/api/wilders");
    console.log(wilders.data);
    setWilders(wilders.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="App">
      <div>
        <header>
          <div className="container">
            <h1>Wilders Book</h1>
          </div>
        </header>
        <main className="container">
          <h2>Wilders</h2>
          <section className="card-row">
            {wilders.map((wilder) => {
              return (
                <WilderCard
                  key={wilder.id}
                  name={wilder.name}
                  upvotes={wilder.upvotes}
                  id={wilder.id}
                  onWilderDeleted={() => fetch()}
                  onAddSkillsClicked={() => setSelectedWilder(wilder)}
                />
              );
            })}
          </section>
          {selectedWilder && (
            <AddSkillsToWilderForm
              wilder={selectedWilder}
              onCancelClicked={() => setSelectedWilder(null)}
              onWilderUpdated={() => fetch()}
            />
          )}

          <AddWilderForm onWilderCreated={() => fetch()} />
        </main>
        <footer>
          <div className="container">
            <p>&copy; 2022 Wild Code School</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
