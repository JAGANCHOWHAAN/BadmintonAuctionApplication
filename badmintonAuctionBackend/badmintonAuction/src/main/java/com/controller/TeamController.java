package com.controller;

import com.model.Team;
import org.slf4j.Logger;
import com.services.TeamDetails;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://127.0.0.1:5501")
@RestController
@RequestMapping(value = "/team")
public class TeamController {
    @Autowired
    TeamDetails teamDetails;

    private  static  final Logger logger = LoggerFactory.getLogger(TeamController.class);

    @GetMapping
    public List<Team> getTeamsName(){
        logger.info("Teams List");
        return  teamDetails.getTeamsName();
    }

    @PostMapping("/create")
    public Team createTeam(@RequestBody Team team){
        logger.info("Create Team is invoked {}", team);
        return teamDetails.create(team);
    }

    @GetMapping("/{id}")
    public Team getTeamById(@PathVariable("id") int id){
        logger.info("getTeamById is invoked with Team Id: {}",id);
        return teamDetails.getTeamById(id);
    }

    @PutMapping("/update")
    public  Team updateTeam(@RequestBody Team team){
        return teamDetails.updateTeam(team);
    }

    @DeleteMapping("delete/{id}")
    public Team deleteTeamById(@PathVariable("id") int id){
        return teamDetails.deleteTeamById(id);
    }
}
