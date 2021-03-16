import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { Grid, Card, CardContent, Typography } from "@material-ui/core";

import UserAvatar from "./avatar";
import Image from "./Image";
import FooterFeed from "./FooterFeed";
import CommentSection from "./comment";

import FeedService from "../../Services/feed";

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isLoading: false,
    };
  }

  async componentWillMount() {
    const data = await FeedService.getAll().then((r) => r.json());

    this.setState({
      posts: data,
      isLoading: true,
    });
  }

  render() {
    if (!this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <Fragment>
        {this.state.posts.length == 0
          ? "No have posts"
          : Object.keys(this.state.posts).map((index) => {
              const feedId = this.state.posts[index].id;
              const imgHref = "/feed/" + feedId;
              return (
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Card style={{ margin: "20px", width: "75%" }}>
                    <UserAvatar
                      profileUserImage={
                        this.state.posts[index].profileUserImage
                      }
                      userId={this.state.posts[index].userId}
                      username={this.state.posts[index].username}
                    />

                    <CardContent style={{ margin: "auto" }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        style={{ marginRight: "95px" }}
                      >
                        {this.state.posts[index].title}
                      </Typography>

                      <Link to={imgHref}>
                        <Image
                          image={this.state.posts[index].image}
                          styles={{
                            width: "50%",
                            height: "180px",
                            margin: "0 auto",
                          }}
                        />
                      </Link>

                      <FooterFeed
                        content={this.state.posts[index].content}
                        postId={this.state.posts[index].id}
                      />
                    </CardContent>

                    <CommentSection postId={this.state.posts[index].id} />
                  </Card>
                </Grid>
              );
            })}
      </Fragment>
    );
  }
}

export default Feed;
