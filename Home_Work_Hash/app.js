function findpodstr(str, podstr) {
    let strLen = str.length
    let podstrLen = podstr.length

    let prime = 2

    let strHash = 0
    let podstrHash = 0
    let fastHash = 1

    for (let i = 0; i < podstrLen - 1; i++) {
        fastHash = fastHash % prime
    }

    for (let i = 0; i < podstrLen; i++) {
        strHash = (strHash + str.charCodeAt(i)) % prime
        podstrHash = (podstrHash + podstr.charCodeAt(i)) % prime
    }

    for (let i = 0; i <= strLen - podstrLen; i++) {
        if (podstrHash === strHash) {
            let j

            for (j = 0; j < podstrLen; j++) {
                if (str[i + j] !== podstr[j]) {
                    break
                }
            }

            if (j === podstrLen) {
                return i
            }
        }

        if (i < strLen - podstrLen) {
            strHash = ((strHash - str.charCodeAt(i) * fastHash) + str.charCodeAt(i + podstrLen)) % prime

            if (strHash < 0) {
                strHash = (strHash + prime)
            }
        }
    }

    return -1
}

console.log(findpodstr('aaabcbcbbc','bc'))