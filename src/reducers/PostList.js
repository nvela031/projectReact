import React, { Component } from "react";
import PostData from "../data/Postdata.json";
import { Card, CardBody, CardTitle } from "reactstrap";

class PostList extends Component {
  state = {
    sortType: "asc",
    booksList: [
      // here in this bookslist I'm mapping the PostData to go through each component data on Postdata.json
      ...PostData.map(book => {
        return { ...book, selected: false };
      })
    ]
  };

  toggleBookSelect = index => {
    const { booksList } = this.state;
    booksList[index].selected = !booksList[index].selected;
    this.setState({ booksList });
  };

  //This function it just Render the books
  renderBook = (book, index) => {
    return (
      <div
        className="col-md-3"
        style={{ marginTop: "20px", cursor: "pointer" }}
        onClick={() => this.toggleBookSelect(index)}
      >
        <Card>
          <CardBody>
            <p className="">
              <img className={book.image} alt={book.image}></img>
            </p>
            <CardTitle title={book.title}>
              {book.title.substring(0, 15)}
              {book.title.length > 15 && "..."}
            </CardTitle>
          </CardBody>
          {book.selected && <i className="fa fa-check"></i>}
        </Card>
      </div>
    );
  };

  // this is the function that sort the booksList base on the state of sortType (asc or desc)
  onSort = sortType => {
    this.setState({ sortType });
  };

  // this is the function that sort the list book as ASC or DESC
  render() {
    const { booksList, sortType } = this.state;
    const sorted = booksList.sort((a, b) => {
      const isReversed = sortType === "asc" ? 1 : -1;
      return isReversed * a.title.localeCompare(b.title);
    });

    return (
      <div>
        <div className="row">
          {sorted.map((book, index) => {
            return this.renderBook(book, index);
          })}
        </div>
        {/* -------this is the section of the buttom ---------  */}
        <div class="card w-50">
          <div class="card-body">
            <a
              href="#"
              className="btn btn-primary"
              onClick={() => this.onSort("asc")} //CALLING THE onSort function to sort as asc
            >
              Sort By Asc
            </a>
            <a
              href="#"
              className="btn btn-primary"
              onClick={() => this.onSort("desc")} //CALLING THE onSort function to sort as desc
            >
              Sort By desc
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;
