package com.jomalone.renewal_project.Repository;

import com.jomalone.renewal_project.Entity.PK.ProductPK;
import com.jomalone.renewal_project.Entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<ProductEntity, ProductPK> {
    @Query("select c from ProductEntity c where c.name_en like %:name_en% order by c.productPK.id asc")
    List<ProductEntity> findByName_enContaining(@Param("name_en") String name_en);
}
