def main():
    parts = input().split(" and ")

    str1 = parts[0][1:-1]
    str2 = parts[1][1:-1]

    length1 = len(str1)
    length2 = len(str2)

    print("Length 1:", length1)
    print("Length 2:", length2)
    print("Lengths match:", length1 == length2)
    print("Strings match:", str1 == str2)


if __name__ == "__main__":
    main()
