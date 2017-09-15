import lowerFirst from 'lodash/lowerFirst';

export const objectMap = errors =>
  errors.reduce((acc, validationError) => {
    acc[lowerFirst(validationError.propertyName)] =
      acc[lowerFirst(validationError.propertyName)] || [];
    acc[lowerFirst(validationError.propertyName)].push(
      validationError.errorMessage
    );
    return acc;
  }, {});
