package com.example.hrpannel.Service;

import com.example.hrpannel.Model.ApplicationsModel;
import com.example.hrpannel.Repository.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicationService {
    @Autowired
    private ApplicationRepository applicationRepository;

    public ApplicationsModel addApplication(ApplicationsModel applicationsModel){
        return applicationRepository.save(applicationsModel);
    }

    public List<ApplicationsModel> getAllApplication(){
        return applicationRepository.findAll();
    }
    public ApplicationsModel getByApplicationId(long id){
        return applicationRepository.findByApplicantId(id);
    }
}
