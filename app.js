const data = {

  Microsoft: [
    {
      title: "Detect Cycle in Linked List",
      description: "Determine if a linked list contains a loop using pointer traversal logic.",
      constraints: [
        "Up to 100000 nodes",
        "No modification of node values"
      ],
      source: "https://leetcode.com/problems/linked-list-cycle/",
      solution: `bool hasCycle(ListNode* head) {
    ListNode* slow = head;
    ListNode* fast = head;

    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}`
    },

    {
      title: "Reverse Linked List",
      description: "Reverse a singly linked list in-place.",
      constraints: [
        "Iterative approach preferred"
      ],
      source: "https://leetcode.com/problems/reverse-linked-list/",
      solution: `ListNode* reverseList(ListNode* head) {
    ListNode* prev = NULL;

    while (head) {
        ListNode* next = head->next;
        head->next = prev;
        prev = head;
        head = next;
    }
    return prev;
}`
    },

    {
      title: "Binary Search",
      description: "Locate a target value in sorted array using binary search.",
      constraints: [
        "O(log n) complexity"
      ],
      source: "https://leetcode.com/problems/binary-search/",
      solution: `int search(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`
    }
  ],

  Amazon: [
    {
      title: "Product of Array Except Self",
      description: "Compute product of all elements except itself without division.",
      constraints: [
        "O(n) time complexity"
      ],
      source: "https://leetcode.com/problems/product-of-array-except-self/",
      solution: `vector<int> productExceptSelf(vector<int>& nums) {
    int n = nums.size();
    vector<int> result(n, 1);

    int prefix = 1;
    for (int i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    int suffix = 1;
    for (int i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }
    return result;
}`
    },

    {
      title: "Merge Intervals",
      description: "Merge overlapping intervals into non-overlapping sorted intervals.",
      constraints: [
        "Sorting required"
      ],
      source: "https://leetcode.com/problems/merge-intervals/",
      solution: `vector<vector<int>> merge(vector<vector<int>>& intervals) {
    sort(intervals.begin(), intervals.end());
    vector<vector<int>> result;

    for (auto &i : intervals) {
        if (result.empty() || result.back()[1] < i[0])
            result.push_back(i);
        else
            result.back()[1] = max(result.back()[1], i[1]);
    }
    return result;
}`
    }
  ],

  Oracle: [
    {
      title: "Longest Common Subsequence",
      description: "Find length of longest common subsequence between two strings.",
      constraints: [
        "Dynamic programming required"
      ],
      source: "https://leetcode.com/problems/longest-common-subsequence/",
      solution: `int longestCommonSubsequence(string a, string b) {
    int n = a.size(), m = b.size();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (a[i - 1] == b[j - 1])
                dp[i][j] = dp[i - 1][j - 1] + 1;
            else
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return dp[n][m];
}`
    },

    {
      title: "Minimum Path Sum",
      description: "Calculate minimum sum path from top-left to bottom-right of grid.",
      constraints: [
        "Can only move right or down"
      ],
      source: "https://leetcode.com/problems/minimum-path-sum/",
      solution: `int minPathSum(vector<vector<int>>& grid) {
    int n = grid.size(), m = grid[0].size();

    for (int i = 1; i < n; i++) grid[i][0] += grid[i-1][0];
    for (int j = 1; j < m; j++) grid[0][j] += grid[0][j-1];

    for (int i = 1; i < n; i++) {
        for (int j = 1; j < m; j++) {
            grid[i][j] += min(grid[i-1][j], grid[i][j-1]);
        }
    }

    return grid[n-1][m-1];
}`
    }
  ]
};

const companyList = document.getElementById("companyList");
const questionList = document.getElementById("questionList");
const qTitle = document.getElementById("questionTitle");
const qDesc = document.getElementById("questionDescription");
const constraintBox = document.getElementById("constraintBox");
const sourceLink = document.getElementById("sourceLink");
const solutionBox = document.getElementById("solutionBox");
const aiBtn = document.getElementById("aiBtn");
const solutionToggle = document.getElementById("solutionToggle");

let currentQuestion = null;

Object.keys(data).forEach(company => {
  const li = document.createElement("li");
  li.textContent = company;
  li.onclick = () => {
    questionList.innerHTML = "";
    data[company].forEach(q => {
      const item = document.createElement("li");
      item.textContent = q.title;
      item.onclick = () => loadQuestion(q);
      questionList.appendChild(item);
    });
  };
  companyList.appendChild(li);
});

function loadQuestion(q) {
  currentQuestion = q;

  qTitle.textContent = q.title;
  qDesc.textContent = q.description;
  sourceLink.href = q.source;

  constraintBox.innerHTML = "";
  q.constraints.forEach(c => {
    const li = document.createElement("li");
    li.textContent = c;
    constraintBox.appendChild(li);
  });

  solutionBox.textContent = q.solution;
  solutionBox.classList.add("hidden");
}

solutionToggle.onclick = () => {
  solutionBox.classList.toggle("hidden");
};

aiBtn.onclick = () => {
  if (!currentQuestion) return;
  const query = encodeURIComponent(currentQuestion.title + " " + currentQuestion.description);
  window.open("https://chat.openai.com/?q=" + query, "_blank");
};
