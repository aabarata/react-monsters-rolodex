import { Monster } from "../../App.js";
import Card from "../card/card.component";
import "./cardList.styles.css";

type CardListProps = {
  list: Monster[];
};

const cardList = ({ list }: CardListProps) => (
  <div className="card-list">
    {list.map((item) => {
      return <Card item={item} key={item.id} />;
    })}
  </div>
);

export default cardList;
