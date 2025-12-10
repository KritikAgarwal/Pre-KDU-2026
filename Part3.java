import java.io.*;
import java.util.*;

public class Part3 {
    public static void main(String[] args) {
        try {
            File file = new File("C:\\KDU\\items.csv");
            Scanner scanner = new Scanner(file);

            HashMap<String, Integer> countMap = new HashMap<>();
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine().trim();
                String[] itemlist = line.split(",");

                for (String item : itemlist) {
                    item = item.strip();
                    if (countMap.containsKey(item)) {
                        countMap.put(item, countMap.get(item) + 1);
                    } else {
                        countMap.put(item, 1);
                    }
                }
            }

            scanner.close();
            List<Map.Entry<String, Integer>> itemsList = new ArrayList<>(countMap.entrySet());

            itemsList.sort((a, b) -> b.getValue() - a.getValue());

            System.out.println("Top 3 items:");
            for (int i = 0; i < 3 && i < itemsList.size(); i++) {
                Map.Entry<String, Integer> entry = itemsList.get(i);
                System.out.println(entry.getKey() + ": " + entry.getValue());
            }

        } catch (FileNotFoundException e) {
            System.out.println("File not found");
        }
    }
}
