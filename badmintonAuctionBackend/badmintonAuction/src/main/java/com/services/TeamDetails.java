package com.services;
import com.model.Team;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TeamDetails {
    List<Team> getTeamsName();
    Team create(Team team);

    Team getTeamById(int id);

    Team updateTeam(Team team);

    Team deleteTeamById(int id);

}
