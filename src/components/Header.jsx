import './Header.css';
import flower from './images/flower.png'

export function Header(){
    return (
        <div className='container'>
            <h1 className='title'>Happy Valentines Day</h1>
            <img src={flower} alt="" />
        </div>
    )
}