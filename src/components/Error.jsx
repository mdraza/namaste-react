import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h2>Ooops!!!</h2>
      <p>Something went wrong!!!</p>
      <p style={{ color: "red", marginTop: "15px" }}>{err.error.message}</p>
    </div>
  );
};

export default Error;
