export default function calculateTime(time) {
    let hours = 0, minutes = 0, seconds = 0

    while(time >= (60000 * 60)) {
        time -= (60000 * 60);
        ++hours;
    }

    while(time >= (1000 * 60)) {
        time -= (1000 * 60);
        ++minutes;
    }

    while(time >= 1000) {
        time -= 1000;
        ++seconds;
    }

    return { hours, minutes, seconds, milliseconds: time };
}