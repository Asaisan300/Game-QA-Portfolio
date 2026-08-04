# BUG-003 — Negative Quantity Accepted by API

## Summary

The API accepts an inventory item with a negative quantity and returns `201 Created` instead of rejecting the invalid value.

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

```json id="z6f3ny"
{
    "itemId": 8,
    "name": "Health Potion",
    "quantity": -1
}
```

3. Send the request.
4. Observe the HTTP response.
5. Check the player's inventory to verify whether the item was added.

## Expected Result

The API should reject negative inventory quantities because a quantity should not be less than `1`.

Expected HTTP status:

```text id="2d0n5j"
400 Bad Request
```

The invalid item should not be added to the player's inventory.

## Actual Result

The API returns:

```text id="v7x2q4"
201 Created
```

The request is accepted even though the item quantity is negative.

## Automated Test Result

The Postman assertion fails:

```text id="5x1h7p"
Negative quantity is rejected

Expected: 400
Actual: 201
```

This confirms that the API currently does not enforce validation against negative quantities.

## Impact

The API allows inventory records containing negative quantities to be created.

This can lead to invalid inventory state and potentially cause incorrect behavior in game systems that consume or calculate inventory quantities.

## Recommendation

Add server side validation requiring `quantity` to be a positive integer greater than `0`.

Invalid requests should return:

```text id="k4s9qp"
400 Bad Request
```

and should not modify the player's inventory.

## Test Coverage

This defect is covered by:

* `POST Add Item - Negative Quantity`
* Automated status code validation
* Boundary value testing
* Negative testing