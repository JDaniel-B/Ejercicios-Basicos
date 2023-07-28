import { useState } from "react";
import pizza1 from "../images/pizza1.webp";
import pizza2 from "../images/pizza2.webp";
import pizza3 from "../images/pizza3.webp";
import pizza4 from "../images/pizza4.webp";
import CardPizza from "../components/CardPizza";
import styles from "./ejercicio.module.scss";
import LinkHome from "../components/LinkHome";

function Ejercicio5() {
  const [menu, setMenu] = useState([
    {
      name: "Pizza Vegetariana",
      image: pizza1,
      price: "Q80.00",
    },
    {
      name: "Pizza Cheese Lovers",
      image: pizza2,
      price: "Q90.00",
    },
    {
      name: "Pizza Pepperoni Lovers",
      image: pizza3,
      price: "Q90.00",
    },
    {
      name: "Pizza Hawaiana",
      image: pizza4,
      price: "Q80.00",
    },
  ]);

  return (
    <div className={styles.ContainerPizza}>
      <LinkHome color={"text-black"} />
      <h1 className="capitalize text-5xl self-center">
        Elige tu pizza para tu pedido
      </h1>
      <div className={styles.GridPizza}>
        {menu.map((row, index) => (
          <CardPizza
            key={index}
            img={row.image}
            name={row.name}
            price={row.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Ejercicio5;
