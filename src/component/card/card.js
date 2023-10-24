export default function Card(props) {
    return (
        <div className="card">
            <div class="content">
                <div class="front">
                    {props.tiengviet}
                </div>
                <div class="back">
                   {props.tienganh}
                </div>
            </div>
        </div>
    )
}