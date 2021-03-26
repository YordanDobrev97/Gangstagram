import React, { Component, Fragment } from "react";
import { Button, Icon } from "@material-ui/core";
import CommentService from "../../Services/comment";

class CommentSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postId: "",
      comment: "Empty",
    };
  }

  addComment = async () => {
    const result = await CommentService.add(
      this.state.comment,
      this.state.postId
    );
    if (result) {
      this.setState({
        comment: "",
      });
    }
  };

  getInputValue = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Fragment>
        <input
          type="text"
          placeholder="Add comment"
          onChange={(e) => {
            this.setState({
              comment: e.target.value,
              postId: this.props.postId,
            });
          }}
        />
        <Button
          size="small"
          variant="contained"
          color="primary"
          endIcon={<Icon>send</Icon>}
          style={{ marginLeft: "10px", marginBottom: "5px" }}
          onClick={this.addComment.bind(this)}
        >
          Send
        </Button>
      </Fragment>
    );
  }
}

export default CommentSection;
