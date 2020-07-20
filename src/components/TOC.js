import React, { Component } from "react";

class TOC extends Component {
  // // render() 함수 호출 전 호출 됨.
  // shouldComponentUpdate(newProps, newState) {
  //   console.log('====>TOC render shouldComponentUpdate', newProps, this.props.data);

  //   return false; // true : render() 함수 호출, false : render() 함수 미호출
  // }

  render() {
    console.log("TOC render");
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
