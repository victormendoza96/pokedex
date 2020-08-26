import React from 'react';
import AnimatedBg from 'components/AnimatedBg';
import Button from 'components/Button';
import './InitPage.css';
export default function InitPage() {
  return (
    <>
      <AnimatedBg />
      <div className="initPage">
        <div className="initPage__intro">
          <h1 className="initPage__Title">
            FIND <br className="d-none-mobile" />
            <span>YOUR</span> <br />
            POKEMON <br className="d-none-mobile" />
            <span>EASIER</span>
          </h1>

          <Button text="get started" to="/0" styleButton="invert" />
        </div>
        <div className="initPage__images">
          <div className="zigzag">
            <img src="/pc-app.png" alt="desk-app" className="initPage__imgpdesk" />
          </div>

          <div className="perspective">
            <img src="/mobile-app.png" alt="mobile-app" className="initPage__mobile" />
            <div className="initPage__Text">
              Take it with you to record the counters of all the various Pokémon species you come across during your
              journey as a trainer.
            </div>
          </div>
        </div>
        <div className="initPage__footer"></div>
      </div>
    </>
  );
}
