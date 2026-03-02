import java.util.*;

public class Part1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine().strip();

        String[] parts = input.split(" and ");

        String str1 = parts[0].substring(1, parts[0].length() - 1).strip();
        String str2 = parts[1].substring(1, parts[1].length() - 1).strip();

        int length1 = str1.length();
        int length2 = str2.length();

        System.out.println("Length 1: " + length1);
        System.out.println("Length 2: " + length2);
        System.out.println("Lengths match: " + (length1 == length2));
        System.out.println("Strings match: " + str1.equals(str2));

        scanner.close();
    }
}
