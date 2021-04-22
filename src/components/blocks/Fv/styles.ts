import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  position: relative;
  margin-top: 60px;
  width: 100%;
  height: 160px;
  background: #ddd;
  overflow: hidden;

  .changeButton {
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 3;
    background: rgba(0, 0, 0, 0.2);
  }

  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
  }
  .bg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 110%;
    height: 110%;
    z-index: 0;
    span {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      background-position: center;
      background-size: cover;
      &.-active {
        z-index: 1;
      }
    }
  }
  .titleArea {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 90%;
    z-index: 2;
  }

  .title {
    p {
      display: block;
      font-size: 2rem;
      line-height: 1.2em;
      margin-bottom: 12px;
      font-family: ${({ theme }) => theme.font.josefin};
      color: #fff;
      text-shadow: #000 0px 2px 5px;
    }
    span {
      display: block;
      font-size: 1.2rem;
      line-height: 1.4em;
      letter-spacing: 0.1em;
      color: #fff;
      text-shadow: #000 0px 2px 5px;
    }
  }

  .name {
    font-size: 1.2rem;
    margin-top: 16px;
    color: #fff;
    font-family: ${({ theme }) => theme.font.josefin};
    text-shadow: #000 0px 2px 5px;
    &:before {
      padding-right: 1em;
      content: '-';
    }
    &:after {
      padding-left: 1em;
      content: '-';
    }
  }

  @media ${mq.tbMin_gt} {
    height: 240px;
    .overlay {
      display: none;
    }
    .bg {
      span {
        filter: blur(8px);
      }
    }
    .title {
      p {
        font-size: 3rem;
        margin-bottom: 8px;
      }
      span {
        font-size: 1.4rem;
      }
    }
    .name {
      font-size: 1.4rem;
    }
  }

  @media ${mq.pc_gt} {
    height: 340px;
    .title {
      p {
        font-size: 4rem;
        margin-bottom: 16px;
      }
    }
    .name {
      margin-top: 24px;
      font-size: 1.4rem;
    }
  }
`;
