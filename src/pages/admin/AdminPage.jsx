import React from "react";
import AuthorCard from '../../components/AuthorCard/AuthorCard';
import Grid from '@material-ui/core/Grid';
import './AdminPage.css'
import SearchAppBar from "../../components/AppBar/AppBar";
import { withRouter } from "react-router";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordError: '',
      emailError: '',
      isPasswordError: false,
      isEmailError: false,
      authorDetails:[]
    };
  }

  componentDidMount() {
    this.props.getAuthorDetails()
    this.setState({
          authorDetails:this.props.authorDetails
        })   
         // .then(res => {
    //   debugger
    //  
    // }
    // )
  }
  componentDidUpdate(prevProps){
    if(prevProps.authorDetails !== this.props.authorDetails){
      this.setState({
        authorDetails:this.props.authorDetails
      }) 
    }
  }

  render() {
    return (
      <div className={'root'}>
        <SearchAppBar
          title={'Authors'}
          user={'Admin'}
          onSearchChange={this.onSearchChange}
          logOut={this.logOut}
           />
        <Grid container>
          {this.state.authorDetails.map(author =>
            <Grid item xs={12} sm={4}>
              <div className={'card'}>
                <AuthorCard
                  authorId={author.id}
                  authorTitle={author.author_name}
                  aboutAuthor={author.about} 
                  onAuthorClick={this.onAuthorClick}/>
              </div>
            </Grid>
          )}
        </Grid>
      </div>
    )
  }
  onSearchChange = (e) => {
    const query = e.target.value;
    // onAuthorSearch(query)
    this.setState({
      authorDetails: this.props.authorDetails.filter(author => author.author_name.toLowerCase().indexOf(query.toLowerCase()) > -1)
    })
  }
  onAuthorClick = (e) => {
    this.props.history.push(`/author/${e}`);
  }
  logOut = () => {
    this.props.history.push('/')
  }
}
export default withRouter(AdminPage);
