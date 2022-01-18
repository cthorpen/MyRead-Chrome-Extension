import React, {useState, useEffect} from "react";
import {Container, Form, Button, Navbar} from "react-bootstrap";
import CreatableSelect from 'react-select/creatable';
import getUrl from './GetUrl.js';
import './App.css';

function App() {

  return (
    <Container className="App" >
       
      <Navbar className="App-header"> 
          <img src="./wave.png" />
          <h1>MyRead</h1>
      </Navbar>
      
      <div>
        <h2>Curate a new post - while you're browsing!</h2>
      </div>

      <Form className="all-forms">
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" placeholder="Enter Title"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" as="textarea" placeholder="Enter Description" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Link</Form.Label>
          <Form.Control name="url"  type="url" placeholder="URL goes here" /> 
        </Form.Group>

        <Form.Group>
          <Form.Label>Category</Form.Label>
          <CreatableSelect
              name="category"
          />
          <Form.Control hidden />
        </Form.Group>

        <Button className="rounded-pill" type = "primary">Save Post</Button>

      </Form>
    </Container>
  );
}

export default App;
