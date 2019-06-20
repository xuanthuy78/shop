import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Card, CardBody, Button, Col, Container, Row } from "reactstrap";
import UploadImages from "./uploadImages/UploadImages";
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';
import * as callApi from "../../../services/apiCaller";

export class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: 'simple',
      regular_price: '',
      description: '',
      short_description: '',
      categories: [],
      images: [],
      listCategories:[],
      fileList: [],
      isShow: false,
    }
  }

  componentDidMount() {
    //API category
    callApi
      .call("wordpress-demo/wp-json/wc/v3/products/categories", "GET", null)
      .then(res => {
        if (res && res.data) {
          let options = res.data.map(item => ({ label: item.name, value: item.id }));
          this.setState({
            ...this.state,
            listCategories: options
          })
        }
      }
    );
    
    if(this.props && this.props.match && this.props.match.params && this.props.match.params.id ) {
      let id = this.props.match.params.id;
      callApi
        .call(`wordpress-demo/wp-json/wc/v3/products/${id}`, "GET", null)
        .then(res => {
          if (res && res.data) {
            let checkedCategory = res.data.categories
            let categories = checkedCategory.map(item => item.id);
            
            let fileImages = res.data.images;
            let fileList = fileImages.map(item => ({ uid: item.id, name: item.name, status: 'done', url: item.src  }));

            this.setState({
              name: res.data.name,
              regular_price: res.data.price,
              description: res.data.description,
              short_description: res.data.short_description,
              categories: categories,
              images: res.data.images,
              fileList: fileList,
              isShow: true
            })
            window.scrollTo(0, 0);
          }
        }
      );  
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCheckbox = (checkedValues) => {
    this.setState({
      categories: checkedValues
    })
  }

  handleImages = (fileList) => {
    this.setState({
      fileList
    })
  }

  goBack = () => {
    this.props.history.goBack();
  }

  onSubmit = async (e) => {
    e.preventDefault();

    const updateImages = [];
    const newimages = []
    const fileList = this.state.fileList;
 
    fileList.forEach(image => {
      if(image.status !== 'done') {
        const formData = new FormData()

        formData.append('file', image.originFileObj);
        updateImages.push(callApi.call('wordpress-demo/wp-json/wp/v2/media', "POST", formData))
      } else {
        newimages.push({ 'src': image.url })
      }
    })
   
    const images = await Promise.all(updateImages)

    images.forEach(item => {
      newimages.push({ 'src': item.data.source_url })
    })

    const product = {
      name: this.state.name,
      type: this.state.type,
      description: this.state.description,
      short_description: this.state.short_description,
      regular_price: this.state.regular_price,
      categories: this.state.categories.map(item => ({"id": item})),
      images: newimages
    }

    if (this.props && this.props.match && this.props.match.params && this.props.match.params.id) {
      let id = this.props.match.params.id;

      callApi.call(`/wordpress-demo/wp-json/wc/v3/products/${id}`, "PUT", product)
      .then(response => {
        this.goBack()
      })
    } else {
      callApi.call('/wordpress-demo/wp-json/wc/v3/products', "POST", product)
      .then(response => {
        this.goBack()
      })
    }
  }

  render() {
    
    return (
      <div className='mt-5'>
        <Container>
          { !this.state.isShow &&
            <h2>Create Product</h2>
          }
          { this.state.isShow &&
            <h2>Update Product</h2>
          }
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <Form onSubmit={this.onSubmit} encType="multipart/form-data">
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Name product"
                        value={this.state.name}
                        onChange={this.handleInput}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="price">Price</Label>
                      <Input
                        type="text"
                        name="regular_price"
                        placeholder="Price product"
                        value={this.state.regular_price}
                        onChange={this.handleInput}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="price">Description</Label>
                      <Input
                        type="text"
                        name="description"
                        placeholder="Description product"
                        value={this.state.description}
                        onChange={this.handleInput}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="price">Short description</Label>
                      <Input
                        type="text"
                        name="short_description"
                        id="short_description"
                        placeholder="Short description"
                        value={this.state.short_description}
                        onChange={this.handleInput}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="categories">Categories</Label><br/>
                      <Checkbox.Group options={this.state.listCategories} value={this.state.categories} onChange={this.handleCheckbox}/>
                    </FormGroup>
                    <UploadImages
                      onChange = {this.handleImages}
                      fileList = {this.state.fileList}
                    />
                    
                    <br/>
                    <FormGroup>
                      <Button type="submit" color="primary">Submit</Button>
                      <Button className="ml-3" onClick={this.goBack}>Go Back</Button>
                    </FormGroup>
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
