package com.example.hrpannel.Repository;

import com.example.hrpannel.Model.JobModel;
import org.springframework.data.jpa.repository.JpaRepository;
public interface JobRepository extends JpaRepository<JobModel, Long> {
}
