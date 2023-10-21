import InputForm from "../forminput/inputForm"
import './addTerm.css'
import { ChromePicker } from 'react-color';

import { useState, useEffect, useRef } from "react";
export default function AddTerm(props) {
    const [color, setColor] = useState('#000');
    const [sendTerm, setSendTerm] = useState({
        TiengViet: "",
        TiengAnh: "",
        HinhAnh: "",
        MauSac: "#000",
    })
    const colorPicker = useRef(null)
    const background_input = useRef(null)

    const handleColorChange = (newColor) => {
        setSendTerm({ ...sendTerm, MauSac: newColor.hex });
    };
    const [avatarURL, setAvatarURL] = useState();
    const [errorMessage, setErrorMessage] = useState("");
    const fileInputRef = useRef(null)
    const [BufferImgInput, setBufferImgInput] = useState("")
    useEffect(() => {
        if (background_input && background_input.current) {
            background_input.current.style.background = `url('${avatarURL}') no-repeat center/cover`;
        }
    }, [avatarURL])
    const show_ColorPicker = () => {
        if (colorPicker && colorPicker.current) {
            const currentOpacity = parseFloat(colorPicker.current.style.opacity);
            console.log( colorPicker.current.style.display)
            if (colorPicker.current.style.display!=="block") {
                console.log("a")
                colorPicker.current.style.display = "block";
            } else  {
                console.log("b")

                colorPicker.current.style.display = "none";
            }
        }
    };
    const imgInput = (e) => {
        const img = e.target.files[0];
        if (img) {

            if (img.type.startsWith("image/")) {

                const imgLink = URL.createObjectURL(img);
                setAvatarURL(imgLink);
                setErrorMessage("");
                setBufferImgInput(img);
            }
            else {
                setAvatarURL(null);
                setErrorMessage("Vui lòng chọn một tệp ảnh hợp lệ.");
            }
        }
    };
    return (
        <div className="container">
            <div className="input_field" ref={background_input}>

                <span onClick={show_ColorPicker}></span>
                <div className="color_picker" ref={colorPicker}>
                    <ChromePicker color={sendTerm?.MauSac} onChange={handleColorChange} />
                </div>
            </div>
            <div className="field_Term">
                <p>
                    {props.count}
                </p>
                <InputForm
                    name={"term"}
                    label={"Thuật ngữ"}
                    color={sendTerm?.MauSac}
                    onChange={setSendTerm}
                >
                </InputForm>
                <InputForm
                    name={"term"}
                    label={"Định nghĩa"}
                    color={sendTerm?.MauSac}
                >
                </InputForm>
                <div className="avatar_field"
                    style={{ height: "200px" }}
                >
                    <button
                        type="button"
                        onClick={() => { fileInputRef.current.click() }}
                    >
                        <span className="chonanh">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 3v2h-4v-2h4zm3 6l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm-7.5 1c.828 0 1.5-.671 1.5-1.5 0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5c0 .829.672 1.5 1.5 1.5zm10.5 9h-4v2h4v-2zm-6 2v-2h-4v2h4zm2-18v2h4v-2h-4zm6 0v2h3v3h2v-5h-5zm-17 2h3v-2h-5v5h2v-3zm20 14h-3v2h5v-5h-2v3zm0-5h2v-4h-2v4zm-20-4h-2v4h2v-4zm3 9h-3v-3h-2v5h5v-2z" /></svg>
                            <p >Hình ảnh</p>
                        </span>
                    </button>
                    <input
                        type="file"
                        onChange={imgInput}
                        ref={fileInputRef}
                        accept="image/png, image/jpeg, image/webp"
                        hidden
                        required
                    >
                    </input>
                    {avatarURL && <img className="avatarImage" src={avatarURL} style={{ width: "100px", height: "100px" }} alt="Avatar"></img>
                    }
                </div>
            </div>

        </div>
    )
}