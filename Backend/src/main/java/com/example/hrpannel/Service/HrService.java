package com.example.hrpannel.Service;

import com.example.hrpannel.Model.HrModel;
import com.example.hrpannel.Repository.HrRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class HrService {

    @Autowired
    private HrRepository hrRepository;

    public HrModel addUser(HrModel hrModel){
        return hrRepository.save(hrModel);

    }
    public HrModel signIn(HrModel hrModel){
        if(hrRepository.findByEmail(hrModel.getEmail())==null){
            HrModel hrModel1=new HrModel();
            hrModel1.setEmail(null);
            hrModel1.setPassword(null);
            hrModel1.setUserName(null);
            return hrModel1;
        }else if(hrRepository.findByEmail(hrModel.getEmail()).getPassword().equals(hrModel.getPassword())){
           HrModel hrModel1 = hrRepository.findByEmail(hrModel.getEmail());
           hrModel1.setPassword(null);
            return hrModel1;
        }else{
            return null;
        }
    }
}
