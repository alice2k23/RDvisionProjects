package com.example.hrpannel.Repository;

import com.example.hrpannel.Model.ApplicationsModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ApplicationRepository extends JpaRepository<ApplicationsModel,Long> {

    ApplicationsModel findByApplicantId(long id);
}
