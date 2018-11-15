import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import './EmployeeMenuPage.css';
import { FormErrors } from './FormErrors';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import EmployeeMenuHeader from './EmployeeMenuHeader'
import Maintenance from './Maintenance'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import CryptoJS from 'crypto-js';
import EmployeeAddRemUpdMenu from './EmployeeAddRemUpdMenu';
import FooterText from './FooterText';
import ConfigurationPage from './ConfigurationPage';
class StaffSubjectConfiguration extends Component {

	constructor() {
		super()
		var superiorId = CryptoJS.AES.decrypt(localStorage.getItem('EmployeeId'), "shinchanbaby").toString(CryptoJS.enc.Utf8)

		this.state = {

			employeeId: '',
			superiorId: superiorId,
			companyId: '',

		}
	}

	handleUserInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			[name]: value,

		},
		);
	}

	componentDidMount() {
		this.Initialize();

		window.scrollTo(0, 0);

	}


	Initialize() {
		var Subject = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('Subjects'), "shinchanbaby").toString(CryptoJS.enc.Utf8));
		var subject;

		subject += '<option value ="" disabled selected hidden >Select a Subject</option>';
		$.each(Subject, function (i, item) {

			subject += '<option value="' + item.subject + '">' + item.subject + '</option>'

		});
		$("#subject").append(subject);

		var department = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('Departments'), "shinchanbaby").toString(CryptoJS.enc.Utf8));
		var dept;
		dept += '<option  value="" disabled selected hidden>Select a Class</option>';
		$.each(department, function (i, item) {

			dept += '<option value="' + item.department + '">' + item.department + '</option>'

		});
		$("#department").append(dept);

		var emp = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('ReportingManagerList'), "shinchanbaby").toString(CryptoJS.enc.Utf8));

		var employeeId = '';

		employeeId += '<option value="" disabled selected hidden >Select a Staff Id</option>';
		$.each(emp, function (i, item) {

			employeeId += '<option value="' + item.employeeId + '">' + item.employeeId + '</option>'

		});
		$("#staffId").append(employeeId);

	}

	handleStaff = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ staffId: value },
		);

		this.state.staffId = value;

		var companyId = CryptoJS.AES.decrypt(localStorage.getItem('CompanyId'), "shinchanbaby").toString(CryptoJS.enc.Utf8)
		this.state.companyId = companyId;
		this.setState({
			companyId: companyId,
		});
		var self = this;
		$.ajax({
			type: 'POST',
			data: JSON.stringify({
				employeeId: this.state.staffId,
				companyId: this.state.companyId,
			}),
			url: "https://wildfly.tictoks.com:443/EmployeeAttendenceAPI/employee/ReportingManagerDetails",
			contentType: "application/json",
			dataType: 'json',
			async: false,
			success: function (data, textStatus, jqXHR) {
				self.state.staffName = data.employeeName;
				self.state.role = data.role;
				self.state.qualification=data.qualification;
			},
			error: function (data) {
				confirmAlert({
					title: 'No Internet',                        // Title dialog
					message: 'Network Connection Problem',               // Message dialog
					confirmLabel: 'Ok',                           // Text button confirm
				});



			},
		});
	}

	Assign() {
		var self = this;
		var companyId = CryptoJS.AES.decrypt(localStorage.getItem('CompanyId'), "shinchanbaby").toString(CryptoJS.enc.Utf8);
		var employeeId = CryptoJS.AES.decrypt(localStorage.getItem('EmployeeId'), "shinchanbaby").toString(CryptoJS.enc.Utf8)
	
		this.state.companyId = companyId;
		this.state.superiorId=employeeId;
		this.setState({
			companyId: companyId,
			superiorId:employeeId,
		});
		
if((this.state.department !="" )&& (this.state.subject !="") && (this.state.staffId !="")){
		$.ajax({
			type: 'POST',
			data: JSON.stringify({
				superiorId:this.state.superiorId,
				className:this.state.department,
				employeeId: this.state.staffId,
				subjectName:this.state.subject,
				companyId: this.state.companyId,
				employeeName:this.state.staffName,
			}),
			url: "https://wildfly.tictoks.com:443/EmployeeAttendenceAPI/HomeWork/StaffSubjectConfiguration",
			contentType: "application/json",
			dataType: 'json',
			async: false,
			success: function (data, textStatus, jqXHR) {
				if (data.description == "ASSIGNED") {
					
					confirmAlert({
						title: 'Staff Assigned',                        // Title dialog
						message: 'Already Staff Has been assigned to '+self.state.department + ' For the Subject '+self.state.subject ,               // Message dialog
						confirmLabel: 'Ok',                           // Text button confirm


					})
				}
				else {
					confirmAlert({
						title: 'Success',                        // Title dialog
						message: 'Successfully Assigned Staff for the Subject '+self.state.subject,               // Message dialog
						confirmLabel: 'Ok',                           // Text button confirm


					})


				}
				self.state.department='';
				self.state.staffId='';
				self.state.subject='';
				self.state.staffName='';
				self.state.role='';
				self.state.qualification='';
				$('[name=subject]').val('');
				$('[name=department]').val('');
				$('[name=staffId]').val('');
				self.setState({
					department:'',
					staffId:'',
					subject:'',
					staffName:'',
					role:'',
					qualification:''
				})
				
			},
			error: function (data) {
				confirmAlert({
					title: 'No Internet',                        // Title dialog
					message: 'Network Connection Problem',               // Message dialog
					confirmLabel: 'Ok',                           // Text button confirm
				});



			},
		});

	}else{
		confirmAlert({
			title: 'Error',                        // Title dialog
			message: 'Please Fill All the Fields',               // Message dialog
			confirmLabel: 'Ok',                           // Text button confirm


		})
	}

	}


	NoAction() {
		ReactDOM.render(
			<Router>
				<div>

					<Route path="/" component={EmployeeMenuHeader} />

					<Route path="/" component={Maintenance} />
					<Route path="/" component={FooterText} />

				</div>
			</Router>, document.getElementById('root'));

	}
	BackbtnFunc() {

		ReactDOM.render(
			<Router>
				<div>
					<Route path="/" component={EmployeeMenuHeader} />
					<Route path="/" component={ConfigurationPage} />
					<Route path="/" component={FooterText} />
				</div>
			</Router>,
			document.getElementById('root'));
		registerServiceWorker();
	}

	render() {
		return (

			<div className="container">
				{/* <ul class="previous disabled" id="backbutton"
					style={{
						backgroundColor: "#f1b6bf",
						float: "none",
						display: "inline-block",
						marginLeft: "5px",
						borderRadius: "5px",
						padding: "3px 7px 3px 7px"
					}}>
					<a href="#" onClick={() => this.BackbtnFunc()}><i class="arrow left"></i></a></ul>

 */}
				<div className="jumbotron" style={{ backgroundColor: "#f2f2f2" }} >
					<h3>Assign Subject To Staff </h3>
					<div className="col-xs-12 col-sm-12 col-lg-12" style={{ marginTop: "20px", marginBottom: "20px" }} >
						<label>
							Class *
	                        <select
								id="department"
								className="form-control"
								onChange={this.handleUserInput}
								name="department"
								style={{ marginBottom: "15px" }}
							>
							</select>
						</label>
					</div>
					<div className="col-xs-12 col-sm-12 col-lg-12" style={{ marginTop: "20px", marginBottom: "20px" }} >

						<label>
							Subject *
	                        <select
								id="subject"
								className="form-control"
								onChange={this.handleUserInput}
								name="subject"
								style={{ marginBottom: "15px" }}
							>
							</select>
						</label>
					</div>
					<div className="col-xs-12 col-sm-12 col-lg-12" style={{ marginTop: "20px", marginBottom: "20px" }} >

						<label>
							Staff
	                        <select
								id="staffId"
								className="form-control"
								onChange={this.handleStaff}

								name="staffId"
								style={{ marginBottom: "15px" }}
							>
							</select>

						</label>
						<div className="row" style={{ display: "inline!important" }}>

							<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" style={{ display: "inline!important" }}>
								<input type="text"

									value={this.state.staffName}
									id="staffName"
									name="staffName"
									maxlength="50"
									readOnly
									placeholder="Name.." required />
							</div>
							<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">

								<input type="text"
									className="col-xs-4"
									value={this.state.qualification}
									id="qualification"
									name="qualification"
									maxlength="50"
									readOnly
									placeholder="qualification.." required />
							</div>
							<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
								<input type="text"
									className="col-xs-4"
									value={this.state.role}
									id="role"
									name="role"
									maxlength="50"
									readOnly
									placeholder=" Role.." required />
							</div>

</div>
						</div>

						<button type="button"  onClick={() => this.Assign()} className="btn btn-primary" style={{ marginBottom: "0px", marginLeft: "auto", marginRight: "auto", marginTop: "0px", display: "block" }}>Assign</button>
					</div>
				</div>


				);
			}
		
		}
		
		
		export default StaffSubjectConfiguration;
