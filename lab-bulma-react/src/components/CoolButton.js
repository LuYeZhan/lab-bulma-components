
import React, { Component } from 'react'

export default class CoolButton extends Component {
  render() {
    return (
      <button class={this.props.class}>{this.props.name}</button>
    )
  }
}