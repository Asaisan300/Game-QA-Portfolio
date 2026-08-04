const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Mock player database
const players = [
    {
        id: 1001,
        username: "TestPlayer01",
        password: "Password123",
        level: 25,
        coins: 1500
    },
    {
        id: 1002,
        username: "TestPlayer02",
        password: "GameTester123",
        level: 10,
        coins: 750
    },
{
    id: 1003,
    username: "EmptyInventoryPlayer",
    password: "Password456",
    level: 1,
    coins: 100
}
];

// Player login
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const player = players.find(
        player =>
            player.username === username &&
            player.password === password
    );

    if (!player) {
        return res.status(401).json({
            error: "Invalid username or password"
        });
    }

    res.status(200).json({
        message: "Login successful",
        playerId: player.id,
        username: player.username
    });
});

// Get player by ID
app.get("/players/:id", (req, res) => {
    const playerId = Number(req.params.id);

    const player = players.find(player => player.id === playerId);

    if (!player) {
        return res.status(404).json({
            error: "Player not found"
        });
    }

    res.json({
        id: player.id,
        username: player.username,
        level: player.level,
        coins: player.coins
    });
});

//Player inventory
const inventories = {
    1001: [
        {
            itemId: 1,
            name: "Iron Sword",
            quantity: 1
        },
        {
            itemId: 2,
            name: "Health Potion",
            quantity: 5
        }
    ],
    1002: [
        {
            itemId: 3,
            name: "Wooden Shield",
            quantity: 1
        }
    ]
};

//Add player inventory
app.post("/players/:id/inventory", (req, res) => {
    const playerId = Number(req.params.id);

    const player = players.find(player => player.id === playerId);

    if (!player) {
        return res.status(404).json({
            error: "Player not found"
        });
    }

    const { itemId, name, quantity } = req.body;

    if (itemId === undefined || name === undefined || quantity === undefined) {
    return res.status(400).json({
        error: "Missing required field"
    });
}

    const newItem = {
        itemId: itemId,
        name: name,
        quantity: quantity
    };

    if (!inventories[playerId]) {
        inventories[playerId] = [];
    }

    inventories[playerId].push(newItem);

    res.status(201).json({
        message: "Item added successfully",
        playerId: playerId,
        item: newItem
    });
});

//Get player inventory
app.get("/players/:id/inventory", (req, res) => {
    const playerId = Number(req.params.id);

    const player = players.find(player => player.id === playerId);

    if (!player) {
        return res.status(404).json({
            error: "Player not found"
        });
    }

    res.status(200).json({
        playerId: playerId,
        inventory: inventories[playerId] || []
    });
});

// Health check
app.get("/", (req, res) => {
    res.json({
        message: "Game API is running"
    });
});

app.listen(PORT, () => {
    console.log(`Game API running at http://localhost:${PORT}`);
});