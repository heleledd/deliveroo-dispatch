export default function getSpawnChance(clock) {
    const totalMinutes = 11 * 60 + clock; // convert game mins → real world time
    const hour = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;

    // Default spawn rate
    let chance = 0.08;

    // Lunch 11:30–14:00
    if (hour === 11 && minute >= 30) chance = 0.12;
    if (hour >= 12 && hour < 14) chance = 0.15;

    // Dinner 17:30–20:00
    if (hour === 17 && minute >= 30) chance = 0.13;
    if (hour >= 18 && hour < 20) chance = 0.2;

    return chance;
}