import React, { Component } from 'react';

import api from '../../src/utils/apis';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: api.getInfo()
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-6">
                    <img
                        className="rounded-circle avatar"
                        src="avatar.jpg"
                        alt="avatar"
                        width="120px"
                        height="120px"
                    />
                    <h2 className="mt-6">
                        <span className="badge badge-primary">{this.state.info.name}</span>
                    </h2>
                    <h3>
                        <span className="badge badge-warning">{this.state.info.position}</span>
                    </h3>
                    <h5>
                        {
                            this.state.info.status === 0 ? (
                                <span className="badge badge-danger">Looking for work</span>
                            ) : (
                                    <span className="badge badge-primary">Working</span>
                                )
                        }
                    </h5>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <li><i className="fas fa-birthday-cake"></i> {this.state.info.birthday}</li>
                    <li><i className="fas fa-mobile"></i> {this.state.info.phonenumber}</li>
                    <li><i className="fas fa-envelope-open"></i> {this.state.info.email}</li>
                    <li><i className="fab fa-facebook"></i> {this.state.info.facebook}</li>
                    <li><i className="fab fa-github"></i> {this.state.info.github}</li>
                    <li><i className="fas fa-map-marker-alt"></i> {this.state.info.address}</li>
                </div>
            </div>
        );
    }
}

export default Info;
