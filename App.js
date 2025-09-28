import React, { useState } from "react";
import "./App.css";

const UserIcon = () => ( <
    div className = "icon-circle" >
    <
    svg width = "54"
    height = "54"
    viewBox = "0 0 24 24"
    fill = "none"
    stroke = "#ffffff"
    strokeWidth = "1.5"
    strokeLinecap = "round"
    strokeLinejoin = "round" >
    <
    circle cx = "12"
    cy = "7"
    r = "4" / >
    <
    path d = "M5.5 21a8.38 8.38 0 0 1 13 0" / >
    <
    /svg> <
    /div>
);

const AdminIcon = () => ( <
    div className = "icon-circle" >
    <
    svg width = "54"
    height = "54"
    viewBox = "0 0 24 24"
    fill = "none"
    stroke = "#ffffff"
    strokeWidth = "1.5"
    strokeLinecap = "round"
    strokeLinejoin = "round" >
    <
    circle cx = "12"
    cy = "7"
    r = "4" / >
    <
    path d = "M9 21v-2a4 4 0 0 1 6 0v2" / >
    <
    path d = "M4 15v2a4 4 0 0 0 8 0v-2" / >
    <
    path d = "M16 15v2a4 4 0 0 0 4 4h1" / >
    <
    /svg> <
    /div>
);

