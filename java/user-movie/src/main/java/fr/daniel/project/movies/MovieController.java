package fr.daniel.project.movies;

import fr.daniel.project.datamodel.Movie;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class MovieController
{
  private final MovieService movieService;
  
  public MovieController(MovieService movieService)
  {
    this.movieService = movieService;
  }
  
  @GetMapping("/movies")
  public Page<Movie> getAll(@RequestParam(required = false, defaultValue = "1") int page)
  {
    if (page < 1)
    {
      return movieService.findMovies(1, 0);
    }
    return movieService.findMovies(page, (page - 1) * 10);
  }
}
