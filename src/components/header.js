import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './header.css';

class Header extends Component{    
    render(){

        return(
            <div>
                <div className='header'>
                    <div style = { styles.logo}>
                        <a href='https://www.atlassian.com/'>
                        <img src='https://wac-cdn.atlassian.com/dam/jcr:616e6748-ad8c-48d9-ae93-e49019ed5259/Atlassian-horizontal-blue-rgb.svg?cdnVersion=1283' alt='logo'></img>
                        </a>
                    </div>
                    <nav className='topnav'>
                        <a href onClick={()=>this.props.handleDropdown('products')}>
                            Products
                            <ExpandMoreIcon style={{padding: '10px 0 0 5px'}} />
                        </a>
                        <a href>
                            For teams
                            <ExpandMoreIcon style={{padding: '10px 0 0 5px'}} />
                        </a>
                        <a href>
                            Support
                            <ExpandMoreIcon style={{padding: '10px 0 0 5px'}} />
                        </a>
                    </nav>
                    <div style={{ float: 'right'}}>
                        <a href='https://www.atlassian.co/purchase/product/jira-software' style={{fontSize:'1.35vw', marginRight: '20px', textDecoration: 'none'}}>Buy Now</a> 
                        <span style={{marginTop:'15px'}}>
                            <SearchIcon/>
                        </span>
                        <span style={{borderLeft: '2px solid grey', opacity: 0.2, height: '80px', margin: '0 10px 0 40px'}} />
                        <a href='https://www.atlassian.co/' style={{fontSize:'1.35vw', marginRight: '10px', color: 'grey', textDecoration:'none'}}>Log in</a> 
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    
    logo : {
        display: 'inline-block',
        width: '15%',
        'min-width': '150px',
    },
}

export default Header;