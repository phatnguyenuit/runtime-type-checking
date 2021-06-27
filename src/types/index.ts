import * as t from 'io-ts';

// Extract codec
// which means that additional properties are stripped
export const tProduct = t.exact(
  t.interface({
    id: t.number,
    name: t.string,
    quantity: t.number,
    type: t.union([t.literal('FURNITURE'), t.literal('BOOK')]),
  }),
);
export const tProducts = t.array(tProduct);

export type Product = t.TypeOf<typeof tProduct>;
export type Products = t.TypeOf<typeof tProducts>;
