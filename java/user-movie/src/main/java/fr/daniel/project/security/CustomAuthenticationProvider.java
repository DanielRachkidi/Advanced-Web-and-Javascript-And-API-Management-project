package fr.daniel.project.security;

import fr.daniel.project.user.UserService;
import fr.daniel.project.datamodel.User;
import fr.daniel.project.dto.Role;
import fr.daniel.project.dto.UserPrincipal;
import java.util.List;
import java.util.Optional;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

@Component
public class CustomAuthenticationProvider
  implements AuthenticationProvider
{
  @Autowired
  private UserService service;
  
  @Override
  public Authentication authenticate(Authentication authentication)
  throws AuthenticationException
  {
    String name = authentication.getName();
    String password = authentication.getCredentials().toString();
    String hashed = DigestUtils.sha256Hex(Optional.ofNullable(password).orElse(""));
    
    List<User> userList = service.findByCredentials(name, hashed);
    
    if (!userList.isEmpty())
    {
      UserPrincipal principal = new UserPrincipal(userList.get(0));
      return new UsernamePasswordAuthenticationToken(principal, password, List.of(new Role(Role.USER)));
    }
    else
    {
      return null;
    }
  }
  
  @Override
  public boolean supports(Class<?> authentication)
  {
    return authentication.equals(UsernamePasswordAuthenticationToken.class);
  }
}