import { useState } from "react";
import styles from "./ejercicio.module.scss";
import LinkHome from "../components/LinkHome";

function Ejercicio1() {
  const [exercise, setExercise] = useState();
  const [resultado, setResultado] = useState(0);
  const [variables, setVariables] = useState();

  const ejercicio2 = [
    {
      x: 0,
      y: 0,
    },
  ];

  const ejercicio3 = [
    {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      j: 0,
    },
  ];

  const Generate = (e) => {
    e.preventDefault();
    if (exercise == "A") {
      setResultado(3 / 2 + 4 / 3);
    }
  };

  return (
    <div className={`${styles.Container} bg-gray-300`}>
      <LinkHome color={"text-black"} />

      <form className="w-4/5 font-sans">
        <h1 className={styles.Tittle}>seleccione un ejercicio</h1>
        <div className={styles.Container__Input}>
          <select
            onChange={(e) => {
              setExercise(e.target.value);
            }}
            className="mt-1 px-3 py-2 border shadow-sm border-slate-900 focus:outline-none focus:border-sky-600 block w-2/5 h-12 rounded-md sm:text-sm bg-transparent self-center"
          >
            <option value="0"></option>
            <option value="A">3/2+4/3</option>
            <option value="B">1/(x-5)-3*x*y/4 </option>
            <option value="C">a*a/(b-c)+(d-e)/(f-g*h/j)</option>
            <option value="D">m/n+p</option>
            <option value="E">(m+n/p)/(q-r/s)</option>
            <option value="F">(3*a+b)/(c-(d+5*e)/(f+g/(2*h)))</option>
          </select>
          <button
            onClick={Generate}
            className="text-xl tracking-wider h-12 w-36 rounded-md self-center bg-sky-300 text-black hover:bg-sky-600 hover:text-white"
          >
            Generar
          </button>
        </div>

        <div className={styles.GridNotas}></div>

        <button className="text-xl tracking-wider h-12 w-36 rounded-md self-center bg-sky-300 text-black hover:bg-sky-600 hover:text-white">
          Calcular
        </button>
      </form>

      <h1 className="text-2xl self-center">Resultado: {resultado}</h1>
    </div>
  );
}

export default Ejercicio1;
