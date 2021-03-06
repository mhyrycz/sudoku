import styled, { css } from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Row = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-flow: row;

		&:nth-child(1) {
			border-top: solid 4px ${theme.colors.black};
		}
		&:nth-child(3),
		&:nth-child(6) {
			border-bottom: solid 3px ${theme.colors.black};
		}
		&:nth-child(9) {
			border-bottom: solid 4px ${theme.colors.black};
		}

		div {
			:nth-child(1) {
				border-left: solid 5px ${theme.colors.black};
			}
			:nth-child(3),
			:nth-child(6) {
				border-right: solid 4px ${theme.colors.black};
			}
			:nth-child(9) {
				border-right: solid 5px ${theme.colors.black};
			}
		}
	`};
`;
