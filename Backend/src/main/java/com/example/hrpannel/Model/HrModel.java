package com.example.hrpannel.Model;

import jakarta.persistence.*;

import java.util.List;


@Entity
@Table(name = "users")
public class HrModel {
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private long id;
   @Column(nullable = false)
   private String userName;
   @Column(nullable = false,unique = true)
   private String email;
   @Column(nullable = false)
   private String password;

   public HrModel() {
   }

   public HrModel(long id, String userName, String email, String password) {
      this.id = id;
      this.userName = userName;
      this.email = email;
      this.password = password;
   }

   public long getId() {
      return id;
   }

   public void setId(long id) {
      this.id = id;
   }

   public String getUserName() {
      return userName;
   }

   public void setUserName(String userName) {
      this.userName = userName;
   }

   public String getEmail() {
      return email;
   }

   public void setEmail(String email) {
      this.email = email;
   }

   public String getPassword() {
      return password;
   }

   public void setPassword(String password) {
      this.password = password;
   }
}
