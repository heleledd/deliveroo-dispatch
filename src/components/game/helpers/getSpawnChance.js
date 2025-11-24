function getSpawnChance(clock) {
    const totalMinutes = 5 * 60 + clock;
    const hour = Math.floor(totalMinutes / 60);

    // Normal times
    let chance = 0.02;  // 2% chance per minute

    // Lunch peak (11:30–14:00)
    if (hour === 11 && totalMinutes % 60 >= 30) chance = 0.08;
    if (hour >= 12 && hour < 14) chance = 0.10;

    // Dinner peak (17:30–20:00)
    if (hour === 17 && totalMinutes % 60 >= 30) chance = 0.08;
    if (hour >= 18 && hour < 20) chance = 0.12;

    return chance;
}