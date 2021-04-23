import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 24px;
  background: #fff;
  border-radius: 10px;

  .image {
    display: flex;
    align-items: center;
    height: 120px;
    width: 100%;
    img {
      width: 100%;
      max-width: 112px;
      margin: 0 auto;
    }
  }
  .title {
    display: block;
    width: 100%;
    margin-top: 10px;
    text-align: center;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary};
    span {
      display: block;
      margin-top: 5px;
      font-size: 85%;
    }
  }

  @media ${mq.tbMin_gt} {
    padding: 24px 16px;
  }
  @media ${mq.pcMin_gt} {
    .title {
      font-size: 1.8rem;
      margin-top: 16px;
      span {
        margin-top: 8px;
      }
    }
  }
`;
