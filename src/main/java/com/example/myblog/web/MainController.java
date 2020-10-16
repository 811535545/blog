package com.example.myblog.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String root() {
        return "index";
    }

    @GetMapping("/login")
    public String login(Model model) {
        return "login";
    }

    @GetMapping("/user")
    public String userIndex() {
        return "user/index";
    }

    /**
     * 登陆成功，随意访问资源
     */
    @GetMapping("/mainPage")
    public String mainPage() {
        return "main";
    }



    /**
     * 登陆成功，随意访问资源
     */
    @GetMapping("/blogManage")
    public String blogManagePage() {
        return "blogManage";
    }

}
