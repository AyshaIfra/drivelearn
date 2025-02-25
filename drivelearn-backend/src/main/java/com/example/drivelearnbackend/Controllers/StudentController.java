package com.example.drivelearnbackend.Controllers;

import com.example.drivelearnbackend.Controllers.DTO.StudentDTO;
import com.example.drivelearnbackend.Repositories.Entity.Student;
import com.example.drivelearnbackend.Sevices.StudentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/student")
public class StudentController {
    @Autowired
    private StudentServices studentServices;

    @PostMapping(value = "/addstudent")
    public void addStudent(@RequestBody StudentDTO studentDTO){
        studentServices.addStudent(studentDTO);
    }
    @PostMapping(value = "/isAvail")
    public boolean isAvailableUsernane(@RequestBody StudentDTO studentDTO){
        return studentServices.isAvailableUsernane(studentDTO.getUsername());
    }

    @GetMapping()
    public void testCustomer(){
        studentServices.test();
//        System.out.println("we are passed the test");
    }
    @PostMapping(value = "/getStudent")
    public StudentDTO findStudent(@RequestBody StudentDTO dto){
        Student student= studentServices.findStudent(dto);
        return new StudentDTO(student.getName(),student.getAddress(),null,student.getContact(),null,null,null,null,null,null);
    }

    @PostMapping(value = "/isavalacc")
    public boolean isAvailableAccount(@RequestBody StudentDTO dto){
        return studentServices.isAvailAccounut(dto);
    }

}
