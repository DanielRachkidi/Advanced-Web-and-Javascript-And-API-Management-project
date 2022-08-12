package fr.daniel.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MovieApplication
{
  public static void main(String[] args)
  {
    SpringApplication.run(MovieApplication.class, args);
  }
  
  //    public WebMvcConfigurer corsConfigurer() {
  //        return new WebMvcConfigurer() {
  //            @Override
  //            public void addCorsMappings(CorsRegistry registry) {
  //                registry.addMapping("/insert").allowedOrigins("http://127.0.0.1:3000");
  //            }
  //        };
  //    }
}