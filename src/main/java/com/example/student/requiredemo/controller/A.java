package com.example.student.requiredemo.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class A
{

    @RequestMapping("hello")
    public String helloMain(Model model){
        model.addAttribute("hello","欢迎");
        return "a";

    }

    @RequestMapping("require")
    public String requireJs(Model model){
        model.addAttribute("hello","欢迎");
        return "index";

    }
}
