# Game API Validation

API validation and testing project focused on a game oriented REST API built with Node.js and tested using Postman.

The project demonstrates functional API testing, negative testing, input and data type validation, boundary testing, security related input testing, automated assertions, regression testing, and defect reporting.

---

## Project Overview

The API provides endpoints for:

* Player authentication
* Player data retrieval
* Player inventory management

Testing was performed against a locally hosted API using Postman.

The project combines manual API exploration with automated validation to verify expected behavior and identify data validation and integrity issues.

---

## Tools & Technologies

| Tool / Technology         | Purpose                                     |
| ------------------------- | ------------------------------------------- |
| Node.js                   | API environment                             |
| Express                   | REST API                                    |
| Postman                   | API testing                                 |
| JavaScript                | Test automation / scripting                 |
| Postman Collection Runner | Regression testing                          |
| Git / GitHub              | Version control and portfolio documentation |

---

## API Coverage

### Authentication

* Valid credentials
* Invalid password
* Invalid username
* Missing password
* Missing username
* Empty request body

### Player

* Valid player ID
* Nonexistent player ID
* Invalid player ID
* Zero player ID
* Negative player ID

### Inventory

* Valid inventory retrieval
* Nonexistent player inventory
* Invalid player ID
* Empty inventory
* Valid item creation
* Missing required fields
* Zero quantity
* Negative quantity
* Invalid quantity data type
* Invalid item ID data type
* SQL injection input
* XSS input

---

## Testing Techniques

This project demonstrates:

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
* Defect Reporting
* Defect Verification

---

## Automated Testing

Postman test scripts were implemented to automatically validate API responses.

Automated checks include:

* HTTP status codes
* Response messages
* Player IDs
* Item IDs
* Item names
* Item quantities
* Inventory response structure
* Inventory state before and after invalid requests

### Example Regression Run

After fixing the missing name validation defect:

```text
Total Assertions: 9
Passed: 9
Failed: 0
Errors: 0
```

The successful regression run confirmed that the implemented fix resolved the identified defect without breaking the existing automated checks.

---

## Data Integrity Validation

The project includes a test that verifies that invalid requests do not modify the player's inventory.

The automated flow:

```text
Retrieve initial inventory
        ↓
Store initial inventory state
        ↓
Submit invalid POST request
        ↓
Validate error response
        ↓
Retrieve inventory again
        ↓
Compare inventory state
```

This extends API testing beyond checking HTTP status codes and validates the actual state of application data.

---

## Defects Identified

The testing process identified five validation related defects.

| ID      | Defect                         | Status           |
| ------- | ------------------------------ | ---------------- |
| BUG-001 | Missing required name accepted | Fixed & Verified |
| BUG-002 | Zero quantity accepted         | Open             |
| BUG-003 | Negative quantity accepted     | Open             |
| BUG-004 | Invalid quantity type accepted | Open             |
| BUG-005 | Invalid item ID type accepted  | Open             |

Detailed reproduction steps, expected/actual results, impact, and recommendations are available in the [`Bug-Reports`](./Bug-Reports/) directory.

---

## Test Documentation

### Test Suite

The complete test strategy, coverage, test cases, automation details, regression results, and testing techniques are documented in:

[`API-Test-Suite.md`](./API-Test-Suite.md)

### Postman Collection

The complete Postman collection containing the API requests and automated test scripts is available here:

[`Game-API-Validation.postman_collection.json`](./Game-API-Validation.postman_collection.json)

### Bug Reports

Individual defect reports are available in:

[`Bug-Reports/`](./Bug-Reports/)

---

## Key QA Findings

The testing identified validation weaknesses that allowed malformed inventory data to be accepted by the API.

Examples include:

* Missing required fields
* Zero and negative quantities
* Incorrect data types
* Invalid item identifiers

One defect was fixed and verified through regression testing, while four additional validation defects remain documented as open issues.

This demonstrates the use of QA testing not only to validate expected responses, but also to evaluate **data integrity and application state**.

---

## Testing Result

The project successfully demonstrates an API testing workflow from test design through automated validation and defect reporting:

```text
Test Design
    ↓
API Exploration
    ↓
Negative & Boundary Testing
    ↓
Automated Assertions
    ↓
Defect Identification
    ↓
Fix Verification
    ↓
Regression Testing
    ↓
Defect Documentation
```

---

## Disclaimer

This project uses a locally hosted game oriented API created for testing and portfolio purposes.
