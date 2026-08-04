# BUG-001 — Missing Required Name Accepted by API

## Summary

The API accepts an inventory item creation request without the required `name` field and returns `201 Created` instead of rejecting the request.

## Severity

**Medium**

## Priority

**High**

## Status

**Fixed & Verified**

## Environment

| Field     | Value                                |
| --------- | ------------------------------------ |
| API       | Local Node.js / Express API          |
| Endpoint  | `POST /players/{playerId}/inventory` |
| Method    | POST                                 |
| Client    | Postman                              |
| Player ID | `1003`                               |

## Preconditions

* The API server is running locally.
* Player `1003` exists.
* Player `1003` initially has an empty inventory.

## Steps to Reproduce

1. Send a `POST` request to:
   `http://localhost:3000/players/1003/inventory`
2. Use the following request body:

```json
{
    "itemId": 5,
    "quantity": 2
}
```

3. Send the request.
4. Observe the HTTP response.
5. Retrieve the player's inventory.
6. Compare the inventory state before and after the invalid request.

## Expected Result

The API should reject the request because the required `name` field is missing.

Expected HTTP status:

```text
400 Bad Request
```

The player's inventory should remain unchanged.

## Actual Result

The API initially returned:

```text
201 Created
```

The item was added to the player's inventory despite the missing required `name` field.

The invalid request therefore modified application data.

## Initial Automated Test Result

The Postman test initially failed:

```text
Status code is 400 for missing name
Expected: 400
Actual: 201
```

The inventory integrity assertion also failed because the invalid request added an item.

## Fix Verification

The API validation was corrected to reject requests where the `name` field is missing.

The Postman assertions were then executed again.

Regression result:

```text
All: 9
Passed: 9
Failed: 0
Errors: 0
```

The fix was successfully verified.

## Impact

This defect allowed malformed inventory data to be persisted.

Beyond the incorrect HTTP response, the defect affected **data integrity** because an invalid request modified the player's inventory.

## Test Coverage

This defect is covered by:

* `POST Add Item - Missing Name`
* Automated status code validation
* Automated inventory state validation
* Post-request inventory verification
* Regression testing