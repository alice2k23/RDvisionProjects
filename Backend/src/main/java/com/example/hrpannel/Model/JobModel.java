package com.example.hrpannel.Model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "posted-jobs")
public class JobModel {
 @Id
 @GeneratedValue(strategy = GenerationType.AUTO)
    private long jobId;
 @Column(nullable = false)
 private String jobTitle;
    @Column(nullable = false)
 private String requiredDegree;
    @Column(nullable = false)
 private String experienceLevel;
    @Column(nullable = false,length = 3000)
 private String jobDescription;
    private LocalDate dateOfPost;
    private String requiredSkills;
    @ManyToOne
    private HrModel hrModel;

    public JobModel(long jobId, String jobTitle, String requiredDegree, String experienceLevel, String jobDescription, LocalDate dateOfPost, String requiredSkills, HrModel hrModel) {
        this.jobId = jobId;
        this.jobTitle = jobTitle;
        this.requiredDegree = requiredDegree;
        this.experienceLevel = experienceLevel;
        this.jobDescription = jobDescription;
        this.dateOfPost = dateOfPost;
        this.requiredSkills = requiredSkills;
        this.hrModel = hrModel;
    }

    public String getRequiredSkills() {
        return requiredSkills;
    }

    public void setRequiredSkills(String requiredSkills) {
        this.requiredSkills = requiredSkills;
    }

    public JobModel() {
    }



    public LocalDate getDateOfPost() {
        return dateOfPost;
    }

    public void setDateOfPost(LocalDate dateOfPost) {
        this.dateOfPost = dateOfPost;
    }

    public HrModel getHrModel() {
        return hrModel;
    }

    public void setHrModel(HrModel hrModel) {
        this.hrModel = hrModel;
    }


    public long getJobId() {
        return jobId;
    }

    public void setJobId(long jobId) {
        this.jobId = jobId;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getRequiredDegree() {
        return requiredDegree;
    }

    public void setRequiredDegree(String requiredDegree) {
        this.requiredDegree = requiredDegree;
    }

    public String getExperienceLevel() {
        return experienceLevel;
    }

    public void setExperienceLevel(String experienceLevel) {
        this.experienceLevel = experienceLevel;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }
}
