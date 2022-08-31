import Card from "../card/card.component.jsx";
import "./cardList.styles.css";

const cardList = ({ list }) => (
  <div className="card-list">
    {list.map((item) => {
      return <Card item={item} key={item.id} />;
    })}
  </div>
);

export default cardList;
