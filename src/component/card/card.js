import blobtoBase64 from "../../function/BlobtoBase64"
import './card.scss'
export default function Card(props) {
    return (
        <div className="card">
            <div class="content" >
                <div class="front" >
                   <span style={{color:props.term?.MauSac}}>
                    {props.term?.TiengViet}
                    </span> 
                </div>
                <div class="back" style={{backgroundImage:props?.term?.HinhAnh  && `url(${blobtoBase64(props?.term?.HinhAnh )})`,
            }}>
                    <span style={{color:props?.term?.MauSac}}>

                   {props.term?.TiengAnh}
                    </span>
                </div>
            </div>
        </div>
    )
}