import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Homework.css';
import './HomeWorkPageTeacherMenu.css';
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

import EmployeeMenuPage from './EmployeeMenuPage';
import AddHomeWork from './AddHomeWork';
import ExamSchedule from './ExamSchedule';
import './HomeWorkPageTeacherMenu.css';
import HomeWorkEvalutionPage from './HomeWorkEvalutionPage';
import TimeTable from './TimeTable';
import Calendar from './Calendar';
import { confirmAlert } from 'react-confirm-alert';
import ClassHistory from './ClassHistory';

class HomeWorkPageTeacherMenu extends Component {

    constructor() {

        super()
        var superiorId = CryptoJS.AES.decrypt(localStorage.getItem('EmployeeId'), "shinchanbaby").toString(CryptoJS.enc.Utf8)

        this.state = {
           
            companyId: '',
            
        };
    }

    componentDidMount() {
    }

    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("body").style.backgroundColor = "rgba(0,0,0,0.4)";
        /* document.getElementById("body").style.marginLeft = "250px";
        document.getElementById("body").style.backgroundColor  = "rgba(0,0,0,0.4)";
        */
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("body").style.backgroundColor = "white";
        /* document.getElementById("body").style.marginLeft = "0";
        document.getElementById("body").style.backgroundColor  = "white";
         */
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
    AddHomeWork() {
        ReactDOM.render(
            <Router >
                <div>
                    <Route path="/" component={EmployeeMenuHeader} />
                    <Route path="/" component={HomeWorkPageTeacherMenu} />
                    <Route path="/" component={AddHomeWork} />
                    <Route path="/" component={FooterText} />

                </div>
            </Router>, document.getElementById('root'));

    }

    TimeTable() {
        ReactDOM.render(
            <Router >
                <div>
                    <Route path="/" component={EmployeeMenuHeader} />
                    <Route path="/" component={HomeWorkPageTeacherMenu} />
                    <Route path="/" component={TimeTable} />
                    <Route path="/" component={FooterText} />

                </div>
            </Router>, document.getElementById('root'));
    }
    ExamSchedule() {
        confirmAlert({
            title: 'Message',                        // Title dialog
            message: 'Still In Progress',               // Message dialog
            confirmLabel: 'Ok',                           // Text button confirm
          });
    }

    SchoolReport(){
        ReactDOM.render(
            <Router >
                <div>
                    <Route path="/" component={EmployeeMenuHeader} />
                    <Route path="/" component={HomeWorkPageTeacherMenu} />
                    <Route path="/" component={ClassHistory} />
                    <Route path="/" component={FooterText} />

                </div>
            </Router>, document.getElementById('root'));

    }
    Evaluation() {
        ReactDOM.render(
            <Router >
                <div>
                    <Route path="/" component={EmployeeMenuHeader} />
                    <Route path="/" component={HomeWorkPageTeacherMenu} />
                    <Route path="/" component={HomeWorkEvalutionPage} />
                    <Route path="/" component={FooterText} />

                </div>
            </Router>, document.getElementById('root'));
    }
    render() {
        return (
            <div className="container" id="body"
                >
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

            
                <div id='horMenu'>
                    <ul id='horMenunew' >
                        <li><a className="active" onClick={() => this.TimeTable()}>Class TimeTable</a></li>
                        <li><a onClick={() => this.ExamSchedule()}> Exam Schedule </a></li>
                        <li><a style={{ color: "white",backgroundColor:"#26425c" }}><span style={{ color: "white",backgroundColor:"#26425c" }} onClick={() => this.openNav()}>&#9776;</span></a></li>

                    </ul>

                    <div id="mySidenav" class="sidenav">
                        <a href="javascript:void(0)" class="closebtn" onClick={() => this.closeNav()}>&times;</a>
                        <a href="#" onClick={() => this.TimeTable()} >TimeTable</a>
                            <a href="#" onClick={() => this.AddHomeWork()} >Homework</a>
                            <a href="#" onClick={() => this.SchoolReport()}>Report</a>
                           <a href="#" onClick={() => this.Evaluation()} >Evaluation </a>
                           <a href="#">Custom </a>
                    </div>




                </div>





            </div>




        );
    }

}


export default HomeWorkPageTeacherMenu;