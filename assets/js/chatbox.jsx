
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

// export default function chatbox_init(chatbox) {
//   ReactDOM.render(<ChatBox/>, chatbox);
// }

class ChatBox extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (<div className="container">
      <div className="card mt-2">
        <div className="card-body">
          <div className="row">
            <div className="col-4">
              <div className="card">

                <div className="card-header text-white bg-success text-center">
                  <h5>People Online</h5>
                </div>
                <ul className="list-group list-group-flush chat-people">
                  <li className="list-group-item  p-2"><img className=" profileDp rounded-circle" src ="/images/profileStub.svg"/>Cras justo odio</li>
                  <li className="list-group-item p-2"><img className=" profileDp rounded-circle" src ="/images/profileStub.svg"/>Cras justo odio</li>
                    <li className="list-group-item p-2"><img className=" profileDp rounded-circle" src ="/images/profileStub.svg"/>Cras justo odio</li>
                      <li className="list-group-item p-2"><img className=" profileDp rounded-circle" src ="/images/profileStub.svg"/>Cras justo odio</li>
                        <li className="list-group-item p-2"><img className=" profileDp rounded-circle" src ="/images/profileStub.svg"/>Cras justo odio</li>
                          <li className="list-group-item p-2"><img className=" profileDp rounded-circle" src ="/images/profileStub.svg"/>Cras justo odio</li>
                            <li className="list-group-item p-2"><img className=" profileDp rounded-circle" src ="/images/profileStub.svg"/>Cras justo odio</li>
                              <li className="list-group-item p-2"><img className=" profileDp rounded-circle" src ="/images/profileStub.svg"/>Cras justo odio</li>
                                <li className="list-group-item p-2"><img className=" profileDp rounded-circle" src ="/images/profileStub.svg"/>Cras justo odio</li>


                </ul>
</div>
              </div>
            <div className="col-8">
              <div className="card">
                <div className="card-header text-white bg-warning text-center">
                  <div className="row">
                <img className="rounded-circle mr-4" src ="/images/profileStub.svg"/><h5 className="box-heading">Person</h5>
                </div>
                </div>
                <div className="chat-container">
                  <ul className="list-group  m-2">

                      <div className="row chat-bubble-container-receive">
                      <div className="triangle-receive"></div>
                      <li className="list-group-item mb-1 mr-5 chat-bubble-receive border border-warning">Cras justo odio</li>
                      </div>
                      <div className="row chat-bubble-container-send">
                      <li className="list-group-item mb-1 ml-5 chat-bubble-send border border-warning">Crasdddddddddddddddddddddddddddddddddddddddddd justo odio</li>
                      <div className="triangle-send"></div>
                      </div>



                  </ul>


                </div>
                <div className="chat-message-input card-footer">
                  <div className="input-group">
                  <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                  <div className="input-group-append">
                    <button className="btn btn-outline-warning" type="button">Send</button>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
  }
}

  export default connect((props)=>props)(ChatBox);
