import { Card } from "./Card"
import { FavMoments, FavPics } from "../../assets/data"
import './Container.css'

export function Container(){
    return(
        <div className="Container">
            <div className="fav-fts">
                <h2>fotos favoritas</h2>
                <div className="cards">
                    {FavPics.map((pic) => 
                        <Card 
                        class={pic.class}
                        key={pic.id} 
                        src={pic.src}
                        title={pic.title}
                        />
                    )}
                </div>
            </div>
            <div className="fav-moments">
                <h2>Momemntos favoritos</h2>
                <div className="cards">
                    {FavMoments.map((moment) => 
                        <Card 
                        class={moment.class}
                        key={moment.id} 
                        src={moment.src}
                        title={moment.title}
                        />
                    )}
                </div>
            </div>
            <div className="fav-music">
                <h2>Musicas que me lembram de ti</h2>
            </div>
        </div>
    )
}