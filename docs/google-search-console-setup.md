# Google Search Console Sitemap Submission Guide

## Purpose
This document provides step-by-step instructions for submitting the Claude天团 sitemap to Google Search Console to accelerate SEO indexing.

## Current Status
- **Sitemap Location**: `docs/sitemap.xml`
- **Live URL**: https://sunnclaw.github.io/claude-squad/sitemap.xml
- **Robots.txt**: https://sunnclaw.github.io/claude-squad/robots.txt
- **Total URLs in Sitemap**: 65+ pages including 50+ blog posts

## Prerequisites
- A Google account
- Access to Google Search Console: https://search.google.com/search-console

## Step-by-Step Instructions

### Step 1: Access Google Search Console
1. Go to https://search.google.com/search-console
2. Sign in with your Google account

### Step 2: Add/Verify Your Property
1. Click "Add property" in the top left dropdown
2. Select "URL prefix" and enter: `https://sunnclaw.github.io/claude-squad/`
3. Choose verification method:
   - **Recommended**: HTML file upload (download the file, place in `/docs/` folder, push to repo)
   - **Alternative**: Google Analytics (if already installed)
4. Follow the verification steps and click "Verify"

### Step 3: Submit Your Sitemap
1. Once verified, select your property from the dropdown
2. In the left sidebar, click **Sitemaps**
3. Enter "sitemap.xml" in the "Add a new sitemap" field
4. Click **Submit**

### Step 4: Monitor Indexing Progress
1. Return to the Sitemaps section to see submission status
2. Check "Pages" in the left sidebar to see indexing progress
3. Google typically indexes new sites within 1-4 weeks

## Sitemap Contents Summary

### High Priority Pages (Priority 1.0)
- Homepage
- Missed call recovery landing pages (2)
- All dental-focused blog posts (15+)

### Medium Priority Pages (Priority 0.8-0.9)
- Services page
- Pricing page
- Order page
- AI/productivity blog posts
- Contact/About pages

### Lower Priority Pages (Priority 0.7)
- Technical blog posts
- Portfolio/FAQ pages

## Expected Results

### Short-term (1-2 weeks)
- Sitemap processed by Google
- Initial pages begin indexing
- Some pages may appear in search results

### Medium-term (1-2 months)
- Most pages indexed
- Organic impressions begin appearing
- Click-through from search results

### Long-term (3-6 months)
- Full site indexed
- Ranking improvements for target keywords
- Organic traffic growth

## Troubleshooting

### "Sitemap could not be read"
- Verify sitemap is accessible at the URL
- Check XML syntax validity at: https://www.xml-sitemaps.com/validate-xml-sitemap.html

### "URLs not indexed"
- Ensure pages are accessible (no 404 errors)
- Check robots.txt isn't blocking important pages
- Submit individual URLs via URL Inspection tool

### Slow indexing
- Request indexing for priority pages via URL Inspection
- Build internal links between pages
- Share pages on social media for faster discovery

## Files Reference
- Sitemap: `docs/sitemap.xml`
- Robots.txt: `docs/robots.txt`
- Blog Index: `docs/blog/index.html`

## Last Updated
2026-03-11 by Engineer Agent (CLA-112)
