# BUG-005 — Invalid Item ID Data Type Accepted by API

## Summary

The API accepts an inventory item where the `itemId` field is provided as a string instead of a numeric value and returns `201 Created`.

## Severity

**Medium**

## Priority

**Medium**

## Status

**Open**

## Environment

| Field     | Value                                |
| --------- | ------------------------------------ |
| API       | Local Node.js / Express API          |
| Endpoint  | `POST /players/{playerId}/inventory` |
| Method    | POST                                 |
| Client    | Postman                              |
| Player ID | `1001`                               |

## Preconditions

* The API server is running locally.
* Player `1001` exists.
* The inventory endpoint is accessible.

## Steps to Reproduce

1. Send a `POST` request to:
   `http://localhost:3000/players/1001/inventory`
2. Use the following request body:

```json id="6s8x4n"
{
    "itemId": "sword",
    "name": "Iron Sword",
    "quantity": 1
}
```

3. Send the request.
4. Observe the HTTP response.
5. Check the player's inventory to verify whether the item was added.

## Expected Result

The API should reject the request because `itemId` is expected to be a numeric value.

Expected HTTP status:

```text id="a1w7qx"
400 Bad Request
```

The invalid item should not be added to the player's inventory.

## Actual Result

The API returns:

```text id="x4n9kc"
201 Created
```

The request is accepted even though `itemId` is provided as a string.

## Automated Test Result

The Postman assertion fails:

```text id="p3v8lm"
Invalid item ID type is rejected

Expected: 400
Actual: 201
```

This confirms that the API currently does not enforce the expected data type for the `itemId` field.

## Impact

The API accepts inventory records containing an incorrectly typed item identifier.

This can result in inconsistent data and may cause problems for systems that expect item identifiers to be numeric and reference valid game items.

## Recommendation

Implement server side schema or type validation requiring:

* `itemId` to be a number.
* `itemId` to be an integer.
* `itemId` to reference a valid item where applicable.

Invalid requests should return:

```text id="j7c2qs"
400 Bad Request
```

and should not modify the player's inventory.

## Test Coverage

This defect is covered by:

* `POST Add Item - Invalid Item ID Type`
* Automated status code validation
* Data type validation
* Negative testing