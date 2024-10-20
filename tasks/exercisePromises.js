// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

promise = fetch('http://swapi.dev/api/people/1');

setTimeout(() => {
  promise
    .then(res => res.json()
    .then(data => console.log('success')))
  }, 4000)

// #2) Run the above promise and make it console.log "success"

promise = fetch('http://swapi.dev/api/people/1');

setTimeout(() => {
  promise.resolve('success')
    .then(res => res.json()
    .then(data => console.log('success')))
  }, 4000)


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

promise = fetch('http://swapi.dev/api/people/1');

pro = new Promise(res => {promise, res('succes')})



// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')

pro = new Promise((res, rej) => {promise, res('succes'), rej('Ooops something went wrong')})

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls.map(url =>
  fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.name))
    .catch((err) => console.log('somethink went wrong ^^ ', err))  
    ))

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

done