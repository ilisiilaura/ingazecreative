# Adding photographs

One folder per project, named by its slug:

    public/images/artisan-series/
    public/images/retreat/
    public/images/personal-brand/
    public/images/the-feminine/
    public/images/cyanotype/
    public/images/analog/

Drop full-resolution files straight in — JPEG, PNG, HEIC or TIFF, any size,
any filename. Nothing needs renaming or resizing first; that gets handled
when they are wired up (cropped of scan borders where needed, exported at
1800px for heroes and galleries and 620px for thumbnails).

Order is set later in each project's MDX frontmatter, not by filename, so
you do not need to number them.

`analog/` currently holds the working set used across the preview; it is
staged in `public/images/analog/` as a01…a16 and can be re-sorted into the
real project folders whenever you want.
