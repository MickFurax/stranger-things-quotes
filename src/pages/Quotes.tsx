import axios from "axios";
import { useState, useEffect } from "react";
import { getQuoteAuthor } from "../services/quote";
import { authors } from "../constants/authors";
import { json, useNavigate } from "react-router-dom";
import { ArrowLeft } from "tabler-icons-react";
import Score from "../components/Score";
import Life from "../components/Life";
import BestScore from "../components/BestScore";

const Quotes = () => {
  const [quote, setQuote] = useState<string>("...");
  const [author, setAuthor] = useState<string>("...");

  const [authorList, setAuthorList] = useState<string[]>([]);

  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);

  const [life, setLife] = useState<number>(3);

  const navigate = useNavigate();

  const back = () => {
    navigate("/");
  };

  const bestScoreAdd = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
  };

  const scoreAdd = () => {
    setScore(score + 1);
  };

  const lifeDecrease = () => {
    setLife(life - 1);
    if (life == 1) {
      bestScoreAdd();
      setLife(0);
      setScore(0);
      setLife(3);
    }
  };

  useEffect(() => {
    getQuoteAuthor().then((res) => {
      setQuote(res[0].quote);
      setAuthor(res[0].author);
      authors[Math.floor(Math.random() * authors.length)];

      const authorsCopy = [...authors];

      let index = authorsCopy.indexOf(res[0].author);
      if (index > -1) {
        authorsCopy.splice(index, 1);
      }

      const shuffled = authorsCopy.sort(() => 0.5 - Math.random());
      let selected = shuffled.slice(0, 2);
      selected.push(res[0].author);

      setAuthorList(shuffle(selected));
    });
  }, [score, life]);

  useEffect(() => {
    const data = localStorage.getItem("bestScore");
    if (data) {
      setBestScore(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bestScore", bestScore.toString());
  });

  return (
    <div>
      <div className="absolute top-6 left-6">
        <ArrowLeft onClick={back} className="text-white " />
      </div>
      <div className="absolute top-6 right-6">
        <Score score={score} />
        <BestScore bestScore={bestScore} />
        <Life life={life} />
      </div>
      <div className="flex flex-col jusstify-between items-center p-16">
        <p className="text-white  text-center md:mb-28 mb-64 md:mt-28 mt-20">
          "{quote}"
        </p>
        <div className="flex flex-col">
          {authorList.map((aut, index) => (
            <button
              onClick={() => {
                aut == author ? scoreAdd() : lifeDecrease();
              }}
              key={index}
              className={`${
                aut == author ? "active:bg-green-600" : "active:bg-red-600"
              } text-white bg-red-700 hover:bg-red-900 my-2 p-3 w-52 rounded-md`}
            >
              {aut}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const shuffle = (array: string[]) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export default Quotes;
