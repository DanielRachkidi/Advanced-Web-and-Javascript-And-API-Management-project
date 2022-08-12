package fr.daniel.project.dto;

import fr.daniel.project.datamodel.Contact;

import java.sql.Date;

public class ContactView {


    private Long userId;

    private String firstname;

    private String lastname;

    private Date birthdate;

    private String gender;

    public ContactView(Contact info) {
        this.userId = info.getUserId();
        this.firstname = info.getFirstname();
        this.lastname = info.getLastname();
        this.birthdate = info.getBirthdate();
        this.gender = info.getGender();


    }


}
