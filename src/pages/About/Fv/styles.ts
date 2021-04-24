import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  position: relative;
  height: 260px;
  overflow: hidden;
  .bg {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 0;
    width: 110%;
    height: 110%;
    transform: translate(-50%, -50%);
    background: url('/img/about/about_fv.jpg');
    background-size: cover;
    background-position: center;
    filter: blur(8px);
    transform-origin: left center;
  }
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  .title {
    position: absolute;
    left: calc(50% + 30px);
    top: 50%;
    z-index: 2;
    display: block;
    width: 100%;
    text-align: center;
    padding: 0 20px;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    line-height: 1.6em;
    letter-spacing: 0.08em;
    color: ${({ theme }) => theme.colors.white};
    text-shadow: #000 0px 2px 5px;
    opacity: 0;
    transition: opacity 1s 0.3s, left 1s 0.3s;
    .name {
      font-size: 120%;
      font-weight: 500;
      span {
        font-size: 60%;
      }
    }
    &.-show {
      opacity: 1;
      left: 50%;
    }
  }

  @media ${mq.tbMin_gt} {
    .title {
      font-size: 2.4rem;
      .notPc {
        display: none;
      }
    }
  }
`;
