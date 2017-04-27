/** @jsx createElement */
import {createElement} from 'react';
import {Container, Header} from 'semantic-ui-react';
import glamorous from 'glamorous';
import {colors, contentBase} from '../styles';

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
