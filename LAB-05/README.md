# LAB-05 - File Upload & Download System

Simple file upload and download system built with PHP.

## What's Here

- `file_upload.html` - Registration form with file upload
- `file_download.php` - Backend for handling uploads and downloads
- `uploads/` - Directory for storing uploaded files

## Features

- User registration with file upload capability
- File upload to server
- File download from server
- Client-side password validation
- File storage management

## Setup

### Requirements

- PHP 7.0 or higher
- Web server with file write permissions
- The `uploads/` folder must be writable

### Configuration

1. Ensure `uploads/` directory has write permissions:

   ```
   chmod 755 uploads/
   ```

2. Edit `file_download.php` if your upload path is different

## How to Use

1. Open `file_upload.html` in a web browser
2. Fill in registration details and select a file
3. Click upload to store the file on server
4. Files are saved in the `uploads/` directory
5. Use the download functionality to retrieve files

## Security Notes

- This is a learning project with basic functionality
- In production, implement file type validation
- Add file size limits
- Use virus scanning for uploaded files
- Store files outside web root for sensitive data

## Uploaded Files

All uploaded files are stored in the `uploads/` directory. You can download them through the provided interface.
