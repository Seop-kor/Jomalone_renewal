package com.jomalone.renewal_project.DTO;

import com.jomalone.renewal_project.Entity.ProductEntity;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@ToString
public class ProductDTO {
    private int id;
    private String name;
    private String name_en;
    private int volume;
    private int price;
    private String infomation;
    private String imgurl;

    public ProductEntity toEntity(){
        return ProductEntity.builder().id(id).name(name).volume(volume).price(price).infomation(infomation).imgurl(imgurl).name_en(name_en).build();
    }
}
