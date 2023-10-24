import { useEffect, useState, useRef } from 'react';
import AddTerm from '../addTerm/addTerm';
import InputForm from '../forminput/inputForm';
import ReactDOM from 'react-dom';

import './addDocument.scss'
export default function AddDocument() {
    document.title = "Add Document"
    const disk_img = useRef(null)
    const [arrayOfObjects, setArrayOfObjects] = useState([]);
    const [isSubmit,setIsSubmit]=useState(false)
    const music_wave = useRef(null)
    const [countNumber, setCountNumber] = useState([2])
    const addComponent = () => {
        setCountNumber([...countNumber, countNumber[countNumber.length - 1] + 1]);
    }
    useEffect(() => {
        console.log(arrayOfObjects)
    }, [arrayOfObjects])
    const audioRef = useRef(null);

    const playAudio = () => {
        audioRef.current.play();
    };
    const addAnimation = () => {
        console.log("add")
        if (disk_img && disk_img.current) {
            console.log(disk_img.current)
            disk_img.current.style.animation = "disk_rotate infinite 20s linear"
        }
        const element = music_wave.current;

        if (element) {
            // Tìm các phần tử con bên trong phần tử DOM
            const childElements = element.querySelectorAll('*');

            // In ra các phần tử con
            childElements.forEach(child => {
                child.style.animationPlayState = "running"
            });
        }
    }
    const removeAnimation = () => {
        if (disk_img && disk_img.current) {
            disk_img.current.style.animationPlayState = "paused"

        }
        const element = music_wave.current;

        if (element) {
            // Tìm các phần tử con bên trong phần tử DOM
            const childElements = element.querySelectorAll('*');

            // In ra các phần tử con
            childElements.forEach(child => {
                child.style.animationPlayState = "paused"
            });
        }
    }
    const SubmitClick=()=>
    {
        setIsSubmit(!isSubmit)
    }
    
    return (
        <form >
            <div>
            <div>
            </div>
                <div className='header_addTerm'>
                    <div className='mota_tieude'>

                        <InputForm
                            name={"title"}
                            label={"Nhập tiêu đề"}
                            style={{ width: "100%" }}
                        />
                        <InputForm
                            name={"title"}
                            style={{ width: "100%" }}
                            label={"Nhập mô tả"}
                        />
                    </div>

                    <div className='music_play'  >
                        <img ref={disk_img} className='disk_img' src='
                        https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/393852298_890780919430409_882491502045642327_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=AIbgpaDirRMAX-7uaxI&_nc_ht=scontent.fhan2-3.fna&_nc_e2o=s&oh=03_AdQzzv3Z5ic-viERAagL9OxL6RbqhXzR1E0AFvvaWDWyAw&oe=655C891E'></img>
                        <div className='music_wave' ref={music_wave}>
                            {Array.from({ length: 25 }).map((_, index) => (
                                <span key={index}></span>
                            ))}
                        </div>
                        <audio controls ref={audioRef} onPlay={addAnimation} onPause={removeAnimation} >
                            <source src='././hcl.mp3' type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
                <input onClick={SubmitClick} type='submit'></input>

                <AddTerm count={1} setArrayOfObjects={setArrayOfObjects} isSubmit={isSubmit}></AddTerm>
                {
                    countNumber.map((e, i) => {
                        return (
                            <div key={i}>
                                <AddTerm count={e} setArrayOfObjects={setArrayOfObjects} isSubmit={isSubmit}  />
                            </div>
                        )
                    })
                }
                <div className='container' style={{ alignItems: "center", cursor: "pointer" }} onClick={addComponent}>

                    <span >

                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 72 72">
                            <path d="M 36 12 C 22.745 12 12 22.745 12 36 C 12 49.255 22.745 60 36 60 C 49.255 60 60 49.255 60 36 C 60 22.745 49.255 12 36 12 z M 36 20 C 44.837 20 52 27.163 52 36 C 52 44.837 44.837 52 36 52 C 27.163 52 20 44.837 20 36 C 20 27.163 27.163 20 36 20 z M 36 25 C 34.343 25 33 26.343 33 28 L 33 33 L 28 33 C 26.343 33 25 34.343 25 36 C 25 37.657 26.343 39 28 39 L 33 39 L 33 44 C 33 45.657 34.343 47 36 47 C 37.657 47 39 45.657 39 44 L 39 39 L 44 39 C 45.657 39 47 37.657 47 36 C 47 34.343 45.657 33 44 33 L 39 33 L 39 28 C 39 26.343 37.657 25 36 25 z"></path>
                        </svg>
                        <p>
                            Thêm thẻ mới
                        </p>
                    </span>
                </div>
            </div>

        </form>
    )
}