//
//  Transaction.swift
//  App
//
//  Created by Jérémie Doche on 03/04/2018.
//

import Vapor

class Transaction : Codable {
    
    var txid      : String
    var from      : String
    var to        : String
    var amount    : Double
    var reference : String
    var timestamp : String
    var lat       : Double
    var lng       : Double
    
    init(txid: String, from: String, to: String, amount: Double, reference: String, timestamp: String, lat: Double, lng: Double) {
        self.txid = txid
        self.from = from
        self.to = to
        self.amount = amount
        self.reference = reference
        self.timestamp = timestamp
        self.lat = lat
        self.lng = lng
    }
    
    init?(request :Request) {
        
        guard
            let from = request.data["from"]?.string,
            let to = request.data["to"]?.string,
            let txid = request.data["txid"]?.string,
            let amount = request.data["amount"]?.double,
            let reference = request.data["reference"]?.string,
            let timestamp = request.data["timestamp"]?.string,
            let lat = request.data["lat"]?.double,
            let lng = request.data["lng"]?.double
        else {
                return nil
        }
        
        self.txid = txid
        self.from = from
        self.to = to
        self.amount = amount
        self.reference = reference
        self.timestamp = timestamp
        self.lat = lat
        self.lng = lng
    }
    
}
