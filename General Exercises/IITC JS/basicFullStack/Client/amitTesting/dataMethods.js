const serverAddress = "http://localhost:3000";

export const getJokes = async function () {
  try {
    let jokes = await fetch(`${serverAddress}/api/jokes`);

    jokes = await jokes.json();

    return jokes;
  } catch (error) {
    console.log("from the data center:", error);
  }
};

export const deleteJoke = async function (id) {
  try {
    const result = await axios.delete(`${serverAddress}/api/jokes/byId/${id}`);

    return result;
  } catch (error) {
    console.log("from the data center:", error);
  }
};

export const addJoke = async function (setup, punchline, _createdBy = null) {
  try {
    const body = {
      setup: setup,
      punchline: punchline,
    };

    if (_createdBy) body.createdBy = _createdBy;

    const result = await axios.post(`${serverAddress}/api/jokes/single`, body);

    return result;
  } catch (error) {
    console.log("from the data center:", error);
  }
};

export const addUser = async function(user){
    try{
        const reply = await axios.post(`${serverAddress}/api/users/single`,{
            user: user
        })
        console.log("reply:", reply);
    } catch(error){
        console.log('from dataTest', error);
    }
}

export const isValidUser = async function(user){
    try{
        const reply = await axios.post(`${serverAddress}/api/users/validate`, { user:user });
        console.log("validation reply:", reply.data, "User:", user);
        return reply.data.isValid;
    } catch(error){
        console.log(error);
    }
}