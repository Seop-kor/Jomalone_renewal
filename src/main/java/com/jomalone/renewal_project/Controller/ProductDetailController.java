package com.jomalone.renewal_project.Controller;

import com.jomalone.renewal_project.Entity.ProductEntity;
import com.jomalone.renewal_project.Service.ProductService;
import lombok.AllArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.websocket.server.PathParam;
import java.util.HashMap;
import java.util.NoSuchElementException;
import java.util.Optional;

@Controller
@AllArgsConstructor
@RequestMapping("/renewal")
public class ProductDetailController {
    private ProductService service;

    @GetMapping("/detail")
    public String detail(){
        return "product_detail";
    }
    @GetMapping("/detail/data/{id}")
    @ResponseBody
    public HashMap<String, String> detailData(@PathVariable("id")String id){
        try{
            Optional<ProductEntity> data = service.findById(id);
            ProductEntity entity = data.get();
            HashMap<String, String> json = new HashMap<>();
            json.put("id", entity.getProductPK().getId() + "");
            json.put("name", entity.getName());
            json.put("name_en", entity.getName_en());
            json.put("volume", entity.getVolume() + "");
            json.put("price", entity.getPrice() + "");
            json.put("information", entity.getInfomation());
            json.put("imgurl", entity.getImgurl());
            return json;
        }catch (NoSuchElementException e){
            System.out.println(e.getStackTrace());
        }
        return null;
    }
}
