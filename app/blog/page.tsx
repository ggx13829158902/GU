"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, Calendar, Tag, Eye, Heart, MessageCircle, Search, Music } from "lucide-react"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")

  const blogPosts = [
    {
      id: 1,
      title: "从蓝桥杯到人工智能：我的编程成长之路",
      excerpt: "回顾参加蓝桥杯C/C++程序设计大赛的经历，以及如何从算法竞赛走向人工智能领域的学习历程...",
      category: "tech",
      date: "2025-04-15",
      readTime: "8 分钟",
      views: 1247,
      likes: 89,
      comments: 23,
      tags: ["编程", "算法", "人工智能", "成长"],
    },
    {
      id: 2,
      title: "YOLO目标检测：从理论到实践的完整指南",
      excerpt: "深入探讨YOLO模型的工作原理，分享数据标注、模型训练和部署的实战经验...",
      category: "tech",
      date: "2025-04-10",
      readTime: "12 分钟",
      views: 2156,
      likes: 156,
      comments: 45,
      tags: ["计算机视觉", "YOLO", "深度学习", "实践"],
    },
    {
      id: 3,
      title: "内向者的力量：INFP如何在技术世界中发光",
      excerpt: "作为一个INFP性格的程序员，分享如何发挥内向者的优势，在技术领域找到属于自己的道路...",
      category: "life",
      date: "2025-04-05",
      readTime: "6 分钟",
      views: 892,
      likes: 134,
      comments: 67,
      tags: ["INFP", "性格", "成长", "思考"],
    },
    {
      id: 4,
      title: "股市投资心得：技术分析与心理博弈",
      excerpt: "分享在全国大学生金融证券投资大赛中获得校第一的经验，探讨投资中的技术与心理因素...",
      category: "finance",
      date: "2025-05-28",
      readTime: "10 分钟",
      views: 1534,
      likes: 98,
      comments: 34,
      tags: ["投资", "股市", "技术分析", "心理"],
    },
    {
      id: 5,
      title: "周杰伦《她的睫毛》：音乐中的诗意与技术美学",
      excerpt: "从一个程序员的角度解读周杰伦的音乐，探讨音乐创作中的技术元素和艺术表达...",
      category: "music",
      date: "2025-02-20",
      readTime: "5 分钟",
      views: 756,
      likes: 201,
      comments: 89,
      tags: ["音乐", "周杰伦", "艺术", "美学"],
    },
    {
      id: 6,
      title: "Linux系统管理实战：从新手到进阶",
      excerpt: "系统性总结Linux网络系统管理的学习经验，分享实用的命令和配置技巧...",
      category: "tech",
      date: "2025-02-15",
      readTime: "15 分钟",
      views: 1823,
      likes: 167,
      comments: 56,
      tags: ["Linux", "系统管理", "网络", "运维"],
    },
  ]

  const categories = [
    { id: "all", name: "全部", color: "from-blue-400 to-purple-400" },
    { id: "tech", name: "技术", color: "from-green-400 to-blue-400" },
    { id: "life", name: "生活", color: "from-purple-400 to-pink-400" },
    { id: "finance", name: "金融", color: "from-yellow-400 to-orange-400" },
    { id: "music", name: "音乐", color: "from-pink-400 to-red-400" },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <audio autoPlay loop className="hidden">
        <source src="/music/shining-background.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* 页面标题 */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent mb-4">
              ∷ 混沌日志
            </h1>
            <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
              记录思维的轨迹，分享成长的感悟，在文字中寻找内心的宁静
            </p>
          </motion.div>

          {/* 搜索和分类 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            {/* 搜索框 */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-indigo-400" />
              <input
                type="text"
                placeholder="搜索文章..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/60 backdrop-blur-sm border border-indigo-500/30 rounded-lg text-indigo-200 placeholder-indigo-400/60 focus:outline-none focus:border-indigo-400/60 transition-colors"
              />
            </div>

            {/* 分类标签 */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px - 6 py - 2 rounded - full border transition - all ${
	selectedCategory === category.id
		? "bg-gradient-to-r " + category.color + " text-white border-transparent"
		: "bg-slate-800/60 text-indigo-200 border-indigo-500/30 hover:border-indigo-400/60"
} `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* 文章列表 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-6 border border-indigo-500/30 hover:border-indigo-400/60 transition-all hover:bg-slate-800/80">
                    {/* 文章头部 */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-indigo-300/80">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <BookOpen className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div
                        className={`px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${
	categories.find((c) => c.id === post.category)?.color
} text - white`}
                      >
                        {categories.find((c) => c.id === post.category)?.name}
                      </div>
					                  {/* 文章标题 */}
					                  <h2 className="text-xl font-bold text-indigo-200 mb-3 group-hover:text-indigo-100 transition-colors">
					                    {post.title}
					                  </h2>
					  
					                  {/* 文章摘要 */}
					                  <p className="text-indigo-300/80 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
					  
					                  {/* 标签 */}
					                  <div className="flex flex-wrap gap-2 mb-4">
					                    {post.tags.map((tag) => (
					                      <span
					                        key={tag}
					                        className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full border border-indigo-400/30"
					                      >
					                        <Tag className="w-3 h-3 inline mr-1" />
					                        {tag}
					                      </span>
					                    ))}
					                  </div>
					  
					                  {/* 文章统计 */}
					                  <div className="flex items-center justify-between text-sm text-indigo-300/60">
					                    <div className="flex items-center space-x-4">
					                      <div className="flex items-center space-x-1">
					                        <Eye className="w-4 h-4" />
					                        <span>{post.views}</span>
					                      </div>
					                      <div className="flex items-center space-x-1">
					                        <Heart className="w-4 h-4" />
					                        <span>{post.likes}</span>
					                      </div>
					                      <div className="flex items-center space-x-1">
					                        <MessageCircle className="w-4 h-4" />
					                        <span>{post.comments}</span>
					                      </div>
					                    </div>
					                    <motion.span className="text-indigo-400 group-hover:text-indigo-300" whileHover={{ x: 5 }}>
					                      阅读更多 →
					                    </motion.span>
					                  </div>
					                </div>
					              </motion.article>
					            ))}
					          </AnimatePresence>
					        </div>
					  
					        {/* 空状态 */}
					        {filteredPosts.length === 0 && (
					          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
					            <BookOpen className="w-16 h-16 text-indigo-400/60 mx-auto mb-4" />
					            <h3 className="text-xl font-semibold text-indigo-200 mb-2">暂无相关文章</h3>
					            <p className="text-indigo-300/60">尝试调整搜索条件或选择其他分类</p>
					          </motion.div>
					        )}
					  
					        {/* 写作感悟 */}
					        <motion.div
					          initial={{ opacity: 0, y: 20 }}
					          animate={{ opacity: 1, y: 0 }}
					          transition={{ delay: 0.8 }}
					          className="mt-16 bg-slate-800/60 backdrop-blur-sm rounded-lg p-8 border border-indigo-500/30"
					        >
					          <h2 className="text-2xl font-bold text-indigo-200 mb-4 text-center">写作感悟</h2>
					          <blockquote className="text-center text-indigo-300/80 italic text-lg">
					            "文字是思维的载体，博客是成长的见证。
					            <br />
					            在这个数字化的时代，用代码构建世界，用文字记录心灵。"
					          </blockquote>
					          <div className="text-center mt-4">
					            <span className="text-indigo-400/60 text-sm">— 古贵炫</span>
					          </div>
					        </motion.div>
					      </div>
					    </div>
					  </>
					  )}
