import { useState, useEffect } from "react";

function AdviceSection() {
  const [favouriteAdvice, setFavouriteAdvice] = useState([]);
  const [currentAdvice, setCurrentAdvice] = useState("");

  const getRandomAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => {
        if (!res.ok) {
          throw Error(
            "Failed to fetch data, check if json server is live and on port 3000!"
          );
        }
        return res.json();
      })
      .then((data) => setCurrentAdvice(data));
  };

  useEffect(getRandomAdvice, []);

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip"></section>
      <section className="favourtite-slips-list"></section>
    </section>
  );
}

export default AdviceSection;
