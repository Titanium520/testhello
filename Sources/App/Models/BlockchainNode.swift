//
//  BlockchainNode.swift
//  App
//
//  Created by Jérémie Doche on 03/04/2018.
//

import Vapor

class BlockchainNode : Codable {
    
    var address :String
    
    init?(request :Request) {
        
        guard let address = request.data["address"]?.string else {
            return nil
        }
        
        self.address = address
        
    }
    
    init(address :String) {
        self.address = address
    }
    
}
