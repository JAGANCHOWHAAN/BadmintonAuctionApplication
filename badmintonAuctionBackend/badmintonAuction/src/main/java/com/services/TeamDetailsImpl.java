package com.services;


import com.model.Team;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamDetailsImpl implements TeamDetails{
    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<Team> getTeamsName(){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        List<Team> teamList = session.createQuery("from Team", Team.class).list();
        transaction.commit();
        session.close();
        return teamList;
    }

    @Override
    public Team create(Team team){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.save(team);
        transaction.commit();
        session.close();
        return  team;
    }

    @Override
    public Team getTeamById(int id){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Team team = session.get(Team.class, id);
        session.close();
        return team;
    }

    @Override
    public Team updateTeam(Team team){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.saveOrUpdate(team);
        transaction.commit();
        session.close();
        return team;
    }

    @Override
    public Team deleteTeamById(int id){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Team team = session.get(Team.class, id);
        session.delete(team);
        transaction.commit();
        session.close();
        return  team;
    }
}
