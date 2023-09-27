function Statistics() {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th rowSpan={2}>알고리즘</th>
                        <th rowSpan={2}>시드</th>
                        <th rowSpan={2}>배정 버튼</th>
                        <th colSpan={3}>통계</th>
                        <th rowSpan={2}>다운로드 버튼</th>
                        <th rowSpan={2}>삭제 버튼</th>
                    </tr>
                    <tr>
                        <th>1지망</th>
                        <th>2지망</th>
                        <th>3지망</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={2}>Tie-Breaking</td>
                        <td>시드</td>
                        <td>배정</td>
                        <td>통계</td>
                        <td>통계</td>
                        <td>통계</td>
                        <td>다운로드</td>
                        <td>삭제</td>
                    </tr>
                    <tr>
                        <td>시드</td>
                        <td>배정</td>
                        <td>통계</td>
                        <td>통계</td>
                        <td>통계</td>
                        <td>다운로드</td>
                        <td>삭제</td>
                    </tr>
                    <tr>
                        <td rowSpan={3}>Sparkling</td>
                        <td>시드</td>
                        <td>배정</td>
                        <td>통계</td>
                        <td>통계</td>
                        <td>통계</td>
                        <td>다운로드</td>
                        <td>삭제</td>
                    </tr>
                    <tr>
                        <td>시드</td>
                        <td>배정</td>
                        <td>통계</td>
                        <td>통계</td>
                        <td>통계</td>
                        <td>다운로드</td>
                        <td>삭제</td>
                    </tr>
                    <tr>
                        <td>시드</td>
                        <td>배정</td>
                        <td>통계</td>
                        <td>통계</td>
                        <td>통계</td>
                        <td>다운로드</td>
                        <td>삭제</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Statistics;
