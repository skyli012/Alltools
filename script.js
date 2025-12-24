// DOM 元素引用
const toolsContainer = document.getElementById('toolsContainer');
const categoryButtonsContainer = document.getElementById('categoryButtons');
const adminBtn = document.getElementById('adminBtn');
const authModal = document.getElementById('authModal');
const addToolModal = document.getElementById('addToolModal');
const authSubmit = document.getElementById('authSubmit');
const authPassword = document.getElementById('authPassword');
const authMessage = document.getElementById('authMessage');
const addToolForm = document.getElementById('addToolForm');
const toolImageInput = document.getElementById('toolImage');
const imagePreview = document.getElementById('imagePreview');
const toolCategorySelect = document.getElementById('toolCategory');

// 配置：修改这个密码来设置管理员密码
const ADMIN_PASSWORD = '123456';

// 管理员认证状态
let isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

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
 * 初始化工具分类下拉菜单
 */
function initializeToolCategorySelect() {
    const categories = Object.keys(toolsData.categories);
    
    categories.forEach(categoryKey => {
        const category = toolsData.categories[categoryKey];
        const option = document.createElement('option');
        option.value = categoryKey;
        option.textContent = `${category.icon} ${category.name}`;
        toolCategorySelect.appendChild(option);
    });
}

/**
 * 更新活动按钮状态
 */
function updateActiveButton(clickedBtn) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    clickedBtn.classList.add('active');
}

/**
 * 渲染工具卡片
 */
function renderToolCards(tools) {
    toolsContainer.innerHTML = '';
    
    if (tools.length === 0) {
        toolsContainer.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #999;">暂无工具</div>';
        return;
    }
    
    tools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        
        const image = tool.image ? `<img src="${tool.image}" alt="${tool.name}" class="tool-image" onerror="this.classList.add('error'); this.textContent='📷';">` : '<div class="tool-image error">📷</div>';
        
        card.innerHTML = `
            ${image}
            <div class="tool-content">
                <h3 class="tool-name">${tool.name}</h3>
                <p class="tool-description">${tool.description}</p>
                <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="tool-link">
                    打开 →
                </a>
            </div>
        `;
        
        toolsContainer.appendChild(card);
    });
}

/**
 * 按分类筛选工具
 */
function filterToolsByCategory(categoryKey) {
    let toolsToDisplay = [];
    
    if (categoryKey === 'all') {
        Object.keys(toolsData.categories).forEach(key => {
            toolsToDisplay.push(...toolsData.categories[key].tools);
        });
    } else {
        toolsToDisplay = toolsData.categories[categoryKey].tools;
    }
    
    renderToolCards(toolsToDisplay);
}

/**
 * 管理员按钮点击事件
 */
adminBtn.addEventListener('click', () => {
    if (isAuthenticated) {
        openAddToolModal();
    } else {
        openAuthModal();
    }
});

/**
 * 打开认证模态框
 */
function openAuthModal() {
    authModal.classList.remove('hidden');
    authPassword.focus();
    authMessage.classList.add('hidden');
}

/**
 * 关闭认证模态框
 */
document.getElementById('closeAuthModal').addEventListener('click', () => {
    authModal.classList.add('hidden');
    authPassword.value = '';
    authMessage.classList.add('hidden');
});

/**
 * 认证提交
 */
authSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const password = authPassword.value.trim();
    
    if (password === ADMIN_PASSWORD) {
        isAuthenticated = true;
        localStorage.setItem('isAuthenticated', 'true');
        authMessage.textContent = '认证成功！';
        authMessage.classList.remove('hidden', 'error');
        authMessage.classList.add('success');
        
        setTimeout(() => {
            authModal.classList.add('hidden');
            openAddToolModal();
            authPassword.value = '';
            authMessage.classList.add('hidden');
        }, 1000);
    } else {
        authMessage.textContent = '密码错误！';
        authMessage.classList.remove('hidden', 'success');
        authMessage.classList.add('error');
        authPassword.value = '';
    }
});

/**
 * 回车键提交认证
 */
authPassword.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        authSubmit.click();
    }
});

/**
 * 打开添加工具模态框
 */
function openAddToolModal() {
    addToolModal.classList.remove('hidden');
    addToolForm.reset();
    imagePreview.innerHTML = '<div class="preview-placeholder">图片预览</div>';
}

/**
 * 关闭添加工具模态框
 */
document.getElementById('closeAddModal').addEventListener('click', () => {
    addToolModal.classList.add('hidden');
});

document.getElementById('cancelAdd').addEventListener('click', () => {
    addToolModal.classList.add('hidden');
});

/**
 * 图片预览
 */
toolImageInput.addEventListener('change', () => {
    const url = toolImageInput.value.trim();
    if (url) {
        imagePreview.innerHTML = `<img src="${url}" alt="preview" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.parentElement.innerHTML = '<div class=\"preview-placeholder\">图片加载失败</div>'">`;
    } else {
        imagePreview.innerHTML = '<div class="preview-placeholder">图片预览</div>';
    }
});

toolImageInput.addEventListener('input', () => {
    const url = toolImageInput.value.trim();
    if (url) {
        imagePreview.innerHTML = `<img src="${url}" alt="preview" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.parentElement.innerHTML = '<div class=\\'preview-placeholder\\'>图片加载失败</div>'">`;
    } else {
        imagePreview.innerHTML = '<div class="preview-placeholder">图片预览</div>';
    }
});

/**
 * 提交添加工具表单
 */
addToolForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newTool = {
        name: document.getElementById('toolName').value.trim(),
        description: document.getElementById('toolDescription').value.trim(),
        url: document.getElementById('toolUrl').value.trim(),
        image: document.getElementById('toolImage').value.trim()
    };
    
    const categoryKey = toolCategorySelect.value;
    
    if (newTool.name && newTool.description && newTool.url && newTool.image) {
        // 添加工具到分类
        toolsData.categories[categoryKey].tools.push(newTool);
        
        // 保存到本地存储
        saveUserTool(categoryKey, newTool);
        
        // 重新渲染
        filterToolsByCategory('all');
        
        // 关闭模态框
        addToolModal.classList.add('hidden');
        addToolForm.reset();
        imagePreview.innerHTML = '<div class="preview-placeholder">图片预览</div>';
        
        // 显示成功消息
        alert('工具添加成功！');
    } else {
        alert('请填写所有字段！');
    }
});

/**
 * 保存用户添加的工具到本地存储
 */
function saveUserTool(categoryKey, tool) {
    const userTools = JSON.parse(localStorage.getItem('userTools') || '{}');
    
    if (!userTools[categoryKey]) {
        userTools[categoryKey] = [];
    }
    
    userTools[categoryKey].push(tool);
    localStorage.setItem('userTools', JSON.stringify(userTools));
}

/**
 * 初始化
 */
document.addEventListener('DOMContentLoaded', () => {
    // 加载用户之前添加的工具
    loadUserTools();
    
    // 初始化分类按钮
    initializeCategoryButtons();
    initializeToolCategorySelect();
    
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
    
    // 如果已认证，更新按钮文本
    if (isAuthenticated) {
        adminBtn.textContent = '添加工具';
    }
});
