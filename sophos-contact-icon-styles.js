import { css } from 'lit-element';

export default css`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    padding: 50px;
    transition: 0.5s;
    z-index: 1;
  }

  .icon-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    z-index: -1;
    transform: translateY(0px);
    transition: 0.5s;
  }

  #main-container {
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
  }

  #main-container:hover {
    width: 140px;
    height: 140px;
  }

  #main-container:hover .icon-container {
    transition: 0.5s;
  }

  #main-container:hover .icon-container:nth-child(1) {
    transform: rotate(-60deg) translateY(-120px);
  }

  #main-container:hover .icon-container:nth-child(2) {
    transition-delay: 0.1s;
    transform: rotate(-30deg) translateY(-120px);
  }

  #main-container:hover .icon-container:nth-child(3) {
    transition-delay: 0.2s;
    transform: rotate(0deg) translateY(-120px);
  }

  #main-container:hover .icon-container:nth-child(4) {
    transition-delay: 0.3s;
    transform: rotate(30deg) translateY(-120px);
  }

  #main-container:hover .icon-container:nth-child(5) {
    transition-delay: 0.4s;
    transform: rotate(60deg) translateY(-120px);
  }

  .icon {
    transition: 0.5s;
    width: 50px;
    height: 50px;
  }

  .icon-container:hover .icon {
    transform: rotate()(360deg);
  }
`;