# BUG-004 — Invalid Quantity Data Type Accepted by API

## Summary

The API accepts an inventory item where the `quantity` field is provided as a string instead of a numeric value and returns `201 Created`.

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

```json id="0p4s6j"
{
    "itemId": 9,
    "name": "Health Potion",
    "quantity": "five"
}
```

3. Send the request.
4. Observe the HTTP response.
5. Check the player's inventory to verify whether the item was added.

## Expected Result

The API should reject the request because `quantity` is expected to be a numeric value.

Expected HTTP status:

```text id="c5y2nz"
400 Bad Request
```

The invalid item should not be added to the player's inventory.

## Actual Result

The API returns:

```text id="8d4q1m"
201 Created
```

The request is accepted even though `quantity` is provided as a string.

## Automated Test Result

The Postman assertion fails:

```text id="u8j2vp"
Invalid quantity type is rejected

Expected: 400
Actual: 201
```

This confirms that the API currently does not enforce the expected data type for the `quantity` field.

## Impact

The API accepts data that does not conform to the expected structure of an inventory item.

This can lead to inconsistent data being stored or returned and may cause type related errors in systems consuming the API.

## Recommendation

Implement server side schema or type validation requiring:

* `quantity` to be a number.
* `quantity` to be an integer.
* `quantity` to be greater than `0`.

Invalid requests should return:

```text id="w9s3ka"
400 Bad Request
```

and should not modify the player's inventory.

## Test Coverage

This defect is covered by:

* `POST Add Item - Invalid Quantity Type`
* Automated status code validation
* Data type validation
* Negative testing