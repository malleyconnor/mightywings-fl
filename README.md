# Mighty Wings Website - Content Update Guide

This guide will help you update the content on your Mighty Wings website, including menu items, prices, hours, and contact information.

## Quick Start

All website content is controlled by a single file located at:
```
src/config/content.json
```

To update your website, you'll need to edit this file. The changes will appear on the website after the site is rebuilt and published.

## Important Rules for Editing the JSON File

**JSON is a specific format that computers use to store data. It's picky about punctuation, so please follow these rules carefully:**

### Rule 1: Always Use Double Quotes (")
✅ CORRECT: `"name": "Mighty Wings"`  
❌ WRONG: `'name': 'Mighty Wings'` (single quotes don't work)

### Rule 2: Every Item Needs Commas
✅ CORRECT:
```json
"name": "6 Wings",
"description": "",
"options": {"Regular": "$6.00"}
```
❌ WRONG: (missing comma after "6 Wings")
```json
"name": "6 Wings"
"description": ""
```

### Rule 3: NO Comma After the Last Item in a List
✅ CORRECT:
```json
{
  "name": "6 Wings",
  "options": {"Regular": "$6.00"}
}
```
❌ WRONG: (extra comma after $6.00)
```json
{
  "name": "6 Wings",
  "options": {"Regular": "$6.00"},
}
```

### Rule 4: Curly Braces { } and Square Brackets [ ] Must Match
- `{` always needs a matching `}`
- `[` always needs a matching `]`

## Testing Your Changes

**Before publishing, always test your JSON file for errors:**
1. Copy your entire content.json text
2. Go to https://jsonlint.com/
3. Paste it in and click "Validate JSON"
4. Fix any errors it finds (it will tell you which line has the problem)

## Content Sections Explained

### Site Information
```json
"site": {
  "name": "Mighty Wings",
  "tagline": "Serving the best wings in Kissimmee, FL since 1995",
  "description": "Delicious wings, sides, and drinks. Family-owned restaurant serving the best wings in town."
}
```
- **name**: Your restaurant name (appears in the header)
- **tagline**: The subtitle that appears on your homepage
- **description**: Used for search engines (Google, Bing, etc.)

### Menu Sections

Each menu section looks like this:
```json
{
  "title": "Mighty Wings",
  "subtitle": "Tossed in your <a href='#flavors'>choice of sauces</a>",
  "items": [
    { 
      "name": "6 Wings", 
      "description": "", 
      "options": {"Regular": "$6.00"} 
    },
    { 
      "name": "9 Wings", 
      "description": "", 
      "options": {"Regular": "$9.00"} 
    }
  ]
}
```

**To Update a Price:**
1. Find the item name (like "6 Wings")
2. Change the dollar amount in the "options" section
3. Example: `"options": {"Regular": "$6.00"}` → `"options": {"Regular": "$7.00"}`

**To Add a New Menu Item:**
1. Find the section where you want to add it (like "Mighty Wings")
2. Add a comma after the last item in that section
3. Add your new item following this pattern:
```json
{ 
  "name": "Your Item Name", 
  "description": "Optional description", 
  "options": {"Regular": "$10.00"} 
}
```

**To Remove a Menu Item:**
1. Find the entire item block (everything from `{` to `}`)
2. Delete it completely
3. Remove any extra comma that might be left behind

**For Items with Multiple Price Options:**
```json
{
  "name": "10 Boneless & Fries",
  "description": "",
  "options": {
    "w/o Fries": "$6.00",
    "w/ Fries": "$7.75"
  }
}
```
Notice how each option is separated by commas, except the last one.

### Sauces Section
```json
"sauces": {
  "title": "Sauces",
  "subtitle": "Wings, Boneless, and Tenders come with ANY COMBINATION of these amazing flavors",
  "options": [
    "Mild", "Med", "Hot", "Mighty Hot", "Garlic", "Honey", "Teriyaki"
  ]
}
```

**To Add a New Sauce:**
1. Add a comma after the last sauce
2. Add your new sauce name in quotes
3. Example: `"Teriyaki", "Buffalo Ranch"`

**To Remove a Sauce:**
1. Find the sauce name
2. Delete it and the comma before or after it

### Hours of Operation
```json
"hours": {
  "title": "Hours of Operation",
  "subtitle": "Holiday hours may vary, please call to confirm",
  "schedule": [
    { "days": "Monday - Thursday", "time": "11:00 AM - 9:00 PM" },
    { "days": "Friday - Saturday", "time": "11:00 AM - 10:00 PM" },
    { "days": "Sunday", "time": "CLOSED" }
  ]
}
```

**To Update Hours:**
1. Find the day(s) you want to change
2. Update the time in quotes
3. Keep the same format (like "11:00 AM - 9:00 PM")

### Contact Information
```json
"contact": {
  "title": "Contact Information",
  "phone": "(407) 978-6023",
  "address": {
    "line1": "2330 Fortune Road",
    "line2": "Kissimmee, FL 34744"
  }
}
```

**To Update Phone or Address:**
1. Find the field you want to change
2. Update the text between the quotes
3. Keep the same format

### Gallery Images
```json
"gallery": {
  "title": "Photo Gallery",
  "imageDirectory": "/photos/menu/",
  "imageDescriptions": {
    "burger.JPEG": "Delicious Burger",
    "wings.JPG": "Delicious Wings"
  }
}
```

**To Add a New Photo:**
1. First, add your photo to the `/public/photos/menu/` folder
2. Then add a line in "imageDescriptions" with the filename and description:
   ```json
   "your-photo.jpg": "Description of your photo"
   ```
3. Remember to add a comma after the previous line!

**Note:** The filename must exactly match the file in the photos folder (including capital letters and the file extension like .jpg or .JPEG).

## Common Mistakes and How to Fix Them

### Error: "Unexpected token"
This usually means you have:
- A missing or extra comma
- A missing quote mark
- A mismatched bracket or brace

**Fix:** Use https://jsonlint.com/ to find the exact line with the error.

### Error: "Cannot read property"
This usually means you:
- Deleted something important
- Changed a field name (like changing "name" to "title")

**Fix:** Compare your file to a backup or the examples above.

### Everything Looks Wrong on the Website
You probably have a JSON syntax error. 

**Fix:** 
1. Test your JSON at https://jsonlint.com/
2. Fix any errors it finds
3. Rebuild and republish the site

## Getting Help

If you're stuck:
1. First, test your JSON at https://jsonlint.com/
2. Check that you followed all the rules above
3. Make sure all your quotes, commas, and brackets match up
4. Contact your web developer with the specific error message

## Making Backups

**Before making major changes:**
1. Make a copy of your entire `content.json` file
2. Save it somewhere safe (like your computer or email it to yourself)
3. If something goes wrong, you can restore from your backup

## Publishing Your Changes

After editing the content.json file:
1. Test it at https://jsonlint.com/ to make sure there are no errors
2. Save the file
3. Contact your web developer to rebuild and publish the site
   - Or if you have access, run: `npm run build:static`

---

**Remember:** Take your time, follow the rules above, and always test your changes at https://jsonlint.com/ before publishing!
