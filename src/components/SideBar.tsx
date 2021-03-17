import { Button } from './Button';
interface GenreResponse {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps{
  genres: Array<GenreResponse>;
  selectedGenreId: number;
  onClickButton: (id:number) => void;
}
export function SideBar({ genres, selectedGenreId, onClickButton }:SideBarProps) {
  // Complete aqui
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => onClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}