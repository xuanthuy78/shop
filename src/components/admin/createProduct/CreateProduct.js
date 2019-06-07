import React, { Component } from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Card, CardBody, Button, Col, Container, Row } from "reactstrap";

export class CreateProduct extends Component {
  render() {
    return (
      <div className='mt-5'>
        <Container>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name product"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="price">Price</Label>
                      <Input
                        type="text"
                        name="price"
                        id="price"
                        placeholder="Price product"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="price">Description</Label>
                      <Input
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Description product"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="categories">Categories</Label>
                      <Input type="select" name="categories" id="categories">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleFile">Images</Label>
                      <Input type="file" name="file" id="exampleFile" />
                      <FormText color="muted">
                        This is some placeholder block-level help text for the
                        above input. It's a bit lighter and easily wraps to a
                        new line.
                      </FormText>
                    </FormGroup>
                    <Button color="primary">Submit</Button>
                    <Button className="ml-3">Go Back</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CreateProduct;
