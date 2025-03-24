package com.airline.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "reservas")
@Entity(name = "reserves")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Reserve {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String location;
    private String image;
    private Double price;

    public Reserve(ReserveRequestDTD data){
        this.id = data.id();
        this.location = data.location();
        this.image = data.image();
        this.price = data.price();
    }
}
