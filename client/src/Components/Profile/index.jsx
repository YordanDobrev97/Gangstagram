import React from 'react';
import './style.css';

function Profile(props) {
    return (
        <main id="profile">
            <header class="profile__header">
                <div class="profile__column">
                    <img src="https://raw.githubusercontent.com/nomadcoders/vietgram/master/images/avatar.jpg" />
                </div>
                <div class="profile__column">
                    <div class="profile__title">
                        <h3 class="profile__username">serranoarevalo</h3>
                        <a href="edit-profile.html">Edit profile</a>
                        <i class="fa fa-cog fa-lg"></i>
                    </div>
                    <ul class="profile__stats">
                        <li class="profile__stat">
                            <span class="stat__number">333</span> posts
                        </li>
                        <li class="profile__stat">
                            <span class="stat__number">1234</span> followers
                        </li>
                        <li class="profile__stat">
                            <span class="stat__number">36</span> following
                        </li>
                    </ul>
                    <p class="profile__bio">
                        <span class="profile__full-name">
                            Nicolás Serrano Arévalo
                        </span> Doing whatever and eating Pho Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ducimus suscipit praesentium eveniet quibusdam ipsam omnis fugit. Tempore voluptates ratione recusandae
                        natus illo perspiciatis suscipit, odio consequuntur quasi obcaecati minus! Omnis.
                        <a href="#">serranoarevalo.com</a>
                    </p>
                </div>
            </header>
            <section class="profile__photos">
                <div class="profile__photo">
                    <img src="https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293__340.jpg" />
                    <div class="profile__photo-overlay">
                        <span class="overlay__item">
                            <i class="fa fa-heart"></i>
                            486
                        </span>
                        <span class="overlay__item">
                            <i class="fa fa-comment"></i>
                            344
                        </span>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Profile;