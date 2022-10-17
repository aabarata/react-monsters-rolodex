import { Monster } from "../../App";
import "./card.styles.css";

type CardProps = {
  item: Monster,
};

const card = ({ item }: CardProps) => {
  const { id, name, email } = item;

  return (
    <div className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default card;
