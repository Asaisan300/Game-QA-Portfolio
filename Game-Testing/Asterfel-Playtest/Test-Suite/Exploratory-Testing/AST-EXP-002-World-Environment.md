# AST-EXP-002 — World and Environmental Interaction

**Type:** Exploratory  
**Priority:** High  
**Status:** Tested

## Objective

Explore the game world and environmental interactions to identify unexpected behavior involving terrain, collision, geometry, objects, and accessible areas.

## Preconditions

- The game is running.
- The player has access to an explorable area.
- Multiple environmental elements are accessible.

## Exploration Charter

Explore the accessible game world while interacting with environmental objects, terrain, structures, and boundaries. Focus on identifying visual or physical inconsistencies that may affect gameplay or immersion.

## Areas to Explore

- Environmental collision
- Terrain and elevation
- Structures and buildings
- Environmental objects
- World boundaries and blockers
- Object interaction
- Camera visibility
- Environmental geometry
- Traversal around obstacles

## Exploration Tasks

1. Explore different areas of the accessible world.
2. Walk around and through environmental structures where possible.
3. Approach walls, buildings, rocks, terrain edges, and other obstacles.
4. Test whether environmental objects have appropriate collision.
5. Explore different elevations and terrain transitions.
6. Inspect structures from different angles, including above and below where accessible.
7. Observe the environment from different camera angles and distances.
8. Approach visible world boundaries and blockers.
9. Attempt to interact with available environmental objects.
10. Look for visual gaps, missing geometry, objects intersecting with the environment, or other environmental inconsistencies.

## Expected Behavior

- Environmental objects have appropriate collision where intended.
- Terrain and elevation transitions behave consistently.
- Structures and world geometry appear correctly from accessible viewpoints.
- Environmental objects do not unexpectedly intersect with one another.
- The player cannot unintentionally pass through solid environmental geometry.
- World boundaries and blockers appropriately restrict inaccessible areas.
- The environment remains visually consistent from different camera angles.
- Environmental interactions behave consistently with their intended functionality.

## Findings

A missing section of floor geometry was observed on the underside of a house terrace, allowing the environment behind the floor to be visible.

## Test Result

**Fail**

## Notes

Other tested environmental elements and accessible areas appeared to function and render as expected.

## Bug Reference

[BUG-003](../../Bug-Reports/BUG-003-Missing-Terrace-Floor-Geometry.md)