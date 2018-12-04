import React, { Component } from 'react';

import api from '../utils/apis';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: api.getSkills()
        }
    }
    
    render() {
        return (
            <div>
                <h3>
                    <span className="badge badge-warning">Skills</span>
                </h3>
                {
                    this.state.skills.map((skill, id) => (
                        <div
                            key={id}
                            className="row text-center"
                        >
                            <div
                                className="progress"
                                style={{
                                    backgroundColor: '#28bcfd',
                                    width: '100%',
                                    height: '24px',
                                    marginTop: '6px',
                                    marginLeft: '18px',
                                    marginRight: '18px'
                                }}
                            >
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                    style={{
                                        backgroundColor: '#1d78ff',
                                        width: skill.precent + '%',
                                        height: '24px',
                                        color: '#fff'
                                    }}
                                >
                                    {skill.name}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Skills;
