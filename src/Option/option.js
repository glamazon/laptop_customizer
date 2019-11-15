import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';

class Option extends Component {


  render() {
    const features = this.props.features
    const key = this.props.key
    const selected = this.props.selected

    const options = this.props.features[this.props.name].map((item, index) => {
      const selectedClass = item.name === selected[this.props.name].name ? 'feature__selected' : '';
      const featureClass = 'feature__option ' + selectedClass;
      return <li key={index} className="feature__item">
        <div className={featureClass}

          onClick={e => this.props.onSelect(this.props.name, item)}>
          {item.name}
          ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(item.cost)})
                </div>
      </li>
    })
    return (
      <div className="feature" key={this.props.name}>
        <div className="feature__name">{this.props.name}</div>
        <ul className="feature__list">
          {options}
        </ul>
      </div>
    )
  }

}
Option.defaultProps = {
  features: {},
  selected: {},

}
export default Option;