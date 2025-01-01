# Define the list of image URLs
$imageUrls = @(
    "https://iconestraditionnelles.art.blog/wp-content/uploads/2022/11/20200829_101931-2.jpg",
    "https://i0.wp.com/iconestraditionnelles.art.blog/wp-content/uploads/2022/11/20200829_101931-2.jpg?ssl=1",
    "https://iconestraditionnelles.art.blog/wp-content/uploads/2022/11/20200829_102644-1.jpg",
    "https://i0.wp.com/iconestraditionnelles.art.blog/wp-content/uploads/2022/11/20200829_102644-1.jpg?ssl=1",
    "https://iconestraditionnelles.art.blog/wp-content/uploads/2022/11/20200829_102836-1.jpg",
    "https://i0.wp.com/iconestraditionnelles.art.blog/wp-content/uploads/2022/11/20200829_102836-1.jpg?ssl=1",
    "https://iconestraditionnelles.art.blog/wp-content/uploads/2022/11/20200829_102532-1.jpg",
    "https://i0.wp.com/iconestraditionnelles.art.blog/wp-content/uploads/2022/11/20200829_102532-1.jpg?ssl=1",
    "https://iconestraditionnelles.art.blog/wp-content/uploads/2022/11/20200829_102143-1.jpg",
    "https://i0.wp.com/iconestraditionnelles.art.blog/wp-content/uploads/2022/11/20200829_102143-1.jpg?ssl=1",
    "https://iconestraditionnelles.art.blog/wp-content/uploads/2022/11/20200829_101531-1.jpg",
    "https://i0.wp.com/iconestraditionnelles.art.blog/wp-content/uploads/2022/11/20200829_101531-1.jpg?ssl=1",
    "https://iconestraditionnelles.art.blog/wp-content/uploads/2022/11/20200829_102012.jpg",
    "https://i0.wp.com/iconestraditionnelles.art.blog/wp-content/uploads/2022/11/20200829_102012.jpg?ssl=1",
    "https://iconestraditionnelles.art.blog/wp-content/uploads/2023/03/10103407625347090195025911.jpg",
    "https://iconestraditionnelles.art.blog/wp-content/uploads/2023/02/stmicheletgabriel.jpg",
    "https://iconestraditionnelles.art.blog/wp-content/uploads/2023/02/sd_63c83f9aa2c25.jpg"
)

# Define the folder to save the images
$saveFolder = "C:\DownloadedImages"

# Create the folder if it doesn't exist
if (-not (Test-Path -Path $saveFolder)) {
    New-Item -ItemType Directory -Path $saveFolder | Out-Null
}

# Download each image
foreach ($url in $imageUrls) {
    try {
        # Get the file name from the URL
        $fileName = [System.IO.Path]::GetFileName($url)

        # Define the full path to save the file
        $filePath = Join-Path -Path $saveFolder -ChildPath $fileName

        # Download the file
        Invoke-WebRequest -Uri $url -OutFile $filePath -ErrorAction Stop

        Write-Host "Downloaded: $url -> $filePath"
    } catch {
        Write-Host "Failed to download: $url - $_" -ForegroundColor Red
    }
}

Write-Host "Download completed. Images saved in $saveFolder"
