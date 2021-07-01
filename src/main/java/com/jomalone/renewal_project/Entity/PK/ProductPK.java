package com.jomalone.renewal_project.Entity.PK;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.io.Serializable;

@NoArgsConstructor
@Getter
@Embeddable
public class ProductPK implements Serializable {
    @Column(nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    public ProductPK (int id){
        this.id = id;
    }
}
