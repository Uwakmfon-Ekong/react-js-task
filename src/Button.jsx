import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props)

   }
  render() {
    return (
      <div>
        {/* <form className="d-flex"> */}
          <div className="ms-auto mt-3 mt-lg-0">
            <button
              className={`${this.props.color} ${this.props.text} ${this.props.styl} btn btn shadow-sm mx-0 type="submit`}
            >
              {this.props.name}
            </button>
          </div>
        {/* </form> */}
      </div>
    );
  }
}
export default Button;
