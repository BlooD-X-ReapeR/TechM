package Week_3_Tasks.Threads.OddEvenThreads2;

public class EvenThreads implements Runnable{

    @Override
    public void run() {
        for(int i=2;i<=20;i+=2){
            System.out.println("Even : "+i);
        }
    }

}
