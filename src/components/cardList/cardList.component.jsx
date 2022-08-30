import { Component } from "react";
import Card from "../card/card.component.jsx";
import "./cardList.styles.css";

class cardList extends Component {
  render() {
    const { list } = this.props;

    return (
      <div className="card-list">
        {list.map((item) => {
          return <Card item={item} />;
        })}
      </div>
    );
  }
}

export default cardList;
