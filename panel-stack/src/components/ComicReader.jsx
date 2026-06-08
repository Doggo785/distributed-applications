import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import comics from '../data/comics';
import './ComicReader.css';

function ComicReader() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  
  const comic = comics.find(c => c.id === parseInt(id));
  
  const goToNextPage = useCallback(() => {
    if (comic && currentPage < comic.pages.length - 1) {
      setCurrentPage(prev => prev + 1);
    }
  }, [currentPage, comic]);

  const goToPrevPage = useCallback(() => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  }, [currentPage]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') goToNextPage();
      else if (e.key === 'ArrowLeft') goToPrevPage();
      else if (e.key === 'Escape') navigate('/');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextPage, goToPrevPage, navigate]);

  if (!comic) {
    return (
      <div className="comic-reader__error">
        <h2>Comic non trouvé</h2>
        <button onClick={() => navigate('/')}>Retour à la collection</button>
      </div>
    );
  }

  const progress = ((currentPage + 1) / comic.pages.length) * 100;

  return (
    <div className="comic-reader">
      <div className="comic-reader__content">
        <div className="comic-reader__click-zone comic-reader__click-zone--left" onClick={goToPrevPage} />
        <img src={comic.pages[currentPage]} alt={`Page ${currentPage + 1}`} className="comic-reader__page" />
        <div className="comic-reader__click-zone comic-reader__click-zone--right" onClick={goToNextPage} />
      </div>
      <div className="comic-reader__controls">
        <button onClick={goToPrevPage} disabled={currentPage === 0} className="comic-reader__btn">← Précédent</button>
        <div className="comic-reader__progress">
          <div className="comic-reader__progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <span className="comic-reader__counter">{currentPage + 1} / {comic.pages.length}</span>
        <button onClick={goToNextPage} disabled={currentPage === comic.pages.length - 1} className="comic-reader__btn">Suivant →</button>
      </div>
    </div>
  );
}

export default ComicReader;
