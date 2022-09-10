package fr.daniel.project.dto;

import fr.daniel.project.datamodel.Contact;
import java.sql.Date;

public class ContactView
{
  
  private final Long userId;
  
  private final String firstname;
  
  private final String lastname;
  
  private final Date birthdate;
  
  private final String gender;
  
  public ContactView(Contact info)
  {
    this.userId = info.getUserId();
    this.firstname = info.getFirstname();
    this.lastname = info.getLastname();
    this.birthdate = info.getBirthdate();
    this.gender = info.getGender();
  }
}
