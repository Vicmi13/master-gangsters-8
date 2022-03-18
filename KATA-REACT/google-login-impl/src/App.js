import "./App.css";
import { GoogleLogin } from "react-google-login";

const App = () => {
  const handlerSuccessLoggedIn = () => {
    console.log("loggeo exitoso");
  };

  const handlerErrorLoggedIn = () => {
    console.log("erro loggeo");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>React app with google login !</h2>
      </header>

      <GoogleLogin
        // IMPORTANTE ES NECESARIO CONFIGURAR PROYECTO DE GOOGLE
        clientId=""
        buttonText="Login with google"
        onSuccess={handlerSuccessLoggedIn}
        onFailure={handlerErrorLoggedIn}
        cookiePolicy={"single_host_origin"}
      ></GoogleLogin>
    </div>
  );
};

export default App;
