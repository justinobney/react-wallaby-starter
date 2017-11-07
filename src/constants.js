export const APP_NAME = 'ReactStarter';
export const COMPANY_NAME = 'Elevator3, LLC';
export const RESPONSIVE_SIZES = {
  maxTablet: {
    maxWidth: 961,
  },
  minComputer: {
    minWidth: 962,
  },
};

function enums(...args) {
  return args.reduce(
    (acc, key) => ({
      ...acc,
      [key]: Symbol(key),
    }),
    {}
  );
}

// prettier-ignore
export const USER_STATUSES = enums(
  'ACTIVE',
  'REQUIRE_PROFILE',
  'LOCKED'
);
