# Publications template setup

Copy the files in this bundle into the same paths inside your al-folio repo.

## What this gives you

- Search bar at the top of the publications page
- Auto-generated topic filters from each paper's `tags` field
- Thumbnail or GIF support through the existing `preview` field
- Link buttons for PDF, code, slides, website, video, poster, DOI, and more
- Collapsible sections for abstract, BibTeX, and optional notes
- A short one-line pitch area under each entry

## BibTeX fields you can now use

These are the most useful custom fields for the new template:

- `preview` -> image or GIF filename inside `assets/img/publication_preview/`
- `tags` -> comma-separated topic list
- `pitch` -> short elevator pitch shown above the buttons
- `status` -> optional pill such as `Preprint`, `Under Review`, `In Press`

Standard al-folio link fields still work too:

- `pdf`
- `code`
- `slides`
- `video`
- `website`
- `poster`
- `html`
- `blog`
- `supp`
- `doi`
- `arxiv`

## Example entry

```bibtex
@article{mehrdad2026example,
  title   = {A sample publication entry},
  author  = {Mehrdad, Sarmad and Collaborator, Example},
  journal = {Robotics Journal},
  year    = {2026},
  preview = {sample-demo.gif},
  tags    = {IRL, Human Motion, Robotics},
  status  = {Preprint},
  pitch   = {A one- or two-sentence elevator pitch for the paper.},
  abstract = {A longer abstract can go here.},
  pdf     = {sample-paper.pdf},
  code    = {https://github.com/your-repo},
  video   = {https://youtube.com/...}
}
```

## Notes

- If `preview` is a plain filename, the file should live in `assets/img/publication_preview/`.
- If `preview` is a full URL, the page will load it directly.
- Multiple active topic filters use OR logic. In other words, selecting `IRL` and `Biosignals` shows publications that match either topic.
- Clicking a tag inside a paper card toggles that same topic filter at the top.
