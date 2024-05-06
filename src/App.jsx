import "./styles.css";
import { v4 } from "uuid";
import { Component } from "react";
import List from "./components/List/list.jsx";

const optionss = [
  {
    id: 0,
    emojiName: "Face with stuck out tongue",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png",
  },
  {
    id: 1,
    emojiName: "Face with head bandage",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png",
  },
  {
    id: 2,
    emojiName: "Face with hugs",
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png",
  },
  {
    id: 3,
    emojiName: "Face with laughing",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png",
  },
  {
    id: 4,
    emojiName: "Laughing face with hand in front of mouth",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png",
  },
  {
    id: 5,
    emojiName: "Face with mask",
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png",
  },
  {
    id: 6,
    emojiName: "Face with silence",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png",
  },
  {
    id: 7,
    emojiName: "Face with stuck out tongue and winked eye",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png",
  },
  {
    id: 8,
    emojiName: "Grinning face with sweat",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png",
  },
  {
    id: 9,
    emojiName: "Smiling face with heart eyes",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png",
  },
  {
    id: 10,
    emojiName: "Grinning face",
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/grinning-face-img.png",
  },
  {
    id: 11,
    emojiName: "Smiling face with star eyes",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png",
  },
];
let arr = [];
let scoree = 0;
let Topscoree = 0;
class App extends Component {
  state = {
    list: optionss,
    clickedList: [],
    statusOfGame: true,
    result: false,
    isLoss: false,
  };
  /* checkScore = () => {
    const { statusOfGame, result } = this.state;
  };*/
  playGame = (id) => {
    const { list, clickedList, statusOfGame, result, isLoss } = this.state;
    let checkTheId = clickedList.includes(id);
    let gameProgress;

    if (!checkTheId) {
      arr.push(id);
      this.setState({ clickedList: arr, statusOfGame: true });
      scoree += 1;
      if (scoree === 12) {
        arr = [];
        this.setState({
          statusOfGame: false,
          result: true,
          isLoss: false,
          list: arr,
        });
        if (Topscoree < scoree) {
          Topscoree = scoree;
        }
        scoree = 0;
      }
    } else if (checkTheId) {
      arr = [];
      if (Topscoree < scoree) {
        Topscoree = scoree;
      }
      this.setState({
        statusOfGame: false,
        clickedList: arr,
        result: false,
        isLoss: true,
      });
    }
    optionss.sort(() => Math.random() - 0.5);
    this.setState({ list: optionss });
  };
  restartGame = () => {
    const { statusOfGame, isLoss } = this.state;
    this.setState({ statusOfGame: true, isLoss: false, result: false });
    scoree = 0;
  };

  wonTheMATCH = () => {
    const { list, clickedList, statusOfGame, result, isLoss } = this.state;
    arr = [];
    this.setState({
      statusOfGame: true,
      result: false,
      isLoss: false,
      clickedList: arr,
    });
  };

  render() {
    const { list, clickedList, statusOfGame, result, isLoss } = this.state;
    return (
      <div>
        {statusOfGame && (
          <div className="App">
            <p>Score:{scoree}</p>
            <p>Top Score:{Topscoree}</p>
            <ul>
              {list.map((i) => (
                <List key={i.id} data={i} playGame={this.playGame} />
              ))}
            </ul>
          </div>
        )}
        {result && (
          <div>
            <h1>YOU WON THE MATCH</h1>
            <button className="f-con" type="button" onClick={this.wonTheMATCH}>
              RePlay
            </button>
          </div>
        )}
        {isLoss && (
          <div>
            <h1>You FAiled, GAme is OVER</h1>
            <button className="f-con" type="button" onClick={this.restartGame}>
              Restarteds
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
