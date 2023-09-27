import readCsv from "./check_file";
import DataInput from "./data_input";

async function checkStudents(students, newline='\r\n', delimiter=',') {
    const data = await readCsv(students, newline, delimiter)
    return data
}

function crossCheck(schools, students) {
    return true
}

function StudentsInput({ onAccept, onDecline }) {
    return (
        <>
            <DataInput
                prefix='schools'
                href='./schools.csv'
                filename='schools.csv'
                onAccept={onAccept}
                onDecline={onDecline}
                checkFile={checkStudents} />
        </>
    );
}

export default StudentsInput;
