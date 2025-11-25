export default function formatGameTime(clock) {
    const totalMinutes = 11 * 60 + clock; // start at 11:00 AM
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.floor(totalMinutes % 60);

    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHour = ((hours + 11) % 12) + 1; // converts 0–23 → 1–12
    const paddedMinutes = minutes.toString().padStart(2, '0');

    return `${displayHour}:${paddedMinutes} ${ampm}`;
}