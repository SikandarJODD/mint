const codeContent = [
    {
        title: 'Arrays & Hashing',
        id: 'a1',
        class: 'check1',
        code: [
            {
                code_title: 'Contains Duplicate',
                link: 'https://leetcode.com/problems/contains-duplicate/',
            },
            {
                code_title: 'Valid Anagram',
                link: 'https://leetcode.com/problems/valid-anagram/',
            },
            {
                code_title: 'Two Sum',
                link: 'https://leetcode.com/problems/two-sum/',
            },
            {
                code_title: 'Group Anagrams',
                link: 'https://leetcode.com/problems/group-anagrams/',
            },
            {
                code_title: 'Top K Frequent Elements',
                link: 'https://leetcode.com/problems/top-k-frequent-elements/',
            },
            {
                code_title: 'Product of Array Except Self',
                link: 'https://leetcode.com/problems/product-of-array-except-self/',
            },
            {
                code_title: 'Valid Sudoku',
                link: 'https://leetcode.com/problems/valid-sudoku/',
            },
            {
                code_title: 'Longest Common Subsequence',
                link: 'https://leetcode.com/problems/longest-consecutive-sequence/',
            },
        ],
        code_len: function () {
            let i = 0;
            let nums = document.querySelectorAll(this.class);
            nums.forEach(num => {
                num.addEventListener("input", e => {
                    if (e.target.checked) {
                        i++;
                    }
                    else if (!e.target.checked) {
                        i--;
                    }
                    console.log(i);
                })
            })
            return i;
        },
    },
    {
        title: 'Two Pointers',
        id: 'a2',
        class: 'check2',
        code: [
            {
                code_title: 'Valid Palindrome',
                link: 'https://leetcode.com/problems/valid-palindrome/',
            },
            {
                code_title: 'Two sum || ',
                link: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/',
            },
            {
                code_title: '3 Sum',
                link: 'https://leetcode.com/problems/3sum/',
            },
            {
                code_title: 'Container with Most Water',
                link: 'https://leetcode.com/problems/container-with-most-water/',
            },
            {
                code_title: 'Trapping Rain Water',
                link: 'https://leetcode.com/problems/trapping-rain-water/',
            },
        ],
        code_len: function () {
            let i = 0;
            let nums = document.querySelectorAll(this.class);
            nums.forEach(num => {
                num.addEventListener("input", e => {
                    if (e.target.checked) {
                        i++;
                    }
                    else if (!e.target.checked) {
                        i--;
                    }
                    console.log(i);
                })
            })
            return i;
        },
    },
    {
        title: 'Sliding Window',
        id: 'a3',
        class: 'check3',
        code: [
            {
                code_title: 'Best Time to Buy & Sell Stock',
                link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
            },
            {
                code_title: 'Longest Substring Without Repeating Characters',
                link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
            },
            {
                code_title: 'Longest Repeating Character Replacement',
                link: 'https://leetcode.com/problems/longest-repeating-character-replacement/',
            },
            {
                code_title: 'Permutation in String',
                link: 'https://leetcode.com/problems/permutation-in-string/',
            },
            {
                code_title: 'Minimum Window Substring',
                link: 'https://leetcode.com/problems/minimum-window-substring/',
            },
            {
                code_title: 'Sliding Window Maximum',
                link: 'https://leetcode.com/problems/sliding-window-maximum/',
            },
        ],
        code_len: function () {
            let i = 0;
            let nums = document.querySelectorAll(this.class);
            nums.forEach(num => {
                num.addEventListener("input", e => {
                    if (e.target.checked) {
                        i++;
                    }
                    else if (!e.target.checked) {
                        i--;
                    }
                    console.log(i);
                })
            })
            return i;
        },
    },
]
/*
       <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Array & Hashing
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div>
                            <div class="question-content">
                                <div>
                                    <input type="checkbox" name="questionid" id="questionid" class="checkBOX">
                                </div>
                                <div class="qtitle">Calculate Sum</div>
                            </div>
                            <div class="question-content">
                                <div>
                                    <input type="checkbox" name="questionid" id="questionid" class="checkBOX">
                                </div>
                                <div class="qtitle">Valid Anagram</div>
                            </div>
                            <div class="question-content">
                                <div>
                                    <input type="checkbox" name="questionid" id="questionid" class="checkBOX">
                                </div>
                                <div class="qtitle">Two Sum</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
*/

const mainContent = document.getElementById("main-content1");
mainContent.innerHTML = codeContent.map((elm) => {
    // console.log(elm.code_len())
    return `<div class="accordion" id="${elm.id + "accordian"}">
    <div class="accordion-item">
        <h2 class="accordion-header" id="${elm.id}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#${elm.id + "Collapse"}" aria-expanded="false" aria-controls="${elm.id + "Collapse"}">
                ${elm.title}
            </button>
        </h2>
        <div id="${elm.id + "Collapse"}" class="accordion-collapse collapse " aria-labelledby="${elm.id}"
            data-bs-parent="main-content1">
            <div class="accordion-body" id="${elm.id + "code"}">
                    ${elm.code.map(e => {
        return `<div class="question-content">
                            <div>
                                <input type="checkbox" name="questionid" id="${e.code_title + "question"}" class="${elm.class} checkBOX">
                            </div>
                            <div class="qtitle text-truncate"><a href="${e.link}" target="_blank">${e.code_title}</a></div>
                        </div>`
    }).join("")
        } </div>
        </div>
    </div>
    `
}).join("")

$(function () {
    codeContent.forEach(e => {
        let m = `#${e.id}code`
        $(m).sortable();
    })
});