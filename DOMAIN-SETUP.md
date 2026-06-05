# Custom Domain Setup — `chinadragonmoulton.com`

This guide uses **AWS Route 53** to register the domain and manage DNS, while the
website stays hosted **free on GitHub Pages**. The site keeps auto-deploying on
every `git push` — Route 53 just points the nice domain at it.

> **Order matters:** do Steps 1–2 (DNS) *before* Step 3 (GitHub). Adding the custom
> domain in GitHub before the DNS records exist can temporarily break the live site.

---

## Step 1 — Register the domain (Route 53)
1. Sign in to the **AWS Console** → search for **Route 53**.
2. Left menu → **Registered domains** → **Register domains**.
3. Search `chinadragonmoulton.com`, add it to the cart, and complete checkout
   (a `.com` is about **$13–15/year**).
4. AWS automatically creates a **hosted zone** for the domain (your DNS settings).

## Step 2 — Add DNS records (Route 53 → Hosted zones → chinadragonmoulton.com → Create record)

**A. Apex domain** (the bare `chinadragonmoulton.com`)
- **Record name:** leave blank
- **Record type:** `A`
- **Value** (enter all four, one per line):
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```
- Save.

**B. www subdomain**
- **Record name:** `www`
- **Record type:** `CNAME`
- **Value:** `china-dragon-al.github.io`
- Save.

*(Optional IPv6: also add an `AAAA` apex record with values
`2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.)*

## Step 3 — Connect the domain in GitHub
1. Repo → **Settings** → **Pages**.
2. Confirm **Source** = branch `dev`, folder `/docs`.
3. Under **Custom domain**, enter `chinadragonmoulton.com` → **Save**.
   - GitHub adds a `CNAME` file to the site automatically.
4. Wait for GitHub's DNS check to pass (minutes to a few hours).

## Step 4 — Enable HTTPS
- Once the DNS check passes, tick **Enforce HTTPS** (the free SSL certificate can
  take up to ~24 hours to issue the first time).

## Step 5 — Update the site URLs
- When `https://chinadragonmoulton.com` loads, ask the developer to point the
  canonical tags, Open Graph/Twitter tags, and `sitemap.xml` at the new domain.
  (They are currently set to the GitHub Pages URL so nothing breaks in the meantime.)

---

## Timing & notes
- DNS usually works within 15–60 minutes but can take up to **48 hours**.
- The site stays reachable at **https://china-dragon-al.github.io/china-dragon-moulton/**
  the entire time.
- **Cost summary:** domain ~$13–15/year. Hosting stays **free** on GitHub Pages.
- `www.chinadragonmoulton.com` will redirect to the bare domain automatically once set up.
