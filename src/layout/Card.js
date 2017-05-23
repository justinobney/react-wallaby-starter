/** @jsx createElement */
import {createElement} from 'react';
import {Container, Header} from 'semantic-ui-react';
import glamorous from 'glamorous';
import {matcher, serializer} from 'jest-glamor-react';

import {colors, contentBase} from 'styles';

expect.addSnapshotSerializer(serializer);
expect.extend(matcher);

const Wrapper = glamorous(Container)(contentBase);
const Title = glamorous(Header)({
  color: `${colors.brandPrimary} !important`,
});

const Card = ({children, title, ...props}) => (
  <Wrapper {...props}>
    {!!title && <Title as="h1">{title}</Title>}
    {children}
  </Wrapper>
);

export default Card;
