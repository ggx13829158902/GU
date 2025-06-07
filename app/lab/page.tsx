"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code2, Database, Globe, Terminal, Eye, TrendingUp, ChevronRight } from "lucide-react"
import { CodeParticles } from "@/components/particle-systems/code-particles"

export default function LabPage() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  const skills = [
    {
      id: "yolo",
      title: "YOLO模型训练",
      icon: Eye,
      description: "计算机视觉目标检测，数据标注与模型优化",
      details: [
        "熟练使用YOLOv8进行目标检测任务",
        "掌握数据标注工具和标注规范",
        "模型训练参数调优和性能评估",
        "实际项目中的模型部署经验",
      ],
      color: "from-green-400 to-blue-500",
    },
    {
      id: "programming",
      title: "C/C++程序设计",
      icon: Code2,
      description: "蓝桥杯省三等奖，算法与数据结构",
      details: [
        "参加蓝桥杯C/C++程序设计大赛获省三等奖",
        "熟练掌握C/C++语法和标准库",
        "算法设计与数据结构应用",
        "代码优化和性能调试",
      ],
      color: "from-purple-400 to-pink-500",
    },
    {
      id: "web",
      title: "Web前端开发",
      icon: Globe,
      description: "现代前端技术栈，响应式设计",
      details: [
        "HTML5、CSS3、JavaScript基础扎实",
        "熟悉React、Vue等现代框架",
        "响应式设计和移动端适配",
        "UI/UX设计理念和实践",
      ],
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: "linux",
      title: "Linux系统管理",
      icon: Terminal,
      description: "网络系统管理，服务器运维",
      details: [
        "Linux系统安装配置和日常维护",
        "网络服务配置和故障排除",
        "Shell脚本编写和自动化运维",
        "系统安全和性能优化",
      ],
      color: "from-orange-400 to-red-500",
    },
    {
      id: "database",
      title: "数据库原理与应用",
      icon: Database,
      description: "SQL查询优化，数据库设计",
      details: ["关系型数据库设计和规范化", "SQL查询语句编写和优化", "数据库事务和并发控制", "数据备份和恢复策略"],
      color: "from-indigo-400 to-purple-500",
    },
    {
      id: "trading",
      title: "金融证券投资",
      icon: TrendingUp,
      description: "全国大学生金融证券投资大赛校第一",
      details: [
        "获得全国大学生金融证券投资大赛校第一名",
        "一年股市交易实战经验",
        "技术分析和基本面分析",
        "风险管理和投资组合优化",
      ],
      color: "from-yellow-400 to-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-20 relative">
      {/* Add Code Particles */}
      <CodeParticles count={40} />

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* 页面标题 */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-4">
            熵减实验室
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">在混沌中寻找秩序，在代码中构建理想的数字宇宙</p>
        </motion.div>

        {/* 技能森林地图 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            const isSelected = selectedSkill === skill.id

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedSkill(isSelected ? null : skill.id)}
              >
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000`}
                  animate={isSelected ? { opacity: 0.75 } : {}}
                />

                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-blue-500/30 hover:border-blue-400/60 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-8 h-8 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`} />
                    <motion.div animate={{ rotate: isSelected ? 90 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronRight className="w-5 h-5 text-blue-400" />
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-semibold text-blue-200 mb-2">{skill.title}</h3>
                  <p className="text-blue-300/80 text-sm mb-4">{skill.description}</p>

                  {/* 展开的详细信息 */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isSelected ? "auto" : 0,
                      opacity: isSelected ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-blue-500/20 pt-4 space-y-2">
                      {skill.details.map((detail, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: isSelected ? 1 : 0, x: isSelected ? 0 : -10 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-blue-200/90 text-sm">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 学习课程展示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-8 border border-blue-500/30"
        >
          <h2 className="text-2xl font-bold text-blue-200 mb-6 flex items-center">
            <Code2 className="w-6 h-6 mr-3 text-purple-400" />
            学习轨迹
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "数据库原理与应用",
              "C语言程序设计",
              "Web前端开发",
              "Linux网络系统管理",
              "Python编程基础",
              "计算机网络基础与应用",
            ].map((course, index) => (
              <motion.div
                key={course}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-400/20 hover:border-blue-400/40 transition-colors"
              >
                <span className="text-blue-200 font-medium">{course}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 隐藏彩蛋提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-12"
        >
          <p className="text-blue-300/60 text-sm font-mono">$ grep "灵感" ./brain</p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="text-purple-300/80 text-sm italic mt-2"
          >
            "代码是诗歌，算法是韵律，调试是修辞"
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
