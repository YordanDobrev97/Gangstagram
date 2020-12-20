import React, { Component } from 'react'
import Input from '../Input/input'

import './create.css'

class CreatePost extends Component {
    createPost = (e) => {
        e.preventDefault();

        const content = this.state.content;
        console.log(content);
    }

    getInputValue = (name, value) => {
        this.setState({
            [name]: value
        });
    }

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
                                <Input type='text' className="input-field" name='content' placeholder="Content" onChange={this.getInputValue.bind(this)} />                       
                                <ul class='list-inline post-actions'>
                                    <li><a href="#"><span class="glyphicon glyphicon-camera"></span></a></li>
                                    <li><a href="#" class='glyphicon glyphicon-user'></a></li>
                                    <li><a href="#" class='glyphicon glyphicon-map-marker'></a></li>
                                    <li class='pull-right'><a href="#" class='btn btn-primary btn-xs'>Post</a></li>
                                </ul>

                                <button className="create-post" onClick={this.createPost}>Upload</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePost;