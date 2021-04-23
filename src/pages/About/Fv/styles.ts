import { css, keyframes } from 'styled-components';
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
    left: 50%;
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

    .name {
      font-size: 120%;
      font-weight: 500;
      span {
        font-size: 60%;
      }
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
