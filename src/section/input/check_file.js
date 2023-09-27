function checkSchools(csv_file) {
    console.log('schools', csv_file)
    if (csv_file.name === 'schools.csv') return true
    return false
}

function checkStudents(csv_file) {
    console.log('students', csv_file)
    if (csv_file.name === 'students.csv') return true
    return false
}

export { checkSchools, checkStudents };
