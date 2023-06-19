package com.services;


import com.model.Auction;
import com.model.Player;
import com.model.Team;
import com.payloads.AuctionPayload;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuctionDetailsImpl implements AuctionDetails {
    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<Auction> getauctionDetails(){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        List<Auction> auctionList = session.createQuery("from Auction", Auction.class).list();
        transaction.commit();
        session.close();
        return auctionList;
    }

    @Override
    public Auction create(Auction auction){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.save(auction);
        transaction.commit();
        session.close();
        return  auction;
    }
    @Override
    public Auction getauctionDetailsById(int id){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Auction auction = session.get(Auction.class, id);
        session.close();
        return auction;
    }

    @Override
    public Auction getauctionDetailsByteamName(String teamname){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Auction auction = session.get(Auction.class, teamname);
        session.close();
        return auction;
    }

    @Override
    public List<AuctionPayload> getbiddingDetailsByteamId(int teamId){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        String  sql = "select * from auction where teamId = "+teamId+"";
        SQLQuery query = session.createSQLQuery(sql);
        query.addEntity(Auction.class);
        List<Auction> playersAuction = query.list();
        List<AuctionPayload> auctionPayloads = new ArrayList<>();
        for(Auction auction : playersAuction) {
            AuctionPayload auctionPayload = new AuctionPayload();
            int playerId = auction.getPlayerid();
            Player player = session.get(Player.class, playerId);
            auctionPayload.setPlayer(player);
            auctionPayload.setAuction(auction);
            auctionPayloads.add(auctionPayload);
        }
        transaction.commit();
        session.close();
        return auctionPayloads;
    }

}
