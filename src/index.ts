import { tProducts } from 'types';
import { getParsedData } from './utils/common';

const apiResponse = [
  {
    id: 1,
    name: 'Table',
    type: 'FURNITURE',
    quantity: 5,
    additionalProp1: 'test',
  },
  {
    id: 2,
    name: 'The Lord of the Rings',
    type: 'BOOK',
    quantity: 10,
    additionalProp2: 1,
  },
];

const products = getParsedData(apiResponse, tProducts);
console.log(`products`, products);
