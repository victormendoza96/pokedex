import React from 'react';
import { Link } from 'wouter';
import './Button.css';

export default function Button({ text, to, event, disabled = false }) {
  if (to) {
    return (
      <Link to={to} className="button" disabled={disabled} onClick={event}>
        {text}
      </Link>
    );
  }

  return (
    <button className="button" disabled={disabled} onClick={this.handleClick}>
      {this.getButtonContent()}
    </button>
  );
}
