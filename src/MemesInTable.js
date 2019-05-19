import React from 'react'
import { Grid } from 'semantic-ui-react'
import MemesInRow from './MemesInRow'

const MemesInTable = (props) => {

  return(
    <div className="column padding-reset top-margin">
      <Grid container columns={4} centered>
        <Grid.Row container verticalAlign='middle'><br/><h1>Welcome to D3 Meme Generator</h1></Grid.Row>
        <MemesInRow memes={props.memes}/>
      </Grid>
    </div>
  )
}

export default MemesInTable
