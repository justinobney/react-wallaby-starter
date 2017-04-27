import glamorous from 'glamorous';

export const colors = {
  brandPrimary: '#00573d',
  errorText: '#9F3A38',
  contentBackground: '#FFF',
};

export const boxSizing = {
  contentPadding: 20,
  contentSpacing: 20,
};

export const boxShadow = {
  boxShadow: '0 0 2px rgba(0, 0, 0, 0.5)',
};

export const contentBase = {
  ...boxShadow,
  margin: `0 auto ${boxSizing.contentSpacing}px`,
  padding: boxSizing.contentPadding,
  border: 'solid 1px rgba(0, 0, 0, 0.2)',
  background: colors.contentBackground,
};

export const flexCol = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
};

// common styled components
export const Anchor = glamorous.a({
  color: colors.brandPrimary,
});

export const Col = glamorous.div(flexCol);
