package com.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "auction")
public class Auction {


    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "playerId")
    private int playerid;

    @Column(name = "basePrice")
    private int baseprice;

    @Column(name = "soldPrice")
    private int soldprice;
    @Column(name = "teamId")
    private int teamid;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPlayerid() {
        return playerid;
    }

    public void setPlayerid(int playerid) {
        this.playerid = playerid;
    }

    public int getBaseprice() {
        return baseprice;
    }

    public void setBaseprice(int baseprice) {
        this.baseprice = baseprice;
    }

    public int getSoldprice() {
        return soldprice;
    }

    public void setSoldprice(int soldprice) {
        this.soldprice = soldprice;
    }

    public int getTeamid() {
        return teamid;
    }

    public void setTeamid(int teamid) {
        this.teamid = teamid;
    }


    @Override
    public String toString() {
        return "Auction{" +
                "id=" + id +
                ", playerid=" + playerid +
                ", baseprice=" + baseprice +
                ", soldprice=" + soldprice +
                ", teamid=" + teamid +
                '}';
    }
}
