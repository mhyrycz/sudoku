export type GRID = [ROW, ROW, ROW, ROW, ROW, ROW, ROW, ROW, ROW];

export type NUMBERS = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type N = 0 | NUMBERS;

type ROW = [N, N, N, N, N, N, N, N, N];

export type SQUARE = [SQUARE_ROW, SQUARE_ROW, SQUARE_ROW];

type SQUARE_ROW = [N, N, N];
