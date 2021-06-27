import { isLeft } from 'fp-ts/lib/Either';
import * as t from 'io-ts';
import { PathReporter } from 'io-ts/lib/PathReporter';
import ValidationError from 'constants/ValidationError';

export const getParsedData = <TData extends any = any, O = TData, I = unknown>(
  rawData: I,
  codec: t.Type<TData, O, I>,
): TData => {
  const result = codec.decode(rawData);
  if (isLeft(result)) {
    // Use a reporter to throw an error if validation fails
    throw new ValidationError(PathReporter.report(result));
  }

  // Get the validated value and use it in your application
  return result.right;
};
