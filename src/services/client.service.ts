import ClientDTO from "../models/dtos/client-dto";

export const createClient = (client: ClientDTO) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(client),
  };
  fetch("http://localhost:3333/clients", requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
