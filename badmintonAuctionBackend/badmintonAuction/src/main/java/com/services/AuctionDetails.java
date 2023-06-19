package com.services;


import com.model.Auction;
import com.payloads.AuctionPayload;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AuctionDetails {
    List<Auction> getauctionDetails();

    Auction create(Auction auction);

    Auction getauctionDetailsById(int id);

    Auction getauctionDetailsByteamName(String teamname);

    List<AuctionPayload> getbiddingDetailsByteamId(int teamId);
}
