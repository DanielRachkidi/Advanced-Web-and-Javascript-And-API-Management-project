package fr.daniel.project.movies;

import fr.daniel.project.datamodel.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository
  extends JpaRepository<Movie, Long>
{
}
