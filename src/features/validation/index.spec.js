import {objectMap} from './index';

describe('validate', () => {
  it('formatter: objectMap', () => {
    const resp = {
      result: null,
      hasErrors: true,
      errors: [
        {
          propertyName: 'Name',
          errorMessage: "'Name' should not be empty.",
        },
      ],
    };
    const formatted = objectMap(resp.errors);
    expect(formatted).toEqual({
      name: ["'Name' should not be empty."],
    });
  });
});
