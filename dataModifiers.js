// Typescript supports 3 data modifiers/ access modifiers, public, private and protected
// public
// --------
// By default , all the members of a class in typescript are public.
// All members can be accessed from anywere
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getStudentDetails = function () {
        return this.studentId + ' : ' + this.studentName;
    };
    return Student;
}());
var student = new Student();
student.studentId = "Santanu";
student.studentName = "Paikaray";
student.getStudentDetails();
console.log(student.studentId);
console.log(student.studentName);
console.log(student.getStudentDetails());
