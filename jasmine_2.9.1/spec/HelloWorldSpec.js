/*            
 * This is the file which will call
 * our javascript file that need to be tested.
 * Each describe block is equivalent to one test case    
 *    
 */   

// describe your code
describe("Hello World", function(){

        // what it should do
        it("should Return Hello world",function(){
                //expect something
                expect(helloworld()).toEqual('Hello World');
        });
 
});

/*
Note how describe - it() argument reads like a sentence.
*/