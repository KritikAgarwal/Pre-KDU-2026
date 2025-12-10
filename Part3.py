def main():
    try:
        with open("C://KDU//watchlist.csv", "r") as file:
            lines = file.readlines()

        count_map = {}

        for line in lines:
            line = line.strip()
            itemlist = line.split(",")

            for item in itemlist:
                item = item.strip()

                if item in count_map:
                    count_map[item] = count_map[item] + 1
                else:
                    count_map[item] = 1

        itemslist=list(count_map.items())
        sorted_items = sorted(itemslist, key=lambda x: x[1], reverse=True)

        print("Top 3 items:")
        for i in range(min(3, len(sorted_items))):
            name, count = sorted_items[i]
            print(f"{name}: {count}")

    except FileNotFoundError:
        print("File not found")


if __name__ == "__main__":
    main()
