import zipfile
import os
import pymupdf  # PyMuPDF

zip_path = r"d:\apti\APTI 2026 Full(3).pdf_20260429_130109_0000.zip"
out_dir = r"d:\apti\public\chronicles"
os.makedirs(out_dir, exist_ok=True)

mapping = {
    "APTI 2026 Full(3).pdf_20260429_130109_0000.pdf": ("chronicle_2026.pdf", "cover_2026.png", 2026, "Career Catalyst Vol. 5 (2026)"),
    "APTI 2025.pdf": ("chronicle_2025.pdf", "cover_2025.png", 2025, "Career Catalyst Vol. 4 (2025)"),
    "APTI Chronicle- Vol.3 (1).pdf": ("chronicle_2024.pdf", "cover_2024.png", 2024, "APTI Chronicle Vol. 3 (2024)"),
    "APTI Club Report 2024.pdf": ("apti_report_2024.pdf", "cover_report_2024.png", 2024, "APTI Club Annual Report (2024)"),
    "APTI Club - Vol.2.pdf": ("chronicle_2023.pdf", "cover_2023.png", 2023, "APTI Club Chronicle Vol. 2 (2023)"),
    "APTI Club - Newsletter - Vol 1.pdf": ("chronicle_2022.pdf", "cover_2022.png", 2022, "APTI Club Newsletter Vol. 1 (2022)")
}

with zipfile.ZipFile(zip_path, 'r') as zf:
    for zip_name, (pdf_name, cover_name, year, title) in mapping.items():
        if zip_name in zf.namelist():
            target_pdf = os.path.join(out_dir, pdf_name)
            print(f"Extracting {zip_name} -> {target_pdf}")
            with zf.open(zip_name) as source, open(target_pdf, 'wb') as dest:
                dest.write(source.read())
            
            # Generate cover image
            try:
                doc = pymupdf.open(target_pdf)
                page_count = len(doc)
                page = doc[0]
                pix = page.get_pixmap(dpi=150)
                target_cover = os.path.join(out_dir, cover_name)
                pix.save(target_cover)
                print(f"Generated cover: {target_cover} ({page_count} pages)")
                doc.close()
            except Exception as e:
                print(f"Failed to generate cover for {pdf_name}: {e}")

print("Extraction and cover generation completed!")
