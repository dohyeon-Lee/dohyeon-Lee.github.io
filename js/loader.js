const PUBLICATIONS = [
  'publications/NeurIPS2026/content.html',
  'publications/ral2025/content.html',
  'publications/iros2023/content.html',
];

const PROJECTS = [
  // 'projects/reachability_mppi/content.html',
  'projects/fsdrone_dev/content.html',
  'projects/pirnn/content.html',
  'projects/quad_mani/content.html',
  'projects/glidable_fsdrone/content.html',
  'projects/quad_wheel/content.html',
  'projects/astar_nav/content.html',
];

async function loadSection(tbodyId, files) {
  const tbody = document.getElementById(tbodyId);
  for (const file of files) {
    const res = await fetch(file);
    const html = await res.text();
    tbody.insertAdjacentHTML('beforeend', html);
  }
}

loadSection('publications-body', PUBLICATIONS);
loadSection('projects-body', PROJECTS);
