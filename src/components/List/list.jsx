import "./list.css";
const List = (props) => {
  const { data, playGame } = props;
  const { id, emojiName, emojiUrl } = data;
  const playTheGame = () => {
    playGame(id);
  };

  return (
    <li>
      <button type="button" onClick={playTheGame}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  );
};
export default List;
