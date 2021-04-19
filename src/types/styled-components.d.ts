import AppTheme from '../components/style/AppTheme';

type Theme = typeof AppTheme.dark | AppTheme.light;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}
