package com.services;

import com.model.Player;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PlayersDetails {
    List<Player> getPlayersName();
    Player create(Player player);
    Player getPlayerById(int id);
    Player updatePlayer(int player);
    Player deletePlayerById(int id);
    Player updatePlayerdetails(Player player);
    List<Player> getPlayerByisSold(boolean isSold);

}
