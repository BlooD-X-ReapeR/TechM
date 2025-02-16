package Week_3_Tasks.CollectionAPI;

import java.util.LinkedList;

public class InsertFirstLastLinkedList16 {
    public static void main(String[] args) {
        LinkedList<String> colors = new LinkedList<>();
        
        colors.add("Red");
        colors.add("Blue");
        colors.add("Green");
        colors.add("Yellow");
        
        colors.addFirst("Orange");
        
        colors.addLast("Pink");
        
        System.out.println("LinkedList after inserting elements at first and last positions: " + colors);
    }
}
