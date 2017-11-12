import React, {Component} from 'react';
import {
  Button,
  Form,
  Header,
  Icon,
  Modal,
  Popup,
  Segment,
} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Page from 'styles/Page';
import FormContainer from 'features/form-components/FormContainer';
import ErrorAwareField from 'features/validation/ErrorAwareField';

const genderOptions = [
  {key: 'm', text: 'Male', value: 'male'},
  {key: 'f', text: 'Female', value: 'female'},
];

class ExampleForm extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
    },
    modalOpen: false,
  };

  _handleTextChanged = (event, {name, value}) => {
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  };

  _renderForm = () => {
    const {user} = this.state;
    return (
      <FormContainer>
        <Form onSubmit={this._save} size="large" autoComplete="off">
          <Segment vertical>
            <Header as="h2">Personal Information</Header>
            <Form.Group widths="equal">
              <ErrorAwareField>
                <Form.Input
                  id="example-form-firstName"
                  name="firstName"
                  label="First Name"
                  placeholder="Joe"
                  value={user.firstName}
                  onChange={this._handleTextChanged}
                />
              </ErrorAwareField>
              <ErrorAwareField>
                <Form.Input
                  id="example-form-lastName"
                  name="lastName"
                  label="Last Name"
                  placeholder="Dirte´"
                  value={user.lastName}
                  onChange={this._handleTextChanged}
                />
              </ErrorAwareField>
            </Form.Group>
            <Form.Group>
              <ErrorAwareField width={8}>
                <Form.Select
                  id="example-form-gender"
                  name="gender"
                  label="Gender"
                  options={genderOptions}
                  value={user.gender}
                  placeholder="Gender"
                />
              </ErrorAwareField>
              <ErrorAwareField width={8}>
                <Form.Input
                  id="example-form-dob"
                  name="dob"
                  label="Date of Birth"
                  placeholder="1/1/1999"
                  value={user.dob}
                  onChange={this._handleTextChanged}
                />
              </ErrorAwareField>
            </Form.Group>
          </Segment>
          <Segment vertical>
            <Header as="h2">Address</Header>
            <ErrorAwareField>
              <Form.Input
                id="example-form-address1"
                name="address1"
                label="Address 1"
                placeholder="123 Street..."
                value={user.address1}
              />
            </ErrorAwareField>
            <ErrorAwareField>
              <Form.Input
                id="example-form-address2"
                name="address2"
                label="Address 2"
                placeholder="Apt 202"
                value={user.address2}
              />
            </ErrorAwareField>
            <Form.Group>
              <ErrorAwareField width={8}>
                <Form.Input
                  id="example-form-city"
                  name="city"
                  label="City"
                  placeholder="Baton Rouge"
                  value={user.city}
                  onChange={this._handleTextChanged}
                />
              </ErrorAwareField>
              <ErrorAwareField width={4}>
                <Form.Input
                  id="example-form-state"
                  name="state"
                  label="State"
                  placeholder="LA"
                  value={user.state}
                  onChange={this._handleTextChanged}
                />
              </ErrorAwareField>
              <ErrorAwareField width={4}>
                <Form.Input
                  id="example-form-zipcode"
                  name="zipcode"
                  label="Zip Code"
                  placeholder="90210"
                  value={user.zipcode}
                  onChange={this._handleTextChanged}
                />
              </ErrorAwareField>
            </Form.Group>
          </Segment>
          <ErrorAwareField />
          <Form.Field>
            <Button type="submit" primary>
              Create
            </Button>
            <Button basic as={Link} to="/">
              Cancel
            </Button>
          </Form.Field>
        </Form>
      </FormContainer>
    );
  };

  _renderHeader = () => (
    <Page.HeaderWithActions title="Example Form">
      <Popup
        trigger={
          <Button
            basic
            primary
            onClick={() => this.setState({modalOpen: true})}
            icon="add user"
          />
        }
        content="Assign Request"
        position="bottom center"
        inverted
        on={['hover', 'click']}
      />
    </Page.HeaderWithActions>
  );

  render() {
    return (
      <Page.Basic header={this._renderHeader()}>
        {this._renderForm()}
        <Modal
          open={this.state.modalOpen}
          onClose={() => this.setState({modalOpen: false})}
          basic
          size="small"
        >
          <Header icon="browser" content="Assign Request" />
          <Modal.Content>
            <h3>You will no longer have access to this.</h3>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color="green"
              onClick={() => this.setState({modalOpen: false})}
              inverted
            >
              <Icon name="checkmark" /> Got it
            </Button>
            <Button
              color="red"
              onClick={() => this.setState({modalOpen: false})}
              inverted
            >
              <Icon name="close" /> Nevermind
            </Button>
          </Modal.Actions>
        </Modal>
      </Page.Basic>
    );
  }
}

export default ExampleForm;
