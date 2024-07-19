package com.example.hrpannel.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class TestController {

@GetMapping("/world")
    public String helloWorld(){
    return "Hello World";
}
}
