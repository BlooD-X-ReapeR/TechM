package Week_3_Tasks.Streams;

import java.util.Arrays;
import java.util.List;

public class AverageOfList1 {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(10, 20, 30, 40, 50);

        double average = numbers.stream()
                                .mapToInt(Integer::intValue)
                                .average()
                                .orElse(0.0);
        
        System.out.println("The average is: " + average);

    }
}
