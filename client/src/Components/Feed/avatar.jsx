import React from 'react';
import './style.css';

function Avatar() {
    return (
        <header class="photo__header">
            <img src="https://icons-for-free.com/iconfiles/png/512/avatar+human+people+profile+user+icon-1320168139431219590.png" class="photo__avatar" />
                <div class="photo__user-info">
                    <span class="photo__author">inthetiger</span>
                    <span class="photo__location">Bestechung</span>
                </div>
        </header>
    )
}

export default Avatar;