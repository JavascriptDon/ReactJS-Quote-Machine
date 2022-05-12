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