import React from "react";
import { withRouter } from "react-router-dom";
import { Input } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function BasicTextFields() {
  const classes = useStyles();

  return <TextField id="standard-basic" label="Standard" />;
}

class Search extends React.Component {
  state = {
    searchValue: "",
  };

  componentDidMount() {
    console.log(this.props.history);
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      searchValue: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(`/article/${this.state.searchValue}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          onChange={this.handleChange}
          value={this.state.searchValue}
          type="text"
          placeholder="Search News"
        />
      </form>
    );
  }
}

export default withRouter(Search);
