import React, {Component} from 'react';
import {Button, Form, Header, Label, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {BasicPage, Flex, Fill, Box} from 'styles';
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
  };

  _handleTextChanged = (event, {name, value}) => {
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  };

  render() {
    const {user} = this.state;

    return (
      <BasicPage
        header={
          <Flex>
            <Fill>Example Form</Fill>
            <Flex>
              <Box>
                <Label as="a" content="Mail" icon="mail" />
                <Label as="a" content="People" icon="user" />
              </Box>
            </Flex>
          </Flex>
        }
      >
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
              <ErrorAwareField>
                <Form.Select
                  id="example-form-gender"
                  name="gender"
                  label="Gender"
                  options={genderOptions}
                  value={user.gender}
                  placeholder="Gender"
                />
              </ErrorAwareField>
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
                <Form.Input
                  id="example-form-city"
                  name="city"
                  label="City"
                  placeholder="Baton Rouge"
                  value={user.city}
                  onChange={this._handleTextChanged}
                  width={8}
                />
                <Form.Input
                  id="example-form-state"
                  name="state"
                  label="State"
                  placeholder="LA"
                  value={user.state}
                  onChange={this._handleTextChanged}
                  width={4}
                />
                <Form.Input
                  id="example-form-zipcode"
                  name="zipcode"
                  label="Zip Code"
                  placeholder="90210"
                  value={user.zipcode}
                  onChange={this._handleTextChanged}
                  width={4}
                />
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
      </BasicPage>
    );
  }
}

export default ExampleForm;
