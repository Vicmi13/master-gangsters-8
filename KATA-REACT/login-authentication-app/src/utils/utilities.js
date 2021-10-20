export const validateEmail = (email) => {
  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegEx.test(email);
};

export const decodedJWT = (jwtParams) => {
  // eslint-disable-next-line no-unused-vars
  const [_, payload, __] = jwtParams.split(".");
  const payloadFormatted = payload.replace("-", "+").replace("_", "/");

  const payloadData = JSON.parse(atob(payloadFormatted));

  return payloadData;
};
