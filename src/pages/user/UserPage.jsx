import React from "react";
import SearchAppBar from "../../components/AppBar/AppBar";
import Grid from '@material-ui/core/Grid';
import BookCard from "../../components/BookCard/BookCard";
import './UserPage.css'
import { withRouter } from "react-router";

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordError: '',
      emailError: '',
      isPasswordError: false,
      isEmailError: false,
      userBooks: []
    };
  }
  componentDidMount() {
    this.props.getBookDetails()
    this.props.getAuthors()
    this.setState({
      userBooks: this.props.books
    })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.books !== this.props.books) {
      this.setState({
        userBooks: this.props.books
      })
    }
  }
  render() {
    return (
      <div>
        <SearchAppBar
          title={'Books'}
          user={'User'}
          onSearchChange={this.onSearchChange}
          onAuthorSearchChange={this.onAuthorSearchChange}
          isAuthor={true}
          logOut={this.logOut} />

        {this.state.userBooks.map(book =>
          <div className={'card'}>
            <Grid item xs={12} sm={4}>
              <BookCard
                name={book.name}
                language={book.language}
                price={book.price}
                id={book.id}
                description={book.description}
                publishYear={book.publish_year}
              />
            </Grid>
          </div>
        )}
      </div>
    )
  }
  onAuthorSearchChange = (e) => {
    const query = e.target.value;
    if (query) {
      let searchedAuthor = this.props.allAuthors.find(author => author.author_name.toLowerCase().indexOf(query.toLowerCase()) > -1)
      this.setState({
        userBooks: this.props.books.filter(author => author.author_id.toLowerCase().indexOf(searchedAuthor && searchedAuthor.id.toLowerCase()) > -1)
      })
    }
    else{
      this.setState({
        userBooks: this.props.books
      })
    }

  }
  onSearchChange = (e, value, key) => {
    const query = e.target.value;
    // onAuthorSearch(query)
    this.setState({
      userBooks: this.props.books.filter(author => author.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
    })
  }
  logOut = () => {
    this.props.history.push('/')
  }
}
export default withRouter(UserPage);
