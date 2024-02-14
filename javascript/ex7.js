let user = {
    usernname: 'Wojtek',
    password: 'Par'
};

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

function signIn(user, pass) {
    (user === database[0].usernname &&
        pass === database[0].password) ? console.log(newsfeed) : alert('Wrong data!');
};

signIn(userNamePrompt, userPassword);
