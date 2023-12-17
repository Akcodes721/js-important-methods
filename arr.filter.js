const students = ['alice', 'bob', 'charlie'];

// Using filter to get students whose names start with 'b'
const bStudents = students.filter(student => student.startsWith('b'));
console.log(bStudents);
// Result: ['bob']