function App() {
    const [page, setPage] = useState("login");
    const [loginForm, setLoginForm] = useState({ username: "", password: "" });
    const [studentForm, setStudentForm] = useState({
        nic: "",
        name: "",
        address: "",
        contact: "",
    });
    const [infoMessage, setInfoMessage] = useState("");
    const [studentData, setStudentData] = useState(null);
    const [inputNIC, setInputNIC] = useState("");

    // Handlers
    const handleLoginChange = (e) => {
        setLoginForm({...loginForm, [e.target.name]: e.target.value });
    };

    const handleStudentChange = (e) => {
        setStudentForm({...studentForm, [e.target.name]: e.target.value });
    };

    // Login submit simulation
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (loginForm.username && loginForm.password) {
            setPage("dashboard");
        } else {
            alert("Enter username and password.");
        }
    };

    // Submit Student
    const submitStudent = () => {
        if (
            studentForm.nic &&
            studentForm.name &&
            studentForm.address &&
            studentForm.contact
        ) {
            setStudentData({...studentForm });
            setInfoMessage("Student successfully submitted to the database");
        } else {
            alert("Fill all student details.");
        }
    };

    // Update Student
    const updateStudent = () => {
        if (
            studentForm.nic &&
            studentForm.name &&
            studentForm.address &&
            studentForm.contact
        ) {
            setStudentData({...studentForm });
            setInfoMessage("Student successfully updated in the database");
        } else {
            alert("Fill all student details.");
        }
    };

    // Get Student Details by NIC
    const getStudentDetails = () => {
        if (inputNIC === "") {
            alert("Enter NIC Number!");
            return;
        }
        // For demo, simulate fetching stored student data with NIC
        if (studentData && studentData.nic === inputNIC) {
            setInfoMessage("Student successfully get from the database");
        } else {
            setStudentData(null);
            setInfoMessage("Student not found in the database");
        }
    };

    // Delete Student by NIC
    const deleteStudent = () => {
        if (inputNIC === "") {
            alert("Enter NIC Number!");
            return;
        }
        if (studentData && studentData.nic === inputNIC) {
            setStudentData(null);
            setInfoMessage("Student successfully delete from the database");
        } else {
            setInfoMessage("Student not found in the database");
        }
    };

    // Render pages based on current state
    const renderPage = () => {
            switch (page) {
                case "login":
                    return ( <
                        div className = "form-container" >
                        <
                        AdminIcon / >
                        <
                        h2 className = "title-link" > Admin Login < /h2> <
                        form onSubmit = { handleLoginSubmit } >
                        <
                        input type = "text"
                        name = "username"
                        placeholder = "User Name"
                        value = { loginForm.username }
                        onChange = { handleLoginChange }
                        /> <
                        input type = "password"
                        name = "password"
                        placeholder = "Password"
                        value = { loginForm.password }
                        onChange = { handleLoginChange }
                        /> <
                        button type = "submit"
                        className = "btn-black" >
                        Login <
                        /button> <
                        /form> <
                        /div>
                    );

                case "dashboard":
                    return ( <
                        div className = "form-container dashboard" >
                        <
                        UserIcon / >
                        <
                        h2 className = "title-link" > Student Management System Dashboard < /h2> <
                        div className = "user-cards" >
                        <
                        div className = "user-card" >
                        <
                        div className = "user-avatar" > USER 1 < /div> <
                        div className = "user-info" > View | Edit | Manage < /div> <
                        /div> <
                        div className = "user-card" >
                        <
                        div className = "user-avatar" > USER 2 < /div> <
                        div className = "user-info" > View | Edit | Manage < /div> <
                        /div> <
                        /div> <
                        div className = "nav-buttons" >
                        <
                        button onClick = {
                            () => setPage("submit") } > Submit Student < /button> <
                        button onClick = {
                            () => setPage("get") } > Get Student Details < /button> <
                        button onClick = {
                            () => setPage("update") } >
                        Update Student Details <
                        /button> <
                        button onClick = {
                            () => setPage("delete") } > Delete Student < /button> <
                        /div> <
                        /div>
                    );

                case "submit":
                    return ( <
                            div className = "form-container" >
                            <
                            UserIcon / >
                            <
                            h2 className = "title-link" > Submit Student < /h2> <
                            input type = "text"
                            name = "nic"
                            placeholder = "NIC Number"
                            value = { studentForm.nic }
                            onChange = { handleStudentChange }
                            /> <
                            input type = "text"
                            name = "name"
                            placeholder = "Student Name"
                            value = { studentForm.name }
                            onChange = { handleStudentChange }
                            /> <
                            input type = "text"
                            name = "address"
                            placeholder = "Student Address"
                            value = { studentForm.address }
                            onChange = { handleStudentChange }
                            /> <
                            input type = "text"
                            name = "contact"
                            placeholder = "Student Contact"
                            value = { studentForm.contact }
                            onChange = { handleStudentChange }
                            /> <
                            div className = "nav-buttons" >
                            <
                            button onClick = {
                                () => setPage("dashboard") }
                            className = "btn-white" >
                            Check Out <
                            /button> <
                            button onClick = { submitStudent }
                            className = "btn-black" >
                            Submit Student <
                            /button> <
                            button onClick = {
                                () => setPage("dashboard") }
                            className = "btn-white" >
                            Back <
                            /button> <
                            /div> {
                                studentData && ( <
                                    div className = "info-box" >
                                    <
                                    p >
                                    <
                                    b > NIC Number: < /b> {studentData.nic} <br / >
                                    <
                                    b > Student Name: < /b> {studentData.name} <br / >
                                    <
                                    b > Student Address: < /b> {studentData.address} <br / >
                                    <
                                    b > Student Contact: < /b> {studentData.contact} <
                                    /p> <
                                    /div>
                                )
                            } {
                                infoMessage && < p className = "info-message" > { infoMessage } < /p>} <
                                    /div>
                            );

                            case "update":
                                return ( <
                                    div className = "form-container" >
                                    <
                                    UserIcon / >
                                    <
                                    h2 className = "title-link" > Update Student Details < /h2> <
                                    input type = "text"
                                    name = "nic"
                                    placeholder = "NIC Number"
                                    value = { studentForm.nic }
                                    onChange = { handleStudentChange }
                                    /> <
                                    input type = "text"
                                    name = "name"
                                    placeholder = "Student Name"
                                    value = { studentForm.name }
                                    onChange = { handleStudentChange }
                                    /> <
                                    input type = "text"
                                    name = "address"
                                    placeholder = "Student Address"
                                    value = { studentForm.address }
                                    onChange = { handleStudentChange }
                                    /> <
                                    input type = "text"
                                    name = "contact"
                                    placeholder = "Student Contact"
                                    value = { studentForm.contact }
                                    onChange = { handleStudentChange }
                                    /> <
                                    div className = "nav-buttons" >
                                    <
                                    button onClick = {
                                        () => setPage("dashboard") }
                                    className = "btn-white" >
                                    Check Out <
                                    /button> <
                                    button onClick = { updateStudent }
                                    className = "btn-black" >
                                    Update Student Details <
                                    /button> <
                                    button onClick = {
                                        () => setPage("dashboard") }
                                    className = "btn-white" >
                                    Back <
                                    /button> <
                                    /div> {
                                        studentData && ( <
                                            div className = "info-box" >
                                            <
                                            p >
                                            <
                                            b > NIC Number: < /b> {studentData.nic} <br / >
                                            <
                                            b > Student Name: < /b> {studentData.name} <br / >
                                            <
                                            b > Student Address: < /b> {studentData.address} <br / >
                                            <
                                            b > Student Contact: < /b> {studentData.contact} <
                                            /p> <
                                            /div>
                                        )
                                    } {
                                        infoMessage && < p className = "info-message" > { infoMessage } < /p>} <
                                            /div>
                                    );

                                    case "delete":
                                        return ( <
                                            div className = "form-container" >
                                            <
                                            UserIcon / >
                                            <
                                            h2 className = "title-link" > Delete Student < /h2> <
                                            input type = "text"
                                            placeholder = "Enter NIC Number"
                                            value = { inputNIC }
                                            onChange = {
                                                (e) => setInputNIC(e.target.value) }
                                            /> <
                                            div className = "nav-buttons" >
                                            <
                                            button onClick = { deleteStudent }
                                            className = "btn-black" >
                                            Delete Student <
                                            /button> <
                                            button onClick = {
                                                () => setPage("dashboard") }
                                            className = "btn-white" >
                                            Back <
                                            /button> <
                                            /div> {
                                                infoMessage && < p className = "info-message" > { infoMessage } < /p>} <
                                                    /div>
                                            );

                                            case "get":
                                                return ( <
                                                    div className = "form-container" >
                                                    <
                                                    UserIcon / >
                                                    <
                                                    h2 className = "title-link" > Get Student Details < /h2> <
                                                    input type = "text"
                                                    placeholder = "Enter NIC Number"
                                                    value = { inputNIC }
                                                    onChange = {
                                                        (e) => setInputNIC(e.target.value) }
                                                    /> <
                                                    div className = "nav-buttons" >
                                                    <
                                                    button onClick = { getStudentDetails }
                                                    className = "btn-black" >
                                                    Get Student Details <
                                                    /button> <
                                                    button onClick = {
                                                        () => setPage("dashboard") }
                                                    className = "btn-white" >
                                                    Back <
                                                    /button> <
                                                    /div> {
                                                        studentData && ( <
                                                            div className = "info-box" >
                                                            <
                                                            p >
                                                            <
                                                            b > NIC Number: < /b> {studentData.nic} <br / >
                                                            <
                                                            b > Student Name: < /b> {studentData.name} <br / >
                                                            <
                                                            b > Student Address: < /b> {studentData.address} <br / >
                                                            <
                                                            b > Student Contact: < /b> {studentData.contact} <
                                                            /p> <
                                                            /div>
                                                        )
                                                    } {
                                                        infoMessage && < p className = "info-message" > { infoMessage } < /p>} <
                                                            /div>
                                                    );

                                                    default:
                                                    return <div > Unknown page < /div>;
                                                }
                                        };

                                        return <div className = "app" > { renderPage() } < /div>;
                                }

                                export
                            default App;