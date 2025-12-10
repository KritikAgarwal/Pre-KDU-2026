def main():
    input_line = input().strip()
    parts = input_line.split(",")

    cleaned_parts = []
    for item in parts:
        item = item.strip()
        cleaned_parts.append(item)

    unique_set = set()

    for item in cleaned_parts:
        unique_set.add(item)

    count_map = {}

    for item in cleaned_parts:
        if item in count_map:
            new_value = count_map[item] + 1
            count_map[item] = new_value
        else:
            count_map[item] = 1

    print("List:", cleaned_parts)
    print("Set:", unique_set)
    print("Dictionary:", count_map)


if __name__ == "__main__":
    main()
