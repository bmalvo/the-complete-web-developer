let user = [{
    usernname: 'Wojtek',
    password: 'Par'
},
{
    username: 'Digi',
    password: 'auchan02'
},
{
    username: 'Ninja',
    password: 'wierzbowa'
    
}];

let database = [user];

let newsfeed = [
    {
    usernname: 'Wojtek',
    timeline: 'So tired from all that learning!'
},
    {
    usernname: 'Bob',
    timeline: 'Javascript is sooooo cool!',
    },
    {
    usernname: 'Julia',
    timeline: 'Javascript is preeetyy cool!'
}]

let userNamePrompt = prompt('What is your name?');
let userPassword = prompt('What is your password?');

function isUserValid(user, pass) {
    for (let i = 0; i < database.length; i++) {
        if (database[i].username === user && 
            database[i].password === pass) {
            return true 
        } else {
            alert('Wrong username or password')
        };
    };
    return false
}

function signIn(user, pass) {
    (isUserValid(user, pass)) ? console.log(newsfeed) : alert('Wrong data!');
};

signIn(userNamePrompt, userPassword);
