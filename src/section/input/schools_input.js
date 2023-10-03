import DataInput from "./data_input";
import { readCsv } from "./read_csv";

function SchoolsInput({ onAccept, onDecline, setSchools }) {
    const checkSchools = async (file, newline = '\r\n', delimiter = ',') => {
        const schools = await readCsv(file, newline, delimiter)
        setSchools(file)
        return schools
    }

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
