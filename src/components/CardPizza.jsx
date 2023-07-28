import { useState } from "react";
import styles from "./CardPizza.module.scss";

function CardPizza({ img, price, name }) {
  const [contador, setContador] = useState(0);

  const update = (nuevoValor) => {
    setContador(Math.max(0, nuevoValor));
  };

  return (
    <div className={`rounded-2xl overflow-hidden bg-slate-200`}>
      <img src={img} alt={name} />
      <div className={styles.Content}>
        <div className={styles.Content__Data}>
          <h1>{name}</h1>
          <h3>{`Desde ${price}`}</h3>
        </div>
        <div className={styles.Content__Count}>
          <button
            onClick={() => {
              update(contador + 1);
            }}
          >
            +
          </button>
          <p>{contador}</p>
          <button
            onClick={() => {
              update(contador - 1);
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
