// 工具数据配置
const toolsData = {
    categories: {
        dev: {
            name: '开发工具',
            icon: '💻',
            tools: [
                {
                    name: 'GitHub',
                    description: '全球最大的代码托管平台，支持版本控制和协作开发',
                    url: 'https://github.com',
                    image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                },
                {
                    name: 'VS Code',
                    description: '轻量级代码编辑器，功能强大支持多种编程语言',
                    url: 'https://code.visualstudio.com',
                    image: 'https://code.visualstudio.com/favicon.ico'
                },
                {
                    name: 'MDN Web Docs',
                    description: 'Web技术文档参考，涵盖HTML、CSS、JavaScript等',
                    url: 'https://developer.mozilla.org',
                    image: 'https://developer.mozilla.org/apple-touch-icon.png'
                },
                {
                    name: 'Stack Overflow',
                    description: '程序员问答社区，解决编程问题的最佳平台',
                    url: 'https://stackoverflow.com',
                    image: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png'
                },
                {
                    name: 'Codepen',
                    description: '在线代码编写和分享平台，实时预览代码效果',
                    url: 'https://codepen.io',
                    image: 'https://codepen.io/favicon.ico'
                }
            ]
        },
        algorithm: {
            name: '算法工具',
            icon: '📊',
            tools: [
                {
                    name: 'LeetCode',
                    description: '编程算法训练平台，提供海量编程题目和面试准备',
                    url: 'https://leetcode.com',
                    image: 'https://assets.leetcode.com/static_assets/public/favicon-256.png'
                },
                {
                    name: '牛客网',
                    description: '算法和编程面试题库，实战演练提升编程能力',
                    url: 'https://nowcoder.com',
                    image: 'https://www.nowcoder.com/favicon.ico'
                },
                {
                    name: 'Codeforces',
                    description: '竞技编程平台，汇集全球编程高手的竞赛',
                    url: 'https://codeforces.com',
                    image: 'https://codeforces.com/favicon.ico'
                },
                {
                    name: 'Visualgo',
                    description: '算法可视化工具，直观展示数据结构和算法运行过程',
                    url: 'https://visualgo.net',
                    image: 'https://visualgo.net/img/favicon.png'
                }
            ]
        },
        ai: {
            name: 'AI工具',
            icon: '🤖',
            tools: [
                {
                    name: 'ChatGPT',
                    description: 'OpenAI 大型语言模型，AI对话和内容生成助手',
                    url: 'https://chat.openai.com',
                    image: 'https://cdn.openai.com/API/favicon.ico'
                },
                {
                    name: 'Gemini',
                    description: 'Google AI对话助手，强大的文本理解和生成能力',
                    url: 'https://gemini.google.com',
                    image: 'https://www.google.com/favicon.ico'
                },
                {
                    name: 'Copilot',
                    description: 'GitHub代码生成AI助手，智能辅助编程',
                    url: 'https://github.com/features/copilot',
                    image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                },
                {
                    name: 'Midjourney',
                    description: 'AI图像生成工具，文字描述转化为精美图像',
                    url: 'https://www.midjourney.com',
                    image: 'https://www.midjourney.com/favicon.ico'
                },
                {
                    name: 'Hugging Face',
                    description: 'AI模型库和社区，发现和分享ML模型',
                    url: 'https://huggingface.co',
                    image: 'https://huggingface.co/front/assets/huggingface_logo-nobg.svg'
                }
            ]
        },
        design: {
            name: '设计工具',
            icon: '🎨',
            tools: [
                {
                    name: 'Figma',
                    description: '在线UI/UX设计工具，支持团队实时协作',
                    url: 'https://www.figma.com',
                    image: 'https://www.figma.com/favicon.ico'
                },
                {
                    name: 'Adobe Creative Cloud',
                    description: '专业设计套件，包含Photoshop、Illustrator等',
                    url: 'https://www.adobe.com/products/creative.html',
                    image: 'https://www.adobe.com/favicon.ico'
                },
                {
                    name: 'Canva',
                    description: '简易平面设计工具，无需设计经验即可创建精美设计',
                    url: 'https://www.canva.com',
                    image: 'https://www.canva.com/favicon.ico'
                },
                {
                    name: 'Unsplash',
                    description: '免费高质量图片库，超百万张免费图片下载',
                    url: 'https://unsplash.com',
                    image: 'https://unsplash.com/favicon.ico'
                }
            ]
        },
        learning: {
            name: '学习资源',
            icon: '📚',
            tools: [
                {
                    name: 'Coursera',
                    description: '在线大学课程平台，获得知名大学的课程认证',
                    url: 'https://www.coursera.org',
                    image: 'https://www.coursera.org/favicon.ico'
                },
                {
                    name: 'Udemy',
                    description: '视频教学课程平台，数千门专业课程供学习',
                    url: 'https://www.udemy.com',
                    image: 'https://www.udemy.com/favicon.ico'
                },
                {
                    name: '掘金',
                    description: '开发者社区和知识分享，技术文章和经验分享',
                    url: 'https://juejin.cn',
                    image: 'https://juejin.cn/favicon.ico'
                },
                {
                    name: 'YouTube',
                    description: '视频学习资源库，海量教程和教学视频',
                    url: 'https://www.youtube.com',
                    image: 'https://www.youtube.com/favicon.ico'
                },
                {
                    name: '技术文档',
                    description: '各类技术官方文档，DevDocs合集查询',
                    url: 'https://devdocs.io',
                    image: 'https://devdocs.io/favicon.ico'
                }
            ]
        },
        utility: {
            name: '实用工具',
            icon: '⚙️',
            tools: [
                {
                    name: 'ConverKit',
                    description: '在线文件转换工具，支持多种格式互相转换',
                    url: 'https://convertkit.online',
                    image: 'https://convertkit.online/favicon.ico'
                },
                {
                    name: 'JSON在线工具',
                    description: 'JSON验证和格式化，美化JSON数据',
                    url: 'https://www.json.cn',
                    image: 'https://www.json.cn/favicon.ico'
                },
                {
                    name: 'Lorem Picsum',
                    description: '占位图片生成，快速获取各尺寸占位图',
                    url: 'https://picsum.photos',
                    image: 'https://picsum.photos/favicon.ico'
                },
                {
                    name: 'Regex Tester',
                    description: '正则表达式测试工具，可视化正则匹配过程',
                    url: 'https://regex101.com',
                    image: 'https://regex101.com/static/img/favicon.png'
                },
                {
                    name: 'Lighthouse',
                    description: '网站性能分析工具，检测网站优化建议',
                    url: 'https://developers.google.com/web/tools/lighthouse',
                    image: 'https://www.google.com/favicon.ico'
                }
            ]
        }
    }
};

// 从本地存储加载用户添加的工具
function loadUserTools() {
    const userTools = JSON.parse(localStorage.getItem('userTools') || '{}');
    Object.keys(userTools).forEach(categoryKey => {
        if (toolsData.categories[categoryKey]) {
            toolsData.categories[categoryKey].tools = [
                ...toolsData.categories[categoryKey].tools,
                ...userTools[categoryKey]
            ];
        }
    });
}
