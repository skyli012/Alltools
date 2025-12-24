// DOM 元素引用
const toolsContainer = document.getElementById('toolsContainer');
const categoryButtonsContainer = document.getElementById('categoryButtons');

// 当前活动的分类
let currentCategory = 'all';

/**
 * 初始化分类按钮
 */
function initializeCategoryButtons() {
    const categories = Object.keys(toolsData.categories);
    
    categories.forEach(categoryKey => {
        const category = toolsData.categories[categoryKey];
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.textContent = `${category.icon} ${category.name}`;
        btn.setAttribute('data-category', categoryKey);
        
        btn.addEventListener('click', () => {
            filterToolsByCategory(categoryKey);
            updateActiveButton(btn);
        });
        
        categoryButtonsContainer.appendChild(btn);
    });
}

/**
 * 更新活动按钮状态
 */
function updateActiveButton(clickedBtn) {
    // 移除所有活动状态
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 添加活动状态到点击的按钮
    clickedBtn.classList.add('active');
}

/**
 * 渲染工具卡片
 */
function renderToolCards(tools) {
    toolsContainer.innerHTML = '';
    
    if (tools.length === 0) {
        toolsContainer.innerHTML = '<p style="text-align: center; color: white; grid-column: 1/-1;">暂无工具</p>';
        return;
    }
    
    tools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        
        card.innerHTML = `
            <h3 class="tool-name">${tool.name}</h3>
            <p class="tool-description">${tool.description}</p>
            <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="tool-link">
                打开工具 →
            </a>
        `;
        
        toolsContainer.appendChild(card);
    });
}

/**
 * 按分类筛选工具
 */
function filterToolsByCategory(categoryKey) {
    currentCategory = categoryKey;
    let toolsToDisplay = [];
    
    if (categoryKey === 'all') {
        // 获取所有分类的所有工具
        Object.keys(toolsData.categories).forEach(key => {
            toolsToDisplay.push(...toolsData.categories[key].tools);
        });
    } else {
        // 获取特定分类的工具
        toolsToDisplay = toolsData.categories[categoryKey].tools;
    }
    
    renderToolCards(toolsToDisplay);
}

/**
 * 全部工具按钮点击事件
 */
document.addEventListener('DOMContentLoaded', () => {
    // 初始化分类按钮
    initializeCategoryButtons();
    
    // 绑定"全部"按钮事件
    const allBtn = document.querySelector('[data-category="all"]');
    if (allBtn) {
        allBtn.addEventListener('click', () => {
            filterToolsByCategory('all');
            updateActiveButton(allBtn);
        });
    }
    
    // 初始显示所有工具
    filterToolsByCategory('all');
    document.querySelector('[data-category="all"]').classList.add('active');
});
