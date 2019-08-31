import React from "react";
import { Container, Divider, Segment, Header, Grid } from "semantic-ui-react";

import Form from "./Form";

const App: React.FC = () => {
  return (
    <Container>
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550 }}>
          <Segment stacked>
            <Divider horizontal>
              <Header>
                <em>Realtime-Form-Validation</em>
              </Header>
            </Divider>
            <Form />
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default App;
