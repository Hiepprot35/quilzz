import './viewTerm.scss'
import Header from '../header/header'
import Card from '../card/card'
import { useEffect, useState } from 'react';
export default function ViewTerm() {
   
    const [term, setTerm] = useState()
   
    const getTerm = async () => {
        const URL = `${process.env.REACT_APP_DB_HOST}/api/allTerm`
        console.log(URL)
        try {
            const res = await fetch(URL)
            const data = await res.json();
            setTerm(data)
            console.log(data)
        } catch (error) {
        }

    }
    useEffect(() => {
        getTerm()
    }, [])
    useEffect(() => {
        console.log(term)
    }, [term])
 
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + term?.length) % term?.length);
    }

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % term?.length);
    }
    return (
        <div>
            <Header></Header>
            <div className='cards'>

                <div className='cards_container'>
                    <div>

                        <span className="previous round" onClick={prevSlide}>&#8249;</span>
                    </div>
                    {
                       term&& term.length>0&&
                        <Card term={term[currentIndex]}></Card>
                    }
                    <div>

                        <span className="next round" onClick={nextSlide}>&#8250;</span>
                    </div>

                </div>
            </div>
        </div>
    )
}