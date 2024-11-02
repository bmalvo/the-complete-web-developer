// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);


// resolve #1 => 
const fetchingUsers = async () => {
  
  users = await fetch("https://jsonplaceholder.typicode.com/users/");
  response = await users.json();

  return response;
  }

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map((url) => fetch(url).then((resp) => resp.json())),
  );
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
};

// resolve #2 => 

const promises = urls.map(async (url) => {

  const response = await fetch(url)
  return response.json();
})

const getAllData = async () => {

  const [users, posts, albums] = await Promise.all(promises);

  console.log(users);
  console.log(posts);
  console.log(albums);
}

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls2 = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];



const getAllData2 = async () => {
  
  try {
    
  const promises2 = urls2.map(async (url) => {
    
    const response = await fetch(url)
    return response.json();
  })

    const [users, posts, albums] = await Promise.all(promises2);
    
    console.log(users);
    console.log(posts);
    console.log(albums);

  } catch (e) {

    console.log('oooooops => ', e)
  }
}