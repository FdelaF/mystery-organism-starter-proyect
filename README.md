# mystery-organism-starter-proyect
Proyect from codecademy course. Create an object factory for specimens with random DNA strings, and other properties such as methods to mutate DNA string or calculate the "survivor" chances for each specimen.

INSTRUCTIONS 

Look over the starter code. There are two helper functions: returnRandBase() and mockUpStrand().

DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). When returnRandBase() is called, it will randomly select a base and return the base ('A','T','C', or 'G').

mockUpStrand() is used to generate an array containing 15 bases to represent a single DNA strand with 15 bases.

You’ll use these helper functions later to create your objects that represent P. aequor.

3.
Since you need to create multiple objects, create a factory function pAequorFactory() that has two parameters:

The first parameter is a number (no two organisms should have the same number).
The second parameter is an array of 15 DNA bases.
pAequorFactory() should return an object that contains the properties specimenNum and dna that correspond to the parameters provided.

You’ll also add more methods to this returned object in the later steps.


Hint
Visit the factory functions exercise for a refresher. This forum post also explains the use case for factory functions.

You can test pAequorFactory() by calling it with the arguments: 1 and mockUpStrand(). Check to see that the returned object contains the requested two properties: specimenNum and dna. You can also provide a specific strand of DNA rather than providing a randomized strand using mockUpStrand().

4.
Your team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA).

To simulate a mutation, in pAequorFactory()‘s returned object, add the method .mutate().

.mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.

For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again.


Hint
returnRandBase() contains a method for selecting a random element in an array using Math.floor() and Math.random().

You can also use returnRandBase() to generate a random base, but make sure that the current base and the generated base are not the same.

You can test this method by creating an instance of pAequor and checking that its .dna changes after calling .mutate() on itself.

5.
Your research team wants to be able to compare the DNA sequences of different P. aequor. You’ll have to add a new method (.compareDNA()) to the returned object of the factory function.

.compareDNA() has one parameter, another pAequor object.

The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations. .compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common — use the .specimenNum to identify which pAequor objects are being compared.

For example:

ex1 = ['A', 'C', 'T', 'G']
ex2 = ['C', 'A', 'T', 'T']
ex1 and ex2 only have the 3rd element in common ('T') and therefore, have 25% (1/4) of their DNA in common. The resulting message would read something along the lines of: specimen #1 and specimen #2 have 25% DNA in common.


Hint
You’re adding this method inside the return object of the factory function like .newMethod() below:

const sampleFactory = () => {
  return {
    newMethod() {
    }
  }
}
There are many ways to create this method, most involve iterating through both arrays at the same time and comparing the elements with the same indices.

To calculate the percentage, take the number of identical bases, divided by the total number of bases and multiply the result by 100. You can use a method like .toFixed() to limit the number of decimal places seen.

Remember to check your method by creating two instances of pAequor and comparing their DNA.

6.
P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases.

In the returned object of pAequorFactory(), add another method .willLikelySurvive().

.willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.

7.
With the factory function set up, your team requests that you create 30 instances of pAequor that can survive in their natural environment. Store these instances in an array for your team to study later.


Hint
Remember, you only want to add the instance to the array if .willLikelySurvive() returns true for that instance.

Project Extensions & Solution
8.
Great work! Visit our forums to compare your project to our sample solution code. You can also learn how to host your own solution on GitHub so you can share it with other learners! Your solution might look different from ours, and that’s okay! There are multiple ways to solve these projects, and you’ll learn more by seeing others’ code.

9.
If you’d like to challenge yourself further, you could consider the following:

Create a .complementStrand() method to the factory function’s object that returns the complementary DNA strand. The rules are that 'A's match with 'T's and vice versa. Also, 'C's match with 'G's and vice versa. (Check the hint for more details)
Use the .compareDNA() to find the two most related instances of pAequor.
