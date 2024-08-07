class Solution {
    private var counter = 0
    fun countSeniors(details: Array<String>): Int {
        for (i in details.indices) {
            val buffer = details[i][11].toString() + details[i][12].toString()
            if (buffer.toInt() > 60) {
                counter++
            }
        }
        return counter
    }
}
