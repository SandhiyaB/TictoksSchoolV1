import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Homework.css';
import $ from 'jquery';
import CryptoJS from 'crypto-js';
import { FormErrors } from './FormErrors';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import EmployeeMenuHeader from './EmployeeMenuHeader';
import Maintenance from './Maintenance';
import AddNewDepartment from './AddNewDepartment';
import RemoveDepartment from './RemoveDepartment';
import FooterText from './FooterText';
import EmployeeRequestAcceptReject from './EmployeeRequestAcceptReject';
import EmployeeMenuPage from './EmployeeMenuPage';
import AddHomeWork from './AddHomeWork';
import ExamSchedule from './ExamSchedule';
import HomeWorkPageStudent from './HomeWorkPageStudent';
import StudentHistory from './StudentHistory';
import { confirmAlert } from 'react-confirm-alert';

class HomeWorkStudentMenuPage extends Component {

    constructor() {

        super()
        var superiorId = CryptoJS.AES.decrypt(localStorage.getItem('EmployeeId'), "shinchanbaby").toString(CryptoJS.enc.Utf8)

        this.state = {

        };
    }

    componentDidMount() {
        ReactDOM.render(
            <Router>
                <div>
                    <Route path="/" component={EmployeeMenuHeader} />
                    <Route path="/" component={HomeWorkStudentMenuPage} />
                    <Route path="/" component={HomeWorkPageStudent} />
                    <Route path="/" component={FooterText} />

                </div>
            </Router>,
            document.getElementById('root'));
        registerServiceWorker();

    }
    BackbtnFunc() {
        ReactDOM.render(
            <Router>
                <div>
                    <Route path="/" component={EmployeeMenuHeader} />
                    <Route path="/" component={EmployeeMenuPage} />

                    <Route path="/" component={FooterText} />

                </div>
            </Router>,
            document.getElementById('root'));
        registerServiceWorker();
    }

    HomeWork() {
        ReactDOM.render(
            <Router>
                <div>
                    <Route path="/" component={EmployeeMenuHeader} />
                    <Route path="/" component={HomeWorkStudentMenuPage} />
                    <Route path="/" component={HomeWorkPageStudent} />
                    <Route path="/" component={FooterText} />

                </div>
            </Router>,
            document.getElementById('root'));
        registerServiceWorker();
    }
    TimeTable() {
        confirmAlert({
            title: 'Message',                        // Title dialog
            message: 'Still In Progress',               // Message dialog
            confirmLabel: 'Ok',                           // Text button confirm
          });
    }
    StudentHomeWorkHistory() {

        ReactDOM.render(
            <Router>
                <div>
                    <Route path="/" component={EmployeeMenuHeader} />
                    <Route path="/" component={HomeWorkStudentMenuPage} />
                    <Route path="/" component={StudentHistory} />
                    <Route path="/" component={FooterText} />

                </div>
            </Router>,
            document.getElementById('root'));
        registerServiceWorker();

    }

    render() {
        return (
            <div className="container">
             <ul class="previous disabled" id="backbutton"
                    style={{
                        backgroundColor: "#f1b6bf",
                        float: "none",
                        display: "inline-block",
                        marginLeft: "5px",
                        borderRadius: "5px",
                        padding: "3px 7px 3px 7px"
                    }}>
                    <a href="#" onClick={() => this.BackbtnFunc()}><i class="arrow left"></i></a></ul>

            
               
                <div class="row">

                    <div id='horMenunew' >
                        <ul id='horMenunew' style={{ backgroundColor: "#8811d6" }}>
                            <li><a onClick={() => this.HomeWork()}> Home Work </a></li>
                            <li><a className="active" onClick={() => this.TimeTable()} >TimeTable</a></li>

                            <li><a onClick={() => this.StudentHomeWorkHistory()}>Report</a></li>

                        </ul>

                    </div>


                </div>


            </div>






        );
    }

}


export default HomeWorkStudentMenuPage;