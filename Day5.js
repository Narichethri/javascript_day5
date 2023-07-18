function spotlightMap(arr) {
    const arr1 = JSON.parse(JSON.stringify(arr));
    length = arr.length;
    if (length >= 2) {
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (i == 0 && j == 0 && length > i && arr[i].length > j) {
                    arr1[i][j] = arr[i][j] + arr[i][j + 1] + arr[i + 1][j] + arr[i + 1][j + 1];
                }
                else if (i != 0 && j != 0 && j != arr[i].length - 1 && length > j && i != length - 1) {
                    arr1[i][j] = arr[i][j - 1] + arr[i][j + 1] + arr[i][j] +
                        arr[i + 1][j] + arr[i + 1][j + 1] + arr[i + 1][j - 1] +
                        arr[i - 1][j] + arr[i - 1][j + 1] + arr[i - 1][j - 1];

                }
                else if (i != 0 && j == 0 && i != length - 1 && arr[i].length > j) {
                    arr1[i][j] = arr[i][j] + arr[i][j + 1] + arr[i - 1][j] + arr[i - 1][j + 1] +
                        arr[i + 1][j] + arr[i + 1][j + 1];
                }
                else if (i == 0 && j != 0 && j != arr[i].length - 1 && length > i) {
                    arr1[i][j] = arr[i][j - 1] + arr[i][j] + arr[i][j + 1] +
                        arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 1][j + 1];

                }
                else if (i == 0 && j == arr[i].length - 1 && length > i) {
                    arr1[i][j] = arr[i][j] + arr[i][j - 1] + arr[i + 1][j] + arr[i + 1][j - 1];
                }
                else if (i != 0 && j == arr[i].length - 1 && length > i && i != length - 1) {
                    arr1[i][j] = arr[i][j] + arr[i][j - 1] + arr[i - 1][j] + arr[i - 1][j - 1] +
                        arr[i + 1][j] + arr[i + 1][j - 1];
                }
                else if (i == length - 1 && j == 0 && arr[i].length > j) {
                    arr1[i][j] = arr[i][j] + arr[i][j + 1] + arr[i - 1][j] + arr[i - 1][j + 1];
                }
                else if (i == length - 1 && j != 0 && j != arr[i].length - 1) {
                    arr1[i][j] = arr[i][j] + arr[i][j - 1] + arr[i][j + 1] +
                        arr[i - 1][j] + arr[i - 1][j - 1] + arr[i - 1][j + 1];
                }
                else if (i == length - 1 && j == arr[i].length - 1 && length > 1) {
                    arr1[i][j] = arr[i][j] + arr[i][j - 1] + arr[i - 1][j] + arr[i - 1][j - 1];

                }


            }
        }


    }
    console.log(arr1);
}

spotlightMap([[3]]);