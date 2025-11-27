export default function getSpawnChance(clock) {
    const totalMinutes = 11 * 60 + clock; 
    const hour = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;

    // Convert hour/minute into minutes since 11:00 (0–720)
    const m = (hour - 11) * 60 + minute;

    // ----- TIME BLOCKS -----
    if (m < 30) {
        // morning low
        // 11:00–11:30
        return 0.08;
    }
    if (m < 180) {
        // lunch peak
        // 11:30–14:00
        return 0.15;
    }
    if (m < 390) {
        // afternoon low
        // 14:00–17:30
        return 0.10;
    }
    if (m < 540) {
        // dinner peak
        // 17:30–20:00
        return 0.17;
    }
    // 20:00–23:00 (peak)
    return 0.30;
}