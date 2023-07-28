import { useState } from "react";
import styles from "./ejercicio.module.scss";
import LinkHome from "../components/LinkHome";

function ejercicio6() {
  const [sueldo, setSueldo] = useState(0);
  const [resultado, setResultado] = useState();

  const calculate = (e) => {
    setSueldo(parseInt(e.target.value));
    if (sueldo >= 3500 && sueldo <= 6000) {
      setResultado(`Su sueldo es ${sueldo * 0.03 + sueldo}`);
    } else if (sueldo >= 6001 && sueldo <= 10000) {
      setResultado(`Su sueldo es ${sueldo * 0.07 + sueldo}`);
    } else if (sueldo >= 10001 && sueldo <= 15000) {
      setResultado(`Su sueldo es ${sueldo * 0.09 + sueldo}`);
    } else {
      setResultado(`Su sueldo no aplica a ningun aumento`);
    }
  };
  return (
    <div className={styles.Container}>
      <LinkHome />
      <label className="w-4/5 min-w-fit block self-center">
        <span className="block text-xl font-semibold text-slate-400">
          Ingrese el Sueldo
        </span>
        <input
          required
          onChange={(e) => calculate(e)}
          autoComplete="off"
          type="number"
          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 block w-full h-12 rounded-md sm:text-sm bg-transparent"
        />
      </label>
      <h1 className="self-center text-3xl">{resultado}</h1>
    </div>
  );
}

export default ejercicio6;
