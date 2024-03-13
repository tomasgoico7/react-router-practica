import { useContext } from "react";
import { useForm } from "./hooks/useForm";
import { UsuarioContext } from "./context/UsuarioContext";

export const LoginScreen = () => {
  const initialForm = {
    nombre: "",
    tecnologia: "",
    email: "",
    redes: "",
  };

  const { formState, nombre, tecnologia, email, redes, onInputChange } =
    useForm(initialForm);

  const { setUsuario } = useContext(UsuarioContext);

  const onSubmit = (e) => {
    e.preventDefault();
    setUsuario(formState);
  };
  return (
    <>
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            aria-describedby="nombre"
            placeholder="Ingrese Nombre"
            onChange={onInputChange}
            value={nombre}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tecnologia">Tecnologia</label>
          <input
            type="text"
            className="form-control"
            name="tecnologia"
            aria-describedby="tecnologia"
            placeholder="Ingrese Tecnologia"
            onChange={onInputChange}
            value={tecnologia}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="email"
            placeholder="Ingrese Email"
            onChange={onInputChange}
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="redes">Redes</label>
          <input
            type="text"
            className="form-control"
            name="redes"
            aria-describedby="redes"
            placeholder="Ingrese Redes"
            onChange={onInputChange}
            value={redes}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </form>
    </>
  );
};
