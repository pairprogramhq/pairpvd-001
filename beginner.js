/*
    Background:
    The Rochambeau Library wants to implement a user-based rating system for the books in their collection.
    Each book can be rated by any member on a scale of 1 to 5 stars.

    To provide an effective summary of book quality to potential readers, the library wants to display the average rating for
    each book, rounded to two decimal places, e.g "4.91 stars". However, there has been a recent issue where some ambitious
    authors have been attempting to rate their own books higher than 5 to artificially inflate their books' average ratings.
    On the flip side, there have been cases where authors give other books a rating lower than 1 to reduce their competition's average rating.

    They have hired you as a developer to build this book rating system.

    The algorithm takes the following input:
    `ratings`: An array of integers representing the ratings given by members. Each rating is a number from 1 to 5.

    Requirements:
    - Write a function that calculates the average rating for a given array of ratings.
    - Each rating should be a number between 0 and 5 (inclusive). If a rating falls outside of this range, it should be disregarded in the calculation.
    - The average rating should be returned as a number rounded to two decimal places.
    - If the array is empty or if no valid ratings are provided, the function should return `0.00`.
    - The function must be able to handle a large number of ratings.

    Example:
    Given the input:

    ratings: [4, 5, 3, 2, 5, 4, -3, 17]

    The function should calculate the average rating by summing all the VALID ratings (4 + 5 + 3 + 2 + 5 + 4 = 23)
    and dividing by the total number of VALID ratings (6 in this case), making sure to ignore the invalid ratings of -3 & 17 because they are outside the range of 1-5.

    Therefore, the function should return 3.83 (23 / 6 = 3.8333333333333335, rounded to two decimal places).

    Note: If the ratings array is empty, the function should return 0.00, as no ratings are available for the book.

*/
function calculateAverageBookRating(ratings) {
    // add your code below
    return -1;
    // add your code above
}

module.exports = calculateAverageBookRating;
