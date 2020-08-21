import React from 'react';

export default function ErrorPage() {
  return (
    <div className="error">
      <div className="error__table">
        <div className="error__text">OPPS!!!</div>
        <div className="error__code">
          4<img src="/pokeball-error.png" alt="pokeball" className="error__image-error" />4
        </div>
        <div className="error__text">PAGE NOT FOUND</div>
      </div>
    </div>
  );
}
