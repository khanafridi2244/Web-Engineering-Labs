// Author: Muhammad Shakeel

// Function to calculate the grade based on provided marks
function calculateGrade() {
    // Get input values from the form
    var regNo = document.getElementById("regNo").value;
    var name = document.getElementById("name").value;
    var semester = document.getElementById("semester").value;
    var web = parseFloat(document.getElementById("web").value);
    var programming = parseFloat(document.getElementById("programming").value);
    var oop = parseFloat(document.getElementById("oop").value);
    var ds = parseFloat(document.getElementById("ds").value);
    var ai = parseFloat(document.getElementById("ai").value);

    // Calculate the total obtained marks
    var obtainedMarks = web + programming + oop + ds + ai;
    // Calculate the percentage
    var percentage = (obtainedMarks / 500) * 100;

    // Determine the grade based on the percentage
    var grade;
    if (percentage >= 90) {
        grade = "A";
    } else if (percentage >= 80) {
        grade = "B";
    } else if (percentage >= 70) {
        grade = "C";
    } else if (percentage >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Create a row to display the grade in the table
    var gradeRow = "<tr>";
    gradeRow += "<td>" + regNo + "</td>";
    gradeRow += "<td>" + name + "</td>";
    gradeRow += "<td>" + semester + "</td>";
    gradeRow += "<td>" + web + "</td>";
    gradeRow += "<td>" + programming + "</td>";
    gradeRow += "<td>" + oop + "</td>";
    gradeRow += "<td>" + ds + "</td>";
    gradeRow += "<td>" + ai + "</td>";
    gradeRow += "<td>" + obtainedMarks + "</td>";
    gradeRow += "<td>" + percentage.toFixed(2) + "%</td>";
    gradeRow += "<td>" + grade + "</td>";
    gradeRow += "</tr>";

    // Display the grade row in the table
    document.getElementById("gradeBody").innerHTML = gradeRow;
}
