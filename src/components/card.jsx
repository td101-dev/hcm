import React, { Component } from 'react';


class Card extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.clickHandler(this.props.title);
  }

  formatDate(date) {
    // Get user locale from browser
    const locale = navigator.language;

    return new Intl.DateTimeFormat(locale, { dateStyle: 'short', timeStyle: 'short', hour12: false }).format(new Date(date));
  }
  render() {
    return (
      <div className="col s12 m5 l3">
        <div className={`card card-pointer blue-grey ${this.props.selected ? "darken-3" : "darken-4"}`} onClick={this.handleClick}>
          <div className={`card grey ${this.props.selected ? "darken-3" : "darken-4"}`}>
            <div className="card-content white-text">
              <span className="card-span">{this.props.title ? this.props.title : "Title"}</span>
              <span className="card-title">{this.props.temperature ? this.props.temperature + "\u00b0C" : "Temperature Error"}</span>
              <p className="card-span">{this.props.humidity ? this.props.humidity + "%" : "Humdity Error"}</p>
              <div className="divider"></div>
              <span className="card-span">{this.props.date ? this.formatDate(this.props.date) : "Date Error"}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;