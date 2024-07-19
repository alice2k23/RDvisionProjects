package com.example.hrpannel.Service;

import com.example.hrpannel.Model.JobModel;
import com.example.hrpannel.Repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class JobService {
    @Autowired
    private JobRepository jobRepository;

    public JobModel addNewJob(JobModel jobModel){
        jobModel.setDateOfPost(LocalDate.now());
        return jobRepository.save(jobModel);
    }
    public List<JobModel> getAllJobs(){
        return jobRepository.findAll();
    }

    public Optional<JobModel> getById(long id) {
        return jobRepository.findById(id);
    }
}
