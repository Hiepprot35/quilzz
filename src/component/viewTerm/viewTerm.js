import './viewTerm.scss'
import Header from '../header/header'
import Card from '../card/card'
import { useParams } from 'react-router-dom';

import Loading from '../loading/loading';
import { useEffect, useState } from 'react';
export default function ViewTerm(props) {
    const { title } = useParams();

    const [term, setTerm] = useState()

    const getTerm = async () => {
        const URL = `${process.env.REACT_APP_DB_HOST}/api/allTerm/${title}`
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
        setTimeout(getTerm, [1000])

    }, [])
    useEffect(() => {
        console.log(title)
    }, [])

    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + term?.length) % term?.length);
    }

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % term?.length);
    }
    return (
        <>

            {
                term ?
                    <div>
                        < Header link={props.link} />
                        <div className='conatainer_Term'>

                            <div className='cards'>

                                <div className='cards_container'>
                                    <div>

                                        <span className="previous round" onClick={prevSlide}>&#8249;</span>
                                    </div>
                                    {
                                        term && term.length > 0 &&
                                        <Card term={term[currentIndex]}></Card>
                                    }
                                    <div>

                                        <span className="next round" onClick={nextSlide}>&#8250;</span>
                                    </div>

                                </div>
                            </div>
                            <div className='Count_fields'>
                                <span>

                                    {currentIndex + 1}/{term?.length}
                                </span>

                            </div>
                        </div>

                    </div > : <Loading></Loading>
            }
        </>
    )
}