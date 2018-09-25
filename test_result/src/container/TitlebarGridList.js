import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import tileData from './tileData';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ReplyBorder from '@material-ui/icons/Redo';
import Sun from '@material-ui/icons/WbSunny';
import CardHeader from '@material-ui/core/CardHeader';
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
require("bootstrap/less/bootstrap.less");


class CenteredGrid extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'CenteredGrid';
			 this.state = {
	      activePage: 1
	    };
	}

	handlePageChange(pageNumber) {
	    console.log(`active page is ${pageNumber}`);
    	this.setState({activePage: pageNumber});
  	}
	
	mouseOver(){
        this.setState({hover: true});
    	
    }
    
    mouseOut() {
        this.setState({hover: false});
    }

    render() {
    	const { classes } = this.props;
		  return (
		    <div className={classes.root}>
		      <Grid container spacing={24}>
		        {tileData.map(val => (
			        <Grid item xs={3} key={val.id} >
			          	<Card className={classes.card} onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)}>
			          	  <CardHeader 
			          	  	title = {val.name}
			          	  />
					      <CardMedia
					        component="img"
					        className={classes.media}
					        height="140"
					        image= {val.jpeg_file_url}
					        title= {val.name}
					        subheader={val.name}
					      />
					    </Card>
			        </Grid>
		         ))}
		      </Grid>
		      
		      <div className="page">
		      	<Pagination
		          activePage={this.state.activePage}
		          itemsCountPerPage={10}
		          totalItemsCount={450}
		          pageRangeDisplayed={5}
		          onChange={this.handlePageChange}
		        />
		      </div>
		    </div>
		  );
    }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop : '5%'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
});

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);