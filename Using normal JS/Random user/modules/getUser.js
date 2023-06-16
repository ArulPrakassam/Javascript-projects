const URL = "https://randomuser.me/api";

const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const person = data.results[0];
  const {
    phone,
    email,
    picture: { large: image },
    login: { password },
    name: { first, last },
    dob: { age },
    location: {
      street: { number, name },
    },
  } = person;
  return {
    phone,
    email,
    image,
    password,
    name: `${first} ${last}`,
    age,
    street: `${number} ${name}`,
  };
};

export default getUser;
