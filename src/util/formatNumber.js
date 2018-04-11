export function formatNumber(number) {
    if (number >= 1e9) return `${Math.floor(number / 1e9)}T`
    if (number >= 1e6) return `${Math.floor(number / 1e6)}M`
    if (number >= 1e3) return `${Math.floor(number / 1e3)}K`
    
    return number.toString();
}