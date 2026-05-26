let n = 5;

for (let i = 1; i <= n; i++) {

    for (let j = -i + 1; j < i; j++) {

        if (j < 0) {
            process.stdout.write((-j + 1) + "");
        } else {
            process.stdout.write((j + 1) + "");
        }

    }

    console.log();
}