async function readCsv(csv_file, newline, delimiter) {
    const fileUrl = URL.createObjectURL(csv_file)
    const response = await fetch(fileUrl)
    const text = await response.text();
    const lines = text.split(newline);
    const rows = lines.map((line) => line.split(delimiter));
    const [header, ...data] = rows
    return { header, data }
}

async function checkSchools(schools, newline='\r\n', delimiter=',') {
    const data = await readCsv(schools, newline, delimiter)
    return data
}

async function checkStudents(students, newline='\r\n', delimiter=',') {
    const data = await readCsv(students, newline, delimiter)
    return data
}

function crossCheck(schools, students) {
    return true
}

export { checkSchools, checkStudents, crossCheck };
