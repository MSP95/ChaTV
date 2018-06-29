
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

// export default function chatbox_init(chatbox) {
//   ReactDOM.render(<ChatBox/>, chatbox);
// }

class Login extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (<div className="container">
    <div className="card login-card">
      <div className="card-header text-center"><h1 className="logo-name"> Chatty!</h1></div>
      <div className="card-body">
        <div className="row">

          <div className="col-6 pr-0">
            <button className="btn btn-block tab" type="button">Login</button>
          </div>
          <div className="col-6 pl-0">
            <button className="btn btn-block tab" type="button">Register</button>

          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card mt-2">
              <div className="card-body">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                  </div>

                </form>
              </div>
              <div className="card-footer">
                <button type="submit" class=" btn btn-info btn-block">Submit</button></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
}

export default connect((props)=>props)(Login);
