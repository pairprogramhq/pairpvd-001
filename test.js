const assert = require("node:assert");
const beginnerAlgorithm = require("./beginner");
const advancedAlgorithm = require("./advanced");

function runBeginnerTests() {
    let passingTestCases = 0;
    let totalTestCases = 10;

    // ratings are within the normal range
    try {
        const testCaseOne = beginnerAlgorithm([3.9, 4.1, 3.7, 4.2]);
        assert.equal(testCaseOne, 3.97);
        passingTestCases++;
        logPassForTest(1);
    } catch (err) {
        logFailForTest(1, err);
    }

    // all ratings are the same
    try {
        const testCaseTwo = beginnerAlgorithm([2.2, 2.2, 2.2, 2.2]);
        assert.equal(testCaseTwo, 2.20);
        passingTestCases++;
        logPassForTest(2);
    } catch (err) {
        logFailForTest(2, err);
    }

    // ratings contain a single value
    try {
        const testCaseThree = beginnerAlgorithm([3.8]);
        assert.equal(testCaseThree, 3.80);
        passingTestCases++;
        logPassForTest(3);
    } catch (err) {
        logFailForTest(3, err);
    }

    // ratings contain negative values
    try {
        const testCaseFour = beginnerAlgorithm([-1.3, 4.9, 3.1]);
        assert.equal(testCaseFour, 4.00);
        passingTestCases++;
        logPassForTest(4);
    } catch (err) {
        logFailForTest(4, err);
    }

    // ratings contain values above the allowed maximum
    try {
        const testCaseFive = beginnerAlgorithm([6.1, 4.9, 4.3]);
        assert.equal(testCaseFive, 4.60);
        passingTestCases++;
        logPassForTest(5);
    } catch (err) {
        logFailForTest(5, err);
    }

    // ratings are empty
    try {
        const testCaseSix = beginnerAlgorithm([]);
        assert.equal(testCaseSix, 0.00);
        passingTestCases++;
        logPassForTest(6);
    } catch (err) {
        logFailForTest(6, err);
    }

    // ratings contain both negative values and values above the allowed maximum
    try {
        const testCaseSeven = beginnerAlgorithm([-2.3, 5.5, 3.8]);
        assert.equal(testCaseSeven, 3.80);
        passingTestCases++;
        logPassForTest(7);
    } catch (err) {
        logFailForTest(7, err);
    }

    // ratings contain only invalid values
    try {
        const testCaseEight = beginnerAlgorithm([-2, 7, -5]);
        assert.equal(testCaseEight, 0.00);
        passingTestCases++;
        logPassForTest(8);
    } catch (err) {
        logFailForTest(8, err);
    }

    // ratings contain only the maximum and minimum allowed values
    // ratings result in a repeating decimal
    try {
        const testCaseNine = beginnerAlgorithm([4.3, 4.3, 4.4]);
        assert.equal(testCaseNine, 4.33);
        passingTestCases++;
        logPassForTest(9);
    } catch (err) {
        logFailForTest(9, err);
    }

    // ratings contain extreme values
    try {
        const testCaseTen = beginnerAlgorithm([-100000, 100000, 3.7, 4.9]);
        assert.equal(testCaseTen, 4.30);
        passingTestCases++;
        logPassForTest(10);
    } catch (err) {
        logFailForTest(10, err);
    }
    logTestResults(passingTestCases, totalTestCases, "beginner");
}

