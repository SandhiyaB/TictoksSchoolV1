
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
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css


class TimeTable extends Component {

    constructor() {
        super()
        this.state = {
            schoolId: '',
            teacherId: '',
            periods: '',
            timings: [],
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: [],
        };
    }


    componentDidMount() {

        $("#PeriodTable").hide();
        var self = this;

        $("#submit").click(function () {

            $('.timing').find("input").each(function () {
                const time = this.value;
                alert(this.value);
                if (time != '') {
                    self.state.timings.push(time);
                }

            })
            console.log("TIMINGS" + self.state.timings.toString());

            $('.monday').find("input").each(function () {
                const monday = this.value;
                alert(this.value);
                if (monday != '') {
                    self.state.monday.push(monday);
                }
            })
            console.log("monday" + self.state.monday);

            $('.tuesday').find("input").each(function () {
                const tuesday = this.value;
                alert(this.value);
                if (tuesday != '') {
                    self.state.tuesday.push(tuesday);
                }
            })
            console.log("tuesday" + self.state.tuesday);

            $('.wednesday').find("input").each(function () {
                const wednesday = this.value;
                alert(this.value);
                if (wednesday != '') {
                    self.state.wednesday.push(wednesday);
                }
            })
            console.log("wednesday" + self.state.wednesday);

            $('.thursday').find("input").each(function () {
                const thursday = this.value;
                alert(this.value);
                if (thursday != '') {
                    self.state.thursday.push(thursday);
                }
            })
            console.log("thursday" + self.state.thursday);

            $('.friday').find("input").each(function () {
                const friday = this.value;
                alert(this.value);
                if (friday != '') {
                    self.state.friday.push(friday);
                }
            })
            console.log("friday" + self.state.friday);

            $('.saturday').find("input").each(function () {
                const saturday = this.value;
                alert(this.value);
                if (saturday != '') {
                    self.state.saturday.push(saturday);
                }
            })
            console.log("saturday" + self.state.saturday);

            $('.sunday').find("input").each(function () {
                const sunday = this.value;
                alert(this.value);
                if (sunday != '') {
                    self.state.sunday.push(sunday);
                }
            })
            console.log("sunday" + self.state.sunday);

            var companyId = CryptoJS.AES.decrypt(localStorage.getItem('CompanyId'), "shinchanbaby").toString(CryptoJS.enc.Utf8)
            var employeeId = CryptoJS.AES.decrypt(localStorage.getItem('EmployeeId'), "shinchanbaby").toString(CryptoJS.enc.Utf8)

            self.state.schoolId = companyId;
            self.state.teacherId = employeeId;
            self.state.periods = self.state.periods.toString();
            self.state.timings = self.state.timings.toString();
            self.state.monday = self.state.monday.toString();
            self.state.tuesday = self.state.tuesday.toString();
            self.state.wednesday = self.state.wednesday.toString();
            self.state.thursday = self.state.thursday.toString();
            self.state.friday = self.state.friday.toString();
            self.state.saturday = self.state.saturday.toString();
            self.state.sunday = self.state.sunday.toString();


            self.setState({
                schoolId: companyId,
                teacherId: employeeId,
                period: self.state.period,
                timings: self.state.timings,
                monday: self.state.monday,
                tuesday: self.state.tuesday,
                wednesday: self.state.wednesday,
                thursday: self.state.thursday,
                friday: self.state.friday,
                saturday: self.state.saturday,
                sunday: self.state.sunday,
            }),




                console.log("data" + JSON.stringify({
                    schoolId: self.state.schoolId,
                    teacherId: self.state.teacherId,
                    period: self.state.period.toString(),
                    timings: self.state.timings.toString(),
                    monday: self.state.monday.toString(),
                    tuesday: self.state.tuesday.toString(),
                    wednesday: self.state.wednesday.toString(),
                    thursday: self.state.thursday.toString(),
                    friday: self.state.friday.toString(),
                    saturday: self.state.saturday.toString(),
                    sunday: self.state.sunday.toString(),
                }),
                );

            $.ajax({
                type: 'POST',
                data: JSON.stringify({

                    schoolId: self.state.schoolId.toString(),
                    teacherId: self.state.teacherId.toString(),
                    periods: self.state.period.toString(),
                    timings: self.state.timings.toString(),
                    monday: self.state.monday.toString(),
                    tuesday: self.state.tuesday.toString(),
                    wednesday: self.state.wednesday.toString(),
                    thursday: self.state.thursday.toString(),
                    friday: self.state.friday.toString(),
                    saturday: self.state.saturday.toString(),
                    sunday: self.state.sunday.toString(),

                }),
                 url: "https://wildfly.tictoks.com:443/EmployeeAttendenceAPI/TimeTable/timetableinsert",
               // url: "http://localhost:8080/EmployeeAttendenceAPI/TimeTable/timetableinsert",
                contentType: "application/json",
                dataType: 'json',
                async: false,
                success: function (data, textStatus, jqXHR) {

                    alert("SUCCESS");

                },
                error: function (data) {
                    confirmAlert({
                        title: 'No Internet',                        // Title dialog
                        message: 'Network Connection Problem',               // Message dialog
                        confirmLabel: 'Ok',                           // Text button confirm
                    });


                },
            });

            /*SUBMIT FUNCTION CLOSE*/
        })


        $("#clickMe").click(function () {
            $('.row1').find("input").each(function () {
                //var cijfer1 = $(this).find("#vraag1").text();
                alert(this.value);
            })
        })


        /*
            $("#clickMe").click(function () {
                $('#tabelddl tbody tr').each(function () {
                    var cijfer1 = $(this).find("input.vraag1").val();
                    alert(cijfer1)
                })
            })
*/


    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
        );
        console.log("totalPeriods" + value);

