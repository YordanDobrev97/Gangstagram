import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer () {
    return (
        <footer>
            <span>Don't have an account?</span>
            <Link to='/register'>
                <span>Sign up</span>
            </Link>
        </footer>
    )
}

export default Footer;