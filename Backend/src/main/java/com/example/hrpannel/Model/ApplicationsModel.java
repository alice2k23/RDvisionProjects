package com.example.hrpannel.Model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "applicant ")
public class ApplicationsModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long applicantId;
    @Column(nullable = false)
    private String applicantFullName;
    @Column(nullable = false)
    private String email;

    public ApplicationsModel(long applicantId, String applicantFullName, String email, String highestEducation, String collegeName, String mobileNumber, String degreeName, String graduationYear, float cgpaGraduation, String resumeLink, String experienceType, int experienceInYear, String about, String introVideoLink, String portfolioLink, String currentLocation, LocalDate dateOfApplication, JobModel jobModel) {
        this.applicantId = applicantId;
        this.applicantFullName = applicantFullName;
        this.email = email;
        this.highestEducation = highestEducation;
        this.collegeName = collegeName;
        this.mobileNumber = mobileNumber;
        this.degreeName = degreeName;
        this.graduationYear = graduationYear;
        this.cgpaGraduation = cgpaGraduation;
        this.resumeLink = resumeLink;
        this.experienceType = experienceType;
        this.experienceInYear = experienceInYear;
        this.about = about;
        this.introVideoLink = introVideoLink;
        this.portfolioLink = portfolioLink;
        this.currentLocation = currentLocation;
        this.dateOfApplication = dateOfApplication;
        this.jobModel = jobModel;
    }

    @Column(nullable = false)
    private String highestEducation;
    @Column(nullable = false)
    private String collegeName;
    @Column(nullable = false)
    private String mobileNumber;
    @Column(nullable = false)
    private String degreeName;
    @Column(nullable = false)
    private String graduationYear;
    @Column(nullable = false)
    private float cgpaGraduation;
    @Column(nullable = false)
    private String resumeLink;
    @Column(nullable = false)
    private String experienceType;
    @Column(nullable = false)
    private int experienceInYear;
    @Column(nullable = false,length = 1000)
    private String about;
    @Column(nullable = false)
    private String introVideoLink;
    private String portfolioLink;
    @Column(nullable = false)
    private String currentLocation;
    private LocalDate dateOfApplication;
    @ManyToOne
    private JobModel jobModel;

    public LocalDate getDateOfApplication() {
        return dateOfApplication;
    }

    public String getExperienceType() {
        return experienceType;
    }

    public void setExperienceType(String experienceType) {
        this.experienceType = experienceType;
    }

    public int getExperienceInYear() {
        return experienceInYear;
    }

    public void setExperienceInYear(int experienceInYear) {
        this.experienceInYear = experienceInYear;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public void setDateOfApplication(LocalDate dateOfApplication) {
        this.dateOfApplication = dateOfApplication;
    }




    public String getCollegeName() {
        return collegeName;
    }

    public void setCollegeName(String collegeName) {
        this.collegeName = collegeName;
    }
    public String getGraduationYear() {
        return graduationYear;
    }

    public void setGraduationYear(String graduationYear) {
        this.graduationYear = graduationYear;
    }




    public String getCurrentLocation() {
        return currentLocation;
    }

    public void setCurrentLocation(String currentLocation) {
        this.currentLocation = currentLocation;
    }

    public ApplicationsModel() {
    }



    public long getApplicantId() {
        return applicantId;
    }

    public void setApplicantId(long applicantId) {
        this.applicantId = applicantId;
    }

    public String getApplicantFullName() {
        return applicantFullName;
    }

    public void setApplicantFullName(String applicantFullName) {
        this.applicantFullName = applicantFullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHighestEducation() {
        return highestEducation;
    }

    public void setHighestEducation(String highestEducation) {
        this.highestEducation = highestEducation;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getDegreeName() {
        return degreeName;
    }

    public void setDegreeName(String degreeName) {
        this.degreeName = degreeName;
    }

    public float getCgpaGraduation() {
        return cgpaGraduation;
    }

    public void setCgpaGraduation(float cgpaGraduation) {
        this.cgpaGraduation = cgpaGraduation;
    }

    public String getResumeLink() {
        return resumeLink;
    }

    public void setResumeLink(String resumeLink) {
        this.resumeLink = resumeLink;
    }

    public String getIntroVideoLink() {
        return introVideoLink;
    }

    public void setIntroVideoLink(String introVideoLink) {
        this.introVideoLink = introVideoLink;
    }

    public String getPortfolioLink() {
        return portfolioLink;
    }

    public void setPortfolioLink(String portfolioLink) {
        this.portfolioLink = portfolioLink;
    }

    public JobModel getJobModel() {
        return jobModel;
    }

    public void setJobModel(JobModel jobModel) {
        this.jobModel = jobModel;
    }
}