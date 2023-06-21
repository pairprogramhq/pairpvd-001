/*
    Background:
    The Rochambeau Library aims to create personalized reading plans for their members
    based on their reading speed and weekly reading availability.

    A reading plan consists of book series, which are lists of books that must be read in a specific order.
    The goal is to develop an algorithm that recommends the most suitable series to each member.

    The algorithm takes the following inputs:

    `bookSeries`: An array of book series, where each series is represented as an array of integers indicating the number of pages in each book.
    The order of books in a series must be maintained.

    `readingSpeed`: The member's reading speed in pages per minute.

    `weeklyAvailability`: The amount of time the member has for reading each week, in minutes.

    The algorithm should output the index of the series that allows the member to complete
    the most books within their weekly availability. If multiple series enable the same number
    of books to be read, the algorithm should return the index of the series with fewer total pages.
    If a member cannot complete any book within their weekly availability, the algorithm should return -1.

    Example:
    Given the input:

    bookSeries: [[100, 200, 150], [120, 80, 60, 30], [50, 50, 50, 50]]
    readingSpeed: 2
    weeklyAvailability: 93
    The member can read 186 pages per week (2 pages per minute * 93 minutes). Analyzing each series:

    From the first series, the member can read only the first book.
    From the second series, the member can read the first two books.
    From the third series, the member can read all four books. However, this series has more total pages than the second series.
    Therefore, the algorithm recommends the second series (index 1).

*/

function determineBestCurriculumForMember(
    bookSeries,
    readingSpeed,
    weeklyAvailability
) {
  // add code below
    return -1;
  // add code above
}

module.exports = determineBestCurriculumForMember;
