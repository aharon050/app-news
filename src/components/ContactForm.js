import React, { Fragment } from "react";
import "./contact-us.scss";

class ContactForm extends React.Component {
  state = {
    form: {
      name: "",
      email: "",
      message: "",
    },
    errors: {
      name: {
        touched: false,
        error: true,
        message: "The name field is required.",
      },
      email: {
        touched: false,
        error: true,
        message: "The email field is required.",
      },
      message: {
        touched: false,
        error: true,
        message: "The message field is required.",
      },
    },
  };

  checkError = (name, value) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    switch (name) {
      case "name": {
        if (value) {
          value = value.trim();
        }
        return !value;
      }
      case "email": {
        if (!value) {
          return null;
        } else if (!regex.test(value)) {
          return null;
        }
      }
      case "message": {
        return !value;
      }
    }
  };

  handleChange = (e) => {
    e.persist();
    const name = e.target.name;
    const value = e.target.value;
    const errorFlag = this.checkError(name, value);
    this.setState((prevState) => {
      return {
        form: {
          ...prevState.form,
          [e.target.name]: e.target.value,
        },
        errors: {
          ...prevState.errors,
          [name]: {
            ...prevState[name],
            error: errorFlag === null,
            message: `The ${name} field is ${
              errorFlag === null ? "invalid" : "required"
            }`,
          },
        },
      };
    });
  };

  checkErrors = () => {
    return (
      !this.state.errors.email.error &&
      !this.state.errors.name.error &&
      !this.state.errors.message.error
    );
  };

  handleBlur = (e) => {
    const name = e.target.name;
    this.setState({
      errors: {
        ...this.state.errors,
        [name]: {
          ...this.state.errors[name],
          touched: true,
        },
      },
    });
  };

  handleSubmit = () => {
    if (this.checkErrors()) {
      console.log(this.state.form);
      this.props.handleClose();
    }
  };

  render() {
    return (
      <Fragment>
        <div className="contact-us-form">
          <form className="contact-us-form-wrapper">
            {/*<form className="form">*/}
            <div className="contact-us-form-header text-center">
              <img
                className="contact-us-form-header-close"
                src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/close.png"
                alt=""
                onClick={this.props.handleClose}
              />
              <h4>Contact Us</h4>
            </div>
            <div className="contact-us-form-body">
              <label>Your Name</label>
              <br />
              <input
                className="input"
                onChange={this.handleChange}
                value={this.state.form.name}
                type="text"
                placeholder="Enter name"
                name="name"
                onBlur={this.handleBlur}
              />
              <br />
              {this.state.errors.name.touched &&
                this.state.errors.name.error && (
                  <small className="text-muted">
                    {this.state.errors.name.message}
                  </small>
                )}

              <br />

              <label>Your Email</label>
              <br />
              <input
                className="input"
                onChange={this.handleChange}
                value={this.state.form.email}
                type="email"
                placeholder="Enter email"
                name="email"
                onBlur={this.handleBlur}
              />
              <br />
              {this.state.errors.email.touched &&
                this.state.errors.email.error && (
                  <small className="text-muted">
                    {this.state.errors.email.message}
                  </small>
                )}
              <br />

              <label>Your message</label>
              <br />
              <textarea
                name="message"
                className="textarea"
                onChange={this.handleChange}
                value={this.state.form.message}
                onBlur={this.handleBlur}
                rows="3"
              />
              <br />
              {this.state.errors.message.touched &&
                this.state.errors.message.error && (
                  <small className="text-muted">
                    {this.state.errors.message.message}
                  </small>
                )}
            </div>
            <div className="contact-us-form-footer">
              <button onClick={this.handleSubmit} type="button" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="dark-background" onClick={this.props.handleClose} />
      </Fragment>
    );
  }
}

export default ContactForm;
