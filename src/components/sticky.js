import React, { Component } from 'react';
import Headroom from 'react-headroom';
import './sticky.css';

class Sticky extends Component {

    render() {
        return(

            <Headroom>
                <div className='sticky'>
                    <a className='software' href='https://www.atlassian.com/software/jira'>
                        Jira Software
                    </a>
                    <nav className='stickynav'>
                        <a href>Features</a>
                        <a href>Product Guide</a>
                        <a href>Pricing</a>
                        <a href>Enterprises</a>
                    </nav>
                    <a className='stickyRight' href='https://www.atlassian.com/software/jira/free'>
                        Get it free
                    </a>
                </div>
            </Headroom>
        )
    }
}



export default Sticky;