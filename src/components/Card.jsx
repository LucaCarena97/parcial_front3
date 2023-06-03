import "./Card.modules.css";

export function Card({ marca, modelo }) {
  return (
    <div className="card">
      <p className="info">Marca: {marca}</p>
      <p className="info">Modelo: {modelo}</p>
    </div>
  );
}
