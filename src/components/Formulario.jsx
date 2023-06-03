import { useState } from "react";
import { Card } from "./Card.jsx";
import "./Formulario.modules.css";

export function Formulario() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [error, setError] = useState("");
  const [mostrarCard, setMostrarCard] = useState(false);
  const [cardData, setCardData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (marca.trim().length < 3 || marca.trim() === "") {
      console.log("primer if");
      setError("Por favor chequea que la información sea correcta");
      setCardData(null);
      return;
    }
    if (modelo.trim().length < 6 || modelo.trim() === "") {
      console.log("segundo if");
      setError("Por favor chequea que la información sea correcta");
      setCardData(null);
      return;
    } else {
      console.log("else");
      setError("Cargado correctamente");
      setCardData({ marca, modelo });
      setMostrarCard(true);
    }
  }

  function handleReset() {
    setMarca("");
    setModelo("");
    setError("");
    setMostrarCard(false);
  }

  return (
    <>
      <section>
        <h2 className="titulo">Vehiculos</h2>
        <form onSubmit={handleSubmit} className="form">
          <ul className="ul">
            <label htmlFor="marca" className="marca">
              Marca
            </label>
            <input
              placeholder="Marca mayor a 3 caracteres"
              type="text"
              id="marca"
              value={marca}
              onChange={function handlerChange(e) {
                return setMarca(e.target.value);
              }}
            />
          </ul>
          <ul className="ul">
            <label htmlFor="modelo" className="modelo">
              Modelo
            </label>
            <input
              placeholder="Modelo mayor a 6 caracteres"
              type="text"
              id="modelo"
              value={modelo}
              onChange={function handlerChange(e) {
                return setModelo(e.target.value);
              }}
            />
          </ul>
          <br />
          <button type="submit" className="boton">
            Enviar
          </button>
          <br /> <br />
        </form>
      </section>
      <section>
        {error ? <p className="error">{error}</p> : null}
        {cardData && mostrarCard && (
          <Card marca={cardData.marca} modelo={cardData.modelo} />
        )}
        <button type="button" className="botonReset" onClick={handleReset}>
          Resetear Info
        </button>
      </section>
    </>
  );
}
