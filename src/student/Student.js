import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button/Button";
import { saveStudentInfo } from "./StudentActions";
import { connect } from "react-redux";
import "./student.css";

export class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.firstName || "",
      lastName: props.lastName || "",
      age: props.age || ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickSave = this.handleClickSave.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClickSave() {
    this.props.saveStudentInfo(
      this.state.firstName,
      this.state.lastName,
      this.state.age
    )
  }

  render() {
    return (
      <div className="page-container">
        <h1>Student Form</h1>
        <form className="my-form">
          <TextField
            name="firstName"
            onChange={e => this.handleChange(e)}
            label="First Name"
            value={this.state.firstName}
            variant="outlined"
            style={{ marginBottom: "10px" }}
          />
          <TextField
            name="lastName"
            onChange={e => this.handleChange(e)}
            label="Last Name"
            value={this.state.lastName}
            variant="outlined"
            style={{ marginBottom: "10px" }}
          />
          <TextField
            name="age"
            onChange={e => this.handleChange(e)}
            label="Age"
            value={this.state.age}
            variant="outlined"
            style={{ marginBottom: "10px" }}
          />
          <Button
            size="large"
            onClick={() => this.handleClickSave()}
            style={{ background: "blue", color: "white"}}
          >
            Save
          </Button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    student: state.student
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    saveStudentInfo: (firstName, lastName, age) => {
      dispatch(saveStudentInfo(firstName, lastName, age));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Student);
