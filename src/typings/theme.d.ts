//https://styled-components.com/docs/api#create-a-declarations-file

import 'styled-components';

import { theme } from '../styles';

type Theme = typeof theme;

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
