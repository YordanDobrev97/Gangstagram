import React, { Component, Fragment } from "react";
import 
  {
    Avatar, 
    Grid, 
    Card, 
    CardMedia, 
    CardContent,
    Typography,
    Box,
    Link } from '@material-ui/core'

// import Avatar from "./avatar";
import FollowBtn from "../Followers/index";
import LikePost from "./likePost";
import PostComment from "./comments";

import Cookies from "js-cookie";
class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isLoading: false,
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

  render() {
    if (!this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <Fragment>
        {this.state.posts.length == 0 ? 'No have posts' : Object.keys(this.state.posts).map((index) => {
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
                    <Link href={this.state.posts[index].id}>
                    {this.state.posts[index].username}
                  </Link>
                </Box>
                
                <CardContent style={{margin: "auto"}}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {this.state.posts[index].title}
                  </Typography>

                  <CardMedia 
                    image={this.state.posts[index].image} 
                    component="img" 
                    style={{width: "450px", height: "180px", margin: "0 auto"}}/> 

                  <Typography variant="body2" color="textSecondary" component="p">
                    {this.state.posts[index].content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            // <div class="w-50 m-auto bg-light">
            //   <Avatar username={username} />
            //   <FollowBtn username={username} />
            //   <div class="text-center">
            //     <img
            //       className="w-50 h-25 mx-auto d-block"
            //       src={this.state.posts[index].image}
            //     />
            //   </div>

            //   <div>
            //     <LikePost postId={this.state.posts[index].id} />
            //     <PostComment postId={this.state.posts[index].id} />
            //   </div>
            // </div>
          );
        })}
      </Fragment>
    );
  }
}

export default Feed;
