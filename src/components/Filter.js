import React, { Component } from 'react';

class Filter extends Component {
    
    render() {
        const {onChange, filter} = this.props;
        return (
            <div className="mb-3">
                <input type="text"
                    value={filter}
                    className="form-control"
                    onChange={onChange}
               />
            </div>
        );
    }
}

export default Filter;
