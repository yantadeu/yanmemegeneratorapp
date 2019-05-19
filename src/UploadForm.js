import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import request from 'superagent'
import { Grid, Input, Form, Button} from 'semantic-ui-react'

const CLOUDINARY_UPLOAD_PRESET = 'yzgn4oob';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/devgo/image/upload';

class UploadForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      uploadedFileCloudinaryUrl: '',
      text_top: '',
      text_bottom: ''
    }
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    })

    this.handleImageUpload(files[0])
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        })
      }
    })
  }

  handleInputChangeTop(e){
    this.setState({
      text_top: e.target.value
    })
  }

  handleInputChangeBottom(e){
    this.setState({
      text_bottom: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    const meme={
      image_url: this.state.uploadedFileCloudinaryUrl,
      text_top: this.state.text_top,
      text_bottom: this.state.text_bottom
    }
    this.props.onSubmit(meme)
  }

  render() {
    let showImage = <img alt="" src={this.state.uploadedFileCloudinaryUrl} />
    let showTextTop =  <div id='text_top'> {this.state.text_top.toUpperCase()} </div>
    let showTextBottom =  <div id='text_bottom'> {this.state.text_bottom.toUpperCase()} </div>

    return(
      <div className="ui page grid main fluid">
        <div className="row">
          <div className="column padding-reset top-margin">
            <Grid centered>
              <Grid.Row container centered><br/><h1>Create An Meme!</h1></Grid.Row>
                <Grid.Row verticalAlign='middle' centered>
                  <Form onSubmit={this.handleSubmit.bind(this)}>
                    <Grid centered>
                    <Dropzone
                      multiple={false}
                      accept="image/*"
                      onDrop={this.onImageDrop.bind(this)}>
                        <p>Drop files here, or click to select files</p>
                    </Dropzone>
                    </Grid><br/><br/><br/>
                    <Grid centered>
                      <Form.Field>
                        <label>Add top text</label>
                        <Input placeholder='enter top text' type="text" onChange={this.handleInputChangeTop.bind(this)}/><br/>
                      </Form.Field>
                      <Form.Field>
                        <label>Add bottom text</label>
                        <Input placeholder='enter bottom text' type="text" onChange={this.handleInputChangeBottom.bind(this)}/><br/>
                      </Form.Field>
                      <Form.Field>
                        <label>&nbsp;</label>
                        <Button color='teal' type="submit" value="Preview Meme">Preview Meme</Button>
                      </Form.Field>
                    </Grid>
                  </Form>
                </Grid.Row>
            </Grid> <br/><br/><br/><br/>
            <div>
              <Grid centered>
                <div className='wrapper'>
                  { this.state.uploadedFileCloudinaryUrl === '' ? null : showImage }
                <div className='display-text-center'>
                  { this.state.text_top === '' ? null : showTextTop }
                  { this.state.text_top === '' ? null : showTextBottom }
                </div>
              </div>
            </Grid>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UploadForm
