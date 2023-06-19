package com.services;

import com.model.Player;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlayerDetailsImpl implements PlayersDetails{

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<Player> getPlayersName(){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        List<Player> playerList = session.createQuery("from Player", Player.class).list();
        transaction.commit();
        session.close();
        return playerList;
    }

    @Override
    public Player create(Player player){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.save(player);
        transaction.commit();
        session.close();
        return player;
    }

    @Override
    public Player getPlayerById(int id){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Player player = session.get(Player.class, id);
        session.close();
        return player;
    }

    @Override
    public Player updatePlayer(int playerID){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Player player = session.get(Player.class, playerID);
        player.setSold(true);
        session.saveOrUpdate(player);
        transaction.commit();
        session.close();
        return player;
    }

    @Override
    public Player deletePlayerById(int id){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Player player = session.get(Player.class,id);
        session.delete(player);
        transaction.commit();
        session.close();
        return player;
    }

    @Override
    public  Player updatePlayerdetails(Player player){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.saveOrUpdate(player);
        transaction.commit();
        session.close();
        return player;
    }

    @Override
    public List<Player> getPlayerByisSold(boolean isSold){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        List<Player> players = session.createQuery("from Player", Player.class).list();
        transaction.commit();
        session.close();
        List<Player> filteredPlayers = new ArrayList<>();
        for (Player player : players) {
            if (player.isSold() == isSold) {
                filteredPlayers.add(player);
            }
        }
        return filteredPlayers;
    }
}
