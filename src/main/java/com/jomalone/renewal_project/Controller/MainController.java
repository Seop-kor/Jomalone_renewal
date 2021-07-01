package com.jomalone.renewal_project.Controller;

import com.jomalone.renewal_project.DTO.ProductDTO;
import com.jomalone.renewal_project.Service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;

@Controller
@AllArgsConstructor
@RequestMapping("/renewal")
public class MainController {
    private ProductService service;
    @GetMapping("/")
    public String main(){
        return "index";
    }
    @GetMapping("/insert")
    public String insert(){
        return "insert";
    }

    @PostMapping("/insert.do")
    public String insertPost(ProductDTO productDTO){
        service.save(productDTO);
        return "redirect:/insert";
    }

    @GetMapping("/test")
    @ResponseBody
    public HashMap<String, String> test(){
        HashMap<String, String> json = new HashMap();
        json.put("test", "testObj");
        json.put("huhu", "huhu");
        return json;
    }
}
