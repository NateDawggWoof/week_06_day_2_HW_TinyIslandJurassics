const Dinosaur = require("./dinosaur")

const Park = function (name,ticketPrice){
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurs = []
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaur){
    const index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index, 1);
}

Park.prototype.countDinosaurs = function(){
    return this.dinosaurs.length
}

Park.prototype.mostVisitors = function(){
    let mostVisits = 0
    let popularDinosaur;
    for (dinosaur of this.dinosaurs){
        if (dinosaur.guestsAttractedPerDay > mostVisits){
            mostVisits = dinosaur.guestsAttractedPerDay
            popularDinosaur = dinosaur
        }
    }
    return popularDinosaur
}

Park.prototype.dinosaursBySpecies = function(species){
    let dinosaursOfSpecies = []
    for (dinosaur of this.dinosaurs){
        if (dinosaur.species == species){
            dinosaursOfSpecies.push(dinosaur)
        }
    }
    return dinosaursOfSpecies
}

Park.prototype.totalVisitsDay = function(){
    let totalVisits = 0
    for (dinosaur of this.dinosaurs){
            totalVisits += dinosaur.guestsAttractedPerDay
        }
    return totalVisits
}

Park.prototype.totalVisitsYear = function(){
    let totalVisits = (this.totalVisitsDay()*365)
    return totalVisits
}

Park.prototype.totalAnnualRevenue = function(){
    let annualRevenue = this.totalVisitsYear()*this.ticketPrice
    return annualRevenue
}

module.exports = Park