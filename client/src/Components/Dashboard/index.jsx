import React,{ Component } from 'react';
import Header from '../Header/index';
import Posts from '../Post/all';
import Users from './users';
import styles from './style.module.css';

class Dashboard extends Component {
    render(){
        return(
            <div>
                <Header />
                <section className={styles['post-container']}>
                    <div className={styles.text}>
                        <textarea placeholder="What's in your mind"></textarea>
                        <input type="submit" value="post"/>

                        <div className={styles['fileContainer']}>
                            <span>Upload image</span>
                            <input type="file" placeholder='Upload image'/>
                        </div>
                    </div>
                </section>
                <Posts />
                <Users />
            </div>
        )
    }
}

export default Dashboard;