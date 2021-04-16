import { css } from 'styled-components';

export const base = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  & > .iconArea {
    width: 90px;
  }
  & > .info {
    position: relative;
    & > .linkToEdit {
      position: absolute;
      right: 0;
      top: 0;
      transform: translate(30%, -30%);
    }
    & > .title {
      display: block;
      width: 100%;
      height: 2.8em;
      margin-bottom: 8px;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    width: calc(100% - 100px);
  }
  & > .date {
    width: 100%;
    font-size: 1rem;
    color: ${({ theme }) => theme.themeColors.gray_midium};
    padding-top: 0.8em;
  }
`;
