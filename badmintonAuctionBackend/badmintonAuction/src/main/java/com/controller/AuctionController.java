package com.controller;


import com.model.Auction;
import com.payloads.AuctionPayload;
import com.services.AuctionDetails;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://127.0.0.1:5501")
@RestController
@RequestMapping(value = "/auction")
public class AuctionController {
    @Autowired
    AuctionDetails auctionDetails;
    private static final Logger logger = LoggerFactory.getLogger(AuctionController.class);

    @GetMapping("/display")
    public List<Auction> getauctionDetails(){
        logger.info("Auction Details");
        return auctionDetails.getauctionDetails();
    }

    @PostMapping("/create")
    public Auction createAuction(@RequestBody Auction auction){
        logger.info("Create Auction is invoked {}", auction);
        return auctionDetails.create(auction);
    }

    @GetMapping("/{id}")
    public Auction getauctionDetailsById(@PathVariable("id") int id){
        logger.info("getauctionDetailsById is invoked with Auction Id: {}", id);
        return auctionDetails.getauctionDetailsById(id);
    }

    @GetMapping("TeamName/{teamname}")
    public Auction getauctionDetailsByteamName(@PathVariable("teamname") String teamname){
        logger.info("getauctionDetailsByteamName is invoked with Team Name: {}", teamname);
        return auctionDetails.getauctionDetailsByteamName(teamname);
    }

    @GetMapping("getallplayerofteam/{id}")
    public List<AuctionPayload> getAllPLayersOfTeam(@PathVariable("id") int teamId) {
        return auctionDetails.getbiddingDetailsByteamId(teamId);
    }

}
