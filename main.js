// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum,dna) => {
  return { 
    specimenNum:specimenNum, 
    dna,dna,
    get mutate() {
      console.log(`dna: ${this.dna}`)
      const randomSelectBase = Math.floor(Math.random()*15)
      console.log(`The base to mutate is index: ${randomSelectBase},  ${this.dna[randomSelectBase]}`);
      
      let  newBase = '';
      
      //uses do loop so it runs code in bracket until newBase is not ecual to te base to mutate.
      do {
        newBase = returnRandBase(); //calls the function to obtain a new base
        console.log(`New Mutated base: ${newBase}`);
      } while (newBase == this.dna[randomSelectBase]);  //the condition is satisfied until new base is differet from the selected randomly
      
      //assingns new value to the base after we are certain it´s not the same
      this.dna[randomSelectBase]=newBase;
      
      //loggs new DNA string
      console.log(`Dna: ${this.dna}`)
    },

    compareDNA(pAequor){
      console.log(`First specimen:  ${this.specimenNum},  ${this.dna}`);
      console.log(`Second specimen: ${pAequor.specimenNum},  ${pAequor.dna}`)
      let count=0;
      for (let i=0; i<=14;i++){
        if(this.dna[i]==pAequor.dna[i]) {
          count++;
        }
      }
      console.log(count);
      console.log(`Specimen #1 and Specimen #2 have ${count*100/15}% DNA in common.`)
    },
    willLikelySurvive() {
      let count=0;
      for (let i=0; i<= 14; i++) {
        if(this.dna[i] == 'C' || this.dna[i] == 'G' ) {
          count++;
        }
      }
      console.log(`Specimen has ${count} "C" or "G" bases.`);
      let probabilitySurvive = count*100/15;
      console.log(`Meaning a ${probabilitySurvive}% of suvival.`);
      if (probabilitySurvive >= 60) {
        return true;
      }else {
        return false;
      }
    }
  }

}

//const org = pAequorFactory(1,mockUpStrand())
//org.mutate
//org.compareDNA(pAequorFactory(2,mockUpStrand()))
//console.log(org.willLikelySurvive());

const createSurvivorSpecimens =(numInstances) => {
  let specimenArr =[];
  let newSpecimen = {};
  for(let i=1; i<=numInstances; i++) {
    do {
      newSpecimen = pAequorFactory(i,mockUpStrand());
      console.log(newSpecimen.dna)
      console.log(`can suvive: ${newSpecimen.willLikelySurvive()}`);


    } while (newSpecimen.willLikelySurvive()==false)
    specimenArr.push(newSpecimen);
    console.log("se agrega ");

  }
  return specimenArr;
}

const specimens = createSurvivorSpecimens(3);
console.log(specimens.forEach())

