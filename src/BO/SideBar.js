
//   <li className="nav-item">
//     <a href="/bo/planingConsent" className="nav-link">
//       <p>
//         View assigned planing consent
//       {/* <span className="right badge badge-danger">0 complains</span> */}
//       </p>
//     </a>
//   </li>
//   <li className="nav-item">
//     <a href="#review" className="nav-link">
//       <p>
//         Review Application

//           </p>
//     </a>
//   </li>
//   <li className="nav-item">
//     <a href="#viewNotification" className="nav-link">
//       <p>
//         View Notification

//           </p>
//     </a>
//   </li>



// </ul>



import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class SideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {

      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      phone_number: "",
    }
  }
  componentDidMount() {
    const tokenString = localStorage.getItem('token');
    axios
      .get("http://localhost:8000/api/user",
        { headers: { authorization: `Bearer ${tokenString}` } })
      .then((response) => {


        if (response.massage === "unauthenticated") {

        }
        this.setState({

          first_name: response.data.first_name,
          last_name: response.data.last_name,
        })

      })

  }
  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <a href="index3.html" className="brand-link"><span className="brand-text font-weight-light">Addis Ababa  city Building <br></br> Permit Portal</span>
          </a>
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img src="../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="" />
              </div>
              <div className="info">
                <a href="#info" className="d-block">{this.state.first_name} {this.state.last_name}</a>
              </div>
            </div>
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item menu">
                  <a href="#nav" className="nav-link ">
                    <i className="nav-icon fas fa-file" />
                    <p>View <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">

                    <li className="nav-item">
                      <a href="/bo/planingConsent" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>View Assigned Planing Consent</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/bo/lookApplication" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>View Assigned applications</p>
                      </a>
                    </li>
                  </ul>
                </li>



                <Link to="/applicant/apply">
                  <li className="nav-item">
                    <a href="#nav" className="nav-link">
                      <i className="nav-icon fa fa-bell" />
                      <p>
                        &#160; Notification
                                                {/* <span className="right badge badge-danger">New</span> */}
                      </p>
                    </a>
                  </li>
                </Link>


                <li className="nav-item">
                  <a href="/profileBO" className="nav-link">
                    <i className="nav-icon fa fa-user" />
                    <p>
                      <p>Profile</p>
                    </p>
                  </a>
                </li>



              </ul>

            </nav>
          </div>




        </aside>
      </div>

    )
  }
}

export default withRouter(SideBar);