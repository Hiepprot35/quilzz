import blobtoBase64 from "../../function/BlobtoBase64"
import './card.scss'
export default function Card(props) {
    return (
        <div className="card">
            <div class="content" >
                <div class="front" >
                   <span style={{color:props.term.MauSac}}>
                    {props.tiengviet}
                    </span> 
                </div>
                <div class="back" style={{backgroundImage:`url(${blobtoBase64(props.term.HinhAnh )})`,
            }}>
                    <span style={{color:props.term.MauSac}}>

                   {props.tienganh}
                    </span>
                </div>
            </div>
        </div>
    )
}