import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import Header from './Header';
import Sidebar from './Sidebar';
export default class Applicationform extends Component {
  userData;
  constructor(props) {
    super(props);
    this.HandleClick = this.HandleClick.bind(this);
    this.state = {
      redirect: false,
      msg: "",
      notif: "Your Progress has been 50%",
      applicationForm: {
        city: "",
        sub_city: "",
        new_woreda: "",
        special_name: "",
        wereda: "",
        house_number: "",
        constructionType: "",
        constructionCondition: "",
        estimatedCost: "",
        floorNumber: "",
        groundFloorNumber: "",

        buildingHeight: "",
        groundBuildingHeight: "",
        consultingFirmName: "",
        consultingFirmLevel: "",
        consultingFirmPhone: "",
        consultingFirmAddress: "",
        revitFile:"",
      },
    };
    // this.onChange = this.onChange.bind(this);
    
  }
  HandleClick() {
    Swal.fire({
      title: 'Success',
      type: 'success',
      text: 'successfuly applied for Building Permit,We will let you know soon',
    });
  }

  HandleClickAutoclose() {
    let timerInterval
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 1000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
              b.textContent = Swal.getTimerLeft()
            }
          }
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }
  

  onChangehandler = (e, key) => {
    const { applicationForm } = this.state;
    applicationForm[e.target.name] = e.target.value;
    this.setState({ applicationForm });
  };
  onChange(e) {
    this.setState({
      applicationForm: {
        ...this.state.applicationForm,
        'revitFile':e.target.files[0],
      }
    });
  }
  
  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    const token = localStorage.getItem('token');
    console.log(this.state.applicationForm);
    axios
      .post("http://localhost:8000/api/applicant/submitApplication", this.state.applicationForm,
        {
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,           
          }
        })
      .then((response) => {
        console.log(response.data)
        this.setState({ isLoading: false })
        // console.log('status2 ',response.status)
        if (response.status === 201) {
          localStorage.setItem('isSubmitted', true);
          this.HandleClick();

          console.log('status ', response.status);
          this.setState({
            msg: response.data.message,
            redirect: true,
            notif: "Your Progress has been 50%",
            applicationForm: {
              city: "AABPB",
              sub_city: "",
              new_woreda: "",
              special_name: "",
              wereda: "",
              house_number: "",
              constructionType: "",
              constructionCondition: "",
              estimatedCost: "",
              floorNumber: "",
              groundFloorNumber: "",

              buildingHeight: "",
              groundBuildingHeight: "",
              consultingFirmName: "",
              consultingFirmLevel: "",
              consultingFirmPhone: "",
              consultingFirmAddress: "",
            },
          });
          setTimeout(() => {
            this.setState({ msg: "" });
          }, 2000);
        }


        if (response.data.status === "failed") {
          this.setState({ msg: response.data.message });
          setTimeout(() => {
            this.setState({ msg: "" });
          }, 2000);
        }
      }).catch((err) => {
        console.log(err.response);
        //handle error
        // if (
        //   err.response.status === 401) {
        //   this.setState({
        //     // errMsg: errresponse.data.error,
        //     isLoading: false,
        //     isShowError: true,
        //   });

        //}
      });
  };


  render() {
    const isLoading = this.state.isLoading;
    const submitted = localStorage.getItem('isSubmitted');
    if (submitted) {
      if (this.state.redirect) {
        return <Redirect to="/applicant/success" />;

      };
    }

    return (
      <div>
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <section className="content">
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0">Get Started</h1>
                  </div>{/* /.col */}
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item"><a href="#home">Home</a></li>
                      <li className="breadcrumb-item active">Get Started</li>
                    </ol>
                  </div>{/* /.col */}
                </div>{/* /.row */}
              </div>{/* /.container-fluid */}
              <div className="col-sm">
                <h5 className="m-0">Application Process Phase 2 submitting application form</h5>
                <p>Building Permit Department will issue a planning consent if all requirements meet the master plan guidelines. The business representative is physically present for the duration of this step. If land is owned by the business, steps follow the standard application process. But, the construction permit for a leased land requires agreement between owner and business, in addition to all other documents. The scale and purpose of the building
                  determines whether the business will apply at the federal level or sub-city level.</p>
              </div>
            </div>
            <form encType='multipart/form-data' onSubmit={this.onSubmitHandler}>
              <div className="row">

                <div className="col-md">

                  <div className="card card-primary">
                    <div className="card-header">
                      <h3 className="card-title">Application Form</h3>
                      <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                          <i class="fas fa-minus"></i>
                        </button>
                      </div>

                    </div>

                    <div className="card-body">

                      
                      <div className="form-group">

                        <label htmlFor="city">City</label>
                        <select type="hidden" className="form-control" name="city" id="city" defaultValue={this.state.selectValue} onChange={this.onChangehandler} required >
                          <option type="hidden" value="" onChange={this.onChangehandler}>Select</option>
                          <option type="hidden" value="AABPB" >Addis Ababa</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="sub_city">Sub city</label>
                        <select className="form-control" name="sub_city" id="sub_city" defaultValue={this.state.selectValue} onChange={this.onChangehandler} required>
                          <option value="" onChange={this.onChangehandler}>Select</option>
                          <option value="AKBPB" onChange={this.onChangehandler}>Adisketema</option>
                          <option value="AKBPB" onChange={this.onChangehandler}>Akakikality</option>
                          <option value="ABPB" onChange={this.onChangehandler}>Arada</option>
                          <option value="BBPB" onChange={this.onChangehandler}>Bole</option>
                          <option value="GPBP" onChange={this.onChangehandler}>Gullele</option>
                          <option value="KBPB" onChange={this.onChangehandler}>Kirkos</option>
                          <option value="KKBPB" onChange={this.onChangehandler}>kolfekeranio</option>
                          <option value="LKBPB" onChange={this.onChangehandler}>Lemi krau</option>
                          <option value="LBPB" onChange={this.onChangehandler}>Lideta</option>
                          <option value="NSBPB" onChange={this.onChangehandler}>Nifas silk-lafto</option>
                          <option value="YBPB" onChange={this.onChangehandler}>Yeka</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="wereda">Old Woreda</label>
                        <input type="Number" className="form-control" name="wereda" id="wereda" placeholder="Enter your Woreda" value={this.state.applicationForm.wereda} onChange={this.onChangehandler} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Woreda">New Woreda</label>
                        <input type="Number" className="form-control" name="new_woreda" id="new_woreda" placeholder="Enter your Woreda" value={this.state.applicationForm.new_woreda} onChange={this.onChangehandler} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputstreet_address">special_name</label>
                        <input type="text" className="form-control" name="special_name" id="special_name" placeholder="Enter your street address" value={this.state.applicationForm.special_name} onChange={this.onChangehandler} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputshouse_number">House Number</label>
                        <input type="text" className="form-control" id="house_number" name="house_number" placeholder="Enter your House Number" value={this.state.applicationForm.house_number} onChange={this.onChangehandler} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputownership_authentication_number">constructionType</label>
                        <input type="text" className="form-control" id="constructionType" name="constructionType" placeholder="Enter your ownership authentication number" value={this.state.applicationForm.constructionType} onChange={this.onChangehandler} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputsownership_authentication_type">constructionCondition</label>
                        <input type="text" className="form-control" id="consultingFirmAddress" name="constructionCondition" placeholder="constructionCondition" value={this.state.applicationForm.constructionCondition} onChange={this.onChangehandler} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputsownership_authentication_type">consultingFirmAddress</label>
                        <input type="text" className="form-control" id="consultingFirmAddress" name="consultingFirmAddress" placeholder="consultingFirmAddress" value={this.state.applicationForm.consultingFirmAddress} onChange={this.onChangehandler} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputsownership_authentication_issued_date"> estimatedCost</label>
                        <input type="number" className="form-control" id="estimatedCost" name="estimatedCost" placeholder="Enter Ownership Authentication Isued Date" value={this.state.applicationForm.estimatedCost} onChange={this.onChangehandler} required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputs name_stated_on_ownership_authentication">  floorNumber</label>
                        <input type="number" className="form-control" id="floorNumber" name="floorNumber" placeholder="Enter Name Stated On Ownership Authentication" value={this.state.applicationForm.floorNumber} onChange={this.onChangehandler} required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputs name_stated_on_ownership_authentication">  groundFloorNumber</label>
                        <input type="number" className="form-control" id="groundFloorNumber" name="groundFloorNumber" placeholder="Enter Name Stated On Ownership Authentication" value={this.state.applicationForm.groundFloorNumber} onChange={this.onChangehandler} required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputs name_stated_on_ownership_authentication">  buildingHeight</label>
                        <input type="number" className="form-control" id="buildingHeight" name="buildingHeight" placeholder="Enter Name Stated On Ownership Authentication" value={this.state.applicationForm.buildingHeight} onChange={this.onChangehandler} required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputs name_stated_on_ownership_authentication">  groundBuildingHeight</label>
                        <input type="number" className="form-control" id="groundBuildingHeight" name="groundBuildingHeight" placeholder="Enter Name Stated On Ownership Authentication" value={this.state.applicationForm.groundBuildingHeight} onChange={this.onChangehandler} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputsownership_authentication_type">consultingFirmName</label>
                        <input type="text" className="form-control" id="consultingFirmName" name="consultingFirmName" placeholder="consultingFirmName" value={this.state.applicationForm.consultingFirmName} onChange={this.onChangehandler} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputsownership_authentication_type">consultingFirmPhone</label>
                        <input type="text" className="form-control" id="consultingFirmPhone" name="consultingFirmPhone" placeholder="consultingFirmName" value={this.state.applicationForm.consultingFirmPhone} onChange={this.onChangehandler} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputs name_stated_on_ownership_authentication">  consultingFirmLevel</label>
                        <input type="number" className="form-control" id="consultingFirmLevel" name="consultingFirmLevel" placeholder="Enter Name Stated On Ownership Authentication" value={this.state.applicationForm.consultingFirmLevel} onChange={this.onChangehandler} required />
                      </div>
                     
                      <div className="form-group">
                        <label htmlFor="revitFile">Upload Revit file</label>
                        <input type="file" className="form-control" id="revitFile" name="revitFile"  value={undefined} onChange={this.onChange} required />
                      </div>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </div>
              </div> <div className="card-footer">

                <button type="submit" class="btn btn-primary" >Submit
                  {isLoading ? (
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  ) : (
                      <span></span>
                    )}
                </button>
              </div>
            </form></section>
        </div>

      </div>



    )
  }

}