        if (value == "1") {
            $("#PeriodTable").show();

            $(".1").show();
            $(".2").hide();
            $(".3").hide();
            $(".4").hide();


        }

        if (value == "2") {
            $("#PeriodTable").show();
            $(".1").show();
            $(".2").show();
            $(".3").hide();
            $(".4").hide();
        }

        if (value == "3") {
            $("#PeriodTable").show();
            $(".1").show();
            $(".2").show();
            $(".3").show();
            $(".4").hide();
        }

        if (value == "4") {
            $("#PeriodTable").show();
            $(".1").show();
            $(".2").show();
            $(".3").show();
            $(".4").show();
        }
    }

    Submit() {

    }

    render() {
        return (
            <div className="container">
                <h2 style={{textAlign:"center"}} >Time Table</h2>

                <label for="period">Select Total Number of Periods</label>
                <div ><select name="period" style={{ width: "50%" }} id="Period"
                    onChange={this.handleUserInput} required>
                    <option value="" disabled selected hidden>select periods</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    {  /*
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
               
                    <option value="8">8</option>
                    */}
                </select>
                </div>

                <table id="PeriodTable" name="PeriodTable" style={{ overflowX:"auto",overflowy:"auto", marginTop:"10%" }}>
                    <tr><td><th>Period</th></td><td className="1" id="1">1</td><td className="2" id="2">2</td>
                        <td className="3" id="3">3</td><td className="4" id="4">4</td></tr>

                    <tr class="timing "><td><th>Timing</th></td><td className="1" id="1">< input type="text" name="time1" placeholder="Start and EndTime "></input></td>
                        <td className="2" id="2">< input type="text" name="time2" placeholder="Start and EndTime "></input></td>
                        <td className="3" id="3">< input type="text" name="time3" placeholder="Start and EndTime "></input></td>
                        <td className="4" id="4">< input type="text" name="time4" placeholder="Start and EndTime "></input></td></tr>

                    <tr class="monday"><th>MonDay</th><td className="1" id="1">< input type="text" name="monday1" placeholder="Subject"></input></td>
                        <td className="2" id="2">< input type="text" name="monday2" placeholder="Subject"></input></td>
                        <td className="3" id="3">< input type="text" name="monday3" placeholder="Subject"></input></td>
                        <td className="4" id="4">< input type="text" name="monday4" placeholder="Subject"></input></td></tr>

                    <tr class="tuesday"><th>TuesDay</th><td className="1" id="1">< input type="text" name="tuesday1" placeholder="Subject"></input></td>
                        <td className="2" id="2">< input type="text" name="tuesday2" placeholder="Subject"></input></td>
                        <td className="3" id="3">< input type="text" name="tuesday3" placeholder="Subject"></input></td>
                        <td className="4" id="4">< input type="text" name="tuesday4" placeholder="Subject"></input></td></tr>

                    <tr class="wednesday"><th>WednesDay</th><td className="1" id="1">< input type="text" name="wednesday1" placeholder="Subject"></input></td>
                        <td className="2" id="2">< input type="text" name="wednesday2" placeholder="Subject"></input></td>
                        <td className="3" id="3">< input type="text" name="wednesday3" placeholder="Subject"></input></td>
                        <td className="4" id="4">< input type="text" name="wednesday4" placeholder="Subject"></input></td></tr>

                    <tr class="thursday"><th>ThursDay</th><td className="1" id="1">< input type="text" name="thursday1" placeholder="Subject"></input></td>
                        <td className="2" id="2">< input type="text" name="thursday2" placeholder="Subject"></input></td>
                        <td className="3" id="3" >< input type="text" name="thursday3" placeholder="Subject"></input></td>
                        <td className="4" id="4">< input type="text" name="thursday4" placeholder="Subject"></input></td></tr>

                    <tr class="friday"><th>FriDay</th><td className="1" id="1">< input type="text" name="friday1" placeholder="Subject"></input></td>
                        <td className="2" id="2" >< input type="text" name="friday2" placeholder="Subject"></input></td>
                        <td className="3" id="3">< input type="text" name="friday3" placeholder="Subject"></input></td>
                        <td className="4" id="4">< input type="text" name="friday4" placeholder="Subject"></input></td></tr>

                    <tr class="saturday"><th>SaturDay</th><td className="1" id="1">< input type="text" name="saturday1" placeholder="Subject"></input></td>
                        <td className="2" id="2">< input type="text" name="saturday2" placeholder="Subject"></input></td>
                        <td className="3" id="3">< input type="text" name="saturday3" placeholder="Subject"></input></td>
                        <td className="4" id="4">< input type="text" name="saturday4" placeholder="Subject"></input></td></tr>

                    <tr class="sunday"><th>SunDay</th><td className="1" id="1">< input type="text" name="sunday1" placeholder="Subject"></input></td>
                        <td className="2" id="2">< input type="text" name="sunday2" placeholder="Subject"></input></td>
                        <td className="3" id="3">< input type="text" name="sunday3" placeholder="Subject"></input></td>
                        <td className="4" className="4" id="4">< input type="text" name="sunday4" placeholder="Subject"></input></td></tr>
                </table>


                <button id="submit"  style={{marginTop:"20px",marginBottom:"40px"}} >Submit</button>




        
            </div>

        );
    }

}


export default TimeTable;