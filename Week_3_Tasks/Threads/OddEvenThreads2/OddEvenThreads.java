package Week_3_Tasks.Threads.OddEvenThreads2;

public class OddEvenThreads {
    public static void main(String[] args) {
        Thread odd = new Thread(new OddThreads());
        Thread even = new Thread(new EvenThreads());
        odd.start();
        even.start();
    }
}
