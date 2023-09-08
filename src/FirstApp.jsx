import PropTypes from "prop-types";
export const FirstApp = ({ title, edad, apellido }) => {
  return (
    <>
      {/* <div>FirstApp</div>*/}

      <h1>Soy {title}</h1> 
      <p>{apellido}</p>
      <span>{edad}</span>
    
    </>
  );
};
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  apellido:PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired,

};
FirstApp.defaultProps = {
  title: "No hay nombre",
  apellido:'No hay apellido',
  edad: 32,
};
