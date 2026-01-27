# Google Sheets Integration Setup Guide

## Overview
This guide will help you set up the integration between your Contact form modal and Google Sheets to receive schedule call requests.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet and name it "Ductify Leads - Call Requests"
3. Create column headers in the first row:
   - A1: `Name`
   - B1: `Contact (Phone)`
   - C1: `Email`
   - D1: `Call Schedule Time`
   - E1: `Timestamp`
   - F1: `Status`

## Step 2: Create Google Apps Script

1. Open your Google Sheet
2. Go to **Extensions** > **Apps Script**
3. Replace all code in the editor with this script:

```javascript
function doPost(e) {
  try {
    // Get the sheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Add data to the sheet
    sheet.appendRow([
      data.name,
      data.contact,
      data.email,
      data.callScheduleTime,
      data.timestamp,
      'Pending'
    ]);
    
    // Return success response
    return ContentService.createTextOutput('Success').setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput('Error: ' + error.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}
```

4. Click **Save** (Ctrl+S) and give the project a name like "Ductify Leads Form Handler"

## Step 3: Deploy as Web App

1. Click **Deploy** button (top right)
2. Select **New deployment** > Click **Select type** > Choose **Web app**
3. Configure:
   - **Execute as:** Your email/account
   - **Who has access:** Anyone
4. Click **Deploy**
5. Click **Authorize access** and grant the necessary permissions
6. Copy the **Deployment URL** (it will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/usercallback`)

## Step 4: Update Your React Code

1. Open `src/pages/Contact.jsx`
2. Find this line (around line 80):
   ```javascript
   const GOOGLE_SHEET_URL = 'https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercallback'
   ```
3. Replace `YOUR_SCRIPT_ID` with your actual script ID from the deployment URL
   - Example: If your URL is `https://script.google.com/macros/s/1a2b3c4d5e6f7g8h/usercallback`
   - Change it to: `https://script.google.com/macros/s/1a2b3c4d5e6f7g8h/usercallback`

## Step 5: Test the Integration

1. Run your application locally or deploy it
2. Click the "Schedule a Call With Expert" button
3. Fill in the form with test data
4. Submit the form
5. Check your Google Sheet - the data should appear in a new row

## Notes

- The script automatically adds a "Pending" status for each submission
- You can modify the Apps Script to send emails, add more validations, etc.
- The `Status` column can be used to track which calls have been completed
- All timestamps are recorded in the sheet for reference

## Troubleshooting

If submissions aren't working:
1. Check the browser console for errors (F12 > Console tab)
2. Verify the deployment URL is correct in Contact.jsx
3. Make sure the Apps Script has been deployed as a web app
4. Check that "Anyone" has access in the deployment settings
5. Verify your Google Sheet has the correct column headers

## Enhanced Features (Optional)

You can extend this by:
- Adding email notifications when a form is submitted
- Filtering by date range in the sheet
- Adding automatic reply emails to users
- Using Google Forms instead of custom modal
