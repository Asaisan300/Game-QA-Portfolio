# BUG-002 — Zero Quantity Accepted by API

## Summary

The API accepts an inventory item with a quantity of `0` and returns `201 Created` instead of rejecting the invalid quantity.

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

```json id="w35c8e"
{
    "itemId": 7,
    "name": "Revive Token",
    "quantity": 0
}
```

3. Send the request.
4. Observe the HTTP response.
5. Check the player's inventory to verify whether the item was added.

## Expected Result

The API should reject a quantity of `0` because an inventory item should require a positive quantity.

Expected HTTP status:

```text id="afw2g1"
400 Bad Request
```

The invalid item should not be added to the player's inventory.

## Actual Result

The API returns:

```text id="c1p0s8"
201 Created
```

The request is accepted even though the item quantity is `0`.

## Automated Test Result

The Postman assertion fails:

```text id="5n9p3k"
Zero quantity is rejected

Expected: 400
Actual: 201
```

This confirms that the API currently does not enforce the expected positive quantity validation.

## Impact

The API allows inventory records with a quantity of `0` to be created.

This can result in invalid or meaningless inventory state and may require additional handling by systems consuming the API response.

## Recommendation

Add server side validation requiring the `quantity` field to be a positive integer greater than `0`.

Invalid requests should return:

```text id="r7v2km"
400 Bad Request
```

and should not modify the player's inventory.

## Test Coverage

This defect is covered by:

* `POST Add Item - Zero Quantity`
* Automated status code validation
* Boundary value testing