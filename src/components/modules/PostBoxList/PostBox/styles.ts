import { css } from 'styled-components';
import { WithShadow } from 'components/style/Mixins';
import { mq } from 'components/style/AppTheme';

export const base = css`
  position: relative;
  display: block;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: ${({ theme }) => theme.bg};
  ${WithShadow}
  border: ${({ theme }) => theme.border};
  & > .nav {
    position: absolute;
    z-index: 1;
    right: 5px;
    top: 5px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    & > .CircleButton,
    & > a {
      margin-left: 5px;
    }
  }
  & > .link {
    display: flex;
    flex-wrap: wrap;
    color: ${({ theme }) => theme.colors.black};
    height: 100%;
    & > .status {
      position: absolute;
      left: 5px;
      top: 5px;
      z-index: 1;
    }
    & > .imageArea {
      position: relative;
      width: 100%;
      height: 135px;
      background: ${({ theme }) => theme.colors.gray_light};
      overflow: hidden;
      & > .image {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center;
      }
    }
    & > .info {
      display: flex;
      flex-wrap: wrap;
      align-items: space-between;
      align-content: space-between;
      justify-content: space-between;
      width: 100%;
      padding: 10px;
      & > .title {
        width: 100%;
        margin-bottom: 16px;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      & > .user {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        align-content: center;
      }
      & > .status {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        align-content: center;
        & > .StatusCounter {
          margin-right: 5px;
        }
      }
    }
  }

  @media ${mq.spLarge_gt_spMax_lt} {
    & > .link {
      & > .imageArea {
        width: 40%;
        height: 150px;
      }
      & > .info {
        width: 60%;
        padding: 15px;
      }
    }
  }

  @media ${mq.tbMin_gt} {
    border-radius: 5px;
    & > .link {
      & > .imageArea {
        height: 150px;
      }
      & > .info {
        padding: 15px;
        & > .title {
          margin-bottom: 24px;
        }
      }
      & > .imageArea {
        & > .image {
          transition: transform 1s ease-in-out;
        }
      }
      &:hover {
        & > .imageArea {
          & > .image {
            transform: scale(1.1);
          }
        }
      }
    }
  }
`;
