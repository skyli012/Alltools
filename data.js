// 工具数据配置
const toolsData = {
    categories: {
        video: {
            name: '视频',
            icon: '🎬',
            tools: [
                {
                    name: 'YouTube',
                    description: 'YouTube 是一个用于观看和分享各类视频的全球性平台。',
                    url: 'https://www.youtube.com/',
                    image: 'https://www.youtube.com/favicon.ico'
                },
                {
                    name: 'TikTok',
                    description: 'TikTok 是一个以短视频创作为核心的全球社交平台。',
                    url: 'https://www.tiktok.com/',
                    image: 'https://www.tiktok.com/favicon.ico'
                }
            ]
        },
        ai: {
            name: 'AI',
            icon: '🤖',
            tools: [
                {
                    name: 'ChatGPT',
                    description: 'ChatGPT 是一种基于人工智能的对话式语言模型，可用于信息查询、内容生成和辅助学习与工作。',
                    url: 'https://chatgpt.com/',
                    image: 'https://cdn.openai.com/API/favicon.ico'
                },
                {
                    name: '模拟方舟',
                    description: '提供按需付费的 GPU 算力租赁服务，支持从单卡到大规模集群的多种规格，小时级起租，助力完成 AI 训练与推理任务。',
                    url: 'https://ai.gitee.com/',
                    image: 'https://ai.gitee.com/favicon.ico'
                },
                {
                    name: 'Google AI Studio',
                    description: 'Google AI Studio 是谷歌提供的一个 AI 开发与实验平台，主要用于快速体验和调用 Gemini 等大模型。它支持文本、多模态内容生成，提供提示词调试、API 测试和原型验证功能，适合开发者与研究人员高效构建和测试 AI 应用。',
                    url: 'https://aistudio.google.com',
                    image: 'https://www.google.com/favicon.ico'
                }
            ]
        },
        network: {
            name: '外网工具',
            icon: '🌐',
            tools: [
                {
                    name: 'SDKDNS',
                    description: '一个月12元120G流量，但是较为稳定，会不定期更新App',
                    url: 'https://www.sdkdns.fun/',
                    image: 'https://www.sdkdns.fun/favicon.ico'
                },
                {
                    name: '魔戒',
                    description: '1元2G流量不限时间',
                    url: 'https://mojie.app/login',
                    image: 'https://mojie.app/favicon.ico'
                }
            ]
        },
        crack: {
            name: '破解',
            icon: '🔓',
            tools: [
                {
                    name: 'jetbra',
                    description: '可以破解JETBRAINS开发工具全家桶',
                    url: 'https://3.jetbra.in/',
                    image: 'https://3.jetbra.in/favicon.ico'
                }
            ]
        },
        audio: {
            name: '音频工具',
            icon: '🎵',
            tools: [
                {
                    name: 'lrccon',
                    description: '将lrc转为srt文件，提取歌词的网站',
                    url: 'https://www.lrccon.com/convert.php',
                    image: 'https://www.lrccon.com/favicon.ico'
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
