import React from "react";
import { Container, Table } from "react-bootstrap";

class ComponentToPrint extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <Container className="bg-white vh-100">
        <h2 className="text-center pb-4 d-flex flex-column gap-3">
          <img
            src="/logo.jpeg"
            alt="logo"
            height="250px"
            className="mx-auto my-3"
          />
          Cooked With Care
        </h2>
        <Table
          style={{ maxWidth: 350, margin: "0 auto" }}
          aria-label="simple table"
        >
          <tbody>
            <tr>
              <th>Dish Name</th>
              <td>{this.state.data.dishName}</td>
            </tr>

            <tr>
              <th>Address</th>
              <td>{this.state.data.address}</td>
            </tr>

            <tr>
              <th>Ordered on date</th>
              <td>
                {new Date(this.state.data.createdAt).toLocaleDateString()}
              </td>
            </tr>

            <tr>
              <th>Price</th>
              <td>{this.state.data.amount}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default ComponentToPrint;
