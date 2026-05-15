# Digital Multi-Timezone Clock

A beautiful, responsive digital clock application that displays the current time across multiple time zones simultaneously.

## Features

✨ **Key Features:**
- 🌍 Display time in multiple time zones
- 🎨 Modern, gradient design with smooth animations
- 📱 Fully responsive for mobile and desktop
- ⏰ Real-time updates every second
- 🔧 Easy timezone selection and management
- 📅 Shows date and day of the week
- 🌐 Supports 25+ major world timezones
- ➕ Add/remove timezones dynamically
- 📍 Shows UTC offset for each timezone

## Supported Timezones

- **Americas:** New York, Chicago, Denver, Los Angeles, Toronto, Mexico City, São Paulo
- **Europe:** London, Paris, Berlin, Moscow, Istanbul
- **Asia:** Dubai, India, Bangkok, Singapore, Hong Kong, Shanghai, Tokyo
- **Pacific:** Sydney, Melbourne, Auckland
- **Africa:** Cairo, Johannesburg
- **UTC:** Universal Time

## How to Use

1. **Open the application** in your web browser
2. **View default clocks** - UTC, New York, London, and Tokyo are displayed by default
3. **Add a timezone:**
   - Select a timezone from the dropdown menu
   - Click "Add Timezone" button (or press Enter)
4. **Remove a timezone:**
   - Click the "Remove" button next to the timezone in the list
5. **Time updates automatically** every second

## Technical Details

### HTML Structure
- Semantic HTML5 markup
- Responsive grid layout
- Accessible form controls

### CSS Features
- Linear gradient background
- CSS Grid for responsive layout
- Smooth transitions and hover effects
- Media queries for mobile optimization
- Card-based UI design

### JavaScript Features
- Real-time clock updates using `setInterval()`
- Timezone conversion using `toLocaleString()`
- Dynamic DOM manipulation
- UTC offset calculations
- Event listeners for interactive elements

## Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Local Setup

1. Save the files in a folder:
   ```
   digital-clock/
   ├── index.html
   └── script.js
   ```

2. Open `index.html` in your web browser

## Customization

### Add More Timezones
Edit the `timezones` array in `script.js`:
```javascript
const timezones = [
    'Your/Timezone',
    // ... more timezones
];
```

### Change Default Timezones
Modify the `selectedTimezones` array:
```javascript
let selectedTimezones = ['UTC', 'Your/Timezone'];
```

### Customize Colors
Update the CSS gradient in the `body` style:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## Performance Considerations

- Updates limited to 1 second intervals for optimal performance
- Efficient DOM updates only when necessary
- Optimized CSS for smooth animations
- No external dependencies required

## Future Enhancements

- 🔔 Alarm notifications
- 🌙 Dark/Light theme toggle
- 💾 Save user timezone preferences to localStorage
- ⏱️ Stopwatch and timer features
- 🎯 World clock with city overlays
- 🔊 Audio chimes on the hour

## License

Free to use and modify for personal and commercial projects.

---

**Created by:** Tiani Pekins  
**Date:** 2026-05-15
