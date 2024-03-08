import 'styled-components';
import DefaultTheme from './default-theme';
export type ITheme = typeof DefaultTheme;
declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
