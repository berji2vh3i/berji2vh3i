import React, { Component } from 'react';

import api from '../utils/apis';

class Experiances extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experiances: api.getExperiances()
        }
    }

    render() {
        return (
            <div>
                <h3>
                    <span className="badge badge-warning">Experiances</span>
                </h3>
                {
                    this.state.experiances.map((experiance, id) => (
                        <div
                            className="row"
                            key={id}
                        >
                            <div className="col-xs-12 col-sm-4">
                                <h5 className="text-success">
                                    <strong>{experiance.company}</strong>
                                </h5>
                                <li>
                                    <strong className="text-danger">{experiance.address}</strong>
                                </li>
                                <li>{experiance.time}</li>
                            </div>
                            <div className="col-xs-12 col-sm-8">
                                <h5>
                                    <span className="badge badge-primary">{experiance.position}</span>
                                </h5>
                                {
                                    experiance.description.map((desc, id) => (
                                        <li key={id}>{desc}</li>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Experiances;
