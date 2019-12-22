import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import { makeSelectEmployeeData } from "../LoginForm/selectors";

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: true
    };
  }
  render() {
    return (
      <React.Fragment>
        <h1>Employee Dashboard</h1>
        <p style={{ textAlign: "center" }}>Logged In</p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone No</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data &&
              this.props.data.user &&
              this.props.data.user.map((data, i) => (
                <tr key={i}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.gender}</td>
                  <td>{data.email}</td>
                  <td>{data.phoneNo}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export const mapStateToProps = createStructuredSelector({
  data: makeSelectEmployeeData()
});

export const mapDispatchToProps = dispatch => {
  return {};
};

EmployeeList.propTypes = {
  data: PropTypes.object
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EmployeeList)
);
