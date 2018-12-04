import React, { Component } from 'react';

import api from '../utils/apis';

class Educations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            educations: api.getEducations()
        }
    }
    
    render() {
        return (
            <div>
                <h3>
                    <span className="badge badge-warning">Educations</span>
                </h3>
                {
                    this.state.educations.map((education, id) => (
                        <div
                            key={id}
                            className="row"
                        >
                            <div className="col-xs-12 col-sm-4">
                                <h5 className="text-success">
                                    <strong>{education.school}</strong>
                                </h5>
                                <li>
                                    <strong className="text-danger">{education.address}</strong>
                                </li>
                                <li>{education.time}</li>
                            </div>
                            <div className="col-xs-12 col-sm-8">
                                <h5>
                                    {
                                        education.status === 0 ? (
                                            <span className="badge badge-danger">{education.description}</span>
                                        ) : (
                                            <span className="badge badge-primary">{education.description}</span>
                                        )
                                    }
                                    
                                </h5>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Educations;
