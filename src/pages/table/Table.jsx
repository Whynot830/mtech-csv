import './style.css'
const Table = ({ onDelete }) => {
    const formatNumber = (number) => number.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
    const clearData = () => {
        onDelete()
    }

    const csvData = localStorage.getItem('csvData')
    const rows = csvData.split('\n')
    const tmp = rows.slice(1, -1).map((row) => [...row.split('"')[0].split(',').splice(0, 4), row.split('"')[1]])

    const table = tmp.map((row, index) =>
        <tr key={index} className='transition border-b border-[#C0C0C0] hover:bg-[#6346B440]'>
            {row.map((cell, idx) => (
                <td key={idx}>
                    {idx == 1 ? (
                        formatNumber(cell)
                    ) : idx == 2 ? (
                        <a href={`mailto:${cell}`} className='underline'>
                            {cell}
                        </a>
                    ) : (cell)
                    }
                </td>
            ))}
        </tr>
    )
    return (
        <div className="flex flex-col bg-silver pt-6 pl-5 gap-y-5 items-end min-h-screen">
            <button
                className='transition btn text-white text-xs rounded-[5px] text-center w-[164px] h-9 mr-5'
                onClick={clearData}
                >
                Загрузить новый файл
            </button>
            <table className="table bg-white rounded-tl-[10px] min-h-screen w-full">
                <thead>
                    <tr className='border-[#898989] border-b-2 divide-x'>
                        <th className=''>Имя</th>
                        <th className=''>Номер телефона</th>
                        <th className=''>email</th>
                        <th className=''>Дата рождения</th>
                        <th className=''>Адрес</th>
                    </tr>

                </thead>
                <tbody>
                    {table}
                </tbody>
            </table>
        </div>

    )
}
export default Table