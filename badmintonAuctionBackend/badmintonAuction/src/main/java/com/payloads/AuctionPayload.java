package com.payloads;

import com.model.Auction;
import com.model.Player;

public class AuctionPayload {
    private Auction auction;
    private Player player;

    public AuctionPayload() {
    }

    public AuctionPayload(Auction auction, Player player) {
        this.auction = auction;
        this.player = player;
    }

    public Auction getAuction() {
        return auction;
    }

    public void setAuction(Auction auction) {
        this.auction = auction;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }
}
