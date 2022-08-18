import { Component } from "react";

class cardList extends Component {
  render() {
    const { list } = this.props;

    return (
      <div>
        {list.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default cardList;
