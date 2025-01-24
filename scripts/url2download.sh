#!/bin/bash

# File containing the list of URLs
url_file="urls.txt"

# Check if the file exists
if [[ ! -f "$url_file" ]]; then
  echo "File not found!"
  exit 1
fi

# Loop through each URL in the file and download it
while IFS= read -r url; do
  # Download the file
  wget "$url"
  # You can use curl if you prefer
  # curl -O "$url"
done < "$url_file"

