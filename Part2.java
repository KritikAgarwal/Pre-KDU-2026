import java.util.*;

public class Part2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();

        String[] parts = input.split(",");

        ArrayList<String> list = new ArrayList<>();
        for (String item : parts) {
            list.add(item.strip());  
        }

        HashSet<String> set = new HashSet<>();
        for (String item : list) {
            set.add(item);
        }
        HashMap<String, Integer> map = new HashMap<>();
        for (String item : list) {
            if (map.containsKey(item)) {
                map.put(item, map.get(item) + 1);
            } else {
                map.put(item, 1);
            }
        }

        System.out.println("ArrayList: " + list);
        System.out.println("HashSet: " + set);
        System.out.println("HashMap: " + map);

        scanner.close();
    }
}
