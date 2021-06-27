class ValidationError extends Error {
  constructor(errors: string[]) {
    const errorMessage = errors.join(',\n');
    super(errorMessage);
  }
}

export default ValidationError;
