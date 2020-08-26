import React from 'react';
import { Link } from 'wouter';
import './Button.css';

export default function Button({ styleButton = 'default', text, to, event, disabled = false }) {
  const isdisabled = disabled ? "disabled" : "";
  if (to) {
    return (
      <Link to={to} onClick={event}>
        <a className={`button button--${styleButton} ${isdisabled}`}  href>
          <span>{text}</span>
        </a>
      </Link>
    );
  }

  return (
    <button className={`button button--${styleButton} ${isdisabled}`} disabled={isdisabled} onClick={this.handleClick}>
      <span>{this.getButtonContent()}</span>
    </button>
  );
}
