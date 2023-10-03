import DataInput from "./data_input";
import { readCsv } from "./read_csv";

function StudentsInput({ onAccept, onDecline, setStudents }) {
    const crossCheck = async (file, newline = '\r\n', delimiter = ',') => {
        checkStudents(file, newline, delimiter)
    }
    const checkStudents = async (file, newline = '\r\n', delimiter = ',') => {
        const students = await readCsv(file, newline, delimiter)
        setStudents(file)
        return students
    }

    return (
        <>
            <DataInput
                prefix='students'
                href='./students.csv'
                filename='students.csv'
                onAccept={onAccept}
                onDecline={onDecline}
                checkFile={crossCheck} />
        </>
    );
}

export default StudentsInput;
