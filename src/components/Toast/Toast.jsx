import { useEffect, useState } from 'react';
import './style.css'
const Toast = ({toastVisible, onClose}) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (toastVisible) {
            setVisible(true);
            const timerId = setTimeout(() => {
                setVisible(false);
                onClose();
            }, 3000)
            return () => {
                clearTimeout(timerId)
            }
        }
    }, [toastVisible, onClose])
    return (
        <div className={`absolute top-10 transition toast rounded-[10px] py-7 px-9 text-center ${visible ? '' : 'opacity-0 pointer-events-none'} `}>
            <span className='text-[20px] text-white font-light'>Неправильный формат файла, разрешены только файлы .CSV</span>
        </div>
    )
}
export default Toast;