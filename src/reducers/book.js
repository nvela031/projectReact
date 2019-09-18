import React from "react";
//import axios from "axios";
import {
  Table,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";

const book = () => {
  const newbook = {
    books: { id: 1, title: "The wonderland", rating: "5" }
  };

  const state = {
    book: [],
    newBookModal: false
  };

  const toggleNewBookModal = () => {
    this.state.newBookModal = true;
  };

  return (
    <div className="comtainer">
      <Button color="primary" onClick={toggleNewBookModal.bind(this)}>
        Add a new Book
      </Button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Rating</th>
          </tr>
        </thead>

        <tbody>
          <tr key={newbook.books}>
            <td>{newbook.books.id}</td>
            <td>{newbook.books.title}</td>
            <td>{newbook.books.rating}</td>
            <td>
              <Button color="success" size="sm" className="mr-2">
                Pay
              </Button>
              <Button color="danger" size="sm" className="mr-2">
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default book;
