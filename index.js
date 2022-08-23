const codeContent = [
    {
        title: 'Arrays & Hashing ',
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
            let nums = document.querySelectorAll(`.${this.class}`);
            nums.forEach(num => {
                num.addEventListener("input", () => {
                    if (num.checked) {
                        i++;
                        document.getElementById(`${this.id + "count"}`).innerHTML = `${i}/${nums.length}`;
                        num.parentElement.classList.add('color');

                    }
                    else if (!num.checked) {
                        i--;
                        document.getElementById(`${this.id + "count"}`).innerHTML = `${i}/${nums.length}`;
                        num.parentElement.classList.remove('color');

                    }
                    if (i == 0) {
                            document.getElementById(`${this.id + "count"}`).innerHTML = ` `;
                    }
                })
            })
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
            let nums = document.querySelectorAll(`.${this.class}`);
            nums.forEach(num => {
                num.addEventListener("input", () => {
                    if (num.checked) {
                        i++;
                        document.getElementById(`${this.id + "count"}`).innerHTML = `${i}/${nums.length}`;
                        num.parentElement.classList.add('color');

                    }
                    else if (!num.checked) {
                        i--;
                        document.getElementById(`${this.id + "count"}`).innerHTML = `${i}/${nums.length}`;
                        num.parentElement.classList.remove('color');

                    }
                    if (i == 0) {
                            document.getElementById(`${this.id + "count"}`).innerHTML = ` `;
                    }
                })
            })
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
            let nums = document.querySelectorAll(`.${this.class}`);
            nums.forEach(num => {
                num.addEventListener("input", () => {
                    if (num.checked) {
                        i++;
                        document.getElementById(`${this.id + "count"}`).innerHTML = `${i}/${nums.length}`;
                        num.parentElement.classList.add('color');

                    }
                    else if (!num.checked) {
                        i--;
                        document.getElementById(`${this.id + "count"}`).innerHTML = `${i}/${nums.length}`;
                        num.parentElement.classList.remove('color');

                    }
                    if (i == 0) {
                            document.getElementById(`${this.id + "count"}`).innerHTML = ` `;
                    }
                })
            })
        },
    },
    {
        title: 'Sorting ',
        id: 'a4',
        class: 'check4',
        code: [
            {
                code_title: 'Majority Element',
                link: 'https://leetcode.com/problems/majority-element/',
            },
            {
                code_title: 'Missing Number',
                link: 'https://leetcode.com/problems/missing-number/',
            },
            {
                code_title: 'Intersection of Two Arrays',
                link: 'https://leetcode.com/problems/intersection-of-two-arrays/',
            },
            {
                code_title: 'Find the Difference',
                link: 'https://leetcode.com/problems/find-the-difference/',
            },
            {
                code_title: 'Minimum Moves to equal array elements',
                link: 'https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/',
            },
            {
                code_title: 'Top K Frequent Words',
                link: 'https://leetcode.com/problems/top-k-frequent-words/',
            },
            {
                code_title: 'Reveal Cards in Increasing Order',
                link: 'https://leetcode.com/problems/reveal-cards-in-increasing-order/',
            },
        ],
        code_len: function () {
            let i = 0;
            let nums = document.querySelectorAll(`.${this.class}`);
            nums.forEach(num => {
                num.addEventListener("input", () => {
                    if (num.checked) {
                        i++;
                        document.getElementById(`${this.id + "count"}`).innerHTML = `${i}/${nums.length}`;
                        num.parentElement.classList.add('color');

                    }
                    else if (!num.checked) {
                        i--;
                        document.getElementById(`${this.id + "count"}`).innerHTML = `${i}/${nums.length}`;
                        num.parentElement.classList.remove('color');

                    }
                    if (i == 0) {
                            document.getElementById(`${this.id + "count"}`).innerHTML = ` `;
                    }
                })
            })
        },
    },
    {
        title: 'String ',
        id: 'a5',
        class: 'check5',
        code: [
            {
                code_title: 'Zero Ones Equal One Zeros',
                link: 'https://www.codechef.com/submit/ZOOZ',
            },
            {
                code_title: 'Sort the String',
                link: 'https://www.codechef.com/submit/SRTARR',
            },
            {
                code_title: 'Alternating String',
                link: 'https://www.codechef.com/submit/ALTSTR',
            },
            {
                code_title: 'Permutation in String',
                link: 'https://www.codechef.com/submit/RECNDSTR',
            },
            {
                code_title: 'Chef and String',
                link: 'https://leetcode.com/problems/minimum-window-substring/',
            },
            {
                code_title: 'Palindromic substrings',
                link: 'https://www.codechef.com/submit/STRPALIN',
            },
            {
                code_title: 'CLosest Vowels',
                link: 'https://www.codechef.com/submit/CLOSEVOWEL',
            },
            {
                code_title: 'Jewels and Stones',
                link: 'https://www.codechef.com/submit/STONES',
            },
            {
                code_title: 'Professor And Directions',
                link: 'https://www.codechef.com/submit/DIRECTN',
            },
            {
                code_title: 'Substring of a Substring',
                link: 'https://www.codechef.com/submit/SUBSTRING',
            },
            {
                code_title: 'Palindrome',
                link: 'https://www.codechef.com/submit/PALINPAIN',
            },
            {
                code_title: 'Flip the String',
                link: 'https://www.codechef.com/submit/PALINPAIN',
            },
        ],
        code_len: function () {
            let i = 0;
            let nums = document.querySelectorAll(`.${this.class}`);
            nums.forEach(num => {
                num.addEventListener("input", () => {
                    if (num.checked) {
                        i++;
                        document.getElementById(`${this.id + "count"}`).innerHTML = `${i}/${nums.length}`;
                        num.parentElement.classList.add('color');

                    }
                    else if (!num.checked) {
                        i--;
                        document.getElementById(`${this.id + "count"}`).innerHTML = `${i}/${nums.length}`;
                        num.parentElement.classList.remove('color');

                    }
                    if (i == 0) {
                            document.getElementById(`${this.id + "count"}`).innerHTML = ` `;
                    }
                })
            })
        },
    },
    {
        title: 'Greedy Algorithms',
        id: 'a6',
        class: 'check6',
        code: [
            {
                code_title: 'Score High',
                link: 'https://www.codechef.com/submit/HIGHSCORE',
            },
            {
                code_title: 'Smallest Numbers of Notes',
                link: 'https://www.codechef.com/submit/FLOW005',
            },
            {
                code_title: 'Maximum Length Even Subarray',
                link: 'https://www.codechef.com/submit/MXEVNSUB',
            },
            {
                code_title: 'False Number',
                link: 'https://www.codechef.com/submit/FALSNUM',
            },
            {
                code_title: 'Make them Zero',
                link: 'https://www.codechef.com/submit/MAKEZERO',
            },
            {
                code_title: 'The Two numbers',
                link: 'https://www.codechef.com/submit/TWONUMBERS',
            },
            {
                code_title: 'Maximum Score',
                link: 'https://www.codechef.com/submit/MAXSC',
            },
            {
                code_title: 'Bench Press',
                link: 'https://www.codechef.com/submit/BENCHP',
            },
            {
                code_title: 'Team Formation',
                link: 'https://www.codechef.com/submit/TEAMFOR',
            },
            {
                code_title: 'Bon Appetit',
                link: 'https://www.codechef.com/submit/FGFS',
            },
            {
                code_title: 'One Dimensional Kingdoms',
                link: 'https://www.codechef.com/submit/ONEKING',
            },
            {
                code_title: 'Broken Life',
                link: 'https://www.codechef.com/submit/BRKNLIFE',
            },
        ],
        code_len: function () {
            let i = 0;
            let nums = document.querySelectorAll(`.${this.class}`);
            nums.forEach(num => {
                num.addEventListener("input", () => {
                    if (num.checked) {
                        i++;
                        document.getElementById(`${this.id + "count"}`).innerHTML = `${i}/${nums.length}`;
                        num.parentElement.classList.add('color');

                    }
                    else if (!num.checked) {
                        i--;
                        document.getElementById(`${this.id + "count"}`).innerHTML = `${i}/${nums.length}`;
                        num.parentElement.classList.remove('color');

                    }
                    if (i == 0) {
                            document.getElementById(`${this.id + "count"}`).innerHTML = ` `;
                    }
                })
            })
        },
    },
    {
        title: 'Data Structures',
        id: 'a7',
        class: 'check7',
        code: [
            {
                code_title: 'Chef & Strings',
                link: 'https://www.codechef.com/submit/RECNDSTR',
            },
            {
                code_title: 'Isolation Centers',
                link: 'https://www.codechef.com/submit/CORUS',
            },
            {
                code_title: 'Maximise the Subsequence Sum',
                link: 'https://www.codechef.com/submit/SIGNFLIP',
            },
            {
                code_title: 'Average Flex',
                link: 'https://www.codechef.com/submit/AVGFLEX',
            },
            {
                code_title: 'Recipe Reconstruction',
                link: 'https://www.codechef.com/submit/RRECIPE',
            },
            {
                code_title: 'Stable Sequence',
                link: 'https://www.codechef.com/submit/STBARR',
            },
            {
                code_title: 'Rooks',
                link: 'https://www.codechef.com/submit/RKS',
            },
            {
                code_title: 'Treasure Hunting',
                link: 'https://www.codechef.com/submit/N1',
            },
            {
                code_title: 'Iron, Magnet and Wall',
                link: 'https://www.codechef.com/submit/FEMA2',
            },
            {
                code_title: 'Devu and his Class',
                link: 'https://www.codechef.com/submit/DEVCLASS',
            },
        ],
        code_len: function () {
            let i = 0;
            let nums = document.querySelectorAll(`.${this.class}`);
            nums.forEach(num => {
                num.addEventListener("input", () => {
                    if (num.checked) {
                        i++;
                        document.getElementById(`${this.id + "count"}`).innerHTML = `${i}/${nums.length}`;
                        num.parentElement.classList.add('color');

                    }
                    else if (!num.checked) {
                        i--;
                        document.getElementById(`${this.id + "count"}`).innerHTML = `${i}/${nums.length}`;
                        num.parentElement.classList.remove('color');

                    }
                    if (i == 0) {
                            document.getElementById(`${this.id + "count"}`).innerHTML = ` `;
                    }
                })
            })
        },
    },
    {

        title: 'Binary Search ',
        id: 'a8',
        class: 'check8',
        code: [
            {
                code_title: 'Arranging-coins',
                link: 'https://leetcode.com/problems/arranging-coins/',
            },
            {
                code_title: 'Search Insert Position',
                link: 'https://leetcode.com/problems/search-insert-position/',
            },
            {
                code_title: 'Capacity To Ship Packages Within d Days',
                link: 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/',
            },
            {
                code_title: 'Koko Eating Bananas',
                link: 'https://leetcode.com/problems/koko-eating-bananas/',
            },
            {
                code_title: 'Ugli-Number-3',
                link: 'https://leetcode.com/problems/ugly-number-iii/',
            },
            {
                code_title: 'Split array larget sum',
                link: 'https://leetcode.com/problems/split-array-largest-sum/',
            },
            {
                code_title: 'Building Boxes',
                link: 'https://leetcode.com/problems/building-boxes/',
            },
            {
                code_title: 'Last day where you can still cross',
                link: 'https://leetcode.com/problems/last-day-where-you-can-still-cross/',
            },

        ],
        code_len: function () {
            let i = 0;
            let nums = document.querySelectorAll(`.${this.class}`);
            nums.forEach(num => {
                num.addEventListener("input", () => {
                    if (num.checked) {
                        i++;
                        document.getElementById(`${this.id + "count"}`).innerHTML = `${i}/${nums.length}`;
                        num.parentElement.classList.add('color');

                    }
                    else if (!num.checked) {
                        i--;
                        document.getElementById(`${this.id + "count"}`).innerHTML = `${i}/${nums.length}`;
                        num.parentElement.classList.remove('color');

                    }
                    if (i == 0) {
                            document.getElementById(`${this.id + "count"}`).innerHTML = ` `;
                    }
                })
            })
        },
    },
]

