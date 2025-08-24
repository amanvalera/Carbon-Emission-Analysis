# Carbon Emission Analysis (D3.js v7)

Interactive, single‑page D3.js visualizations exploring **population vs. CO₂ emissions (2018)** and related trends (emissions over time, source mix, GDP, temperature) for each country. The app runs client‑side from `index.html` and loads CSV/GeoJSON from public URLs.

---

## Project purpose & objectives
- Present a clear, visual **story of carbon emissions** alongside population and economic context.  
- Provide a map for quick global scanning plus linked charts for **country‑level drill‑down**.  
- Keep the interface simple, responsive, and accessible for general audiences.

---

## What’s included (visualizations)
1. **World Map (2018)** — toggle between **Population** and **Carbon Emission** layers; clicking a country updates all charts below.  
2. **Emissions over time (line)** — CO₂ trend for the selected country.  
3. **Emissions by source (pie)** — 2018 split across coal, gas, oil, flaring, land‑use change.  
4. **GDP trend (area + brush)** — GDP (millions) over time with brushing/zoom.  
5. **Temperature trend (line)** — country‑level average temperature over time.

**Linked interaction:** selecting a country on the map calls the chart functions for line/pie/area/temperature views with that country.

---

## Data sources (as referenced in code)
- **World geometry (GeoJSON):** `D3-graph-gallery` world map.  
- **Population (2018):** `Population.csv` (Country Code → value).  
- **Emissions (2018):** `Emissions.csv` (ISO3 → F2018).  
- **CO₂ by year (per country):** `CO2_emission_by_year.csv` (used by line, pie, GDP).  
- **Temperature:** `Temperature.csv` (date, country, avg temp).

> Licenses/terms for these datasets are **NOT PROVIDED** in the files. Add attributions once confirmed.

---

## How to run
1. Open **`index.html`** in a modern browser with internet access (loads D3 v7 and remote CSV/GeoJSON).  
2. In the **map** section, click **Population** or **Carbon Emission** to switch layer; click a **country** to load all charts for that country.  
3. Use the **Back to Top** button for quick navigation.

---

## Implementation notes
- **Tech:** D3.js v7; geoMercator; threshold color scales; basic CSS layout.  
- **Modules / functions:**
  - `map.js` → world map + country click handler → calls: `drawEmissionLineChart`, `createPieChart`, `gdpAreaChart`, `drawTemperaturetLineChart`.  
  - `emisionLine.js` → line chart of CO₂ (`drawEmissionLineChart`).  
  - `emisionPie.js` → pie chart of source split (`createPieChart`).  
  - `gdpArea.js` → GDP area with brush (`gdpAreaChart`).  
  - `tempLine.js` → temperature line (`drawTemperaturetLineChart`).

---

## Code documentation status
- Files contain **inline comments** for setup (margins, axes, legends) and event handlers. Module/function docstrings and a top‑level architecture note are **missing** → **TO BE DOCUMENTED**.

---

## References (from provided report)
- **Technical Report (original PDF, coursework‑formatted):** includes Intro/Design/User/Dev guides and feature overview.  
- **External links (mentioned in report):** GitHub repo + demo video.

> A **sanitized** Markdown version (without coursework metadata/requirements) has been prepared as `docs/Carbon_Emission_Analysis_Technical_Report.md`. Source content derived from the PDF above.

---

## Known issues / TODO
- **tempLine:** computes `tLine_max`/`tLine_min` from `eFilteredData` (undefined in this file) → fix to use `tFilteredData`.  
- **Axis label typo:** “Carbon **Emssion** (mt)” in emissions line chart.  
- **Map key alignment:** confirm GeoJSON feature key used for coloring (`d.id`) matches Map data keys (ISO3 / Country Code) for both layers.  
- **Data licensing/attribution:** **NOT PROVIDED** — add a `references/ATTRIBUTION.md` once confirmed.

---

## Getting involved
1. Open an issue for bugs or inconsistencies.  
2. Submit PRs with targeted changes.  
3. Keep all new code client‑side with D3.js v7 unless requirements change.
