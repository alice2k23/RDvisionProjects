package com.example.hrpannel.Repository;

import com.example.hrpannel.Model.HrModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HrRepository extends JpaRepository<HrModel,Long> {
    HrModel findByEmail(String email);
}
