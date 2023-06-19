package com.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "team")
public class Team {
    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "teamName")
    private String teamname;

    @Column(name = "teamCaptain")
    private String teamcaptain;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTeamname() {
        return teamname;
    }

    public void setTeamname(String teamname) {
        this.teamname = teamname;
    }

    public String getTeamcaptain() {
        return teamcaptain;
    }

    public void setTeamcaptain(String teamcaptain) {
        this.teamcaptain = teamcaptain;
    }

    @Override
    public String toString() {
        return "Team{" +
                "id=" + id +
                ", teamname='" + teamname + '\'' +
                ", teamcaptain='" + teamcaptain + '\'' +
                '}';
    }
}
