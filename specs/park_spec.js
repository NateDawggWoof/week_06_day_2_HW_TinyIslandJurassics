const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park1
  let dinosaur1
  let dinosaur2
  let dinosaur3

  beforeEach(function () {
    park1 = new Park("Tiny Land",5)
    dinosaur1 = new Dinosaur('T-rex','carnivore', 10000)
    dinosaur2 = new Dinosaur('T-rex','carnivore', 5000)
    dinosaur3 = new Dinosaur('Long Neck','herbivore', 7500)

  })

  it('should have a name', function(){
    const actual = park1.name
    assert.strictEqual(actual,"Tiny Land")

  });
 

  it('should have a ticket price', function(){
    const actual = park1.ticketPrice
    assert.strictEqual(actual,5)
  });
  

  it('should have a collection of dinosaurs', function(){
    const actual = park1.dinosaurs
    assert.deepEqual(actual,[])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park1.addDinosaur(dinosaur1)
    const actual = park1.countDinosaurs()
    assert.strictEqual(actual,1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park1.addDinosaur(dinosaur1)
    park1.addDinosaur(dinosaur2)
    park1.addDinosaur(dinosaur3)
    park1.removeDinosaur(dinosaur2)
    const actual = park1.countDinosaurs()
    assert.strictEqual(actual,2)
  });
  

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park1.addDinosaur(dinosaur1)
    park1.addDinosaur(dinosaur2)
    park1.addDinosaur(dinosaur3)
    const popularDinosaur = park1.mostVisitors()
    const actual = popularDinosaur.guestsAttractedPerDay
    assert.strictEqual(actual,10000)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park1.addDinosaur(dinosaur1)
    park1.addDinosaur(dinosaur2)
    park1.addDinosaur(dinosaur3)
    const dinosaurSpecies = park1.dinosaursBySpecies('T-rex')
    const actual = dinosaurSpecies.length
    assert.strictEqual(actual,2)
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park1.addDinosaur(dinosaur1)
    park1.addDinosaur(dinosaur2)
    park1.addDinosaur(dinosaur3)

    const actual = park1.totalVisitsDay()
    assert.strictEqual(actual,22500)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park1.addDinosaur(dinosaur1)
    park1.addDinosaur(dinosaur2)
    park1.addDinosaur(dinosaur3)

    const actual = park1.totalVisitsYear()
    assert.strictEqual(actual,8212500)
  });

  it('should be able to calculate total revenue for one year', function(){
    park1.addDinosaur(dinosaur1)
    park1.addDinosaur(dinosaur2)
    park1.addDinosaur(dinosaur3)

    const actual = park1.totalAnnualRevenue()
    assert.strictEqual(actual,41062500)
  });

});
