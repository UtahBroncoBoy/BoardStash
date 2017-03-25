import Billboard from './Billboard';

let board103 = new Billboard(103, undefined, 7000, 5000);
let board105 = new Billboard(105, 'Above Average', 8000, 6000);
let board106 = new Billboard(106, 'Above Average', 8000, 6000);
let board107 = new Billboard(107,'Below Average', 6000, 4000);
let board111 = new Billboard(111, 'Low', 4000, 3000);

let data = [board103, board105, board106, board107, board111];

export default data;