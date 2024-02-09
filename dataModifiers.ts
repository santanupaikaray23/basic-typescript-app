// Typescript supports 3 data modifiers/ access modifiers, public, private and protected

// public
// --------
// By default , all the members of a class in typescript are public.
// All members can be accessed from anywere

class Student {
    public studentId: string;
    studentName: string;

    getStudentDetails(){
        return this.studentId+ ' : ' + this.studentName;
    }
}

let student= new Student();

student.studentId="Santanu"
student.studentName="Paikaray"

student.getStudentDetails()

console.log(student.studentId)
console.log(student.studentName)
console.log(student.getStudentDetails())