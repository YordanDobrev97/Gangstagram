import React, { Component, Fragment } from "react";
import 
  {
    Button,
    Avatar, 
    Grid, 
    Card, 
    CardMedia, 
    CardContent,
    Typography,
    Box,
    Link,
    Icon
   } from '@material-ui/core'

// import Avatar from "./avatar";
import FollowBtn from "../Followers/index";
import LikePost from "./likePost";
import PostComment from "./comments";
import CommentService from '../../Services/comment';

import Cookies from "js-cookie";
class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isLoading: false,
      comment: '',
      postId: '',
    };
  }

  async componentWillMount() {
    await fetch("https://localhost:5001/api/posts/all", {
      headers: {
        "X-User-Token": Cookies.get("userId"),
        "Content-Type": "application/json",
      },
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          posts: data,
          isLoading: true,
        });
      });
  }

  addComment = async () => {
    const result = await CommentService.add(this.state.comment, this.state.postId);
    console.log(result);
    if (result) {
      this.setState({
        comment: '',
      })
    }
  }

  render() {
    if (!this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <Fragment>
        {this.state.posts.length == 0 ? 'No have posts' : Object.keys(this.state.posts).map((index) => {
          const feedId = this.state.posts[index].id;
          const imgHref = '/feed/' + feedId;
          return (
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Card style={{margin: "20px", width: "75%" }}>
                <Box component="span">
                  <Avatar
                    style={{float: "left"}}
                    alt="user avatar" 
                    src="https://lh3.googleusercontent.com/proxy/hsEZAqJ7dbVeBH3F_c5dvDAeajS9CkX8WJ_Z3CQ8JgVBP6EsK_Bqau1MZZp41g7b5ng0EJcOT2W2JICHkVywrhrVA8ZMFAr5dXnL0UdhjwD_oIgOntId2SuQFCjp" />
                    <Link href={this.state.posts[index].userId} style={{ float: "left" }}>
                    {this.state.posts[index].username}
                  </Link>
                </Box>
                
                <CardContent style={{margin: "auto"}}>
                  <Typography gutterBottom variant="h5" component="h2" 
                  style={{ marginRight: "95px" }}>
                    {this.state.posts[index].title}
                  </Typography>

                  <Link href={imgHref}>
                    <CardMedia 
                      image={this.state.posts[index].image} 
                      component="img" 
                      style={{width: "50%", height: "180px", margin: "0 auto"}}/> 
                  </Link>

                  <Typography variant="body2" color="textSecondary" component="p" 
                  style={{ borderStyle: "groove", padding: "8px", width: "50%", margin: "auto" }}>
                    {this.state.posts[index].content}
                  </Typography>
                </CardContent>

                <input type="text" placeholder="Add comment" onChange={(e) => {
                    this.setState({
                      comment: e.target.value,
                      postId: this.state.posts[index].id,
                    })
                }}/>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  endIcon={<Icon>send</Icon>}
                  style={{marginLeft: "10px", marginBottom: "5px" }}
                  onClick={this.addComment.bind(this)} >
                  Send
                </Button>
              </Card>
            </Grid>
          );
        })}
      </Fragment>
    );
  }
}

export default Feed;
