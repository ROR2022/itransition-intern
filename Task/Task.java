/* 
This works for both Node.js and Java

Run with Node.js:
node Task.java

Run with Java:
javac Task.java && java Task
*/

// For Node.js
if (typeof require !== 'undefined' && require.main === module) {
    console.log("Itransition");
}

// For Java
public class Task {
    public static void main(String[] args) {
        System.out.println("Itransition");
    }
}
