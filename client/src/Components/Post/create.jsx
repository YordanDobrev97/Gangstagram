import React, { Component } from 'react';
import './create.css';

class CreatePost extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-offset-3 col-md-6 col-xs-12">
                        <div class="well well-sm well-social-post">
                            <form>
                                <ul class="list-inline" id='list_PostActions'>
                                    <li class='active'><a href='#'>Update status</a></li>
                                    <input type="file" id="img" name="img" accept="image/*" />
                                </ul>
                                <textarea class="form-control" placeholder="What's in your mind?"></textarea>
                                <ul class='list-inline post-actions'>
                                    <li><a href="#"><span class="glyphicon glyphicon-camera"></span></a></li>
                                    <li><a href="#" class='glyphicon glyphicon-user'></a></li>
                                    <li><a href="#" class='glyphicon glyphicon-map-marker'></a></li>
                                    <li class='pull-right'><a href="#" class='btn btn-primary btn-xs'>Post</a></li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePost;