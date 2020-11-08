import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function PhotoAction() {
    return (
        <Fragment>
            <div class="photo__actions">
                <span class="photo__action">
                    <i class="fa fa-heart-o fa-lg"></i>
                </span>
                <span class="photo__action">
                    <i class="fa fa-comment-o fa-lg"></i>
                </span>
            </div>
            <button type="submit" className="btn-love">
                <FontAwesomeIcon icon={faHeart}/>
            </button>
        </Fragment>
    )
}

export default PhotoAction;