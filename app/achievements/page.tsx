"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Trophy, Award, Users, BookOpen, Target, Star, Zap } from "lucide-react"

export default function AchievementsPage() {
  const [selectedAchievement, setSelectedAchievement] = useState<string | null>(null)

  const achievements = [
    {
      id: "lanqiao",
      title: "蓝桥杯程序设计大赛",
      subtitle: "C/C++大学C组省三等奖",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
      description: "在激烈的编程竞赛中脱颖而出，展现算法思维和代码实现能力",
      details: ["参赛语言：C/C++", "竞赛组别：大学C组", "获奖等级：省三等奖", "核心技能：算法设计、数据结构、代码优化"],
      particles: 12,
    },
    {
      id: "design",
      title: "计算机设计大赛",
      subtitle: "项目负责人，省三等奖",
      icon: Award,
      color: "from-blue-400 to-purple-500",
      description: "作为项目负责人，带领团队完成创新性计算机应用设计",
      details: [
        "角色：项目负责人",
        "获奖等级：省三等奖",
        "项目类型：计算机应用设计",
        "核心能力：项目管理、技术创新、团队协作",
      ],
      particles: 15,
    },
    {
      id: "guoxue",
      title: "国学知识竞赛",
      subtitle: "队长身份，决赛入围",
      icon: Users,
      color: "from-green-400 to-teal-500",
      description: "以队长身份带领两名组员参加国学知识竞赛，成功入围决赛",
      details: ["角色：队长", "团队规模：3人", "成绩：决赛入围", "核心能力：领导力、传统文化素养、团队协作"],
      particles: 10,
    },
    {
      id: "finance",
      title: "金融证券投资大赛",
      subtitle: "校第一名",
      icon: Target,
      color: "from-emerald-400 to-cyan-500",
      description: "全国大学生金融证券投资大赛中获得校第一名的优异成绩",
      details: [
        "竞赛级别：全国大学生",
        "获奖等级：校第一名",
        "专业领域：金融证券投资",
        "核心能力：投资分析、风险管理、市场判断",
      ],
      particles: 18,
    },
    {
      id: "computer-cert",
      title: "计算机等级考试",
      subtitle: "成功通过并获得证书",
      icon: BookOpen,
      color: "from-purple-400 to-pink-500",
      description: "通过计算机等级考试，获得官方认证证书",
      details: ["考试类型：计算机等级考试", "考试结果：通过", "证书状态：已获得", "技能认证：计算机基础应用能力"],
      particles: 8,
    },
    {
      id: "other",
      title: "其他荣誉",
      subtitle: "多元发展，全面成长",
      icon: Star,
      color: "from-indigo-400 to-blue-500",
      description: "在学术、文化、社会实践等多个领域都有所建树",
      details: ["资助主题征文活动参与", "智信杯第四届信息素养比赛", "入团积极分子", "综合素质全面发展"],
      particles: 6,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* 页面标题 */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">
            ∷ 思维暗物质
          </h1>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            每一个奖杯都是思维碰撞的火花，每一次荣誉都是成长路上的里程碑
          </p>
        </motion.div>

        {/* 量子跃迁展区 */}
        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            const isSelected = selectedAchievement === achievement.id

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedAchievement(isSelected ? null : achievement.id)}
              >
                {/* 粒子效果背景 */}
                <div className="absolute inset-0">
                  {Array.from({ length: achievement.particles }).map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${achievement.color} rounded-full`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [0.5, 1.5, 0.5],
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                {/* 发光边框效果 */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000`}
                  animate={isSelected ? { opacity: 0.75 } : {}}
                />

                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 hover:border-purple-400/60 transition-all">
                  {/* 奖杯图标 */}
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={isSelected ? { scale: 1.1 } : {}}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* 标题和副标题 */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-purple-200 mb-2">{achievement.title}</h3>
                    <p
                      className={`text-sm font-medium bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}
                    >
                      {achievement.subtitle}
                    </p>
                  </div>

                  {/* 描述 */}
                  <p className="text-purple-300/80 text-sm text-center mb-4">{achievement.description}</p>

                  {/* 展开的详细信息 */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-purple-500/20 pt-4 space-y-3"
                      >
                        {achievement.details.map((detail, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <Zap className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                            <span className="text-purple-200/90 text-sm">{detail}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* 点击提示 */}
                  {!isSelected && (
                    <motion.div
                      className="text-center mt-4"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <span className="text-purple-400/60 text-xs">点击查看详情</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 成长轨迹时间线 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 bg-slate-800/60 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30"
        >
          <h2 className="text-2xl font-bold text-purple-200 mb-8 text-center">成长轨迹</h2>

          <div className="relative">
            {/* 时间线 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-400 to-pink-400"></div>

            <div className="space-y-8">
              {[
                { year: "2023", event: "蓝桥杯C/C++程序设计大赛省三等奖" },
                { year: "2023", event: "计算机设计大赛省三等奖（负责人）" },
                { year: "2024", event: "全国大学生金融证券投资大赛校第一" },
                { year: "2024", event: "国学知识竞赛决赛入围（队长）" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-400/30">
                      <span className="text-purple-300 font-bold text-lg">{item.year}</span>
                      <p className="text-purple-200 text-sm mt-1">{item.event}</p>
                    </div>
                  </div>

                  {/* 时间点 */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-4 border-slate-900"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 底部激励语 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-12"
        >
          <p className="text-purple-300/80 text-lg italic">"每一次挑战都是思维的跃迁，每一个荣誉都是成长的见证"</p>
        </motion.div>
      </div>
    </div>
  )
}
