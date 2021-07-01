package com.jomalone.renewal_project.Service;

import com.jomalone.renewal_project.DTO.ProductDTO;
import com.jomalone.renewal_project.Entity.PK.ProductPK;
import com.jomalone.renewal_project.Entity.ProductEntity;
import com.jomalone.renewal_project.Repository.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ProductService {
    private ProductRepository repository;

    public void save(ProductDTO productDTO){
        repository.save(productDTO.toEntity());
    }

    public Optional<ProductEntity> findById(String id){
        return repository.findById(new ProductPK(Integer.parseInt(id)));
    }

    public List<ProductEntity> findAllByName_EnLikesHandCream(){
        return repository.findByName_enContaining("hand cream");
    }

    public List<ProductEntity> findAllByName_EnLikesTownHome(){
        return repository.findByName_enContaining("candle");
    }
}
