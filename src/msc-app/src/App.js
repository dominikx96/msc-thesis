import React, { useState } from 'react';
import { Button, Card, ListGroup, Form, Col, Row, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import apiConfig from './api.config.json';

function App() {
  const [currency, setValue] = useState('GBP');
  const [value, setInput] = useState('')
  const [data, setData] = useState(0)


  const onClick = () => {
    const url = `${apiConfig.ApiUrl}ConvertCurrency?currency=${currency}&value=${value}`

    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        setData(result);
      }
    )
    }

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Form>
            <Form.Group as={Col}>
            <Form.Row>
                <Form.Group>
                <Form.Label>Select Currency</Form.Label>
                <Form.Control as="select" custom onChange={(e) => setValue(e.target.value)}>
                    <option>GBP</option>
                    <option>EUR</option>
                </Form.Control>
                </Form.Group>
            </Form.Row>

              <Form.Row>
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="currency_value"
                  value={value}
                  onChange={e => setInput(e.target.value)}
                />
              </Form.Row>
            </Form.Group>
          </Form>
        </Col>

        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item className="fw-bolder">You selected {currency}</ListGroup.Item>
            <ListGroup.Item className="fw-bolder"> You selected {value}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="justify-content-md-center mt-5">
        <Button size="lg" onClick={onClick}>Get data</Button>
      </Row>
      
      <Row>
        <Card className="flex-fill px-5 py-5 mt-5">
          {data}
        </Card>
      </Row>
    </Container>
  );
}

export default App;