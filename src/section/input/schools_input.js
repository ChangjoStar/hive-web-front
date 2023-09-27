import readCsv from "./check_file";
import DataInput from "./data_input";

async function checkSchools(schools, newline='\r\n', delimiter=',') {
    const data = await readCsv(schools, newline, delimiter)
    return data
}

function SchoolsInput({ onAccept, onDecline }) {
    return (
        <>
            <DataInput
                prefix='schools'
                href='./schools.csv'
                filename='schools.csv'
                onAccept={onAccept}
                onDecline={onDecline}
                checkFile={checkSchools} />
        </>
    );
}

export default SchoolsInput;
