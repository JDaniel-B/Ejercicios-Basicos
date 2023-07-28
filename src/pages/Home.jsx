import { useState } from "react";
import Link from "../components/Link";
import styles from "./home.module.scss";

function Home() {
  const [ejercicios, setEjercicios] = useState([
    {
      route: "/Ejercicio1",
      name: "Ejercicio 1",
    },
    {
      route: "/Ejercicio2",
      name: "Ejercicio 2 y 3",
    },
    {
      route: "/Ejercicio3",
      name: "Ejercicio 4 y 7",
    },
    {
      route: "/Ejercicio4",
      name: "Ejercicio 5",
    },
    {
      route: "/Ejercicio5",
      name: "Ejercicio 6",
    },
    {
      route: "/Ejercicio6",
      name: "Ejercicio 8",
    },
  ]);

  return (
    <main className={styles.Container}>
      <h1 className={styles.Tittle}>Elija un ejercicio para realizar</h1>
      <div className={styles.Grid}>
        {ejercicios.map((ejercicio, index) => (
          <Link key={index} route={ejercicio.route} name={ejercicio.name} />
        ))}
      </div>
    </main>
  );
}

export default Home;
