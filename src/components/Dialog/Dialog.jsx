import React from 'react';
import 'date-fns'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { Grid, TextField } from '@material-ui/core';
import './Dialog.css'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
export default function DialogBox(props) {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [publisher, setPublisher] = React.useState('');
  const [titleError, setTitleError] = React.useState('');
  const [descriptionError, setDescriptionError] = React.useState('');
  const [priceError, setPriceError] = React.useState('');
  const [publishDate,setPublishDate] = React.useState('');


  const addTitle = (e, value) => {
    const titleValue = e.target.value
    setTitle(titleValue)

  };
  const addDescription = (e) => {
    const descriptionValue = e.target.value
    setDescription(descriptionValue)

  };
  const addPrice = (e) => {
    const priceValue = e.target.value
    setPrice(priceValue)
  }
  const onDateChange = (e) => {
    const publishedDate = e.target.value.slice(0,4)
    setPublishDate(publishedDate)
  }
  const addPublisher = (e) => {
    const publisherValue = e.target.value
    setPublisher(publisherValue)
  }
  const onSave = () => {
    setTitleError('');
    setDescriptionError('');
    setPriceError('')
    if (title.length < 3 || title.length > 50) {
      setTitleError("Title should contain minimun 3 letters and maximum 50 letters")
      return
    }
    else if (description.length < 300) {
      setDescriptionError("Description should contain  maximum 300 letters")

    }
    else if (!price || isNaN(parseInt(price)) || parseInt(price) < 50) {
      setPriceError("Price should not be less than 50")

    }
    else {
      props.addBook({
        name: title,
        description: description,
        price: parseInt(price),
        publisher: publisher,
        publish_year:publishDate
      })
    }
  }
  return (
    <div>
      <Dialog fullWidth maxWidth="sm" scroll='paper' onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.panel}>
        <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
          {'Add Book'}
        </DialogTitle>
        <DialogContent dividers>
          <Grid item xs={12} sm={8} className={'textField'}>
            <TextField id="outlined-basic" label="Title" variant="outlined" onChange={addTitle} />
            <p className={'error'}> {titleError}</p>
          </Grid>
          <Grid item xs={12} sm={8} className={'textField'}>
            <TextField id="outlined-basic" label="Description" variant="outlined" multiline onChange={addDescription} />
            <p className={'error'}>{descriptionError}</p>
          </Grid>
          <Grid item xs={12} sm={8} className={'textField'}>
            <TextField id="outlined-basic" label="Price" variant="outlined" onChange={addPrice} />
            <p className={'error'}>{priceError}</p>
          </Grid>
          <Grid item xs={12} sm={8} className={'textField'}>
            <TextField id="outlined-basic" label="Publisher" variant="outlined" onChange={addPublisher} />
          </Grid>
          <TextField
            id="date"
            label="Publish Date"
            type="date"
            onChange={onDateChange}
            // defaultValue="2017-05-24"
            // className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />

          {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid item>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              views={['year', 'month', 'date']}
              // value={selectedDate}
              format="dd/MM/yyyy"
              // onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider> */}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

}
