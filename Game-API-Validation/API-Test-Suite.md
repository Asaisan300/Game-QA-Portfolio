# API Test Suite

## Table of Contents

1. [Test Scope](#1-test-scope)
2. [Test Environment](#2-test-environment)
3. [Authentication Tests](#3-authentication-tests)
4. [Player Tests](#4-player-tests)
5. [Inventory Tests](#5-inventory-tests)
6. [Security Testing](#6-security-testing)
7. [Automated Testing](#7-automated-testing)
8. [Pre-request and Post-response Automation](#8-pre-request-and-post-response-automation)
9. [Collection Runner / Regression Testing](#9-collection-runner--regression-testing)
10. [Confirmed Defects](#10-confirmed-defects)
11. [Testing Techniques Demonstrated](#11-testing-techniques-demonstrated)
12. [Test Summary](#12-test-summary)

---

## 1. Test Scope

This test suite validates a local game related REST API that manages player authentication, player data, and player inventories.

The testing focuses on functional behavior, negative scenarios, boundary values, input/data validation, security related inputs, and automated regression checks.

**Total API Requests:** 25
**Automated Assertions:** 13

---

## 2. Test Environment

| Component      | Configuration               |
| -------------- | --------------------------- |
| API            | Local Node.js / Express API |
| Base URL       | `http://localhost:3000`     |
| Client         | Postman                     |
| Test Execution | Postman Collection Runner   |
| Automation     | Postman Test Scripts        |
| Data Format    | JSON                        |
| Repository     | GitHub                      |

---

## 3. Authentication Tests

| Test Case                      | Method | Test Type                 | Expected Result           |
| ------------------------------ | ------ | ------------------------- | ------------------------- |
| POST Login - Valid Credentials | POST   | Functional                | Successful authentication |
| POST Login - Invalid Password  | POST   | Negative / Authentication | `401 Unauthorized`        |
| POST Login - Invalid Username  | POST   | Negative / Authentication | `401 Unauthorized`        |
| POST Login - Missing Password  | POST   | Input Validation          | Request rejected          |
| POST Login - Missing Username  | POST   | Input Validation          | Request rejected          |
| POST Login - Empty Body        | POST   | Input Validation          | Request rejected          |

**Coverage:** Valid authentication, invalid credentials, missing required fields, and empty request data.

---

## 4. Player Tests

| Test Case                   | Method | Test Type                 | Expected Result      |
| --------------------------- | ------ | ------------------------- | -------------------- |
| GET Player - Valid ID       | GET    | Functional                | Player data returned |
| GET Player - Nonexistent ID | GET    | Negative / Error Handling | `404 Not Found`      |
| GET Player - Invalid ID     | GET    | Input Validation          | Request rejected     |
| GET Player - Zero ID        | GET    | Boundary                  | Request rejected     |
| GET Player - Negative ID    | GET    | Boundary                  | Request rejected     |

**Coverage:** Valid player retrieval, nonexistent resources, invalid identifiers, and boundary values.

---

## 5. Inventory Tests

### Inventory Retrieval

| Test Case                             | Method | Test Type                    | Expected Result                |
| ------------------------------------- | ------ | ---------------------------- | ------------------------------ |
| GET Inventory - Valid Player          | GET    | Functional                   | Inventory returned             |
| GET Inventory - Nonexistent Player ID | GET    | Negative / Error Handling    | `404 Not Found`                |
| GET Inventory - Invalid Player ID     | GET    | Input Validation             | Request rejected               |
| GET Inventory - Empty Inventory       | GET    | Functional / Data Validation | Valid empty inventory response |

### Add Item

| Test Case                             | Method | Test Type                    | Expected Result                |
| ------------------------------------- | ------ | ---------------------------- | ------------------------------ |
| POST Add Item - Valid Data            | POST   | Functional / Data Validation | `201 Created`                  |
| POST Add Item - Missing Name          | POST   | Negative / Input Validation  | `400 Bad Request`              |
| POST Add Item - Missing Item ID       | POST   | Negative / Input Validation  | `400 Bad Request`              |
| POST Add Item - Missing Quantity      | POST   | Negative / Input Validation  | `400 Bad Request`              |
| POST Add Item - Zero Quantity         | POST   | Boundary                     | `400 Bad Request`              |
| POST Add Item - Negative Quantity     | POST   | Boundary                     | `400 Bad Request`              |
| POST Add Item - Invalid Quantity Type | POST   | Data Type Validation         | `400 Bad Request`              |
| POST Add Item - Invalid Item ID Type  | POST   | Data Type Validation         | `400 Bad Request`              |
| POST Add Item - SQL Injection Input   | POST   | Security                     | Malicious input safely handled |
| POST Add Item - XSS Input             | POST   | Security                     | Malicious input safely handled |

**Coverage:** Inventory retrieval, empty state handling, valid item creation, missing fields, boundary values, invalid data types, and security related inputs.

---

## 6. Security Testing

Security related payloads were included to evaluate how the API handles potentially malicious input.

### SQL Injection Input

The following payload was submitted as an item name:

```text
' OR '1'='1
```

### XSS Input

The following payload was submitted as an item name:

```html
<script>alert('XSS')</script>
```

These tests were used to evaluate input handling. Acceptance of a malicious  looking string alone does not automatically confirm a security vulnerability,  further testing would be required to demonstrate exploitability.

---

## 7. Automated Testing

Postman test scripts were added to selected requests to automate response validation.

### Automated Assertions

**GET Inventory - Empty Inventory**

* Inventory response is a valid array.

**POST Add Item - Valid Data**

* Status code is `201`.
* Success message is correct.
* Player ID is correct.
* Item ID is correct.
* Item name is correct.
* Item quantity is correct.

**POST Add Item - Missing Name**

* Invalid item is rejected with `400`.
* Invalid request does not modify the inventory.

**POST Add Item - Zero Quantity**

* Zero quantity is rejected with `400`.

**POST Add Item - Negative Quantity**

* Negative quantity is rejected with `400`.

**POST Add Item - Invalid Quantity Type**

* Invalid quantity type is rejected with `400`.

**POST Add Item - Invalid Item ID Type**

* Invalid item ID type is rejected with `400`.

**Total automated assertions: 13**

---

## 8. Pre-request and Post-response Automation

The `POST Add Item - Missing Name` test uses a Pre-request Script to capture the initial inventory state before submitting the invalid request.

The test then performs a second inventory request after the POST and compares the resulting inventory count with the original state.

This verifies not only that the API returns the expected error response, but also that an invalid request does not modify persistent application data.

### Automated Flow

```text
Capture initial inventory
        ↓
Submit invalid POST request
        ↓
Validate HTTP 400 response
        ↓
Retrieve inventory again
        ↓
Compare inventory state
```

---

## 9. Collection Runner / Regression Testing

The Postman Collection was executed using the Collection Runner with one iteration.

### Initial Automated Run

```text
Total assertions: 9
Passed: 7
Failed: 2
Errors: 0
```

The two failures identified a validation defect in the API:

* Missing required `name` field was accepted with `201` instead of `400`.
* The invalid request modified the player's inventory.

### Fix and Regression

The missing field validation was corrected in the API.

After the fix:

```text
Total assertions: 9
Passed: 9
Failed: 0
Errors: 0
```

The successful regression run confirmed that the fix resolved the defect without breaking the previously passing automated tests.

---

## 10. Confirmed Defects

Four input validation defects were identified during testing and remain open in the current API implementation.

| ID      | Scenario              | Expected | Actual | Status |
| ------- | --------------------- | -------: | -----: | ------ |
| BUG-002 | Zero quantity         |    `400` |  `201` | Open   |
| BUG-003 | Negative quantity     |    `400` |  `201` | Open   |
| BUG-004 | Invalid quantity type |    `400` |  `201` | Open   |
| BUG-005 | Invalid item ID type  |    `400` |  `201` | Open   |

Detailed reproduction steps, expected/actual results, and evidence are documented individually in the [`Bug-Reports/`](./Bug-Reports/) directory.

---

## 11. Testing Techniques Demonstrated

This project demonstrates the following QA techniques:

* Functional Testing
* Negative Testing
* Boundary Value Testing
* Input Validation
* Data Type Validation
* Data Integrity Testing
* Error Handling Validation
* Authentication Testing
* Security Input Testing
* Automated API Assertions
* Pre-request Scripting
* Post-response Scripting
* Chained API Requests
* Collection Runner Execution
* Regression Testing
* Defect Verification

---

## 12. Test Summary

| Metric                            |     Result |
| --------------------------------- | ---------: |
| API Requests                      |         25 |
| API Areas                         |          3 |
| Automated Assertions              |         13 |
| Confirmed Fixed Defects           |          1 |
| Confirmed Open Validation Defects |          4 |
| Regression Run After Fix          | 9/9 Passed |

The test suite combines manual exploratory API validation with automated checks to identify functional, validation, data integrity, and security related issues in a game-oriented API environment.
