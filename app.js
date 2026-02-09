// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then(reg => {
            console.log('SW Registered');
        }).catch(err => {
            console.log('SW Registration Failed', err);
        });
    });
}

const appData = {
    crystals: [
        {
            id: 'urate',
            title: '요산염 (Urate)',
            subtitle: 'Urate Crystals',
            ph: 'acidic',
            image: 'assets/urate.jpg',
            description: '다양한 크기와 모양(통, 장미, 마름모 등)을 보이며 주로 호박색을 띱니다. 알칼리성 소변에서는 용해됩니다.',
            clinical: '요산 결석증, 급성 요산 신병증을 시사하나 정상인에서도 관찰될 수 있습니다.'
        },
        {
            id: 'amorphous_urate',
            title: '무정형 요산염 (Amorphous Urate)',
            subtitle: 'Amorphous Urate',
            ph: 'acidic',
            image: 'assets/amorphous.jpg',
            description: '산성 소변에서 관찰되는 무정형 결정으로, 현미경 상에서 미세한 과립 형태로 보입니다. 냉장 보관 시 핑크색 침전물("Brick dust")을 형성할 수 있습니다.',
            clinical: '주로 병적 의의는 낮으나, 다량 발견 시 요산 대사 이상 또는 농축된 소변을 시사할 수 있습니다.'
        },
        {
            id: 'struvite',
            title: '삼중인산염 (Struvite)',
            subtitle: 'Triple Phosphate',
            ph: 'alkaline',
            image: 'assets/struvite.jpg',
            description: '전형적인 "관 뚜껑(Coffin-lid)" 모양의 직사각형 프리즘 형태입니다. 마그네슘 암모늄 인산염으로 구성됩니다.',
            clinical: '요소 분해 세균(Proteus 등)에 의한 요로 감염(UTI) 및 감염석(Infected calculi)과 관련이 깊습니다.'
        },
        {
            id: 'ca_oxalate',
            title: '옥살산 칼슘 (Ca Oxalate)',
            subtitle: 'Calcium Oxalate',
            ph: 'acidic',
            image: 'assets/calcium_oxalate.jpg',
            description: '이수화물은 무색의 "편지봉투" 모양, 일수화물은 덤벨 또는 타원형 모양을 보입니다.',
            clinical: '시금치 등 옥살산 풍부 음식 섭취 시 보일 수 있으나, 결석증 또는 에틸렌 글리콜 중독 시 다량 관찰됩니다.'
        },
        {
            id: 'cystine',
            title: '시스틴 (Cystine)',
            subtitle: 'Cystine Crystals',
            ph: 'acidic',
            image: 'assets/cystine.jpg',
            description: '무색의 육각형 판 모양(벤젠 고리 유사). 두께가 다양하며 층층이 쌓여있기도 합니다.',
            clinical: '유전성 대사 질환인 시스틴뇨증(Cystinuria)을 진단하는 결정적인 소견입니다.'
        },
        {
            id: 'ammonium_biurate',
            title: '중요산 암모늄',
            subtitle: 'Ammonium Biurate',
            ph: 'alkaline',
            image: 'assets/ammonium_biurate.jpg',
            description: '황갈색의 구형에 불규칙한 돌기("Thorn-apple")가 나 있는 모양입니다.',
            clinical: '오래된 소변에서 보일 수 있으나, 신선뇨라면 간 질환이나 문맥전신단락(PSS)을 의심할 수 있습니다.'
        },
        {
            id: 'ca_carbonate',
            title: '탄산 칼슘 (Ca Carbonate)',
            subtitle: 'Calcium Carbonate',
            ph: 'alkaline',
            image: 'assets/calcium_carbonate.jpg',
            description: '다양한 크기의 구형, 타원형 모양이며 종종 방사형 줄무늬가 보입니다. 황갈색을 띱니다.',
            clinical: '말, 토끼 등 초식동물에서는 정상이나, 개나 고양이에서는 드뭅니다.'
        },
        {
            id: 'bilirubin',
            title: '빌리루빈 (Bilirubin)',
            subtitle: 'Bilirubin Crystals',
            ph: 'acidic',
            image: 'assets/bilirubin.jpg',
            description: '붉은 오렌지색의 뾰족한 바늘 모양이 뭉쳐 있거나 과립 형태입니다.',
            clinical: '간 질환, 담관 폐쇄 등 담즙 정체 질환을 강력히 시사합니다.'
        },
        {
            id: 'sulfadiazine',
            title: '약물 결정 (Sulfadiazine)',
            subtitle: 'Medication Crystals',
            ph: 'acidic',
            image: 'assets/sulfadiazine.jpg',
            description: '설파제 복용 시 나타날 수 있으며, "밀단(Shocks of wheat)" 모양이나 조개껍질 무늬를 띱니다.',
            clinical: '약물에 의한 신세뇨관 손상 및 신부전 가능성을 경고합니다.'
        },
        {
            id: 'leucine',
            title: '류신 결정 (Leucine)',
            subtitle: 'Leucine Crystals',
            ph: 'acidic',
            image: 'assets/leucine_crystal.png',
            description: '황갈색의 구형 결정으로, 특징적인 동심원 줄무늬(Concentric striations)가 있습니다.',
            clinical: '심각한 간 질환(Liver disease)이나 아미노산 대사 장애를 강력히 시사합니다.'
        },
        {
            id: 'tyrosine',
            title: '타이로신 결정 (Tyrosine)',
            subtitle: 'Tyrosine Crystals',
            ph: 'acidic',
            image: 'assets/tyrosine_crystal.png',
            description: '무색~황색의 가늘고 긴 바늘 모양 결정이 묶음(Sheaves) 또는 장미꽃 형태로 배열됩니다.',
            clinical: 'Leucine 결정과 함께 간 질환(Liver disease)을 강력히 시사합니다.'
        }
    ],
    casts: [
        {
            id: 'hyaline_cast',
            title: '초자원주 (Hyaline)',
            subtitle: 'Hyaline Cast',
            image: 'assets/hyaline_cast.png',
            description: '단백질로만 구성되어 투명하고 굴절율이 낮아 관찰하기 어렵습니다.',
            clinical: '운동 후나 탈수 시 정상적으로 보일 수 있으나, 다량 관찰 시 신장 질환 초기 징후일 수 있습니다.'
        },
        {
            id: 'granular_cast',
            title: '과립원주 (Granular)',
            subtitle: 'Granular Cast',
            image: 'assets/granular_cast.png',
            description: '세포 변성 물질이나 혈장 단백이 응집되어 내부에 과립이 보입니다. (Fine/Coarse)',
            clinical: '신세뇨관 손상이나 염증의 중요한 지표입니다. "Muddy brown" 원주는 ATN을 시사합니다.'
        },
        {
            id: 'wbc_cast',
            title: '백혈구 원주 (WBC)',
            subtitle: 'WBC Cast',
            image: 'assets/wbc_cast.jpg',
            description: '원주 기질 내에 백혈구가 빽빽하게 박혀 있거나 응집된 형태입니다.',
            clinical: '신장의 직접적인 감염, 즉 신우신염(Pyelonephritis)을 강력하게 시사합니다.'
        },
        {
            id: 'rbc_cast',
            title: '적혈구 원주 (RBC)',
            subtitle: 'RBC Cast',
            image: 'assets/rbc_cast.png',
            description: '적혈구가 포함되어 있으며 대개 황갈색을 띱니다.',
            clinical: '사구체 신염이나 심각한 신장 출혈을 의미하는 중요한 병적 소견입니다.'
        },
        {
            id: 'waxy_cast',
            title: '납양원주 (Waxy)',
            subtitle: 'Waxy Cast',
            image: 'assets/waxy_cast.png',
            description: '과립원주가 더욱 변성된 형태로, 모서리가 깨진 듯하며 불투명합니다.',
            clinical: '만성 신부전(ESRD)과 같이 소변 흐름이 극도로 정체된 상태를 의미합니다.'
        },
        {
            id: 'fatty_cast',
            title: '지방원주 (Fatty)',
            subtitle: 'Fatty Cast',
            image: 'assets/fatty_cast.jpg',
            description: '원주 기질 내에 지방 방울이나 지방을 함유한 세포가 포함되어 있으며, 편광 현미경 하에서 "몰타 십자(Maltese cross)" 모양을 보입니다.',
            clinical: '신증후군(Nephrotic syndrome) 또는 중증 단백뇨의 특징적 소견입니다.'
        },
        {
            id: 'epithelial_cast',
            title: '상피세포 원주',
            subtitle: 'Epithelial Cell Cast',
            image: 'assets/epithelial_cast.jpg',
            description: '원주 기질 내에 신세뇨관 상피세포가 포함된 형태입니다. 세포 핵과 세포질이 관찰됩니다.',
            clinical: '급성 세뇨관 괴사(ATN), 급성 신장 손상, 바이러스성 신장염 등을 시사합니다.'
        }
    ],
    cells: [
        {
            id: 'rbc',
            title: '적혈구 (RBC)',
            subtitle: 'Erythrocytes',
            image: 'assets/rbc_only.jpg',
            description: '작고 매끄러운 이중 요철 원반형입니다. 핵이 없으며, 소변 농도에 따라 변형됩니다.',
            clinical: '혈뉴(Hematuria): 신장/요로계 출혈, 결석, 종양, 사구체 신염 등을 시사합니다.'
        },
        {
            id: 'crenated_rbc',
            title: '톱니 적혈구',
            subtitle: 'Crenated RBC',
            image: 'assets/rbc_crenated.png',
            description: '고장성 소변에서 수분 손실로 인해 세포막 전체에 균일하게 작은 가시(톱니) 모양의 돌기가 생깁니다. 인공산물(Artifact)로 간주됩니다.',
            clinical: '농축된 소변이나 오래 방치된 검체에서 흔히 관찰되며, 병적 의의는 거의 없습니다. 소변 삼투압이 높음을 나타냅니다.'
        },

        {
            id: 'wbc',
            title: '백혈구 (WBC)',
            subtitle: 'Leukocytes',
            image: 'assets/wbc_only.jpg',
            description: 'RBC보다 크며 내부에 과립과 핵이 관찰됩니다.',
            clinical: '농뇨(Pyuria): 세균성 요로 감염, 신우신염 등 염증성 질환을 의미합니다.'
        },
        {
            id: 'squamous',
            title: '편평 상피세포',
            subtitle: 'Squamous Epithelial',
            image: 'assets/squamous_epithelial.png',
            description: '가장 큰 세포로, 불규칙하고 평평한 모양을 하며 작은 중심 핵을 가집니다.',
            clinical: '주로 질이나 요도 하부 유래이며, 오염으로 간주되어 병적 의의는 낮습니다.'
        },
        {
            id: 'bacteria',
            title: '세균 (Bacteria)',
            subtitle: 'Bacilli / Cocci',
            image: 'assets/bacteria.jpg',
            description: '막대균 또는 구균 형태로 보이며 브라운 운동을 합니다.',
            clinical: '요로 감염(UTI)의 원인체입니다.'
        },
        {
            id: 'yeast',
            title: '효모 (Yeast)',
            subtitle: 'Yeast Cells',
            image: 'assets/yeast.jpg',
            description: '작고 둥근 난원형 모양으로, 출아(Budding)가 관찰될 수 있습니다. RBC와 유사하나 출아로 구별됩니다.',
            clinical: 'Candida 등 진균 감염을 시사하며, 특히 면역저하자, 당뇨병 환자, 장기간 항생제 사용자에서 흔합니다.'
        },
        {
            id: 'sperm',
            title: '정자 (Sperm)',
            subtitle: 'Spermatozoa',
            image: 'assets/sperm.jpg',
            description: '특징적인 타원형 머리와 긴 꼬리를 가진 구조입니다.',
            clinical: '남성에서 사정 후 또는 역행성 사정 시 관찰될 수 있으며, 병적 의의는 없습니다.'
        },
        {
            id: 'renal_tubular',
            title: '신세뇨관 상피세포',
            subtitle: 'Renal Tubular Epithelial',
            image: 'assets/renal_tubular.png',
            description: 'WBC보다 약간 크며, 둥글거나 다각형 모양으로 편심성 핵을 가집니다. 세포질이 과립상입니다.',
            clinical: '신세뇨관 손상(ATN), 급성 신장 손상, 신독성 약물 노출, 거부 반응 등을 강력히 시사합니다.'
        },
        {
            id: 'transitional',
            title: '이행 상피세포',
            subtitle: 'Transitional Epithelial',
            image: 'assets/transitional_epithelial.png',
            description: '방광, 요관, 신우에서 유래하며 다양한 모양(원형, 꼬리형, 다핵)을 보입니다. 편평 상피보다 작습니다.',
            clinical: '대부분 정상 박리이나, 다량 관찰 시 요로 염증이나 카테터 자극을 시사할 수 있습니다.'
        }
    ]
};

