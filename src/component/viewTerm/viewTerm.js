import './viewTerm.scss'
import Header from '../header/header'
import Card from '../card/card'
import { useState } from 'react';
export default function ViewTerm() {
    const slides = ['Hello', 'Name', 'Smile'];
    const slides2 = ['Xin chào', 'Tên', 'Nụ cười'];

    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    }

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    }
    return (
        <div>
            <Header></Header>
            <div className='cards'>

                <div className='cards_container'>
                    <div>

                        <span  className="previous round" onClick={prevSlide}>&#8249;</span>
                    </div>
                    <Card tiengviet={slides[currentIndex]} tienganh={slides2[currentIndex]}></Card>
                    <div>

                        <span className="next round" onClick={nextSlide}>&#8250;</span>
                    </div>

                </div>
            </div>
        </div>
    )
}