const mainContent = document.getElementById("main-content1");
mainContent.innerHTML = codeContent.map((elm) => {
    return `<div class="accordion" id="${elm.id + "accordian"}">
    <div class="accordion-item">
        <h2 class="accordion-header" id="${elm.id}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#${elm.id + "Collapse"}" aria-expanded="false" aria-controls="${elm.id + "Collapse"}">
                ${elm.title} 
                <span class="count" id="${elm.id + "count"}"></span> 
            </button>
        </h2>
        <div id="${elm.id + "Collapse"}" class="accordion-collapse collapse " aria-labelledby="${elm.id}"
            data-bs-parent="main-content1">
            <div class="accordion-body" id="${elm.id + "code"}">
                    ${elm.code.map(e => {
        return `<div class="question-content">
                                <input type="checkbox" name="questionid" id="${e.code_title + "question"}" class="${elm.class} checkBOX">
                            <div class="qtitle text-truncate"><a href="${e.link}" target="_blank">${e.code_title}</a></div>
                        </div>`
    }).join("")
        } </div>
        </div>
    </div>
    `
}).join("")

codeContent.forEach(e => {
    e.code_len();
})

$(function () {
    codeContent.forEach(e => {
        let m = `#${e.id}code`
        $(m).sortable();
    })
    $("#sort").sortable();
});