let currentTab = 'crystals';
let currentFilter = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
    // Hide Splash Screen
    const splash = document.getElementById('splash');
    if (splash) {
        setTimeout(() => {
            splash.style.opacity = '0';
            setTimeout(() => splash.style.display = 'none', 500);
        }, 1200);
    }

    const grid = document.getElementById('content-grid');
    const searchInput = document.getElementById('global-search');
    const navItems = document.querySelectorAll('.nav-item');
    const filterContainer = document.getElementById('filter-container');
    const modal = document.getElementById('detail-modal');
    const closeModalBtn = document.getElementById('close-modal');

    // Initial Render
    render();

    // Tab Navigation
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            currentTab = item.getAttribute('data-tab');
            currentFilter = 'all'; // Reset filter on tab change

            // Toggle filter visibility
            if (currentTab === 'crystals') {
                filterContainer.classList.remove('hidden');
                document.querySelectorAll('.filter-chip').forEach(chip => chip.classList.remove('active'));
                document.querySelector('[data-filter="all"]').classList.add('active');
            } else {
                filterContainer.classList.add('hidden');
            }

            render();
        });
    });

    // Filtering
    filterContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-chip')) {
            document.querySelectorAll('.filter-chip').forEach(chip => chip.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.getAttribute('data-filter');
            render();
        }
    });

    // Search
    const suggestionsContainer = document.getElementById('search-suggestions');
    let selectedSuggestionIndex = -1;

    // Search & Suggestions
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        render(); // Live filter current tab
        updateSuggestions(searchQuery);
    });

    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
            hideSuggestions();
        }
    });

    // Keyboard navigation for suggestions
    searchInput.addEventListener('keydown', (e) => {
        const items = suggestionsContainer.querySelectorAll('.suggestion-item');
        if (items.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedSuggestionIndex++;
            if (selectedSuggestionIndex >= items.length) selectedSuggestionIndex = 0;
            highlightSuggestion(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedSuggestionIndex--;
            if (selectedSuggestionIndex < 0) selectedSuggestionIndex = items.length - 1;
            highlightSuggestion(items);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (selectedSuggestionIndex > -1) {
                items[selectedSuggestionIndex].click();
            }
        } else if (e.key === 'Escape') {
            hideSuggestions();
        }
    });

    function highlightSuggestion(items) {
        items.forEach(item => item.classList.remove('highlighted'));
        if (selectedSuggestionIndex > -1 && items[selectedSuggestionIndex]) {
            items[selectedSuggestionIndex].classList.add('highlighted');
            items[selectedSuggestionIndex].scrollIntoView({ block: 'nearest' });
        }
    }

    function hideSuggestions() {
        suggestionsContainer.classList.add('hidden');
        searchInput.classList.remove('has-suggestions');
        selectedSuggestionIndex = -1;
    }

    function updateSuggestions(query) {
        if (!query) {
            hideSuggestions();
            return;
        }

        const suggestions = getGlobalSuggestions(query);

        if (suggestions.length === 0) {
            hideSuggestions();
            return;
        }

        renderSuggestions(suggestions);
    }

    function getGlobalSuggestions(query) {
        const results = [];
        const categories = {
            'crystals': '요 결정',
            'casts': '원주',
            'cells': '세포'
        };

        // Iterate over all tabs/categories
        Object.keys(appData).forEach(tab => {
            appData[tab].forEach(item => {
                // Check for match
                const match = item.title.toLowerCase().includes(query) ||
                    item.subtitle.toLowerCase().includes(query) ||
                    (item.description && item.description.toLowerCase().includes(query));

                if (match) {
                    results.push({
                        ...item,
                        categoryKey: tab,
                        categoryName: categories[tab]
                    });
                }
            });
        });

        return results.slice(0, 5); // Limit to top 5 suggestions
    }

    function renderSuggestions(suggestions) {
        suggestionsContainer.innerHTML = '';
        suggestions.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.innerHTML = `
                <span class="suggestion-text">${highlightMatch(item.title, searchQuery)}</span>
                <span class="suggestion-hint">${item.categoryName}</span>
            `;

            div.addEventListener('click', () => {
                // 1. Switch Tab
                if (currentTab !== item.categoryKey) {
                    currentTab = item.categoryKey;

                    // Update Tab UI
                    navItems.forEach(nav => {
                        if (nav.getAttribute('data-tab') === currentTab) {
                            nav.classList.add('active');
                        } else {
                            nav.classList.remove('active');
                        }
                    });

                    // Update Filter UI visibility
                    if (currentTab === 'crystals') {
                        filterContainer.classList.remove('hidden');
                    } else {
                        filterContainer.classList.add('hidden');
                    }

                    // Reset filters
                    currentFilter = 'all';
                    document.querySelectorAll('.filter-chip').forEach(chip => chip.classList.remove('active'));
                    document.querySelector('[data-filter="all"]').classList.add('active');
                }

                // 2. Set search query and re-render
                searchInput.value = item.title;
                searchQuery = item.title.toLowerCase();
                hideSuggestions();
                render();
            });

            suggestionsContainer.appendChild(div);
        });

        suggestionsContainer.classList.remove('hidden');
        searchInput.classList.add('has-suggestions');
        selectedSuggestionIndex = -1;
    }

    function highlightMatch(text, query) {
        if (!query) return text;
        const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${escapedQuery})`, 'gi');
        return text.replace(regex, '<span style="color:var(--primary);">$1</span>');
    }

    // Modal Operations
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('open');
        document.body.classList.remove('modal-open');
    });

    // Helper: Render Content
    function render() {
        grid.innerHTML = '';
        const data = appData[currentTab] || [];

        const filteredData = data.filter(item => {
            // Enhanced search: check id, title, subtitle, and description
            const matchesSearch = item.id.toLowerCase().includes(searchQuery) ||
                item.title.toLowerCase().includes(searchQuery) ||
                item.subtitle.toLowerCase().includes(searchQuery) ||
                (item.description && item.description.toLowerCase().includes(searchQuery));
            const matchesFilter = currentFilter === 'all' || item.ph === currentFilter;
            return matchesSearch && matchesFilter;
        });

        if (filteredData.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; padding: 2rem; text-align: center; color: var(--text-muted);">검색 결과가 없습니다.</div>`;
            return;
        }

        filteredData.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'app-card animate-fade-in-up';
            card.style.animationDelay = `${index * 0.05}s`;
            card.innerHTML = `
                <img src="${item.image}" class="card-image" alt="${item.title}" loading="lazy">
                <div class="card-info">
                    <div class="card-tag">${item.ph ? 'pH: ' + item.ph.toUpperCase() : currentTab.toUpperCase()}</div>
                    <div class="card-title">${item.title}</div>
                    <div class="card-subtitle">${item.subtitle}</div>
                </div>
            `;
            card.addEventListener('click', () => showDetails(item));
            grid.appendChild(card);
        });
    }

    function showDetails(item) {
        document.getElementById('modal-image').src = item.image;
        document.getElementById('modal-title').textContent = item.title;
        document.getElementById('modal-subtitle').textContent = item.subtitle;
        document.getElementById('modal-description').textContent = item.description;
        document.getElementById('modal-clinical').textContent = item.clinical;
        document.getElementById('modal-tag').textContent = item.ph ? `pH: ${item.ph.toUpperCase()}` : currentTab.toUpperCase();

        modal.classList.add('open');
        document.body.classList.add('modal-open');
    }
});
