export const bk = {
  spMin: 320,
  sp: 375,
  spLarge: 520,
  spMax: 768,
  tbMin: 769,
  tbMax: 959,
  pcMin: 960,
  pc: 1200,
  pcMidium: 1440,
  pcLarge: 1600,
  pcHuge: 2000,
};

export const mq = {
  spMin_gt: `(min-width: ${bk.spMin}px)`,
  spLarge_lt: `(max-width: ${bk.spLarge}px)`,
  spLarge_gt: `(min-width: ${bk.spLarge}px)`,
  spLarge_gt_spMax_lt: `(min-width: ${bk.spLarge}px) and (max-width: ${bk.spMax}px)`,
  spMax_lt: `(max-width: ${bk.spMax}px)`,
  tbMin_gt: `(min-width: ${bk.tbMin}px)`,
  tbMax_lt: `(max-width: ${bk.tbMax}px)`,
  pcMin_gt: `(min-width: ${bk.pcMin}px)`,
  pc_lt: `(max-width: ${bk.pc}px)`,
  pc_gt: `(min-width: ${bk.pc}px)`,
  pcMidium_lt: `(max-width: ${bk.pcMidium}px)`,
  pcMidium_gt: `(min-width: ${bk.pcMidium}px)`,
  pcLarge_lt: `(max-width: ${bk.pcLarge}px)`,
  pcLarge_gt: `(min-width: ${bk.pcLarge}px)`,
  pcHuge_lt: `(max-width: ${bk.pcHuge}px)`,
  pcHuge_gt: `(min-width: ${bk.pcHuge}px)`,
};

export const COLORS = {
  primary: '#f83610',
  secondary: '#f9d423',
  gray_dark: '#555',
  gray_midium: '#707070',
  gray_light: '#aaa',
  gray_pale: '#e8e8e8',
  white: '#fff',
  black: '#333',
  subject0: 'rgba(255, 255, 255, .4)',
  subject1: 'rgba(249, 212, 35, .4)',
  subject2: 'rgba(16, 90, 0, .4)',
  subject3: 'rgba(0, 103, 116, .4)',
  subject4: 'rgba(1, 34, 170, .4)',
  subject5: 'rgba(93, 0, 150, .4)',
  subject6: 'rgba(147, 2, 2, .4)',
  subject7: 'rgba(52, 52, 52, .4)',
  success: '#009f25',
  error: '#f00',
};

export const BaseTheme = {
  colors: {
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    gray_dark: COLORS.gray_dark,
    gray_midium: COLORS.gray_midium,
    gray_light: COLORS.gray_light,
    gray_pale: COLORS.gray_pale,
    white: COLORS.white,
    black: COLORS.black,
    success: COLORS.success,
    error: COLORS.error,
    subjects: {
      0: COLORS.subject0,
      1: COLORS.subject1,
      2: COLORS.subject2,
      3: COLORS.subject3,
      4: COLORS.subject4,
      5: COLORS.subject5,
      6: COLORS.subject6,
      7: COLORS.subject7,
    },
  },
  font: {
    letter: "'Courgette', cursive",
  },
};

const AppTheme = {
  light: {
    ...BaseTheme,
    bg: '#fff',
    darkBg: '#fff',
    themeColors: {
      black: COLORS.black,
      gray_pale: COLORS.gray_pale,
      gray_light: COLORS.gray_light,
      gray_midium: COLORS.gray_midium,
      gray_dark: COLORS.gray_dark,
    },
    border: 'none',
    fadeOut:
      'linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 18%,rgba(255,255,255,0) 100%)',
  },
  dark: {
    ...BaseTheme,
    bg: '#111',
    darkBg: '#000',
    themeColors: {
      black: COLORS.white,
      gray_pale: COLORS.gray_dark,
      gray_midium: COLORS.gray_light,
      gray_dark: COLORS.gray_light,
    },
    border: '1px solid #555',
    fadeOut:
      'linear-gradient(to bottom, rgba(17,17,17,1) 0%,rgba(17,17,17,1) 50%,rgba(17,17,17,0) 100%)',
  },
};

export default AppTheme;
