package fr.daniel.project.datamodel;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PersistenceException;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import org.apache.commons.codec.digest.DigestUtils;

@Entity
@Table(schema = "public", name = "users")
@Getter
@Setter
@Access(AccessType.FIELD)
public class User
{
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;
  
  @Column(name = "username", nullable = false, unique = true, length = 30)
  private String username;
  
  @Column(name = "email", nullable = false, unique = true, length = 50)
  private String email;
  
  @Column(name = "password", nullable = false)
  private String password;
  
  @OneToOne
  @PrimaryKeyJoinColumn
  private Contact contact;
  
  @OneToOne
  @PrimaryKeyJoinColumn
  private Address address;
  
  @PrePersist
  @PreUpdate
  public void normalize()
  {
    if (password == null)
    {
      throw new PersistenceException("Password must not be null");
    }
    password = DigestUtils.sha256Hex(password);
  }
}