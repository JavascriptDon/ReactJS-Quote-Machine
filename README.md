# ReactJS-Quote-Machine
Create react app by the following command
``` 
npx create-react-app random-quote-machine
```
CD into the App Folder.
```
cd random-quote-machine
```
Run npm start

Now your project is up and running. Let's start coding!

<img width="277" alt="rea" src="https://user-images.githubusercontent.com/91548582/168083240-fef6d264-6b18-433a-b9c2-2fe2ad67e217.PNG">

## Folder Structure

On the root level, we will keep the following files. 

- Index.JS
- App.JS
- App.CSS
- Index.CSS

## Index Component  

No Changes will need to be made to the Index.js file or Index.css file and we will use the default boilerplate code for the duration of the project. 

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

```
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
```

## App Component 

Clean up your App.js by removing any unused files and get it to look like this.

```
import './App.css';
import React from 'react';


function App () {
return (
  <div className="App">
    Hello World!
    <div>
 );
}

export default App;
```

## Quotes Component 

For this project we'll create a component called 'Quotes.js' which will contain a react arrow functional component like so:

```
import React from 'react';

const Quotes = () => {
  return (
    <div>Quotes</div>
  )
}

export default Quotes
```

Then bring the newly created component into App.js. 

```
import './App.css';
import Quotes from './components/Quotes';


function App() {
  return (
    <div className="App">
    <Quotes />
    </div>
  );
}

export default App;
```

Now let's log the data from the QuotesApi using useState, useEffect Hook from React and define it. 

```
import React,{useState, useEffect} from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  
  const gettingQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
  }
  
  useEffect(() => {
  gettingQuote();
  }, []);

  return (
    <div>Quotes</div>
  )
}

export default Quotes

```
Check your console.log statement using `Ctrl+Shift+J` and see if your getting the correct data from the API. 

How do we grab the data from the API?

The funcion we just created will need to be modified further to generate a quote at random so that we have access to them. 

```
import React,{useState, useEffect} from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  
  const gettingQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      let quotes = data.quotes;
      let randomNum = Math.floor(Math.random() * quotes.length);
      let randomQuote = quotes[randomNum];
      console.log(randomQuote);
    })
  }
  
  useEffect(() => {
  gettingQuote();
  }, []);

  return (
    <div>Quotes</div>
  )
}

export default Quotes

```

Check the console again and view the data your getting from the API.

Now let's put everything together along with any styling to complete the project!

```
import React, {useState, useEffect} from 'react';
import twitterIcon from '../twitter.svg';
import tumblrIcon from '../tumblr.svg';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    gettingQuote();
  }, []);

  const gettingQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
      let quotes = data.quotes;
      let randomNum = Math.floor(Math.random() * quotes.length);
      let randomQuote = quotes[randomNum];
      console.log(randomQuote);
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    })
  }

  const clickEvent = () => {
    gettingQuote();
  }

  return (
    <div id="container">
    <div id="text"> <p>{quote}</p></div>
    <div id="author"><p>{author}</p></div>
    <div id="buttons">
      <div className='social-media-icons'>
        <a id="tweet-quote" href="http://twitter.com/intent/tweet/" target="_blank" rel="noreferrer">
          <span><img src={twitterIcon} alt="" /></span>
        </a>
        <a id="tumblr-quote" href="https://www.tumblr.com" target="_blank" rel="noreferrer">
          <span><img src={tumblrIcon} alt="" /></span>
        </a>
      </div>
      <button onClick={clickEvent} id="new-quote">New Quote</button>
    </div>
    </div>
  )
}

export default Quotes
```

## Styling the App

App.css will contain our styling code for our Random Quote Machine. 

```
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}   

body{
    font-family: 'Roboto Mono', monospace;
    background-color: aliceblue;
    overflow: hidden;
}

#container{
    background-color: white;
    box-shadow: 20px 10px 20px rgb(0, 58, 92);
    width: 40rem;
    margin:10rem auto;
    padding: 3rem;
    border-radius: 10px;
}

#text{
    font-size: 2rem;
    margin-bottom: 1.5rem;
}

#author::before {
    content: "-";
  }
  
#author{
    display:flex;
    justify-content: flex-end;
    font-size: 1.5rem;
    font-weight: bold;
}

#buttons{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top:2rem;
}

.social-media-icons{
    display: flex;
}
.social-media-icons > a{
    margin-right: .5rem;
    background: linear-gradient(to right, #2aa4f4, #007ad9); 
    border-radius: 5px;
    padding: .5rem .5rem;
    cursor:pointer;
}

.social-media-icons > a:hover{
    opacity: .9;
}

.social-media-icons > a img {
    width: 1.5rem;
}

#new-quote {
    background: linear-gradient(to right, #2aa4f4, #007ad9); 
    border: none;
    color: #ffffff;
    padding: .7rem 1rem;
    font-size: .9rem;
    font-weight: bold;
    border-radius: 5px;
    outline: none;
    cursor:pointer;
}

#new-quote:hover{
    opacity: .9;
}
```

## Run The App

Open the terminal and type the following command.

```
npm start
```

Open http://localhost:3000/ in browser:

<img width="926" alt="post" src="https://user-images.githubusercontent.com/91548582/168082359-18de19a1-3430-4981-90e6-74f6a4ea5a69.PNG">


## Netlify Deployment

Open the terminal and type the following command.

```
npm run build
```
Deploy the build folder manually to [Netlify](https://www.netlify.com/).

<img width="706" alt="netlify" src="https://user-images.githubusercontent.com/91548582/168083406-3b7dd444-f27b-4b13-bc5b-99bc2cec518f.PNG">


Deployment Output:

<img width="929" alt="netlify" src="https://user-images.githubusercontent.com/91548582/168083938-affeaa44-8530-469a-b8f1-e2cc85c8355c.PNG">


Talk Soon! 
