import CsvReader from "./csv_reader";

function DataInput() {
    return (
        <>
            <CsvReader title="학교 정보">
                <p>학교별 정원을 표현하는 파일입니다.</p>
                <p>column: '학교명', '남학생수', '여학생수'</p>
                <p>남녀공학의 경우 남학생수와 여학생수를 모두 작성합니다.</p>
                <p>남학교의 경우 여학생수를 '0'으로 작성합니다.</p>
                <p>여학교의 경우 남학생수를 '0'으로 작성합니다.</p>
            </CsvReader>
            <CsvReader title="학생 정보">
                <p>학생들의 선호도를 표현하는 파일입니다.</p>
                <p>column: '아이디', '성별', '1지망', '2지망', '3지망'</p>
                <p>각 지망에는 '학교명'을 입력합니다.</p>
                <p>지망수만큼 column을 추가합니다.</p>
            </CsvReader>
        </>
    )
}

export default DataInput;
