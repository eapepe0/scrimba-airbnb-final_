/* importamos react y los demas componentes */
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";
/* exportamos los datos del archivo data.js */

export default function App() {
  /* mapeamos los datos en una funcion que devuelve las Cards ya formadas */
  /* con esto nos ahorramos escribir 3 veces el codigo para formar 3 tarjetas */
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
    /* aca usamos el spread (...) le decimos que las props que va a usar Card es todo lo 
    que esta en item. Quedaria formado
    id=item.id title=item.title
    pero de una forma automatica */
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
      {/* aca pasamos las tarjetas formadas al llamar a la funcion cards*/}
    </div>
  );
}
