/** @jsx createElement */
import {createElement} from 'react';
import {Container, Dimmer, Loader, Header} from 'semantic-ui-react';
import glamorous from 'glamorous';
import {contentBase} from 'styles';

const DimmableWrapper = glamorous(Dimmer.Dimmable)({
  ...contentBase,
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
});

const MetaContent = glamorous(Container)({
  marginBottom: 5,
  position: 'absolute',
  top: -35,
  left: 0,
  right: 0,
});

const Page = ({children, metaContent, title, ...props}) => {
  const loading = props.loading;
  delete props.loading;
  return (
    <DimmableWrapper as={Container} dimmed={loading} {...props}>
      {!!title && <Header as="h1">{title}</Header>}
      {!!metaContent && <MetaContent>{metaContent}</MetaContent>}
      {children}
      <Dimmer active={loading} inverted>
        <Loader>Loading...</Loader>
      </Dimmer>
    </DimmableWrapper>
  );
};

export default Page;
