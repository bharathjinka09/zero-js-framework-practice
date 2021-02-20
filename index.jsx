import { Helmet } from "react-helmet-async";

module.exports = () => (
  <div>
    <Helmet>
     <meta charset="UTF-8" />
      <meta name="description" content="Free Web tutorials" />
      <meta name="keywords" content="HTML, CSS, JavaScript" />
      <meta name="author" content="Bharath" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Zero Prac</title>
    </Helmet>
    <h1>Hello React</h1>
  </div>
);