import React, { Component } from 'react';
import { render } from 'react-dom';

import Heading from '../common/heading.jsx';

export default class Dashboard extends Component {
  render() {
    return (
        <div>
            <div className="">
                <Heading data={'Dashboard'} />
                <div className="panel-body dashboard-wrap">

                    

                    <div className="row">
                        <div className="col-sm-4 col-md-4">
                            <a href={FlowRouter.path('manageMenu')}>
                                <div className="white-box info-stats">
                                    <div className="info-header bg-green"><i className="fa fa-television"></i></div>
                                       <div className="info-content">
                                         <h3>Menu Manager</h3>
                                       </div>
                                       <div className="info-footer">
                                         <div className="stats">
                                                 Click to view <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                          </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-4">
                            <a href={FlowRouter.path('listCategories')}>
                               <div className="white-box info-stats">
                                   <div className="info-header bg-orange"><i className="fa fa-building"></i></div>
                                   <div className="info-content">
                                     <h3>Category Manager</h3>
                                   </div>
                                   <div className="info-footer">
                                     <div className="stats">
                                             Click to view <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                      </div>
                                   </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-4">
                            <a href={FlowRouter.path('articles')}>
                                <div className="white-box info-stats">
                                   <div className="info-header bg-red"><i className="fa fa-pencil"></i></div>
                                   <div className="info-content">
                                     <h3>Article Manager</h3>
                                   </div>
                                   <div className="info-footer">
                                     <div className="stats">
                                           Click to view <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                      </div>
                                   </div>
                                </div>  
                            </a>
                        </div>
                        <div className="col-sm-4">
                            <a href={FlowRouter.path('modulesManager')}>
                            <div className="white-box info-stats">
                               <div className="info-header bg-blue"><i className="fa fa-sliders"></i></div>
                               <div className="info-content">
                                 <h3>Module Manager</h3>
                               </div>
                               <div className="info-footer">
                                 <div className="stats">
                                         Click to view <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                  </div>
                               </div>
                            </div>
                            </a>
                        </div>
                        <div className="col-sm-4">
                            <a href={FlowRouter.path('templates')}>
                            <div className="white-box info-stats">
                               <div className="info-header bg-purple"><i className="fa fa-picture-o"></i></div>
                               <div className="info-content">
                                 <h3>Template Manager</h3>
                               </div>
                               <div className="info-footer">
                                 <div className="stats">
                                        Click to view <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                  </div>
                               </div>
                            </div>
                            </a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
  }
}