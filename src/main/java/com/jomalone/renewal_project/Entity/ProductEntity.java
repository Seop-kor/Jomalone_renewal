package com.jomalone.renewal_project.Entity;

import com.jomalone.renewal_project.Entity.PK.ProductPK;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@Table(name = "product")
public class ProductEntity {
    @EmbeddedId
    private ProductPK productPK;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String name_en;

    @Column(nullable = false)
    private int volume;

    @Column(nullable = false)
    private int price;

    @Column(nullable = false, columnDefinition="TEXT")
    private String infomation;

    @Column(nullable = false, columnDefinition="TEXT")
    private String imgurl;

    @Builder
    public ProductEntity(int id, String name, int volume, int price, String infomation, String imgurl, String name_en){
        this.productPK = new ProductPK(id);
        this.name = name;
        this.volume = volume;
        this.price = price;
        this.infomation = infomation;
        this.imgurl = imgurl;
        this.name_en = name_en;
    }
}