function runAdvancedTests() {
    let passingTestCases = 0;
    let totalTestCases = 10;

    try {
        // multiple series with varying page numbers and
        // one series with multiple books within weekly availability
        const testCaseOne = advancedAlgorithm(
            [
                [100, 200, 150],
                [120, 80, 60, 30],
                [50, 50, 50, 50]
            ],
            2,
            93
        );
        assert.equal(testCaseOne, 2);
        passingTestCases++;
        logPassForTest(1);
    } catch (err) {
        logFailForTest(1, err);
    }

    try {
        // multiple series with varying page numbers
        // where more than one series can be read based on weekly availability
        const testCaseTwo = advancedAlgorithm(
            [
                [130, 235, 110],
                [122, 77, 64, 38],
                [54, 49, 52, 57, 61]
            ],
            3,
            85
        );
        assert.equal(testCaseTwo, 2);
        passingTestCases++;
        logPassForTest(2);
    } catch (err) {
        logFailForTest(2, err);
    }

    try {
        // series where the books have more pages than the member can read in a week
        const testCaseThree = advancedAlgorithm(
            [[507], [419], [611]],
            2,
            100
        );
        assert.equal(testCaseThree, -1);
        passingTestCases++;
        logPassForTest(3);
    } catch (err) {
        logFailForTest(3, err);
    }

    try {
        // empty series
        const testCaseFour = advancedAlgorithm([[], [], []], 2, 90);
        assert.equal(testCaseFour, -1);
        passingTestCases++;
        logPassForTest(4);
    } catch (err) {
        logFailForTest(4, err);
    }

    try {
        // multiple series and varying page numbers
        const testCaseFive = advancedAlgorithm(
            [
                [50, 50, 50, 50],
                [100, 200, 300],
                [150, 150, 200]
            ],
            2,
            100
        );
        assert.equal(testCaseFive, 0);
        passingTestCases++;
        logPassForTest(5);
    } catch (err) {
        logFailForTest(5, err);
    }

    try {
        // only one series is provided
        const testCaseSix = advancedAlgorithm(
            [
                [150, 200, 300]
            ],
            2,
            200
        );
        assert.equal(testCaseSix, 0);
        passingTestCases++;
        logPassForTest(6);
    } catch (err) {
        logFailForTest(6, err);
    }

    try {
        // multiple series have same number of readable books but different total pages
        const testCaseSeven = advancedAlgorithm(
            [
                [50, 75, 100, 125],
                [60, 70, 90, 110],
                [80, 85, 90, 95]
            ],
            2,
            140
        );
        assert.equal(testCaseSeven, 1);
        passingTestCases++;
        logPassForTest(7);
    } catch (err) {
        logFailForTest(7, err);
    }

    try {
        // large number of series and books, with each series containing different number of pages
        const testCaseEight = advancedAlgorithm(
            [
                Array(100).fill(300),
                Array(100).fill(310),
                Array(100).fill(290)
            ],
            3,
            300
        );
        assert.equal(testCaseEight, 2);
        passingTestCases++;
        logPassForTest(8);
    } catch (err) {
        logFailForTest(8, err);
    }

    try {
        // when a series has a one book that can't be read within the weekly availability
        const testCaseNine = advancedAlgorithm(
            [
                [500],
                [400],
                [300]
            ],
            2,
            200
        );
        assert.equal(testCaseNine, 2);
        passingTestCases++;
        logPassForTest(9);
    } catch (err) {
        logFailForTest(9, err);
    }

    try {
        // when weekly availability is 0
        const testCaseTen = advancedAlgorithm(
            [
                [100, 200, 300],
                [50, 75, 100, 125],
                [60, 70, 90, 110]
            ],
            2,
            0
        );
        assert.equal(testCaseTen, -1);  // Expected outcome: -1, because no book can be read with 0 weekly availability
        passingTestCases++;
        logPassForTest(10);
    } catch (err) {
        logFailForTest(10, err);
    }

    logTestResults(passingTestCases, totalTestCases, "advanced");
}

function logFailForTest(testNumber, err) {
    console.error(`❌ Test case #${testNumber} failed`);
    console.error(`Actual result: ${err.actual}`);
    console.error(`Expected result: ${err.expected}`);
    console.error("==========");
}

function logPassForTest(testNumber) {
    console.info(`✅ Test case #${testNumber} passed`);
}

function logTestResults(passing, total, difficulty) {
    if (passing === total) {
        console.info();
        console.info("🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉");
        console.info(
            `🎉 Congratulations, you've completed 🎉\n🎉 the PairPVD ${difficulty.toUpperCase()} challenge!   🎉`
        );
        console.info("🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉");
        console.info();
        logBadge();
        logBrand();
    } else {
        let testCaseSummary = ``;
        for (let i = 0; i < total; i++) {
            if (i < passing) {
                testCaseSummary += "✅ ";
            } else {
                testCaseSummary += "❌ ";
            }
        }
        console.info(`|||||||||| ${difficulty.toUpperCase()} ||||||||||`);
        console.info(`Passing test cases: ${testCaseSummary}`);
        console.info(`||||||||||||||||||||||||||||||`);
    }
}

function logBrand() {
    console.log();
    console.log();
    console.log("                   @@@@@@@@@@@@@@@@@@@@           ");
    console.log("                @@@@,                 @@@         ");
    console.log("              @@@    #@@@@@@@@@@@@@@@@@@,         ");
    console.log("             @@@  ,@@@(             @@@   @       ");
    console.log("           @@@   @@@              .@@@  @@@       ");
    console.log("          @@@  .@@@            @@@@@   @@&        ");
    console.log("        @@@   @@@     @@@@@@@@@@     @@@          ");
    console.log("        @@@  @@@    @@@           @@@@            ");
    console.log("          %@@@@@@@@@@   @@@@@@@@@@@               ");
    console.log("                      .@@                         ");
    console.log("            (@@@@@@@@@@@                          ");
    console.log();
    console.log("           Join us at pairprogram.com!            ");
    console.log("       Follow us on Twitter @pairprogram!         ");
    console.log();
}

function logBadge() {
    console.info();
    console.info("🔐 🔓 🔐 🔓 🔐 🔓 🔐 🔓 🔐 🔓 🔐 🔓 🔐 🔓 🔐 🔓 🔐 🔓 🔐 🔓 🔐");
    console.info(
        `🔐 Register on pairprogram.com and share 🔓\n🔓 this code with the host to claim your 🔓\n🔓 badge:    JUST-GETTING-STARTED        🔓`
    );
    console.info("🔐 🔓 🔐 🔓 🔐 🔓 🔐 🔓 🔐 🔓 🔐 🔓 🔐 🔓 🔐 🔓 🔐 🔓 🔐 🔓 🔐");
    console.info();
}

module.exports = {
    runBeginnerTests,
    runAdvancedTests,
}
