#!/usr/bin/env bash
set -euo pipefail
mkdir -p gallery
curl -L "https://images.unsplash.com/photo-1597006526020-7c2f661a3278?w=1400&auto=format&fit=crop&q=80" -o gallery/gallery-1.jpg
curl -L "https://images.unsplash.com/photo-1600607687920-4e20b1e93d87?w=1400&auto=format&fit=crop&q=80" -o gallery/gallery-2.jpg
curl -L "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&auto=format&fit=crop&q=80" -o gallery/gallery-3.jpg
curl -L "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1400&auto=format&fit=crop&q=80" -o gallery/gallery-4.jpg
curl -L "https://images.unsplash.com/photo-1615870216519-2f9fa575fae4?w=1400&auto=format&fit=crop&q=80" -o gallery/gallery-5.jpg
curl -L "https://images.unsplash.com/photo-1581094794329-c8112a89d9b0?w=1400&auto=format&fit=crop&q=80" -o gallery/gallery-6.jpg
curl -L "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&auto=format&fit=crop&q=80" -o gallery/gallery-7.jpg
curl -L "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&auto=format&fit=crop&q=80" -o gallery/gallery-8.jpg
echo "Downloaded 8 photos into ./gallery" 
