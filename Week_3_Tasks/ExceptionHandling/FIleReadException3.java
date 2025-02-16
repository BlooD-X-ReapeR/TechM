package Week_3_Tasks.ExceptionHandling;

import java.io.File;

public class FIleReadException3 {
    public static void main(String[] args) {
        String path = "D:\\Tech m\\Java\\Assignments\\TechM\\Week_3_Tasks\\ExceptionHandling\\Exception1.java";

        try {
            filepath(path);
        } catch (Exception e) {
            System.out.println("error reading the file : "+ e.getMessage());
        }
    }

    public static void filepath(String path) throws Exception{
        File file = new File(path);
        if (file.exists()) {
            System.out.println("the file exists in the specified path");
        }
        else
            throw new Exception("File not found");
    }
}
