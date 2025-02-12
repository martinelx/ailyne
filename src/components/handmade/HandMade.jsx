import dummy from '../assets/dummy.png';
import km from '../assets/km.png';
import brazy from '../assets/brazy.png';
import bruhhhhhh from '../assets/bruhhhhhh.png';
import church from '../assets/church.png';
import happysad from '../assets/happysad.png';
import mango from '../assets/mango.png';
import idk from '../assets/idk.png';
import luv from '../assets/luv.png';
import './HandMade.css'

export function HandMade(){
    return(
        <div className="Container">
            <h2>Fotos favoritas</h2>
            <div className='fav-fts'>
                <div className='Card'>
                    <img src={dummy} />
                    <h1>Nem preciso falar muito</h1>
                </div>
                <div className='Card'>
                    <img src={mango} alt="" />
                    <h1>Uma maça por dia, traz saude e alegría</h1>
                </div>
                <div className='Card'>
                    <img src={idk} alt="" />
                    <h1>Sinceramente não sei oque se passa contigo</h1>
                </div>
            </div>
            <h2>Momentos favoritos</h2>
            <div className='fav-moments'>
                <div className='Card'>
                    <img src={luv} alt="" />
                    <h1>The day you said YES</h1>
                </div>
                <div className='Card'>
                    <img src={brazy} alt="" />
                    <h1>Depois de acabar as coxinhas</h1>
                </div>
                <div className='Card'>
                    <img src={happysad} alt="" />
                    <h1>A happy, sad momment</h1>
                </div>
                <div className='Card'>
                    <img src={km} alt="" />
                    <h1>O dia que o tal Demoniozinho te fez andar</h1>
                </div>
                <div className='Card'>
                    <img src={church} alt="" />
                    <h1>Momentos antes</h1>
                </div>
                <div className='Card'>
                    <img src={bruhhhhhh} alt="" />
                    <h1>Loucurasssss</h1>
                </div>
            </div>
        </div>
    )
}