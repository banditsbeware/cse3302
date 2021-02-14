// david rademacher
// 1001469394
// due 2.24.2020

// 1. 
console.log('\npart 1');

// create inputTable
const inputTable = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// log results from part 1
console.log(`  inputTable: [${inputTable}]`);

// 2.
console.log('\npart 2');

// multiplication functions
const multiply = x => y => x * y;       // generate multiplier function
const five      = n => multiply(n)(5);  // n times 5
const thirteen  = n => multiply(n)(13); // n times 13
const square    = n => multiply(n)(n);  // n squared

// return the result of applying f to each element of arr
const map = (arr, f, res=[]) => {
    if (res.length === arr.length) return res;
    res.push(f(arr[res.length]));
    return map(arr, f, res);
}

// apply the appropriate functions to inputTable
const fiveTable     = map(inputTable, five);
const thirteenTable = map(inputTable, thirteen);
const squaresTable  = map(inputTable, square);

// log results from part 2
console.log(`  fiveTable: [${fiveTable}]`);
console.log(`  thirteenTable: [${thirteenTable}]`);
console.log(`  squaresTable: [${squaresTable}]`);

// 3.
console.log('\npart 3');

// generate a range
const range = (start, end, step=1, targetArr=[]) => {
    if (start >= end) return targetArr;
    targetArr.push(start);
    return range(start+step, end, step, targetArr);
}

// filter items from array that don't satisfy condition
const filter = (arr, cond, targetArr=[], i=0) => {
    if (i >= arr.length) return targetArr;
    if (cond(arr[i])) targetArr.push(arr[i]);
    return filter(arr, cond, targetArr, ++i);
} 

// returns true if n is odd
const isOdd = n => n % 2 !== 0;

// odd multiples of 5 between 1 and 100: 5, 15, 25, ...
const demo1 = filter(range(0, 100, 5), isOdd);

// log results from part 3
console.log(`  odd multiples of 5: [${demo1}]`);

//4.
console.log('\npart 4');

// returns true if n is even
const isEven = n => n % 2 === 0;

// sum of elements in arr
const sum = (arr, i=0, acc=0) => {
    if (i >= arr.length) return acc;
    acc += arr[i];
    return sum(arr, ++i, acc);
}

// sum of even multiples of 7 between 1 and 100: 14 + 28 + ...
const demo2 = sum(filter(range(0, 100, 7), isEven));

// log results from part 4
console.log(`  sum of even multiples of 7: ${demo2}`);

// 5.
console.log('\npart 5');

// curried volume function
const cylinderVolume = h => r => 3.14 * r * r * h;

// call curried volume function
const v = cylinderVolume(10)(5);

// log results from part 5
console.log(`  cylinder volume: ${v}`);

// 6.
console.log('\npart 6');

// tag generator function
const tags = (open, close) => text => open + text + close;

// usage of tags() to create wrappers for different elements
const table = tags('<table>', '</table>');  // <table> elements
const tr = tags('<tr>', '</tr>');           // <tr> elements
const th = tags('<th>', '</th>');           // <th> elements
const td = tags('<td>', '</td>');           // <td> elements

const html = table(tr(th('Middle')+th('Time')+th('Freq')) + 
                   tr(td('petrol')+td('four')+td('hand')) + 
                   tr(td('square')+td('pint')+td('bead')));

// log results from part 6
console.log(`  html string: "${html}"`);

// 7.
console.log('\npart 7');

// 8.
console.log('\npart 8');

// define functions which parameterize 'multiple' 
const genericDemo1 = multiple => filter(range(0, 100, multiple), isOdd);
const genericDemo2 = multiple => sum(filter(range(0, 100, multiple), isEven));

// log results from part 8
console.log(`  odd multiples of 4: [${genericDemo1(4)}]`);
console.log(`  sum of even multiples of 4: ${genericDemo2(4)}`);

