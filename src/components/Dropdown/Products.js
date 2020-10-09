import React, {Component} from 'react';

class Products extends Component {
    render(){
        return(
            <div style={{position:'fixed', height: '85%', width: '100%', backgroundColor: 'white'}}>
                <div style = {{display: 'flex', flexDirection: 'horizontal', padding: '30px 4%'}}>
                  <div style={{width:'24%'}}>
                      <div align='left' style={{padding:'5px', fontSize: 20}}>
                        PLAN, TRACK & SUPPORT   
                      </div>
                      <div style={{margin:'10px', padding:'5px 5px 5px 0', display: 'flex', flexDirection: 'horizontal'}}>
                        <img src='' alt='logo1' style={{marginTop: 5}}></img>
                        <div style={{margin:5, padding:5, paddingTop:0}}>
                            <div style={{fontSize: 22, margin:1}}>
                                Jira Software
                            </div>
                            <div style={{fontSize: 18, margin:1}}>
                                Project and issue tracking
                            </div>
                        </div>
                      </div>
                      <div style={{margin:'10px', padding:'5px 5px 5px 0', display: 'flex', flexDirection: 'horizontal'}}>
                        <img src='' alt='logo2' style={{marginTop: 5}}></img>
                        <div style={{margin:5, padding:5, paddingTop:0}}>
                            <div style={{fontSize: 22, margin:1}}>
                                Jira Align
                            </div>
                            <div style={{fontSize: 18, margin:1}}>
                                Enterprise agile planning
                            </div>
                        </div>
                      </div>
                  </div>

                  <div style={{width:'24%'}}>
                      <div align='left' style={{padding:'5px', fontSize: 20}}>
                        COLLABORATE   
                      </div>
                      <div style={{margin:'10px', padding:'5px 5px 5px 0', display: 'flex', flexDirection: 'horizontal'}}>
                        <img src='' alt='logo1' style={{marginTop: 5}}></img>
                        <div style={{margin:5, padding:5, paddingTop:0}}>
                            <div style={{fontSize: 22, margin:1}}>
                                Confluence
                            </div>
                            <div style={{fontSize: 18, margin:1}}>
                                Document collaboration
                            </div>
                        </div>
                      </div>
                      <div style={{margin:'10px', padding:'5px 5px 5px 0', display: 'flex', flexDirection: 'horizontal'}}>
                        <img src='' alt='logo2' style={{marginTop: 5}}></img>
                        <div style={{margin:5, padding:5, paddingTop:0}}>
                            <div style={{fontSize: 22, margin:1}}>
                                Trello
                            </div>
                            <div style={{fontSize: 18, margin:1}}>
                                Collaborate visually on any project
                            </div>
                        </div>
                      </div>
                  </div>

                  <div style={{width:'24%'}}>
                      <div align='left' style={{padding:'5px', fontSize: 20}}>
                      SECURITY & IDENTITY
                      </div>
                      <div style={{margin:'10px', padding:'5px 5px 5px 0', display: 'flex', flexDirection: 'horizontal'}}>
                        <img src='' alt='logo1' style={{marginTop: 5}}></img>
                        <div style={{margin:5, padding:5, paddingTop:0}}>
                            <div style={{fontSize: 22, margin:1}}>
                                Altassian Access
                            </div>
                            <div style={{fontSize: 18, margin:1}}>
                                Security and Control for Cloud
                            </div>
                        </div>
                      </div>
                      <div style={{margin:'10px', padding:'5px 5px 5px 0', display: 'flex', flexDirection: 'horizontal'}}>
                        <img src='' alt='logo2' style={{marginTop: 5}}></img>
                        <div style={{margin:5, padding:5, paddingTop:0}}>
                            <div style={{fontSize: 22, margin:1}}>
                                Crowd
                            </div>
                            <div style={{fontSize: 18, margin:1}}>
                                ...
                            </div>
                        </div>
                      </div>
                  </div>

                  

                  <div style={{display:'flex', flexDirection:'horizontal'}}>
                    <div style={{borderLeft: '2px solid grey', opacity: 0.5, height: '1000px', marginRight: '20px'}}></div>
                    <div>
                        <div style={{margin:'10px', marginTop:'50px', padding:'5px'}}>
                            <div style={{margin:5, padding:5, paddingTop:0}}>
                                <div style={{fontSize: 22, margin:1}}>
                                    Marketplace
                                </div>
                                <div style={{fontSize: 18, margin:1}}>
                                    Apps that enhance Altassian products
                                </div>
                            </div>
                        </div>
                        <div style={{margin:'10px', padding:'5px'}}>
                            <div style={{margin:5, padding:5, paddingTop:0}}>
                                <div style={{fontSize: 22, margin:1}}>
                                    Developers
                                </div>
                                <div style={{fontSize: 18, margin:1}}>
                                    Docs and resources to build Altassian apps
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>


                </div>
            </div>
        )
    }
}

export default Products;