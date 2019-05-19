import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Button } from 'semantic-ui-react'


const Preview = (props) => {
  function handleDelete(){
    props.onDelete(props.meme.id)
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
            <Link to={`/memes/${props.meme.id}/edit`}><Button basic color='teal'>Edit Meme</Button></Link>
          </Grid>
    </div>
  )
}

export default Preview
