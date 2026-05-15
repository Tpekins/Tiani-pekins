// Complete list of timezones
const allTimezones = [
    // Americas
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'America/Toronto',
    'America/Mexico_City',
    'America/Sao_Paulo',
    'America/Buenos_Aires',
    'America/Anchorage',
    'Pacific/Honolulu',
    
    // Europe
    'Europe/London',
    'Europe/Paris',
    'Europe/Berlin',
    'Europe/Madrid',
    'Europe/Rome',
    'Europe/Amsterdam',
    'Europe/Moscow',
    'Europe/Istanbul',
    'Europe/Athens',
    
    // Africa
    'Africa/Cairo',
    'Africa/Johannesburg',
    'Africa/Lagos',
    'Africa/Nairobi',
    
    // Asia
    'Asia/Dubai',
    'Asia/Kolkata',
    'Asia/Bangkok',
    'Asia/Singapore',
    'Asia/Hong_Kong',
    'Asia/Shanghai',
    'Asia/Tokyo',
    'Asia/Seoul',
    'Asia/Manila',
    'Asia/Jakarta',
    
    // Pacific
    'Australia/Sydney',
    'Australia/Melbourne',
    'Australia/Brisbane',
    'Australia/Perth',
    'Pacific/Auckland',
    'Pacific/Fiji',
    'Pacific/Tongatapu',
    
    // UTC
    'UTC'
];

// Default timezones to display
let selectedTimezones = ['UTC', 'America/New_York', 'Europe/London', 'Asia/Tokyo'];

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    populateTimezoneSelect();
    updateClocks();
    setInterval(updateClocks, 1000);
});

// Populate the dropdown with available timezones
function populateTimezoneSelect() {
    const select = document.getElementById('timezoneSelect');
    
    // Clear existing options (except the first one)
    while (select.options.length > 1) {
        select.remove(1);
    }
    
    // Add available timezones
    allTimezones.forEach(tz => {
        if (!selectedTimezones.includes(tz)) {
            const option = document.createElement('option');
            option.value = tz;
            option.textContent = formatTimezoneLabel(tz);
            select.appendChild(option);
        }
    });
}

// Format timezone for display
function formatTimezoneLabel(tz) {
    if (tz === 'UTC') return 'UTC (Coordinated Universal Time)';
    
    const parts = tz.split('/');
    const region = parts[0].replace(/_/g, ' ');
    const city = parts[1] ? parts[1].replace(/_/g, ' ') : '';
    
    return `${region} - ${city}`;
}

// Get timezone display name
function getTimezoneDisplayName(tz) {
    if (tz === 'UTC') return 'UTC';
    return tz.split('/').pop().replace(/_/g, ' ');
}

// Get UTC offset for a timezone
function getUTCOffset(tz) {
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    
    const now = new Date();
    const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
    const tzDate = new Date(now.toLocaleString('en-US', { timeZone: tz }));
    
    const offset = (tzDate - utcDate) / (1000 * 60 * 60);
    const sign = offset >= 0 ? '+' : '';
    const hours = Math.floor(Math.abs(offset));
    const minutes = Math.round((Math.abs(offset) % 1) * 60);
    
    return `UTC ${sign}${hours}:${minutes.toString().padStart(2, '0')}`;
}

// Update all clocks
function updateClocks() {
    const container = document.getElementById('clocksContainer');
    
    if (selectedTimezones.length === 0) {
        container.innerHTML = '<div class="empty-state">No timezones selected. Add one using the dropdown above.</div>';
        return;
    }
    
    container.innerHTML = '';
    
    selectedTimezones.forEach(tz => {
        const card = document.createElement('div');
        card.className = 'clock-card';
        
        const now = new Date();
        
        // Get time in the timezone
        const timeString = now.toLocaleString('en-US', {
            timeZone: tz,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
        
        // Get date in the timezone
        const dateString = now.toLocaleString('en-US', {
            timeZone: tz,
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        const utcOffset = getUTCOffset(tz);
        const displayName = getTimezoneDisplayName(tz);
        
        card.innerHTML = `
            <div class="timezone-name">
                <span>${displayName}</span>
                <button class="remove-btn" onclick="removeTimezone('${tz}')">Remove</button>
            </div>
            <div class="utc-offset">${utcOffset}</div>
            <div class="time-display">${timeString}</div>
            <div class="date-display">${dateString}</div>
        `;
        
        container.appendChild(card);
    });
}

// Add a timezone
function addTimezone() {
    const select = document.getElementById('timezoneSelect');
    const tz = select.value;
    
    if (!tz) {
        alert('Please select a timezone');
        return;
    }
    
    if (selectedTimezones.includes(tz)) {
        alert('This timezone is already added');
        select.value = '';
        return;
    }
    
    selectedTimezones.push(tz);
    select.value = '';
    
    populateTimezoneSelect();
    updateClocks();
}

// Remove a timezone
function removeTimezone(tz) {
    selectedTimezones = selectedTimezones.filter(t => t !== tz);
    populateTimezoneSelect();
    updateClocks();
}

// Allow Enter key to add timezone
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('timezoneSelect');
    select.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTimezone();
        }
    });
});
