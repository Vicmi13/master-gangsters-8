import { GoogleLogin } from "react-google-login";
import { useState } from "react";
import axios from "axios";

import "./App.css";

const GCLIENT_ID =
  "333130553471-bb13ta8f3159dcda4mkc7igsj0aerla6.apps.googleusercontent.com";
const App = () => {
  /**
   * Cuando se setea una llave
   * el nombre debe ser el mismo que cuando
   * se recupera
   */

  const [loginInfo, setLoginInfo] = useState(
    localStorage.getItem("loginInfo")
      ? JSON.parse(localStorage.getItem("loginInfo"))
      : null

    // {email: vicm@, name: victor, profileImage: 'URL-imagen'}
  );

  console.log("loginInfo", loginInfo);

  const handlerSuccessLoggedIn = async (response) => {
    const URL_BACKEND = "http://localhost:8080/api/backend-g8/v1/auth/google";
    console.log("response", response);
    const { tokenId } = response;
    console.log("tokenId ", tokenId);
    try {
      const { data } = await axios.post(URL_BACKEND, { tokenId });
      console.log("googleAuthResponse", data);
      // message: login google...
    } catch (error) {
      console.log("error al autenticar con Google", error);
    }

    // if (response) {
    //   localStorage.setItem(
    //     "loginInfo",
    //     JSON.stringify({
    //       name: "Victor Torres",
    //       email: "victor@hotmail.com",
    //       imageURL: "url...",
    //     })
    //   );
    // }
  };

  const handlerErrorLoggedIn = (error) => {
    console.log("erro loggeo", error);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>React app with google login !</h2>

        {loginInfo ? (
          <>
            <h4>User logged in with email {loginInfo.email} ! </h4>
            <button
              onClick={() => {
                setLoginInfo(null);
                localStorage.removeItem("loginInfo");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <GoogleLogin
            // IMPORTANTE ES NECESARIO CONFIGURAR PROYECTO DE GOOGLE
            clientId={GCLIENT_ID}
            buttonText="Loggeate con google"
            onSuccess={handlerSuccessLoggedIn}
            onFailure={handlerErrorLoggedIn}
            cookiePolicy={"single_host_origin"}
            icon={false}
            theme="light"
          />
        )}
      </header>
    </div>
  );
};

export default App;
