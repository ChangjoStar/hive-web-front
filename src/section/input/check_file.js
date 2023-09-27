async function readCsv(csv_file, newline, delimiter) {
    const fileUrl = URL.createObjectURL(csv_file)
    const response = await fetch(fileUrl)
    const text = await response.text();
    const lines = text.split(newline);
    const rows = lines.map((line) => line.split(delimiter));
    const [header, ...data] = rows
    const colLength = header.length
    data.forEach(row => {
        if(row.length !== colLength) throw new Error(`${row}`)
    })
    return { header, data }
}

export default readCsv;
