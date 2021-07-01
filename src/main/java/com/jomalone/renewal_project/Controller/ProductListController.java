package com.jomalone.renewal_project.Controller;

import com.jomalone.renewal_project.Entity.ProductEntity;
import com.jomalone.renewal_project.Service.ProductService;
import lombok.AllArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.websocket.server.PathParam;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Controller
@AllArgsConstructor
public class ProductListController {
    private ProductService service;

    @GetMapping("/product_list")
    public String productList(){
        return "product_list";
    }

    @GetMapping("/handcream/data")
    @ResponseBody
    public List<HashMap<String, String>> handCreamData(){
        List<ProductEntity> res = service.findAllByName_EnLikesHandCream();
        List<HashMap<String, String>> json = new ArrayList<>();
        res.forEach(productEntity -> {
            HashMap<String, String> map = new HashMap<>();
            map.put("id", productEntity.getProductPK().getId() + "");
            map.put("name", productEntity.getName());
            map.put("name_en", productEntity.getName_en());
            map.put("volume", productEntity.getVolume() + "");
            map.put("price", productEntity.getPrice() + "");
            map.put("information", productEntity.getInfomation());
            map.put("imgurl", productEntity.getImgurl());
            json.add(map);
        });
        return json;
    }

    @GetMapping("/townhome/data")
    @ResponseBody
    public List<HashMap<String, String>> townHomeData(){
        List<ProductEntity> res = service.findAllByName_EnLikesTownHome();
        List<HashMap<String, String>> json = new ArrayList<>();
        res.forEach(productEntity -> {
            HashMap<String, String> map = new HashMap<>();
            map.put("id", productEntity.getProductPK().getId() + "");
            map.put("name", productEntity.getName());
            map.put("name_en", productEntity.getName_en());
            map.put("volume", productEntity.getVolume() + "");
            map.put("price", productEntity.getPrice() + "");
            map.put("information", productEntity.getInfomation());
            map.put("imgurl", productEntity.getImgurl());
            json.add(map);
        });
        return json;
    }
}
