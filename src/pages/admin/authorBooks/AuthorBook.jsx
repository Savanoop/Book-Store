import React from "react";
import { withRouter } from "react-router";
import SearchAppBar from "../../../components/AppBar/AppBar";
import BookCard from "../../../components/BookCard/BookCard";
import Grid from '@material-ui/core/Grid';
import DialogBox from "../../../components/Dialog/Dialog";
import { addAuthorBooks } from "../../../actions/authorBooksAction";

class AuthorBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordError: '',
      emailError: '',
      isPasswordError: false,
      isEmailError: false,
      addPanel: false,
    };
  }

  componentDidMount() {
    this.props.getAuthorBooks(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        <SearchAppBar
          title={'Books'}
          user={'Author'}
          addButton={true}
          onAddBook={this.onAddBook}
          addBook={true}
          logOut={this.logOut}
          onSearchChange={this.onSearchChange} />
        <Grid container>
          {this.props.authorBooks.map(book =>
            <Grid item xs={12} sm={3}>
              <div className={'card'}>
                <BookCard
                  name={book.name}
                  language={book.language}
                  price={book.price}
                  id={book.id}
                  description={book.description}
                  publishYear={book.publish_year}
                  img={book.img}
                />
              </div>
            </Grid>
          )}
        </Grid>
        <DialogBox
          panel={this.state.addPanel}
          addBook={this.addBook}
          handleClose={this.closeDialog} />
      </div>
    )
  }
  onAddBook = () => {
    this.setState({
      addPanel: true
    })
  }
  logOut = () => {
    this.props.history.push('/')
  }
  addBook = (book) => {
    let bookDetails = book;
    bookDetails["author_id"] = this.props.match.params.id
    bookDetails["id"] = this.props.match.params.id;
    let addedBooks = localStorage.getItem("books")
    addedBooks = addedBooks ? JSON.parse(addedBooks) : [];
    addedBooks.push(bookDetails);
    localStorage.setItem('books', JSON.stringify(addedBooks));
    this.props.addAuthorBooks(bookDetails)
    debugger
    this.setState({
      addPanel:false
    })

  }
  closeDialog = () => {
    this.setState({
      addPanel: false
    })
  }

}
export default withRouter(AuthorBook);
