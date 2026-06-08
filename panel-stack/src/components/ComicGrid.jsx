import { Link } from 'react-router-dom';
import comics from '../data/comics';
import './ComicGrid.css';

function ComicGrid() {
  return (
    <div className="comic-grid">
      <h1 className="comic-grid__title">Collection</h1>
      <div className="comic-grid__container">
        {comics.map((comic) => (
          <Link to={`/comic/${comic.id}`} key={comic.id} className="comic-card">
            <div className="comic-card__image-wrapper">
              <img src={comic.cover} alt={comic.title} className="comic-card__image" />
              <div className="comic-card__pages">{comic.pages.length} pages</div>
            </div>
            <div className="comic-card__info">
              <h2 className="comic-card__title">{comic.title}</h2>
              <p className="comic-card__author">{comic.author}</p>
              <p className="comic-card__year">{comic.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ComicGrid;
