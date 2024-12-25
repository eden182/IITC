import { getJokes, deleteJoke, addJoke, addUser, isValidUser } from './dataMethods.js';

//67234ab370fe1388b302eb6b buffalo joke id

// let data = await getJokes(); 

// console.log(data);

// let result = await addJoke('testing client add joke 1','testing client add joke 1');

// console.log(result);

// data = await getJokes(); 

// console.log(data);

const user3 = {
    username:'test 3 adding user with password hashing',
    password:'3',
    email:'abc3@example.com'
}
// addUser(user3);

const result = await isValidUser(user3);
console.log("result", result);