
import Toast from '../../components/Toast/Toast';
import './style.css'
import { useEffect, useState } from 'react'
const Uploading = ({ onUpload }) => {
    const [toastVisible, setToastVisible] = useState(false)
    const triggerToast = () => {
        setToastVisible(true)
    }
    const handleToastClose = () => {
        setToastVisible(false)
    }
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        const ext = file.name.split('.').pop()
        if (ext !== 'csv') {
            triggerToast()
            return
        }
        const reader = new FileReader()
        reader.readAsText(file, 'CP1251')
        reader.onload = (e) => onUpload(e.currentTarget.result)
        
    };
    const dragOverHandler = (event) => {
        event.preventDefault()
    }
    const dropHandler = (event) => {
        event.preventDefault()
    }
    return (
        <div onDragOver={dragOverHandler(event)}
            onDrop={dropHandler(event)} 
        className="w-screen h-screen bg-silver p-50 flex justify-center items-center">
            <div className="w-1/2 max-w-[823px] h-1/3 bg-white rounded-[10px] flex flex-col items-center justify-evenly shadow-[2px_4px_9.9px_rgba(0,0,0,0.25)]">
                <span className="text-2xl text-center">
                    Выберите файл в формате CSV
                </span>
                <label className="w-1/3 h-[48px]">
                    <input type="file" name="file" className='hidden' accept='.csv' onChange={handleFileChange} />
                    <span className='transition btn text-white cursor-pointer flex items-center justify-center text-base rounded-[5px] h-full w-full text-center'>
                        Выберите файл
                    </span>
                </label>
            </div>
            <Toast toastVisible={toastVisible} onClose={handleToastClose}/>
        </div>
    )
}
export default Uploading


        
        // else {
        //     const fileUrl = URL.createObjectURL(file)
        //     const response = await fetch(fileUrl,
        //         {
        //             headers: { 'Content-Type': "text/html; charset=UTF-8" }
        //         })
            
        //     const text = await response.text()
        //     console.log(text)
        //     // onUpload(text)
        // }