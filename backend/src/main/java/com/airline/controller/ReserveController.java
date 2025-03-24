package com.airline.controller;

import com.airline.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("reserves")
public class ReserveController {
    @Autowired
    private ReserveRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveReserve(@RequestBody ReserveRequestDTD data){
        Reserve reserveData = new Reserve(data);
        repository.save(reserveData);
        return;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<ReserveRespondeDTD> getAll(){
        List<ReserveRespondeDTD> reserveList = repository.findAll().stream().map(ReserveRespondeDTD::new).toList();
        return reserveList;
    }
}
