import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PublicLayout from '../layouts/PublicLayout';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react';

class LoginPage extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired
  }
  login = () => {
    this
      .props
      .login();
  }
  render() {
    return (
      <PublicLayout>
        <Grid
          textAlign='center'
          style={{
          height: '100%'
        }}
          verticalAlign='middle'>
          <Grid.Column style={{
            maxWidth: 450
          }}>
            <Header as='h2' textAlign='center'>
              Log-in to your account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'/>
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'/>

                <Button primary fluid size='large' onClick={this.login}>Login</Button>
              </Segment>
            </Form>
            <Message>
              New to us?
              <a href='#'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </PublicLayout>
    )
  }
}

export default LoginPage;
