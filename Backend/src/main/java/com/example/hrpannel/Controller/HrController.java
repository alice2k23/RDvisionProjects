package com.example.hrpannel.Controller;

import com.example.hrpannel.Model.HrModel;
import com.example.hrpannel.Repository.HrRepository;
import com.example.hrpannel.Service.HrService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class HrController {
    @Autowired
    private HrService hrService;
    @Autowired
    private HrRepository hrRepository;


    @PostMapping("/addUser")
    public HrModel addUserHr(@RequestBody HrModel hrModel){
        return hrService.addUser(hrModel);
    }
    @GetMapping("/users")
    public List<HrModel> getAllUsers(){
        return hrRepository.findAll();
    }
    @PostMapping("/signIn")
    public HrModel signIn(@RequestBody HrModel hrModel){
        return hrService.signIn(hrModel);
    }
}
