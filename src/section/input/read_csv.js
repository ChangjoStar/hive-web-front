function parseTextToCsv(text, newline, delimiter) {
    const lines = text.split(newline);
    const rows = lines.map((line) => line.split(delimiter));
    const [header, ...data] = rows
    const colLength = header.length
    let prune_data = []
    data.forEach(row => {
        switch (row.length) {
            case 1:
                if (row[0] !== '') throw new Error(`${row}`)
                break
            case colLength:
                prune_data.push(row)
                break
            default:
                throw new Error(`${row}`)
        }
    })
    return { header, prune_data }
}

async function readCsv(csv_file, newline, delimiter) {
    const fileUrl = URL.createObjectURL(csv_file)
    const response = await fetch(fileUrl)
    const text = await response.text();
    const data = parseTextToCsv(text, newline, delimiter)
    return data
}

export { readCsv, parseTextToCsv };
