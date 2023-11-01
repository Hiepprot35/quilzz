import Loading from "../loading/loading"
import { useState, useEffect } from "react"
import Header from "../header/header"
import './viewTitle.scss'
export default function ViewTitle() {
    const [titles, setTitle] = useState()

    const getTiltles = async () => {
        const URL = `${process.env.REACT_APP_DB_HOST}/api/allTitles`
        console.log(URL)
        try {
            const res = await fetch(URL)
            const data = await res.json();
            setTitle(data)
            console.log(data)
        } catch (error) {
        }

    }
    useEffect(() => {
        setTimeout(getTiltles, [1000])

    }, [])
    useEffect(() => {
        console.log(titles)

    }, [titles])
    return (
        titles ?
            <div>
                <Header></Header>
                <div className="container_Title">
                    {
                        titles.map((title, i) => (
                            <div className="title_text" key={i}>
                                <div className="title_left">

                                    <a href={`title/${title.title}`}>

                                         <h2>Tiều đề: {title.title}</h2><br></br>
                                        <span>Mô tả: {title.Mota} </span>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            : <Loading></Loading>
    )
}