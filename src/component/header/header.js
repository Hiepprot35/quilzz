import { useEffect } from 'react';
import './header.scss'
import { useParams } from 'react-router-dom';

export default function Header(props) {

    return (
        <div className="Header_container">
            <ul>
                <li>

                    <div><a  className={props.link=="view"?"active":""}  href="/">Xem tài  liệu</a></div>
                </li>
                <li>

                    <div ><a className={props.link=="add"?"active":""} href='/add'>Thêm tài liệu</a></div>
                </li>
            </ul>

        </div>
    )
}