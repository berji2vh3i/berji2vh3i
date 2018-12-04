import React, { Component } from 'react';

import api from '../../src/utils/apis';

import Avatar from '../../src/utils/avatar.jpg';

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
                        src={Avatar}
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
                </div>
                <div className="col-xs-12 col-sm-6">
                    <li><i className="fas fa-birthday-cake"></i> {this.state.info.birthday}</li>
                    <li><i className="fas fa-mobile"></i> {this.state.info.phonenumber}</li>
                    <li><i className="fas fa-envelope-open"></i> {this.state.info.email}</li>
                    <li><i className="fab fa-facebook"></i> <a href={this.state.info.facebook} target="_blank">{this.state.info.facebook}</a></li>
                    <li><i className="fab fa-github"></i> <a href={this.state.info.github} target="_blank">{this.state.info.github}</a></li>
                    <li><i className="fas fa-map-marker-alt"></i> {this.state.info.address}</li>
                </div>
            </div>
        );
    }
}

export default Info;