$(document).ready(function loadStudents() {
    const appKey = "kid_BJXTsSi-e";
    const baseUrl = `https://baas.kinvey.com/appdata/${appKey}/students`;
    const username = "guest";
    const pass = "guest";
    let authHeaders = {
        "Authorization": "Basic " + btoa(username + ":" + pass),
        "Content-Type": "application/json"
    };
    let tableOfStudents = $("#results");
        let studentsInfo = {
            method:"GET",
            url:baseUrl,
            headers:authHeaders
        };
        $.ajax(studentsInfo).then(displayStudents);
        function displayStudents(students) {
            students = students.sort((a,b) => {
                return a.ID - b.ID});
            for(let st of students){
                let row = $("<tr>");
                let id = $("<td>").text(st.ID);
                let firstName = $("<td>").text(st.FirstName);
                let lastName = $("<td>").text(st.LastName);
                let facNumber = $("<td>").text(st.FacultyNumber);
                let stGrade = $("<td>").text(st.Grade);
                row.append(id).append(firstName).append(lastName).append(facNumber).append(stGrade);
                tableOfStudents.append(row);
            }
        }
        $('#addStudent').on('click',createStudent);
            function createStudent() {
                let idStudent = $("#idStudents").val();
                let fName = $("#fNameSt").val();
                let lName = $("#lNameSt").val();
                let facNumberSt = $("#facNumberSt").val();
                let stGrade = $("#grade").val();

                let id = Number(idStudent);
                let grade = Number(stGrade);
                let facNumRegex = /^\d+$/g;

                if (id !== "" && fName !== ""
                    && lName !== "" && facNumRegex.test(facNumberSt)
                    && grade !== "") {
                    let newStudent = {
                        ID: id,
                        FirstName: fName,
                        LastName: lName,
                        FacultyNumber: facNumberSt,
                        Grade: grade
                    };
                    $.ajax({
                        url:baseUrl,
                        method: "POST",
                        headers:authHeaders,
                        data:JSON.stringify(newStudent)
                    });
                }
            }
});
