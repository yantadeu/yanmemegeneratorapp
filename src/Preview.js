import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Button } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

state = {
  redirect: false
}
setRedirect = () => {
  this.setState({
    redirect: true
  })
}
renderRedirect = () => {
  if (this.state.redirect) {
    return <Redirect to='/target' />
  }
}


const Preview = (props) => {
  function handleDelete(){
    props.onDelete(props.meme.id)
  }

  function handleEdit(){
    if (this.state.redirect) {
      return <Redirect to={`/memes/${props.meme.id}/edit`}/>
    }
  }

  function setRedirect(){
    this.state.redirect = true;
  }

  return (
    <div>
      <Grid centered className="top-margin bottom-margin">
        <Grid.Row container centered><br/>
            <h1>PREVIEW D3 MEME</h1>
          </Grid.Row>
          <Grid.Row verticalAlign='middle' centered>
            <div className="wrapper">
              <img className="preview-image" alt="" src={props.meme.image_url} />
              <div className="display-text-center">
                <div id="display-text-top">{props.meme.text_top.toUpperCase()}</div>
                <div id="display-text-bottom">{props.meme.text_bottom.toUpperCase()}</div>
              </div>
            </div><br/>
          </Grid.Row>
            <Button basic color='orange' onClick={handleDelete}>Delete Meme</Button>
            {handleEdit()}
            <Button basic color='teal' onClick={setRedirect}>Edit Meme</Button>

            <Link to='/memes'><Button color='teal'>Create Meme</Button></Link>
          </Grid>
    </div>
  )
}

export default Preview
