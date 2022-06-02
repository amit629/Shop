import React, { Component } from 'react'
import { connect } from 'react-redux';
import {signIn,signOut} from '../action/index';
class GoogleAuth extends Component {
    componentDidMount()
    {
        window.gapi.load('client:Auth2',()=>{
            window.gapi.client.init({
                clientId:"932903030521-m6vu36l63fg6od8ivp42qn4chnff9c6f.apps.googleusercontent.com",
                scope:'email',
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();


                //initial signed in state

                //this.auth.isSignedIn.get() -to check if user is loggedin
                this.onAuthChange(this.auth.isSignedIn.get());

                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }
    onAuthChange=(isSignedIn)=>{
        if(isSignedIn)
        {
            this.props.signIn();
        }
        else{
            this.props.signOut();
        }
    }

    onSignInClick=()=>{
        this.auth.onSignIn(this.auth.currentUser.get().getId());
    }
    onSignOutClick=()=>{
        this.auth.onSignOut();
    }
    renderAuthButton=()=>{
        if(this.props.isSignedIn===null)
        {
            return null
        }
        else if(!this.props.isSignedIn)
        {
            return(
                <button onClick={this.onSignInClick} className="btn btn-danger text-white">Sign Out</button>
            )
        }
        else{
            return(
                <button onClick={this.onSignOutClick} className="btn btn-danger text-white">Sign In with google</button>
            )
        }
    }
  render() {
    return (
      <>
        {this.renderAuthButton()}
      </>
    )
  }
}

const mapStateToProps=(state)=>{
    return {isSignedIn:state.auth.isSignedIn}
}
export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);