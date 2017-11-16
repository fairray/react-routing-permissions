import React from 'react';
import {Dimmer, Loader} from 'semantic-ui-react';
const Spinner = () => (
  <Dimmer active>
    <Loader size='big'>Loading</Loader>
  </Dimmer>
);
export default Spinner;