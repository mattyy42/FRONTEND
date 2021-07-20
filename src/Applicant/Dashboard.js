import React, { Component } from 'react'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Dashboard</h1>
                </div>{/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Dashboard v1</li>
                  </ol>
                </div>{/* /.col */}
              </div>{/* /.row */}
            </div>{/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <div className="row">
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box">
                    <span className="info-box-icon bg-info elevation-1"><i className="fas fa-file" /></span>
                    <div className="info-box-content">
                      <span className="info-box-text">Applications</span>
                      <span className="info-box-number">
                        10
                        <small> Total</small>
                      </span>
                    </div>
                    {/* /.info-box-content */}
                  </div>
                  {/* /.info-box */}
                </div>
                {/* /.col */}
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box mb-3">
                    <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-ban" /></span>
                    <div className="info-box-content">
                      <span className="info-box-text">Rejected</span> <span className="info-box-number">
                        10
                        <small> Total</small>
                      </span>
                    </div>
                    {/* /.info-box-content */}
                  </div>
                  {/* /.info-box */}
                </div>
                {/* /.col */}
                {/* fix for small devices only */}
                <div className="clearfix hidden-md-up" />
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box mb-3">
                    <span className="info-box-icon bg-success elevation-1"><i className="fas fa-thumbs-up" /></span>
                    <div className="info-box-content">
                      <span className="info-box-text">Accepted</span>
                      <span className="info-box-number">760</span>
                    </div>
                    {/* /.info-box-content */}
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box mb-3">
                    <span className="info-box-icon bg-warning elevation-1"><i className="fa fa-exclamation" /></span>
                    <div className="info-box-content">
                      <span className="info-box-text">Pending</span>
                      <span className="info-box-number">2,000</span>
                    </div>
                    {/* /.info-box-content */}
                  </div>
                  {/* /.info-box */}
                </div>
              </div>


              <div className="card">
                <div className="card-header border-transparent">
                  <h3 className="card-title">My Applications</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                      <i className="fas fa-minus" />
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table m-0">
                      <thead>
                        <tr>
                          <th>Application ID</th>
                          <th>Building Officer Name</th>
                          <th>Status</th>
                          <th>Appointment</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><a href="pages/examples/invoice.html">OR9842</a></td>
                          <td>Call of Duty IV</td>
                          <td><span className="badge badge-success">Shipped</span></td>
                          <td>
                            <div className="sparkbar" data-color="#00a65a" data-height={20}>90,80,90,-70,61,-83,63</div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="pages/examples/invoice.html">OR1848</a></td>
                          <td>Samsung Smart TV</td>
                          <td><span className="badge badge-warning">Pending</span></td>
                          <td>
                            <div className="sparkbar" data-color="#f39c12" data-height={20}>90,80,-90,70,61,-83,68</div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="pages/examples/invoice.html">OR7429</a></td>
                          <td>iPhone 6 Plus</td>
                          <td><span className="badge badge-danger">Delivered</span></td>
                          <td>
                            <div className="sparkbar" data-color="#f56954" data-height={20}>90,-80,90,70,-61,83,63</div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="pages/examples/invoice.html">OR7429</a></td>
                          <td>Samsung Smart TV</td>
                          <td><span className="badge badge-info">Processing</span></td>
                          <td>
                            <div className="sparkbar" data-color="#00c0ef" data-height={20}>90,80,-90,70,-61,83,63</div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="pages/examples/invoice.html">OR1848</a></td>
                          <td>Samsung Smart TV</td>
                          <td><span className="badge badge-warning">Pending</span></td>
                          <td>
                            <div className="sparkbar" data-color="#f39c12" data-height={20}>90,80,-90,70,61,-83,68</div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="pages/examples/invoice.html">OR7429</a></td>
                          <td>iPhone 6 Plus</td>
                          <td><span className="badge badge-danger">Delivered</span></td>
                          <td>
                            <div className="sparkbar" data-color="#f56954" data-height={20}>90,-80,90,70,-61,83,63</div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="pages/examples/invoice.html">OR9842</a></td>
                          <td>Call of Duty IV</td>
                          <td><span className="badge badge-success">Shipped</span></td>
                          <td>
                            <div className="sparkbar" data-color="#00a65a" data-height={20}>90,80,90,-70,61,-83,63</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* /.table-responsive */}
                </div>
                {/* /.card-body */}
                <div className="card-footer clearfix">
                  <a href="javascript:void(0)" className="btn btn-sm btn-info float-left">Place New Order</a>
                  <a href="javascript:void(0)" className="btn btn-sm btn-secondary float-right">View All Orders</a>
                </div>
                {/* /.card-footer */}
              </div>
              {/* /.card */}




            </div>{/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
      </div>

    )
  }
}

export default Dashboard;
