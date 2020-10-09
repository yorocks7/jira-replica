import React, {Component} from 'react';

import './body.css';

class Body extends Component {
    render() {
        
        return(
            <div>
                <div style={{padding: '30px', margin: '4vw 0'}}>
                    <div className='left'>
                        <div style={{fontSize: '3.2vw', fontWeight: '500', margin: '0 5px 20px 0'}}>The #1 software development tool used by agile teams</div>
                        <a href='https://www.atlassian.com/software/jira/free'>
                            Get it free
                        </a>
                    </div>
                    <img className='right' src='https://wac-cdn.atlassian.com/dam/jcr:b86a32cb-0aa8-4783-aa81-9592d4fbf829/jsw-header-illustrations---v3.png?cdnVersion=1286' alt='backgrnd'></img>
                </div>
                <div style={styles.para1}>
                    <p style={{fontSize:'2.8vw', fontWeight: '500', margin:0}}>The best software teams ship early and often.</p>
                    <p style={{fontSize:'1.9vw', width: '70%', marginLeft:'15%'}}>Jira Software is built for every member of your software team to plan,
                         track and release great software.</p>
                </div>
                <img style={{width: '65%', marginLeft: '17.5%', marginTop:'5%'}} alt='logo' loading='auto' src='https://wac-cdn.atlassian.com/dam/jcr:6203a73b-f2a1-4d91-9587-bc4b7d822d6b/workflow_timeline_desktop-temporary.svg?cdnVersion=1286'></img>
                <div  style={{marginTop:'5%', marginLeft: '3%', marginBottom:'5%'}}>
                    <div className='col'>
                        <img style={{width: '8vw'}} alt='logo' src='https://wac-cdn.atlassian.com/dam/jcr:cd0479fa-ce91-412a-86e8-abcd2362d5bb/software%20jira%20documentation%20confluence.svg?cdnVersion=1287'></img>
                        <p style={{fontSize:'1.60vw'}}>Knowledge management</p>
                        <p style={{fontSize: '1.3vw', textAlign: 'left'}}>Transform product requirements in Confluence into a Jira Software backlog with one click.</p>
                        <a style={{fontSize:'1.25vw'}} href='https://www.atlassian.com/software/confluence'>Learn more about Confluence</a>
                    </div>
                    <div className='col'>
                        <img style={{width: '4vw'}} alt='logo' src='https://wac-cdn.atlassian.com/dam/jcr:033e6808-6753-4ebe-a579-8aeca167c743/Software-Git.svg?cdnVersion=1287'></img>
                        <p style={{fontSize:'1.6vw'}}>Development workflow</p>
                        <p style={{fontSize: '1.3vw', textAlign: 'left'}}>Jira Software automatically updates issues and transitions work when code is committed in Bitbucket.</p>
                        <a style={{fontSize:'1.25vw'}} href='https://www.atlassian.com/software/bitbucket'>Learn more about Bitbucket</a>
                    </div>
                    <div className='col'>
                        <img style={{width: '6vw'}} alt='logo' src='https://wac-cdn.atlassian.com/dam/jcr:40d95e12-b2cc-4c19-a0e9-dadef3053949/Software-Hierarchy%20Window.svg?cdnVersion=1287'></img>
                        <p style={{fontSize:'1.6vw'}}>Continuous integration and deployment</p>
                        <p style={{fontSize: '1.3vw', textAlign: 'left'}}>Supercharge your CI/CD with Pipelines and monitor build status from within Jira Software.</p>
                        <a style={{fontSize:'1.25vw'}} href='https://bitbucket.org/product/features/pipelines'>Learn more about Pipelines</a>
                    </div>
                </div>
                <div style={{borderBottom: '4px solid grey', opacity: 0.5, width: '50%', margin: 'auto'}} />
                <div className='backimg'>
                    <div style={{width: '40%', marginLeft:'30%'}}>
                        <p style={{fontSize: '3vw', fontWeight: '500', textAlign: 'center', color: 'white'}}>Streamline your work with automation</p>
                        <p style={{fontSize: '1.6vw', textAlign: 'center', color: 'white'}}>Save time, stay focused and work smarter with Jira automation. </p>
                        <div className='auto' href='https://www.atlassian.com/software/jira/features/automation'>Learn more about Automation</div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles ={
    para1 : {
        width: '75%',
        marginTop: '10%',
        marginLeft: '12.5%',
        float:'absolute',
        textAlign:'center',
    },

    
}

export default Body;