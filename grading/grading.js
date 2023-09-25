function getGrade(marks) {
    // calculate grade
    let grade;
    if (marks > 79) {
     grade = 'A';
    } else if (marks >= 60) {
     grade = 'B';
    } else if (marks >= 50) {
     grade = 'C';
    } else if (marks >= 40) {
     grade = 'D';
    } else {
     grade = 'E';   
    }

    // show the calculated grade
   return(`The student\s grade is: ${grade}`) 

}                                                             
module.exports = getGrade;
