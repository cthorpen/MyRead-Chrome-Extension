import React, {useState, useEffect} from "react";
import {Container, Form, Button, Navbar} from "react-bootstrap";
import CreatableSelect from 'react-select/creatable';
import getUrl from './GetUrl.js';
import './App.css';

function App() {

  return (
    <Container className="App" >
      <Navbar className="my-nav"> 
        <h2>Create a New Post</h2>
      </Navbar>
      
      <Form className="h2">
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" placeholder="Enter Title"/>
          <Form.Control.Feedback type="invalid" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" as="textarea" placeholder="Enter Description" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Link</Form.Label>
          <Form.Control name="url"  type="url" value={ window.location.href } /> 
          <Form.Control.Feedback type="invalid" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Category</Form.Label>
          <CreatableSelect
              name="category"
          />
          <Form.Control hidden />
          <Form.Control.Feedback type="invalid" />
        </Form.Group>

        <Button className="rounded-pill" type = "primary">Save Post</Button>

      </Form>
    </Container>
  );
}

export default App;
