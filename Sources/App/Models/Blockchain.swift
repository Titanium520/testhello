
//: Playground - noun: a place where people can play

import Foundation
import Vapor

class Blockchain : Codable  {
    
    var blocks :[Block] = [Block]()
    private (set) var nodes :[BlockchainNode] = [BlockchainNode]()
    
    init(genesisBlock :Block) {
        addBlock(genesisBlock)
    }
    
    func addNode(_ node :BlockchainNode) {
        self.nodes.append(node)
    }
    
    func addBlock(_ block :Block) {
        
        if self.blocks.isEmpty {
            block.previousHash = "0000000000000000"
            block.hash = generateHash(for :block)
        }
        
        self.blocks.append(block)
    }
    
    func getNextBlock(transactions :[Transaction]) -> Block {
        
        let block = Block()
        transactions.forEach { transaction in
            block.addTransaction(transaction: transaction)
        }
        
        let previousBlock = getPreviousBlock()
        block.index = self.blocks.count
        block.previousHash = previousBlock.hash
        block.hash = generateHash(for: block)
        return block
        
    }
    
    private func getPreviousBlock() -> Block {
        return self.blocks[self.blocks.count - 1]
    }
    
    func generateHash(for block :Block) -> String {
        
        var hash = block.key.sha1Hash()
        
        while(!hash.hasPrefix("00")) {
            block.nonce += 1
            hash = block.key.sha1Hash()
        }
        
        return hash
    }
    
}















