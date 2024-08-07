val TWO_TENS = listOf(
    "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
    "Seventeen", "Eighteen", "Nineteen"
)
val TENS = listOf(
    "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty",
    "Seventy", "Eighty", "Ninety"
)
val THOUSANDS = listOf("", "Thousand", "Million", "Billion")
class Solution {
    fun numberToWords(num: Int): String {
        var number = num
        if (number == 0) return "Zero"
        var i = 0
        var words = ""
        while (number > 0) {
            if (number % 1000 != 0) {
                words = calculation(number % 1000) + THOUSANDS[i] + " " + words
            }
            number /= 1000
            i++
        }
        return words.trim()
    }

    private fun calculation(num: Int): String {
        return when {
            num == 0 -> ""
            num < 20 -> TWO_TENS[num] + " "
            num < 100 -> TENS[num / 10] + " " + calculation(num % 10)
            else -> TWO_TENS[num / 100] + " Hundred " + calculation(num % 100)
        }
    }
}
