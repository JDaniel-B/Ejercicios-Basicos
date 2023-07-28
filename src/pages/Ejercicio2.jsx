import { useState } from "react";
import styles from "./ejercicio.module.scss";
import LinkHome from "../components/LinkHome";

function Ejercicio2() {
  const [result, setResult] = useState();
  const [numbers, setNumbers] = useState({
    num1: "",
    num2: "",
  });

  const saveData = (e) => {
    e.preventDefault();
    setNumbers({
      ...numbers,
      [e.target.name]: e.target.value,
    });
  };

  const calcular = (e) => {
    e.preventDefault();
    const num1 = parseInt(numbers.num1);
    const num2 = parseInt(numbers.num2);
    if (isNaN(num1) && isNaN(num2)) {
      setResult("Debe ingresar Datos numericos");
      return;
    }

    if (num1 > num2) {
      setResult(
        `El numero mayor es ${numbers.num1} y el numero menor es ${numbers.num2}`
      );
    } else if (num1 < num2) {
      setResult(
        `El numero mayor es ${numbers.num2} y el numero menor es ${numbers.num1}`
      );
    } else {
      setResult("Los numeros son iguales");
    }
  };

  return (
    <div className={`${styles.Container} text-white bg-gray-950`}>
      <LinkHome />

      <form className="w-4/5 font-sans">
        <h1 className={styles.Tittle}>Ingrese 2 Numeros</h1>
        <div className={styles.Container__Input}>
          <label className="w-2/5 min-w-fit block">
            <span className="block text-xl font-semibold text-slate-400">
              Numero 1
            </span>
            <input
              onChange={saveData}
              autoComplete="off"
              type="number"
              name="num1"
              className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 block w-full h-12 rounded-md sm:text-sm bg-transparent"
            />
          </label>
          <label className="block w-2/5 min-w-fit">
            <span className="block text-xl font-semibold text-slate-400">
              Numero 2
            </span>
            <input
              onChange={saveData}
              autoComplete="off"
              type="number"
              name="num2"
              className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 block w-full h-12 rounded-md sm:text-sm bg-transparent"
            />
          </label>
        </div>
        <button
          className="text-xl tracking-wider h-12 w-36 rounded-md self-center bg-sky-300 text-black hover:bg-sky-600 hover:text-white"
          onClick={calcular}
        >
          Verificar
        </button>
      </form>

      <h1 className="text-2xl self-center">{result}</h1>
    </div>
  );
}

export default Ejercicio2;
