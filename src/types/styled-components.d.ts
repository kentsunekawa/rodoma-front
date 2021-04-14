import "styled-components"
import AppTheme from "../components/style/AppTheme"

type Theme = typeof AppTheme.dark | AppTheme.light;

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}