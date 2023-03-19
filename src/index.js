import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css"; // . por cada nivel en el directorio ---> .. un nivel arriba, . en el mismo directorio

const boook = " book";
const image = "./images/book1.jpg";
const alt = "An Easy & Proven Way to Build Good Habits & Break Bad Ones";

const BookList = () => {
  return (
    <section className="bookList">
      <Book order="first" orderInt={1} />
      <Book order="second" orderInt={2} />
      <Book order="third" orderInt={3} />
      <Book order="fourth" orderInt={4} />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
      <p>{props.order}</p>
      <p>{props.orderInt}</p>
    </article>
  );
};

const Image = () => (
  <img
    src={image}
    // ./images/book1.jpg -- > public/ --> more slowly and routes a url for the image
    // por cada punto despues del primero indica un nivel arriba en la jerarquia de carpetas
    // ruta relativa al html --> ./images/book1.jpg buscará la imagen llamada book1.jpg dentro de la carpeta images, que se encuentra en la misma ubicación que el archivo HTML.
    // https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg
    alt={alt}
  />
);
const Title = () => <h2>Atomic Habits</h2>;
//Like javascript objects:
const Author = () => {
  //JSX - JS ---> {} -- can be global too
  const book = " - book";
  //JSX - CSS
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return (
    // Si despues de este cambio de estilos, tambien lo cambias
    // en el archivo CSS, este no se vera afectado por el cambio hecho en el CSS
    // CSS RULES STILL APPLY (INLINE VS EXTERNAL CSS)
    <h4 style={inlineHeadingStyles}>
      James Clear{boook}
      {book}
    </h4>
  );
};
//

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
