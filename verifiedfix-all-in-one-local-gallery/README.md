# VerifiedFix — All-in-One (Local Gallery + One-Click Download Scripts)
- Local gallery paths: `/gallery/gallery-1.jpg` … `/gallery/gallery-8.jpg`
- No phone number, brighter Services
- Includes helper scripts to download 8 free, professional jobsite photos in one command

## Option A — One-click fetch (recommended)
Before pushing to GitHub, run one of these in the project folder:
- macOS/Linux: `bash fetch_photos.sh`
- Windows PowerShell: `powershell -ExecutionPolicy Bypass -File fetch_photos.ps1`
- Windows CMD: `fetch_photos.bat`

This fills `/gallery/` with 8 JPGs. Then push to GitHub and deploy on Vercel (Framework: None, no build step).

## Option B — Manual (if you prefer)
Put 8 JPGs into `/gallery` and keep names `gallery-1.jpg` … `gallery-8.jpg`.

