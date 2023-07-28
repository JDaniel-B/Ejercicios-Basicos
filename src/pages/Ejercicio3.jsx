import { useState } from "react";
import styles from "./ejercicio.module.scss";
import LinkHome from "../components/LinkHome";

function Ejercicio3() {
  const [result, setResult] = useState();
  const [notas, setNotas] = useState();

  const [cantidad, setCantidad] = useState();
  const objs = [];
  let resultado = 0;
  const [suma, setSuma] = useState({});

  const createRatings = (e) => {
    const cant = parseInt(e.target.value);
    setCantidad(cant);
  };

  const Generar = (e) => {
    e.preventDefault();
    if (cantidad <= 0 || cantidad >= 6) {
      setResult("La cantidad de notas debe ser entre 1 y 5");
      setNotas();
    } else {
      for (let i = 0; i < cantidad; i++) {
        objs.push({
          name: `nota ${i + 1}`,
          id: i + 1,
        });
      }
      setNotas(objs);
      setResult("");
    }
  };

  const saveData = (e) => {
    e.preventDefault();
    setSuma({
      ...suma,
      [e.target.name]: e.target.value,
    });
  };

  const Calculate = (e) => {
    e.preventDefault();
    const valoresNotas = Object.values(suma);
    const resultadoSuma = valoresNotas.reduce(
      (total, nota) => total + parseInt(nota),
      0
    );
    const promedio = resultadoSuma / parseInt(notas.length);
    setResult(
      `El promedio es: ${promedio} - ${
        promedio > 61 ? "Alumno aprobado" : "Alumno Reprobado"
      }`
    );
  };

  return (
    <div className={`${styles.Container} text-white bg-gray-950`}>
      <LinkHome color={"text-white"} />

      <form className="w-4/5 font-sans">
        <h1 className={styles.Tittle}>
          Ingrese la cantidad de notas para sacar el promedio
        </h1>
        <div className={styles.Container__Input}>
          <input
            onChange={(e) => createRatings(e)}
            autoComplete="off"
            min={0}
            max={5}
            required
            type="number"
            className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 block w-2/5 h-12 rounded-md sm:text-sm bg-transparent self-center"
          />
          <button
            onClick={(e) => Generar(e)}
            className="text-xl tracking-wider h-12 w-36 rounded-md self-center bg-sky-300 text-black hover:bg-sky-600 hover:text-white"
          >
            Generar
          </button>
        </div>

        <div className={styles.GridNotas}>
          {notas &&
            notas.map((item, index) => (
              <label key={index} className="w-4/5 min-w-fit block">
                <span className="block text-xl font-semibold text-slate-400">
                  {item.name}
                </span>
                <input
                  required
                  onChange={(e) => saveData(e)}
                  autoComplete="off"
                  type="number"
                  name={`nota${index + 1}`}
                  className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 block w-full h-12 rounded-md sm:text-sm bg-transparent"
                />
              </label>
            ))}
        </div>

        <button
          onClick={(e) => Calculate(e)}
          className="text-xl tracking-wider h-12 w-36 rounded-md self-center bg-sky-300 text-black hover:bg-sky-600 hover:text-white"
        >
          Calcular
        </button>
      </form>

      <h1 className="text-2xl self-center">{result}</h1>
    </div>
  );
}

export default Ejercicio3;
