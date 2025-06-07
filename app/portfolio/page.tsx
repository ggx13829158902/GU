"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Globe, FileText, Code, Users, Calendar, Github, Eye } from "lucide-react"
import { EnhancedParticles } from "@/components/particle-systems/enhanced-particles"
import { useAppContext } from "@/contexts/app-context"

interface Project {
  id: string
  title: string
  description: string
  type: string
  tech: string[]
  image: string
  liveUrl: string
  github?: string
  date: string
  features: string[]
  highlights: string[]
  status: "completed" | "in-progress" | "planned"
}

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const { setCurrentPage } = useAppContext()

  useEffect(() => {
    setCurrentPage("/portfolio")
  }, [setCurrentPage])

  const projects: Project[] = [
    {
      id: "survey-form-1",
      title: "调查小问卷 - 美化版",
      description: "一个精心设计的调查问卷表单，具有现代化的用户界面和丰富的交互功能",
      type: "Web表单设计",
      tech: ["HTML5", "CSS3", "JavaScript", "响应式设计"],
      image: "/images/17.jpg",
      liveUrl: "/portfolio/form.html",
      github: "#",
      date: "2025年4月",
      status: "completed",
      features: [
        "现代化的用户界面设计",
        "完整的表单验证机制",
        "图片上传和预览功能",
        "星座选择器组件",
        "响应式布局适配",
        "流畅的动画效果",
      ],
      highlights: ["采用CSS Grid和Flexbox实现复杂布局", "JavaScript表单验证和数据处理", "优雅的用户体验设计"],
    },
    {
      id: "survey-form-2",
      title: "调查小问卷 - 基础版",
      description: "展示HTML表单基础功能的简洁版本，注重功能实现和代码结构",
      type: "Web表单基础",
      tech: ["HTML5", "CSS3", "表单处理"],
      image: "/placeholder.svg?height=200&width=300",
      liveUrl: "/portfolio/survey-form-2.html",
      github: "#",
      date: "2025年4月",
      status: "completed",
      features: [
        "标准HTML表单元素应用",
        "单选和多选控件",
        "文件上传功能",
        "文本域输入处理",
        "表单重置和提交",
        "基础CSS样式设计",
      ],
      highlights: ["掌握HTML表单的核心概念", "理解表单数据的收集和处理", "实现清晰的代码结构"],
    },
    {
      id: "homework-completion",
      title: "作业完成度复现",
      description: "一个作业完成度追踪系统，展示各科目的完成进度和统计信息",
      type: "数据可视化",
      tech: ["HTML5", "CSS3", "进度条", "数据展示"],
      image: "/images/14.jpg",
      liveUrl: "/portfolio/text1.html",
      github: "#",
      date: "2025年4月",
      status: "completed",
      features: [
        "各科目完成度统计",
        "可视化进度条展示",
        "彩色主题设计",
        "响应式布局",
        "数据动态更新",
        "清晰的信息层次",
      ],
      highlights: ["CSS进度条动画实现", "数据可视化设计", "用户友好的界面布局"],
    },
    {
      id: "dormitory-project",
      title: "共创和谐宿舍管理平台",
      description: "一个完整的宿舍管理系统，集成了多个功能模块，提供全面的宿舍生活服务",
      type: "Web应用系统",
      tech: ["HTML5", "CSS3", "JavaScript", "Web动画", "响应式设计"],
      image: "/images/10.jpg",
      liveUrl: "/portfolio/dormitory-project.html",
      github: "#",
      date: "2025年4月",
      status: "completed",
      features: [
        "多页面单页应用架构",
        "动态粒子动画效果",
        "完全响应式设计",
        "表单交互和数据处理",
        "音频播放器组件",
        "图片轮播展示功能",
        "用户权限管理",
        "数据可视化图表",
      ],
      highlights: ["掌握现代Web开发技术栈", "实现复杂的用户界面交互", "具备完整的项目开发经验"],
    },
  ]

  const skills = [
    { name: "HTML5", level: 90, color: "from-orange-400 to-red-500" },
    { name: "CSS3", level: 85, color: "from-blue-400 to-indigo-500" },
    { name: "JavaScript", level: 80, color: "from-yellow-400 to-orange-500" },
    { name: "响应式设计", level: 88, color: "from-green-400 to-teal-500" },
    { name: "Web动画", level: 75, color: "from-purple-400 to-pink-500" },
    { name: "用户体验设计", level: 82, color: "from-indigo-400 to-purple-500" },
  ]

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(selectedProject === projectId ? null : projectId)
  }

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-300 border-green-400/30"
      case "in-progress":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-400/30"
      case "planned":
        return "bg-blue-500/20 text-blue-300 border-blue-400/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-400/30"
    }
  }

  const getStatusText = (status: Project["status"]) => {
    switch (status) {
      case "completed":
        return "已完成"
      case "in-progress":
        return "进行中"
      case "planned":
        return "计划中"
      default:
        return "未知"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* 增强粒子系统 */}
      <EnhancedParticles count={60} interactive={true} />

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* 页面标题 */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-blue-400 bg-clip-text text-transparent mb-6">
            作品集
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            这里展示了我在Web开发学习过程中完成的项目作品，从基础表单到复杂应用系统
          </p>
          <div className="flex justify-center items-center space-x-6 text-blue-300/80">
            <div className="flex items-center space-x-2">
              <Code className="w-5 h-5" />
              <span>{projects.length}个项目</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>2024年作品</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>个人开发</span>
            </div>
          </div>
        </motion.div>

        {/* 项目展示区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 overflow-hidden hover:bg-slate-800/80 h-full">
                {/* 项目头部 */}
                <div
                  className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center bg-cover bg-center"
                  style={{
                    backgroundImage: project.image.includes("placeholder") ? "none" : `url(${project.image})`,
                    backgroundBlendMode: "overlay",
                  }}
                >
                  <div className="text-6xl opacity-50">{project.type.includes("表单") ? <FileText /> : <Globe />}</div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                      {project.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <span className="px-2 py-1 bg-slate-700/60 text-blue-300/80 rounded text-xs">{project.date}</span>
                    <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* 项目信息 */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-blue-200 group-hover:text-blue-100 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-500/20 hover:bg-blue-500/40 rounded-lg transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title="查看在线演示"
                      >
                        <Eye className="w-4 h-4 text-blue-300" />
                      </motion.a>
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-500/20 hover:bg-gray-500/40 rounded-lg transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          title="查看源代码"
                        >
                          <Github className="w-4 h-4 text-gray-300" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <p className="text-blue-300/70 text-sm mb-4 line-clamp-3">{project.description}</p>

                  {/* 技术栈 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* 查看详情按钮 */}
                  <motion.button
                    onClick={() => handleProjectClick(project.id)}
                    className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {selectedProject === project.id ? "收起详情" : "查看详情"}
                  </motion.button>

                  {/* 项目详情 */}
                  {selectedProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-blue-500/30"
                    >
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-blue-200 font-medium mb-2">主要功能：</h4>
                          <ul className="space-y-1">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="text-blue-300/80 text-sm flex items-center">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-blue-200 font-medium mb-2">技术亮点：</h4>
                          <ul className="space-y-1">
                            {project.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-green-300/80 text-sm flex items-center">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 技能展示区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-12 text-center">
            技术栈与能力
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="bg-slate-800/60 backdrop-blur-sm rounded-xl border border-blue-500/30 p-6 hover:border-blue-400/60 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-blue-200 font-medium">{skill.name}</h3>
                  <span className="text-blue-300/80 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 项目统计 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-blue-200 mb-8 text-center">项目成果</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <motion.div
                className="text-4xl font-bold text-blue-300 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                {projects.length}
              </motion.div>
              <p className="text-blue-200/80">完成项目</p>
            </div>
            <div>
              <motion.div
                className="text-4xl font-bold text-purple-300 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                {skills.length}
              </motion.div>
              <p className="text-purple-200/80">掌握技术</p>
            </div>
            <div>
              <motion.div
                className="text-4xl font-bold text-green-300 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.6 }}
              >
                100+
              </motion.div>
              <p className="text-green-200/80">代码小时</p>
            </div>
            <div>
              <motion.div
                className="text-4xl font-bold text-yellow-300 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.6 }}
              >
                ∞
              </motion.div>
              <p className="text-yellow-200/80">学习热情</p>
            </div>
          </div>
        </motion.div>

        {/* 联系信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="text-center"
        >
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-200 mb-4">想要了解更多？</h3>
            <p className="text-blue-300/80 mb-6">如果您对我的作品有任何疑问或想要进一步交流技术，欢迎联系我</p>
            <div className="flex justify-center space-x-4">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                发送邮件
              </motion.button>
              <motion.button
                className="px-6 py-3 bg-slate-700/60 border border-blue-400/30 text-blue-300 rounded-lg hover:bg-slate-700/80 hover:border-blue-400/60 transition-all font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                下载简历
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
