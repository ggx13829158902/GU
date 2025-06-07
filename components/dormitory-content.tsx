"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, Users, Trophy, Heart, FileText, Briefcase, User, Menu, X } from "lucide-react"

export function DormitoryContent() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigationItems = [
    { id: "home", name: "首页", icon: Home },
    { id: "problems", name: "问题阐述", icon: FileText },
    { id: "demonstration", name: "团员示范", icon: Users },
    { id: "strategies", name: "带动策略", icon: Trophy },
    { id: "achievements", name: "成果展示", icon: Heart },
    { id: "interaction", name: "互动交流", icon: Briefcase },
  ]

  // Add useEffect at the top of the component to handle background music
  useEffect(() => {
    // Create background music element for dormitory content
    const backgroundMusic = document.createElement("audio")
    backgroundMusic.src = "/music/shining.mp3"
    backgroundMusic.loop = true
    backgroundMusic.autoplay = true
    backgroundMusic.volume = 0.3
    backgroundMusic.style.display = "none"

    // Check if music is already playing to avoid duplicates
    const existingMusic = document.querySelector('audio[src="/music/shining.mp3"]')
    if (!existingMusic) {
      document.body.appendChild(backgroundMusic)

      const playPromise = backgroundMusic.play()
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay prevented:", error)
        })
      }
    }

    return () => {
      const musicElement = document.querySelector('audio[src="/music/shining.mp3"]')
      if (musicElement && musicElement.parentNode) {
        musicElement.parentNode.removeChild(musicElement)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <img src="/images/1.jpg" alt="Youth League" className="h-12 w-12" />
              <img src="/images/2.jpg" alt="College Logo" className="h-8 w-auto" />
              <h1 className="text-xl font-bold text-gray-800">共创和谐宿舍</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                      activeSection === item.id
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </button>
                )
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 space-y-2"
            >
              {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id)
                      setMobileMenuOpen(false)
                    }}
                    className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                      activeSection === item.id
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </button>
                )
              })}
            </motion.nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeSection === "home" && <HomeSection />}
        {activeSection === "problems" && <ProblemsSection />}
        {activeSection === "demonstration" && <DemonstrationSection />}
        {activeSection === "strategies" && <StrategiesSection />}
        {activeSection === "achievements" && <AchievementsSection />}
        {activeSection === "interaction" && <InteractionSection />}
      </main>
    </div>
  )
}

function HomeSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      {/* Hero Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">营造和谐宿舍环境</h2>
            <p className="text-gray-600 mb-6">
              通过团员示范作用，带动全体同学共同创建安全、和谐、温馨的宿舍环境，
              促进良好宿舍文化建设，提高宿舍生活质量。
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                了解更多
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                参与互动
              </button>
            </div>
          </div>
          <div>
            <img src="/images/10.jpg" alt="Clean Dormitory" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">安全第一</h3>
            <p className="text-gray-600">了解宿舍安全隐患，避免使用大功率电器，共同维护宿舍安全。</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">和谐相处</h3>
            <p className="text-gray-600">尊重他人作息时间，保持适当音量，创造和谐的宿舍氛围。</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">共同成长</h3>
            <p className="text-gray-600">通过宿舍活动和交流，增进友谊，共同进步，提升综合素质。</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProblemsSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">宿舍常见问题阐述</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <img
            src="/images/4.jpg"
            alt="Prohibited Appliances Chart"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-3">大功率电器使用问题</h3>
          <p className="text-gray-600 mb-4">
            大功率电器（如电吹风、电热毯、小火锅等）可能对宿舍电路安全造成严重危害。
            宿舍电路设计通常只能承受有限的电流负荷。
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 电路过载，导致电线发热，增加火灾风险</li>
            <li>• 频繁跳闸，影响整个宿舍甚至整层楼的用电</li>
            <li>• 电器短路，可能引发火灾</li>
            <li>• 增加触电风险</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <img src="/images/5.jpg" alt="Prohibited Items" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-3">宿舍违禁品展示</h3>
          <p className="text-gray-600 mb-4">
            这些常见的宿舍违禁品存在严重安全隐患，包括电热锅、电热毯、 电饭煲、电磁炉、电取暖器等大功率电器。
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-red-700 text-sm font-medium">⚠️ 警告：使用这些电器可能导致火灾、触电等严重后果</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <img src="/images/3.jpg" alt="Messy Dormitory" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-3">宿舍环境混乱问题</h3>
          <p className="text-gray-600 mb-4">
            宿舍内电器摆放混乱、电线私拉乱接不仅影响美观， 更重要的是存在严重的安全隐患。
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 电线裸露，容易造成触电事故</li>
            <li>• 电器堆积，散热不良易引发火灾</li>
            <li>• 环境脏乱，影响身心健康</li>
            <li>• 违反学校管理规定</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <img src="/images/8.jpg" alt="Fire Safety Education" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-3">消防安全教育</h3>
          <p className="text-gray-600 mb-4">
            通过消防安全教育，提高同学们的安全意识， 学会正确使用电器，预防火灾事故的发生。
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-blue-700 text-sm font-medium">💡 提示：定期参加消防安全培训，掌握基本的消防知识</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function DemonstrationSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">团员示范作用</h2>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">以身作则，树立榜样</h3>
            <p className="text-gray-600 mb-6">
              团员应该在宿舍生活中发挥模范带头作用，严格遵守宿舍规定， 从不使用大功率电器、按时熄灯等方面进行自我约束。
            </p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>严格遵守作息时间，按时熄灯休息</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>拒绝使用大功率电器，确保宿舍安全</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>保持宿舍整洁，主动承担清洁任务</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>积极与室友沟通，化解矛盾冲突</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/images/10.jpg"
              alt="Clean and Organized Dormitory"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
          <div className="text-center">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold mb-2">自律自强</h4>
            <p className="text-sm text-gray-600">团员要有高度的自律性，严格要求自己，做好表率</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
          <div className="text-center">
            <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold mb-2">团结协作</h4>
            <p className="text-sm text-gray-600">主动帮助室友，营造团结友爱的宿舍氛围</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
          <div className="text-center">
            <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold mb-2">关爱他人</h4>
            <p className="text-sm text-gray-600">关心室友的学习和生活，及时提供帮助和支持</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function StrategiesSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">带动策略</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">宣传教育</h3>
          <p className="text-gray-600 mb-4">通过制作海报、举办主题班会等方式，普及宿舍规定和良好行为习惯的重要性。</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• 制作宿舍安全知识海报</li>
            <li>• 组织宿舍文明主题班会</li>
            <li>• 开展安全知识竞赛活动</li>
            <li>• 邀请专家进行安全讲座</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">制定公约</h3>
          <p className="text-gray-600 mb-4">组织室友共同讨论并制定宿舍公约，明确各项规定和奖惩措施。</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• 民主讨论制定宿舍规章</li>
            <li>• 明确作息时间和卫生标准</li>
            <li>• 建立违规处罚机制</li>
            <li>• 设立表彰奖励制度</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">组织活动</h3>
          <p className="text-gray-600 mb-4">通过组织各类宿舍活动，增进室友之间的感情和凝聚力。</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• 举办宿舍文化节活动</li>
            <li>• 组织集体观影学习</li>
            <li>• 开展体育竞赛活动</li>
            <li>• 进行志愿服务活动</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">互助监督</h3>
          <p className="text-gray-600 mb-4">建立互助监督机制，相互提醒和帮助，共同维护宿舍秩序。</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• 建立宿舍值日轮换制度</li>
            <li>• 设立安全检查小组</li>
            <li>• 开展互相监督活动</li>
            <li>• 及时反馈问题和建议</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

function AchievementsSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">成果展示</h2>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-semibold mb-6 text-center">从"问题宿舍"到"模范宿舍"的转变</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-3">改善前的问题</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• 宿舍卫生状况差，经常被扣分</li>
              <li>• 室友之间缺乏沟通，关系紧张</li>
              <li>• 作息时间不一致，相互影响</li>
              <li>• 使用违规电器，存在安全隐患</li>
            </ul>

            <h4 className="text-lg font-semibold mb-3 mt-6">采取的措施</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• 组织宿舍会议，坦诚交流问题</li>
              <li>• 共同制定详细的宿舍公约</li>
              <li>• 建立值日轮换制度</li>
              <li>• 定期组织宿舍活动</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">取得的成果</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• 宿舍卫生状况显著改善</li>
              <li>• 室友关系融洽，互帮互助</li>
              <li>• 作息时间规律，学习效率提高</li>
              <li>• 安全意识增强，杜绝违规电器</li>
              <li>• 获得学院"模范宿舍"称号</li>
            </ul>

            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-700 text-sm italic">
                "通过共同努力，我们宿舍从一个经常被投诉的'问题宿舍'变成了学院的'模范宿舍'。
                最重要的是，我们不再只是住在同一个房间的陌生人，而是成为了互相关心、互相帮助的好朋友。"
                <br />
                <span className="font-medium">—— 宿舍长小王</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-yellow-600 mb-2">95%</div>
          <p className="text-gray-700">宿舍卫生合格率提升</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">0</div>
          <p className="text-gray-700">安全事故发生次数</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
          <p className="text-gray-700">获得"模范宿舍"数量</p>
        </div>
      </div>
    </motion.div>
  )
}

function InteractionSection() {
  const [feedback, setFeedback] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (feedback.trim()) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFeedback("")
      }, 3000)
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">互动交流</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">问题反馈</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">反馈内容</label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="请描述您遇到的问题或提出改进建议..."
                className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              提交反馈
            </button>
          </form>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg"
            >
              <p className="text-green-700 text-sm">✅ 反馈提交成功！我们会认真处理您的建议。</p>
            </motion.div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">联系方式</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">学生事务办公室</p>
                <p className="text-sm text-gray-600">电话：020-87975666</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium">宿舍管理中心</p>
                <p className="text-sm text-gray-600">邮箱：dormitory@gzccc.edu.cn</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="font-medium">心理咨询中心</p>
                <p className="text-sm text-gray-600">QQ群：123456789</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-semibold mb-6 text-center">经验分享</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                李
              </div>
              <div>
                <p className="font-medium">李同学</p>
                <p className="text-sm text-gray-600">计算机科学学院</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              "通过制定宿舍公约和定期开展活动，我们宿舍的氛围变得更加和谐。
              大家都能自觉遵守规定，互相帮助，学习效率也提高了很多。"
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                张
              </div>
              <div>
                <p className="font-medium">张同学</p>
                <p className="text-sm text-gray-600">机械工程学院</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              "作为团员，我深感责任重大。通过以身作则，带动室友一起维护宿舍环境，
              不仅提升了大家的安全意识，也增进了彼此的友谊。"
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
