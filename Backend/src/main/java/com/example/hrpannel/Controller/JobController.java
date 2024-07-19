package com.example.hrpannel.Controller;

import com.example.hrpannel.Model.JobModel;
import com.example.hrpannel.Service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/jobs")
@CrossOrigin(origins = "http://localhost:3000")
public class JobController {
    @Autowired
    private JobService jobService;

    @PostMapping("/addJob")
    public JobModel addJob(@RequestBody JobModel jobModel){
        jobModel.setDateOfPost(LocalDate.now());
        return jobService.addNewJob(jobModel);
    }
    @GetMapping("/getAllJobsPosted")
    public List<JobModel> allJobs(){
        return jobService.getAllJobs();
    }

    @GetMapping("/getJobById/{id}")
    public Optional<JobModel> getJobById(@PathVariable  long id){
        return jobService.getById(id);
    }
}
