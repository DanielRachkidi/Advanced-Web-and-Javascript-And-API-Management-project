package fr.daniel.project.movies;

import fr.daniel.project.datamodel.Movie;
import fr.daniel.project.dto.PageRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public class MovieService
{
  @Autowired
  private MovieRepository movieRepository;
  
  public Page<Movie> findMovies(int pageNumber, int offset)
  {
    return movieRepository.findAll(new PageRequest(pageNumber, offset));
  }
}