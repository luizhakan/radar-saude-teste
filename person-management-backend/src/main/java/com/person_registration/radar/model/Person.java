package com.person_registration.radar.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.LocalDate;

@Entity
@Table(name = "person")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

    @NotNull
    @Enumerated(EnumType.STRING)
    private Gender gender;

    @NotNull
    private LocalDate birthDate;

    @NotBlank
    @Size(min = 11, max = 11)
    private String phone;

    @NotBlank
    @Email
    private String email;

    // Getters and setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotBlank String getName() {
        return name;
    }

    public void setName(@NotBlank String name) {
        this.name = name;
    }

    public @NotNull Gender getGender() {
        return gender;
    }

    public void setGender(@NotNull Gender gender) {
        this.gender = gender;
    }

    public @NotNull LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(@NotNull LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public @NotBlank @Size(min = 11, max = 11) String getPhone() {
        return phone;
    }

    public void setPhone(@NotBlank @Size(min = 11, max = 11) String phone) {
        this.phone = phone;
    }

    public @NotBlank @Email String getEmail() {
        return email;
    }

    public void setEmail(@NotBlank @Email String email) {
        this.email = email;
    }

    public enum Gender {
        MALE, FEMALE, OTHER
    }
}