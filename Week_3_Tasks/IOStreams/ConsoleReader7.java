package Week_3_Tasks.IOStreams;

import java.util.Scanner;

public class ConsoleReader7 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        System.out.println("\nHello, " + name + "! You are " + age + " years old.");

        scanner.close();
}
}