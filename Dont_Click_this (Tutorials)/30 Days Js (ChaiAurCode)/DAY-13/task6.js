import _ from 'lodash';

const array = [1,2,3,4,5];
const revArray = _.reverse([...array]);
console.log(`Reversed Array : ${revArray}`);