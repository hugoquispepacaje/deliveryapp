import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  left: {
    textAlign: 'left',
    fontSize: '16px',
    paddingLeft: '25px'
  },
  right: {
    textAlign: 'right',
    fontSize: '16px',
    paddingRight: '25px'
  },
  rightImportant: {
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: '16px',
    paddingRight: '25px'
  }
}));

const TotalsLines = ({ title, amount, isImportant }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography className={classes.left}>{title}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography className={isImportant ? classes.rightImportant : classes.right}>{amount}</Typography>
      </Grid>
    </Grid>
  );
}
export default TotalsLines;