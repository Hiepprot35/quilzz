import './viewTerm.scss'
import Header from '../header/header'
import Card from '../card/card'
export default function ViewTerm() {
    return (
        <div>
            <Header></Header>
            <div className='cards_container'>
                <Card tiengviet={"1"} tienganh={"1"}></Card>
                <Card tiengviet={"2"} tienganh={"2"}></Card>
                <Card tiengviet={"3"} tienganh={"3"}></Card>

            </div>
        </div>
    )
}