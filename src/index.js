import './style.css';
import '@material/web/all.js'; 

const sections = [
    {
        title: "Bitmap Fonts",
        fonts: [
            { id: 'cbdt', name: 'Google CBDT' },
            { id: 'sbix', name: 'Apple SBIX' }
        ]
    },
    {
        title: "COLRv0 Fonts",
        fonts: [
            { id: 'colr0_glyf', name: 'COLRv0 [glyf]' },
            { id: 'colr0_cff', name: 'COLRv0 [CFF]' },
            { id: 'colr0_cff2', name: 'COLRv0 [CFF2]' }
        ]
    },
    {
        title: "COLRv1 Fonts",
        fonts: [
            { id: 'colr1_glyf', name: 'COLRv1 [glyf]' },
            { id: 'colr1_cff', name: 'COLRv1 [CFF]' },
            { id: 'colr1_cff2', name: 'COLRv1 [CFF2]' }
        ]
    },
    {
        title: "SVG Fonts (OpenType-SVG)",
        fonts: [
            { id: 'psvg', name: 'picosvg' },
            { id: 'usvg', name: 'untouchedsvg' },
            { id: 'psvgz', name: 'picosvgz' },
            { id: 'usvgz', name: 'untouchedsvgz' }
        ]
    },
    {
        title: "Legacy",
        fonts: [
            { id: 'glyf', name: 'Standard glyf [B&W]' }
        ]
    }
];

const testEmojis = "🛘 🪊 🪎 🫈 🫍 🫝 🫪 🫯";
const app = document.getElementById('app');

sections.forEach(section => {
    const sectionHeader = document.createElement('h2');
    sectionHeader.className = 'section-title';
    sectionHeader.innerText = section.title;
    app.appendChild(sectionHeader);

    const grid = document.createElement('div');
    grid.className = 'test-grid';

    section.fonts.forEach(font => {
        const card = document.createElement('md-elevated-card');
        card.innerHTML = `
            <div style="padding: 16px;">
                <h3 style="margin:0; font-size: 1.1rem;">${font.name}</h3>
                <p style="margin: 4px 0; font-size: 0.8rem; opacity: 0.6;">Family: ${font.id}</p>
                <md-divider style="margin: 8px 0;"></md-divider>
                <div class="emoji-display" style="font-family: '${font.id}', sans-serif;">
                    ${testEmojis}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    app.appendChild(grid);
});
