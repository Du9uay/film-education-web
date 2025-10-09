import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, 
  Network,
  BookOpen,
  Settings,
  Users,
  Monitor,
  Shield,
  CheckCircle,
  ArrowLeft,
  ArrowRight
} from '../../components/Icons';

const ProgramDevelopmentPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);

  // 帮助内容数据
  const helpSections = [
    {
      id: 'personal-help',
      title: '对个人的帮助',
      icon: Target,
      description: '流程化创作为个人媒体工作者带来的核心价值',
      benefits: [
        {
          title: '打通全流程协同能力',
          content: '媒体工作者学习电影流程化创作能够提升全流程协同能力。通过参与影视片创作的各个环节，了解不同部门的工作内容和运作方式，能够在跨部门协作中更好地沟通与配合。',
          example: '在参与一部纪录片的创作时，从前期策划的选题讨论，到中期拍摄的镜头协作，再到后期剪辑的内容整合，都需要与编导、摄影、录音等部门密切配合。通过流程化创作的学习，能够掌握各环节的衔接要点，提高协同工作的效率，从而提升个人在媒体项目中的综合工作能力。',
          skills: [
            '跨部门协作沟通技巧',
            '项目时间节点管理',
            '团队配合默契培养',
            '综合工作能力提升'
          ]
        },
        {
          title: '应对突发状况的能力',
          content: '在实际拍摄中，常常会出现忘记带内存卡等意外情况。如果遵循流程化创作，在前期准备阶段就会有严格的设备检查流程，会提前准备多份内存卡并进行备份。',
          example: '摄影部门在出发拍摄前，会按照流程进行设备清单核对，确保内存卡、电池等设备齐全。这样即使出现忘记带内存卡的情况，也有备用方案可以及时解决，避免拍摄工作的中断，保证了拍摄进度和素材的完整性，体现了流程化创作在应对突发情况时的重要价值。',
          skills: [
            '风险预判与预案制定',
            '设备管理标准化',
            '应急处理快速响应',
            '流程意识强化培养'
          ]
        }
      ]
    },
    {
      id: 'industry-help',
      title: '对行业的帮助',
      icon: Network,
      description: '流程化创作对整个媒体行业发展的推动作用',
      benefits: [
        {
          title: '打破资源垄断，小微团队百花齐放',
          content: '流程化创作有助于打破资源垄断，促进小微团队在影视行业中百花齐放。通过标准化的流程体系，小微团队可以借鉴大型电影公司的制作流程，合理分配资源，提高制作效率。',
          example: '在现代抖音短剧的拍摄中，采用了流水线式的流程化创作模式，从剧本快速创作、场景快速搭建、演员快速选角到拍摄快速推进，小微团队可以利用这种标准化流程，以较低的成本进行短剧创作。通过流程化，小微团队能够在内容创作上与大型团队竞争，丰富影视市场的内容多样性，推动整个行业的健康发展。',
          skills: [
            '标准化流程体系建立',
            '资源配置优化',
            '成本控制有效管理',
            '市场竞争力增强'
          ]
        },
        {
          title: '现代抖音短剧的拍摄流水线案例',
          content: '以现代抖音短剧为例，其拍摄流水线具有典型的流程化特征。这种流水线式的流程化创作模式，使得小微团队能够在短时间内高效产出大量短剧内容，丰富了短视频影视市场。',
          example: '首先是剧本快速创作，由专业编剧团队根据市场热点快速编写剧本，通常在1-2天内完成一个短剧剧本的创作。然后是场景快速搭建，采用可移动的简易场景道具，在1-2小时内完成场景布置。演员选角通过线上平台快速筛选，1-2天内确定演员。拍摄阶段按照分镜脚本进行快速拍摄，每个场景通常拍摄1-2条即可通过。后期制作也采用标准化流程，剪辑、特效、配音等环节在1-2天内完成。',
          skills: [
            '快速创作标准化',
            '敏捷开发方法应用',
            '效率最大化管理',
            '市场响应速度提升'
          ]
        }
      ]
    }
  ];

  // 流程化创作的核心价值
  const coreValues = [
    {
      title: '提升专业性',
      icon: Target,
      description: '通过规范化流程提升工作的专业性和系统性',
      benefits: [
        '建立标准化的工作流程',
        '形成系统性的思维模式',
        '培养专业化的操作习惯',
        '提升整体工作质量'
      ]
    },
    {
      title: '增强协作能力',
      icon: Users,
      description: '在团队协作中发挥更大的价值',
      benefits: [
        '理解各部门协作逻辑',
        '提升跨部门沟通效率',
        '增强团队配合默契度',
        '优化整体项目执行'
      ]
    },
    {
      title: '适应行业趋势',
      icon: Monitor,
      description: '适应影视行业工业化发展趋势',
      benefits: [
        '掌握工业化制作标准',
        '提升市场竞争力',
        '拓展职业发展机会',
        '增强行业适应性'
      ]
    },
    {
      title: '优化资源配置',
      icon: Settings,
      description: '通过流程化实现资源的最优配置',
      benefits: [
        '降低制作成本',
        '提高制作效率',
        '减少资源浪费',
        '增强项目可控性'
      ]
    }
  ];

  // 自动切换展示
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % helpSections.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen py-8 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* 页面标题 */}
        <motion.div 
          className="glass-card p-8 mb-8 relative overflow-hidden gpu-accelerated"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[color:var(--gold-cinema)] rounded-l-2xl" />
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--gold-cinema)] to-[color:var(--gold-cinema)]/80 rounded-2xl flex items-center justify-center mr-6 shadow-xl">
              <BookOpen className="w-8 h-8 text-[color:var(--bg-cinema-dark)]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[color:var(--text-cashmere-100)] mb-2">
                流程化创作对媒体工作者的帮助
              </h1>
              <p className="text-[color:var(--text-cashmere-100)]/80 text-lg">
                深入理解电影流程化创作为个人和行业发展带来的重要价值
              </p>
            </div>
          </div>
        </motion.div>

        {/* 核心价值概览 */}
        <motion.div
          className="glass-effect-light p-8 rounded-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold text-[color:var(--text-cashmere-100)] mb-8 text-center">
            流程化创作的核心价值
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative glass-effect p-6 rounded-2xl border border-white/10 hover:border-[color:var(--gold-cinema)]/30 transition-all duration-300 h-full">
                  {/* 背景光效 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--gold-cinema)]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    {/* 图标 */}
                    <div className="w-14 h-14 bg-gradient-to-br from-[color:var(--gold-cinema)]/20 to-[color:var(--gold-cinema)]/10 rounded-2xl flex items-center justify-center mb-4">
                      <value.icon className="w-7 h-7 text-[color:var(--gold-cinema)]" />
                    </div>

                    {/* 标题 */}
                    <h3 className="text-lg font-bold text-[color:var(--text-cashmere-100)] mb-3">
                      {value.title}
                    </h3>

                    {/* 描述 */}
                    <p className="text-[color:var(--text-cashmere-100)]/80 text-sm mb-4 leading-relaxed">
                      {value.description}
                    </p>

                    {/* 受益点 */}
                    <div className="space-y-2">
                      {value.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-[color:var(--gold-cinema)] rounded-full mt-2 mr-2 flex-shrink-0" />
                          <span className="text-[color:var(--text-cashmere-100)]/70 text-xs">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 详细帮助内容切换展示 */}
        <div className="space-y-8">
          {/* 切换选项卡 */}
          <div className="flex justify-center mb-8">
            <div className="glass-effect p-2 rounded-2xl border border-white/10">
              <div className="flex">
                {helpSections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSection(index)}
                    className={`relative px-8 py-4 rounded-xl transition-all duration-500 ${
                      activeSection === index
                        ? 'bg-[color:var(--gold-cinema)] text-[color:var(--bg-cinema-dark)] shadow-lg'
                        : 'text-[color:var(--text-cashmere-100)]/80 hover:text-[color:var(--text-cashmere-100)]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <section.icon className="w-5 h-5" />
                      <span className="font-semibold">{section.title}</span>
                    </div>
                    {activeSection === index && (
                      <div className="absolute inset-0 bg-[color:var(--gold-cinema)]/20 rounded-xl blur-xl" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 当前选中内容 */}
          <motion.div
            key={activeSection}
            className="glass-effect-light p-8 rounded-2xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--gold-cinema)] to-[color:var(--gold-cinema)]/70 rounded-2xl flex items-center justify-center mr-6">
                {React.createElement(helpSections[activeSection].icon, { 
                  className: "w-8 h-8 text-[color:var(--bg-cinema-dark)]" 
                })}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[color:var(--text-cashmere-100)] mb-2">
                  {helpSections[activeSection].title}
                </h2>
                <p className="text-[color:var(--text-cashmere-100)]/80">
                  {helpSections[activeSection].description}
                </p>
              </div>
            </div>

            {/* 详细内容 */}
            <div className="space-y-10">
              {helpSections[activeSection].benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* 卡片主体 */}
                  <div className="relative">
                    {/* 装饰性序号 */}
                    <div className="absolute -left-4 -top-4 w-12 h-12 bg-gradient-to-br from-[color:var(--gold-cinema)]/30 to-[color:var(--gold-cinema)]/10 rounded-2xl flex items-center justify-center">
                      <span className="text-xl font-bold text-[color:var(--gold-cinema)]">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>

                    <div className="glass-effect p-8 rounded-2xl border border-white/10 ml-4">
                      {/* 标题 */}
                      <h3 className="text-xl font-bold text-[color:var(--text-cashmere-100)] mb-4 flex items-center">
                        <div className="w-1 h-6 bg-[color:var(--gold-cinema)] rounded-full mr-3" />
                        {benefit.title}
                      </h3>

                      {/* 内容描述 */}
                      <p className="text-[color:var(--text-cashmere-100)]/85 leading-relaxed mb-6">
                        {benefit.content}
                      </p>

                      {/* 实例展示 */}
                      <div className="relative mb-6">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[color:var(--gold-cinema)] to-[color:var(--gold-cinema)]/50 rounded-full" />
                        <div className="pl-6">
                          <h4 className="text-sm font-semibold text-[color:var(--gold-cinema)] mb-3">
                            📋 实际案例
                          </h4>
                          <div className="bg-gradient-to-r from-[color:var(--gold-cinema)]/10 to-transparent p-6 rounded-2xl border border-[color:var(--gold-cinema)]/20">
                            <p className="text-[color:var(--text-cashmere-100)]/85 text-sm leading-relaxed">
                              {benefit.example}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 技能要点 */}
                      <div>
                        <h4 className="text-sm font-semibold text-[color:var(--text-cashmere-100)]/90 mb-4">
                          🎯 关键技能提升
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {benefit.skills.map((skill, skillIndex) => (
                            <motion.div 
                              key={skillIndex}
                              className="flex items-center p-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.2 + skillIndex * 0.05 }}
                            >
                              <CheckCircle className="w-4 h-4 text-[color:var(--gold-cinema)] mr-3 flex-shrink-0" />
                              <span className="text-[color:var(--text-cashmere-100)]/85 text-sm">
                                {skill}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 总结与展望 */}
        <motion.div
          className="glass-effect-light p-8 rounded-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold text-[color:var(--text-cashmere-100)] mb-6 flex items-center">
            <Shield className="w-6 h-6 text-[color:var(--gold-cinema)] mr-3" />
            流程化创作的未来价值
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-base p-6">
              <h3 className="text-lg font-semibold text-[color:var(--text-cashmere-100)] mb-4 flex items-center">
                <div className="w-3 h-3 bg-[color:var(--gold-cinema)] rounded-full mr-3" />
                个人发展
              </h3>
              <ul className="space-y-2 text-[color:var(--text-cashmere-100)]/80 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-3 h-3 text-[color:var(--gold-cinema)] mr-2 mt-1 flex-shrink-0" />
                  提升专业技能与团队协作能力
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-3 h-3 text-[color:var(--gold-cinema)] mr-2 mt-1 flex-shrink-0" />
                  增强项目管理与风险控制意识
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-3 h-3 text-[color:var(--gold-cinema)] mr-2 mt-1 flex-shrink-0" />
                  拓展职业发展路径与机会
                </li>
              </ul>
            </div>
            
            <div className="card-base p-6">
              <h3 className="text-lg font-semibold text-[color:var(--text-cashmere-100)] mb-4 flex items-center">
                <div className="w-3 h-3 bg-[color:var(--gold-cinema)] rounded-full mr-3" />
                行业推动
              </h3>
              <ul className="space-y-2 text-[color:var(--text-cashmere-100)]/80 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-3 h-3 text-[color:var(--gold-cinema)] mr-2 mt-1 flex-shrink-0" />
                  促进资源配置优化与成本控制
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-3 h-3 text-[color:var(--gold-cinema)] mr-2 mt-1 flex-shrink-0" />
                  推动内容创作标准化与规模化
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-3 h-3 text-[color:var(--gold-cinema)] mr-2 mt-1 flex-shrink-0" />
                  激发市场创新活力与竞争力
                </li>
              </ul>
            </div>
            
            <div className="card-base p-6">
              <h3 className="text-lg font-semibold text-[color:var(--text-cashmere-100)] mb-4 flex items-center">
                <div className="w-3 h-3 bg-[color:var(--gold-cinema)] rounded-full mr-3" />
                技术融合
              </h3>
              <ul className="space-y-2 text-[color:var(--text-cashmere-100)]/80 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-3 h-3 text-[color:var(--gold-cinema)] mr-2 mt-1 flex-shrink-0" />
                  AI技术与流程化创作深度结合
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-3 h-3 text-[color:var(--gold-cinema)] mr-2 mt-1 flex-shrink-0" />
                  数字化工具提升制作效率
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-3 h-3 text-[color:var(--gold-cinema)] mr-2 mt-1 flex-shrink-0" />
                  智能化流程管理系统建设
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 页面导航 */}
        <div className="flex justify-between items-center mt-12">
          <Link 
            to="/course/plc-basics" 
            className="btn-glass flex items-center group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            电影制作的六大流程阶段
          </Link>
          
          <Link
            to="/course-test"
            className="btn-cinema flex items-center group"
          >
            课堂测试
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramDevelopmentPage;
