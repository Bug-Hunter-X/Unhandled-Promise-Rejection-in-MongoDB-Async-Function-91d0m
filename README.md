# Unhandled Promise Rejection in MongoDB Async Function

This repository demonstrates a common error when working with asynchronous operations in MongoDB using Node.js. The issue arises from the lack of proper error handling within the asynchronous function, leading to silent failures and difficulty in debugging.

## Problem

The `run()` function uses async/await, but does not explicitly handle potential errors during database operations. If an error occurs (e.g., network issue, database error), the promise is rejected. If not caught, this will not be logged, making it difficult to trace the issue.