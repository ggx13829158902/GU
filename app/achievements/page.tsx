"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Trophy, Award, Users, TrendingUp, Code, Calendar, MapPin, Star } from "lucide-react"
import { AchievementParticles } from "@/components/particle-systems/achievement-particles"

export default function AchievementsPage() {
  const [selectedAchievement, setSelectedAchievement] = useState<string | null>(null)

  const achievements = [
    {
      id: "lanqiao",
      title: "蓝桥杯程序设计大赛",
      subtitle: "C/C++大学C组省三等奖",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
      date: "2025年4月",
      location: "省级竞赛",
      description: "在激烈的编程竞赛中脱颖而出，展现算法思维和代码实现能力",
      details: ["参赛语言：C/C++", "竞赛组别：大学C组", "获奖等级：省三等奖", "核心技能：算法设计、数据结构、代码优化"],
      achievements: ["掌握高效的算法设计思路", "提升代码调试和优化能力", "培养竞赛心理素质"],
      impact: "通过竞赛实践，深化了对编程的理解，为后续技术学习奠定基础",
      particles: 12,
    },
    {
      id: "design",
      title: "计算机设计大赛",
      subtitle: "项目负责人，省三等奖",
      icon: Award,
      color: "from-blue-400 to-purple-500",
      date: "2025年4月",
      location: "省级竞赛",
      description: "作为项目负责人，带领团队完成创新性计算机应用设计项目",
      details: [
        "角色：项目负责人",
        "获奖等级：省三等奖",
        "项目类型：计算机应用设计",
        "核心能力：项目管理、技术创新、团队协作",
      ],
      achievements: ["锻炼项目管理和团队领导能力", "提升技术方案设计能力", "增强创新思维和实践能力"],
      impact: "领导团队项目的经历培养了我的组织协调能力和技术视野",
      particles: 15,
    },
    {
      id: "guoxue",
      title: "国学知识竞赛",
      subtitle: "队长身份，决赛入围",
      icon: Users,
      color: "from-green-400 to-teal-500",
      date: "2025年5月",
      location: "校级竞赛",
      description: "以队长身份带领两名组员参加国学知识竞赛，成功入围决赛",
      details: ["角色：队长", "团队规模：3人", "成绩：决赛入围", "核心能力：领导力、传统文化素养、团队协作"],
      achievements: ["培养团队协作和领导能力", "加深对传统文化的理解", "提升知识整合和表达能力"],
      impact: "通过文化竞赛，平衡了理工科学习与人文素养的培养",
      particles: 10,
    },
    {
      id: "finance",
      title: "金融证券投资大赛",
      subtitle: "校第一名",
      icon: TrendingUp,
      color: "from-emerald-400 to-cyan-500",
      date: "2025年4月",
      location: "全国大学生竞赛",
      description: "在全国大学生金融证券投资大赛中获得校内第一名的优异成绩",
      details: [
        "获奖等级：校第一名",
        "竞赛类型：金融证券投资",
        "实战经验：一年股市交易",
        "核心能力：技术分析、风险管理、投资决策",
      ],
      achievements: ["掌握金融市场分析方法", "培养风险控制意识", "提升数据分析和决策能力"],
      impact: "金融投资经历培养了我的风险意识和数据分析思维",
      particles: 18,
    },
  ]

  const stats = [
    { label: "获奖次数", value: "4", color: "text-yellow-300" },
    { label: "竞赛参与", value: "6+", color: "text-blue-300" },
    { label: "团队项目", value: "3", color: "text-green-300" },
    { label: "领导经验", value: "2", color: "text-purple-300" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 pt-20 relative overflow-hidden">
      {/* Add Achievement Particles */}
      <AchievementParticles count={30} />

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* 页面标题 */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mb-4">
            ∷ 星光轨迹
          </h1>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto mb-8">
            记录成长路上的每一个里程碑，见证从迷茫到清晰的蜕变历程
          </p>

          {/* 成就统计 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30"
              >
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-purple-300/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 成就展示 */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            const isSelected = selectedAchievement === achievement.id

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedAchievement(isSelected ? null : achievement.id)}
              >
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000`}
                  animate={isSelected ? { opacity: 0.75 } : {}}
                />

                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all">
                  {/* 头部信息 */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <motion.div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{
                            background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                          }}
                          whileHover={{ scale: 1.1, rotate: 10 }}
                        >
                          <div
                            className={`w-full h-full bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-purple-200">{achievement.title}</h3>
                          <p className="text-purple-300/80 text-sm">{achievement.subtitle}</p>
                        </div>
                      </div>

                      {/* 时间和地点 */}
                      <div className="flex items-center space-x-4 text-sm text-purple-300/60 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{achievement.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{achievement.location}</span>
                        </div>
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: isSelected ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-purple-400"
                    >
                      <Star className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* 描述 */}
                  <p className="text-purple-300/80 mb-6">{achievement.description}</p>

                  {/* 详细信息 */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6 border-t border-purple-500/20 pt-6"
                      >
                        {/* 详细信息 */}
                        <div>
                          <h4 className="text-purple-200 font-medium mb-3 flex items-center">
                            <Code className="w-4 h-4 mr-2" />
                            详细信息
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {achievement.details.map((detail, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start space-x-2 text-sm"
                              >
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-purple-200/90">{detail}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* 收获成就 */}
                        <div>
                          <h4 className="text-purple-200 font-medium mb-3 flex items-center">
                            <Trophy className="w-4 h-4 mr-2" />
                            收获成就
                          </h4>
                          <div className="space-y-2">
                            {achievement.achievements.map((item, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className="flex items-start space-x-2 text-sm"
                              >
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-green-200/90">{item}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* 影响感悟 */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="bg-purple-500/10 rounded-lg p-4 border border-purple-400/20"
                        >
                          <h4 className="text-purple-200 font-medium mb-2 flex items-center">
                            <Star className="w-4 h-4 mr-2" />
                            影响与感悟
                          </h4>
                          <p className="text-purple-300/80 text-sm italic">{achievement.impact}</p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* 粒子效果 */}
                  {isSelected && (
                    <div className="absolute inset-0 pointer-events-none">
                      {Array.from({ length: achievement.particles }).map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 bg-gradient-to-r ${achievement.color} rounded-full opacity-60`}
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                          }}
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.5, 1.5, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 成长时间线 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 mb-16"
        >
          <h2 className="text-2xl font-bold text-purple-200 mb-8 text-center flex items-center justify-center">
            <Trophy className="w-6 h-6 mr-3 text-yellow-400" />
            成长时间线
          </h2>

          <div className="relative">
            {/* 时间线 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-400 to-blue-400"></div>

            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* 内容卡片 */}
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <div className="bg-slate-700/60 rounded-lg p-4 border border-purple-400/30">
                      <h3 className="font-bold text-purple-200 mb-1">{achievement.title}</h3>
                      <p className="text-purple-300/80 text-sm mb-2">{achievement.subtitle}</p>
                      <span className="text-purple-400/60 text-xs">{achievement.date}</span>
                    </div>
                  </div>

                  {/* 中心节点 */}
                  <div className="w-2/12 flex justify-center">
                    <div
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${achievement.color} border-4 border-slate-800 relative z-10`}
                    ></div>
                  </div>

                  {/* 占位空间 */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 感悟总结 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-center"
        >
          <blockquote className="text-xl text-purple-300/80 italic max-w-3xl mx-auto leading-relaxed">
            "每一次获奖都不是终点，而是新征程的起点。
            <br />
            在竞赛中学会坚持，在团队中学会协作，在挑战中学会成长。
            <br />
            这些闪光的时刻，构成了我青春年华中最珍贵的回忆。"
          </blockquote>
          <div className="mt-6">
            <span className="text-purple-400/60 text-sm">— 回望来路，展望前程</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
