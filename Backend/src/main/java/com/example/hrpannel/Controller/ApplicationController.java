package com.example.hrpannel.Controller;

import com.example.hrpannel.Model.ApplicationsModel;
import com.example.hrpannel.Service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/application")
@CrossOrigin(origins = "http://localhost:3000")
public class ApplicationController {
    @Autowired
    private ApplicationService applicationService;

    @PostMapping("/addApplication")
    public ApplicationsModel addApplication(@RequestBody ApplicationsModel applicationsModel){
        applicationsModel.setDateOfApplication(LocalDate.now());
        return applicationService.addApplication(applicationsModel);
    }

    @GetMapping("/getAllApplications")
    public List<ApplicationsModel> getAll(){
        return applicationService.getAllApplication();
    }

    @GetMapping("/getApplicationById/{id}")
    public ApplicationsModel getApplicationByApplicationId(@PathVariable long id){
        return applicationService.getByApplicationId(id);
    }
}
