package com.airline.models;

public record ReserveRespondeDTD(Long id, String location,String image, Double price) {
    public ReserveRespondeDTD(Reserve reserve){
        this(reserve.getId(),reserve.getLocation(),reserve.getImage(),
                reserve.getPrice());
    }
}