const normalize = (value) => (value || "").toLowerCase().trim();

const getEntryCards = () => Array.from(document.querySelectorAll(".bibliography > li .pub-card"));

const getListItem = (card) => card.closest("li");

const getCardTags = (card) => {
  const raw = card.dataset.tags || "";
  return raw
    .split("|")
    .map((tag) => normalize(tag))
    .filter(Boolean);
};

const getCardDisplayTags = (card) => {
  const raw = card.dataset.tagsDisplay || "";
  return raw
    .split("|")
    .map((tag) => tag.trim())
    .filter(Boolean);
};

const getSearchText = (card) => {
  const extra = card.dataset.searchExtra || "";
  return `${card.innerText} ${extra}`.toLowerCase();
};

const closePanels = (card) => {
  const panelWrap = card.querySelector(".pub-card__panels");
  const toggles = card.querySelectorAll(".pub-toggle");
  const panels = card.querySelectorAll(".pub-panel");

  toggles.forEach((button) => button.classList.remove("is-active"));
  panels.forEach((panel) => {
    panel.hidden = true;
  });

  if (panelWrap) {
    panelWrap.hidden = true;
  }
};

const openPanel = (card, panelName) => {
  const panelWrap = card.querySelector(".pub-card__panels");
  const target = card.querySelector(`.pub-panel[data-panel="${panelName}"]`);
  const toggles = card.querySelectorAll(".pub-toggle");
  const panels = card.querySelectorAll(".pub-panel");

  if (!panelWrap || !target) return;

  panelWrap.hidden = false;
  panels.forEach((panel) => {
    panel.hidden = panel !== target;
  });

  toggles.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.panel === panelName);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("bibsearch");
  const filtersContainer = document.getElementById("pub-tag-filters");
  const clearButton = document.getElementById("pub-clear-filters");
  const noResults = document.getElementById("pub-no-results");

  if (!searchInput || !filtersContainer) {
    return;
  }

  const cards = getEntryCards();
  const selectedTags = new Set();
  const topFilterButtons = new Map();

  const allTagsMap = new Map();

  cards.forEach((card) => {
    const normalizedTags = getCardTags(card);
    const displayTags = getCardDisplayTags(card);

    normalizedTags.forEach((tag, index) => {
      if (!allTagsMap.has(tag)) {
        allTagsMap.set(tag, displayTags[index] || tag);
      }
    });
  });

  const allTags = Array.from(allTagsMap.entries()).sort((a, b) =>
    a[1].localeCompare(b[1])
  );

  const updateYearGroups = () => {
    document.querySelectorAll("h2.bibliography").forEach((yearHeading) => {
      let iterator = yearHeading.nextElementSibling;
      let hasVisibleEntries = false;

      while (iterator && iterator.tagName !== "H2") {
        if (iterator.tagName === "OL") {
          const hasVisibleInList = Array.from(iterator.querySelectorAll(":scope > li")).some(
            (item) => !item.classList.contains("unloaded")
          );
          iterator.classList.toggle("unloaded", !hasVisibleInList);
          if (hasVisibleInList) {
            hasVisibleEntries = true;
          }
        }
        iterator = iterator.nextElementSibling;
      }

      yearHeading.classList.toggle("unloaded", !hasVisibleEntries);
    });
  };

  const applyFilters = () => {
    const searchTerm = normalize(searchInput.value);

    let visibleCount = 0;

    cards.forEach((card) => {
      const listItem = getListItem(card);
      const cardTags = getCardTags(card);
      const matchesSearch = !searchTerm || getSearchText(card).includes(searchTerm);
      const matchesTags = selectedTags.size === 0 || cardTags.some((tag) => selectedTags.has(tag));
      const isVisible = matchesSearch && matchesTags;

      listItem.classList.toggle("unloaded", !isVisible);
      if (isVisible) {
        visibleCount += 1;
      }
    });

    updateYearGroups();

    if (noResults) {
      noResults.hidden = visibleCount !== 0;
    }

    if (clearButton) {
      clearButton.hidden = !(searchTerm || selectedTags.size);
    }
  };

  const toggleTag = (tag) => {
    const normalizedTag = normalize(tag);
    if (!normalizedTag) return;

    if (selectedTags.has(normalizedTag)) {
      selectedTags.delete(normalizedTag);
    } else {
      selectedTags.add(normalizedTag);
    }

    topFilterButtons.forEach((button, buttonTag) => {
      const isActive = selectedTags.has(buttonTag);
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    document.querySelectorAll(`.pub-chip--inline[data-tag="${CSS.escape(normalizedTag)}"]`).forEach((chip) => {
      chip.classList.toggle("is-active", selectedTags.has(normalizedTag));
      chip.setAttribute("aria-pressed", String(selectedTags.has(normalizedTag)));
    });

    applyFilters();
  };

  allTags.forEach(([tagKey, tagLabel]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "pub-chip pub-chip--filter";
    button.textContent = tagLabel;
    button.dataset.tag = tagKey;
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => toggleTag(tagKey));
    filtersContainer.appendChild(button);
    topFilterButtons.set(tagKey, button);
  });

  document.addEventListener("click", (event) => {
    const inlineTag = event.target.closest(".pub-chip--inline");
    if (inlineTag) {
      toggleTag(inlineTag.dataset.tag);
      return;
    }

    const toggleButton = event.target.closest(".pub-toggle");
    if (!toggleButton) return;

    const card = toggleButton.closest(".pub-card");
    const panelName = toggleButton.dataset.panel;
    const alreadyActive = toggleButton.classList.contains("is-active");

    if (alreadyActive) {
      closePanels(card);
    } else {
      openPanel(card, panelName);
    }
  });

  let timeoutId;
  searchInput.addEventListener("input", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(applyFilters, 150);
  });

  if (clearButton) {
    clearButton.addEventListener("click", () => {
      searchInput.value = "";
      selectedTags.clear();
      topFilterButtons.forEach((button) => {
        button.classList.remove("is-active");
        button.setAttribute("aria-pressed", "false");
      });
      document.querySelectorAll(".pub-chip--inline").forEach((chip) => {
        chip.classList.remove("is-active");
        chip.setAttribute("aria-pressed", "false");
      });
      applyFilters();
    });
  }

  cards.forEach((card) => closePanels(card));
  applyFilters();
});
