import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Award, Target, Settings, Network, Camera, Film, Video, Edit3, N8N, GPT,LumaAI,TrendingUp,Building2,ChevronRight,Briefcase,Lightbulb,Sparkles,Trophy, Runway, CheckCircle } from '../components/Icons';

const HomePage: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const fullText = '规范化影视片创作的一般流程';
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  // 打字机效果
  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [textIndex, fullText]);

  const careerPaths = [
    {
      title: '导演',
      description: '影视制作的核心决策者，负责作品的整体创作方向和艺术呈现',
      skills: [
        { name: '影视创作流程掌握', desc: '理解从概念、拍摄到后期的全流程，有助于统筹影片制作。', highlight: true },
        { name: '构图与运镜指导', desc: '能精准指导摄影师在视觉表达上的拍摄角度与运动方式。' },
        { name: '镜头组与设备配置理解', desc: '协调镜头组工作机制，确保协作顺畅、高效。' },
        { name: '专业设备运用把控', desc: '精通相机与其他影视设备，为拍摄质量提供保障。' },
        { name: '灯光效果设计能力', desc: '与摄影、灯光团队配合，实现导演风格的视觉语言。' },
        { name: '无人机航拍创意运用', desc: '利用航拍技术提升作品画面多样性与表现力。' }
      ],
      icon: Film,
      color: 'from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)]'
    },
    {
      title: '摄影师',
      description: '负责影像拍摄的专业技术人员，是视觉呈现的核心执行者',
      skills: [
        { name: '相机及设备熟练操作', desc: '精准掌控曝光、焦距、镜头等参数，实现导演意图。' },
        { name: '影视构图与运镜技能', desc: '构建画面运动语言，增强影片表现力。' },
        { name: '镜头组协作与管理', desc: '协调对焦师、助理等，确保拍摄流程无缝。' },
        { name: '灯光理论与实操', desc: '与灯光组协同营造符合艺术意图的光环境。' },
        { name: '无人机航拍应用', desc: '拓宽视觉视角，为作品增添动态美感。' },
        { name: '流程与团队沟通能力', desc: '理解创作全流程，与各部门顺畅对接。', highlight: true }
      ],
      icon: Camera,
      color: 'from-[color:var(--gold-warm)] to-[color:var(--gold-vintage)]'
    },
    {
      title: '剪辑师',
      description: '负责后期剪辑工作的专业人员，将拍摄素材重新组织成完整作品',
      skills: [
        { name: '影视创作与流程理解', desc: '把握影片结构逻辑与叙事节奏。', highlight: true },
        { name: '镜头组知识识别能力', desc: '理解镜头类型与用途，选择最佳镜头组合。' },
        { name: '构图与运镜语言理解', desc: '分析镜头运动与构图节奏，提升剪辑流畅性。' },
        { name: '专业设备素材处理', desc: '熟悉各类型设备输出素材特征与格式。' },
        { name: '灯光理解对画面剪辑影响', desc: '能根据光影效果匹配剪辑，保持视觉一致性。' },
        { name: '航拍素材剪辑能力', desc: '将动态航拍素材融入影片，增强视觉冲击。' }
      ],
      icon: Edit3,
      color: 'from-[color:var(--gold-vintage)] to-[color:var(--gold-cinema)]'
    },
    {
      title: '灯光师',
      description: '负责现场灯光设计与控制的专业技术人员',
      skills: [
        { name: '灯光理论与实操精通', desc: '能独立完成灯光设计与实地摆设。' },
        { name: '单、双、三灯布光技巧', desc: '灵活调整不同场景的主光、辅光和边缘光。' },
        { name: '与摄影团队沟通协作', desc: '根据构图与镜头变化同步调整灯位与亮度。' },
        { name: '专业设备配置能力', desc: '熟悉灯光设备的型号、性能与使用细节。' },
        { name: '影视拍摄流程理解', desc: '在拍摄计划与灯光安排间取得时间与效率平衡。', highlight: true },
        { name: '镜头组配合认知', desc: '配合摄影师调配镜头组器材安装与位置走位。' }
      ],
      icon: Settings,
      color: 'from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)]'
    },
    {
      title: '摄影师助理',
      description: '协助摄影师完成拍摄工作的技术支持人员',
      skills: [
        { name: '相机设备基础参数掌握', desc: '熟练拆装、设置相机参数，确保拍摄顺畅。' },
        { name: '专业设备实操经验', desc: '负责镜头清洁、引导镜头组完成基本操作。' },
        { name: '镜头组协作与职责了解', desc: '配合一二助完成物理镜头交换与记录。' },
        { name: '流程意识与沟通能力', desc: '配合摄影师模型，做好拍摄节奏配合。', highlight: true },
        { name: '灯光基本支持能力', desc: '辅助灯光师进行灯光设备摆放与调试。' },
        { name: '无人机协助运作知识', desc: '协助航拍器材携带与现场支持。' }
      ],
      icon: Camera,
      color: 'from-[color:var(--gold-warm)] to-[color:var(--gold-vintage)]'
    },
    {
      title: '灯光师助理',
      description: '协助灯光师完成灯光工作的技术支持人员',
      skills: [
        { name: '灯光理论基础学习', desc: '协助灯光师解读场景需求与灯光类型。' },
        { name: '布光实操支持', desc: '负责安装单灯、双灯、三灯等基础布光方式。' },
        { name: '设备搬运与维护', desc: '保持灯具干净、无故障，支持快速切换。' },
        { name: '流程及沟通辅助', desc: '配合总灯光计划，确保效率与规范执行。', highlight: true },
        { name: '摄影协作理解', desc: '协助调整光位以配合镜头构图。' },
        { name: '航拍灯光协助意识', desc: '在航拍场景中管理光源位置变化。' }
      ],
      icon: Settings,
      color: 'from-[color:var(--gold-vintage)] to-[color:var(--gold-cinema)]'
    },
    {
      title: '剪辑师助理',
      description: '协助剪辑师完成后期制作工作的技术支持人员',
      skills: [
        { name: '流程与素材管理意识', desc: '建立素材目录、镜头备份与片段整理习惯。', highlight: true },
        { name: '设备素材导入能力', desc: '确保不同设备素材格式查询与整理。' },
        { name: '镜头语言初步理解', desc: '协助剪辑师选择合适镜头并进行基础剪辑。' },
        { name: '画面光影基础识别', desc: '区分灯光风格与剪辑需求间的匹配性。' },
        { name: '航拍素材处理能力', desc: '素材转码、粗剪与基础同步。' },
        { name: '流程沟通与支持', desc: '协调剪辑团队与摄影、灯光部门素材沟通。' }
      ],
      icon: Video,
      color: 'from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)]'
    }
  ];

  const getColorClasses = (color: string) => {
    return `bg-gradient-to-r ${color}`;
  };

  return (
    <div className="min-h-screen py-12 px-4 pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* 主标题区域 - 带动画 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ y }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-[color:var(--accent-sand-500)] rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2 
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 360,
              transition: { duration: 0.3 }
            }}
          >
            <Film className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 className="title-cinema title-cinema-large mb-6 leading-tight">
            <span className="inline-block">
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="text-white"
              >
                |
              </motion.span>
            </span>
            <motion.span 
              className="block text-2xl font-normal text-white mt-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4, duration: 0.8 }}
            >
              影视制作专业核心课程
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-base-50/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 1 }}
          >
            通过系统性学习影视制作流程，掌握从策划到发行的完整工业化制作体系，
            培养具备导演、摄像、剪辑、灯光等多岗位协作能力的专业影视人才。
          </motion.p>
        </motion.div>

         {/* 新增大标题：为什么要学习这节课 */}
         <motion.section
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl font-bold mb-4 title-cinema"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            为什么要学习这节课
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            从更贴合市场的行业、企业、岗位角度为你一一分析
          </motion.p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.section>

        {/* 第一部分：为什么要关注行业 */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-2xl mr-6">
              <TrendingUp className="w-8 h-8 text-[color:var(--bg-cinema-dark)]" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">为什么要关注行业</h2>
              <p className="text-[color:var(--gold-warm)] mt-2">影视与视觉设计是未来十年的黄金赛道，创意与科技结合带来了无限机会</p>
            </div>
          </motion.div>

          {/* 主内容区 - 大卡片 */}
          <motion.div
            className="bg-gradient-to-br from-tech-dark-800/80 to-tech-dark-700/60 backdrop-blur-xl border border-tech-dark-600/30 rounded-2xl p-12 relative overflow-hidden mb-8"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业-1. 原因与现状主图.jpeg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 装饰性背景元素 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[color:var(--gold-cinema)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-tech-purple-500/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              {/* 原因与现状 - 全宽展示 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  <span className="text-[color:var(--gold-cinema)]">原因与现状</span>
                </h3>

                {/* 四个核心数据点 */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {/* 技术壁垒逐步打破 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-[color:var(--bg-cinema-slate)]/60 to-[color:var(--bg-cinema-charcoal)]/40 border border-[color:var(--gold-cinema)]/20"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业-1. 原因与现状-行业爆发.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(255, 215, 0, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <TrendingUp className="w-8 h-8 text-[color:var(--gold-cinema)] mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">行业爆发</h4>
                    <p className="text-gray-200 text-sm">
                      影视传媒市场规模突破万亿，短视频与自媒体让创作需求成倍增加，<span className="font-bold text-[color:var(--gold-cinema)]">人才缺口明显</span>
                    </p>
                  </motion.div>

                  {/* 技术迭代 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-[color:var(--bg-cinema-slate)]/60 to-[color:var(--bg-cinema-charcoal)]/40 border border-[color:var(--gold-warm)]/20"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业-1. 原因与现状-技术迭代.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(244, 208, 63, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Building2 className="w-8 h-8 text-[color:var(--gold-warm)] mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">技术迭代</h4>
                    <p className="text-gray-200 text-sm">
                      <span className="font-bold text-[color:var(--gold-warm)]">数字影像设备</span>与<span className="font-bold text-[color:var(--gold-warm)]">AI工具</span>快速更新，门槛降低但竞争加剧，优质作品更稀缺
                    </p>
                  </motion.div>

                  {/* 需求广泛 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-[color:var(--bg-cinema-slate)]/60 to-[color:var(--bg-cinema-charcoal)]/40 border border-[color:var(--gold-vintage)]/20"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业-1. 原因与现状-职业机遇.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(218, 165, 32, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Film className="w-8 h-8 text-[color:var(--gold-vintage)] mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">需求广泛</h4>
                    <p className="text-gray-200 text-sm">
                      电商、广告、文旅宣传纷纷需要视觉作品，影视创作<span className="font-bold text-[color:var(--gold-vintage)]">岗位不断扩张</span>
                    </p>
                  </motion.div>

                  {/* 职业机遇 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-[color:var(--bg-cinema-slate)]/60 to-[color:var(--bg-cinema-charcoal)]/40 border border-[color:var(--gold-cinema)]/20"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业-1. 原因与现状-职业机遇.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(255, 215, 0, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Network className="w-8 h-8 text-[color:var(--gold-cinema)] mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">职业机遇</h4>
                    <p className="text-gray-200 text-sm">
                      多数岗位要求"1–3年经验"，但<span className="text-[color:var(--gold-cinema)] font-bold">系统学习能缩短成长周期</span>，加速就业
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* 结果导向 - 分为两列 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  <span className="text-[color:var(--gold-warm)]">结果导向</span>
                </h3>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* 对企业而言 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-[color:var(--gold-cinema)]/10 to-[color:var(--bg-cinema-charcoal)]/60 border border-[color:var(--gold-cinema)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业-2.结果导向-对企业来说.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, borderColor: "rgba(255, 215, 0, 0.6)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-4">
                      <Target className="w-10 h-10 text-[color:var(--gold-cinema)] mr-3" />
                      <h4 className="text-2xl font-bold text-[color:var(--gold-cinema)]">对企业来说</h4>
                    </div>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      培养既懂<span className="font-bold text-[color:var(--gold-cinema)]">创作</span>又懂<span className="font-bold text-[color:var(--gold-cinema)]">流程</span>的年轻人，满足影视、电商、文旅等宣传需求。
                    </p>
                  </motion.div>

                  {/* 对学生而言 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-[color:var(--gold-warm)]/10 to-[color:var(--bg-cinema-charcoal)]/60 border border-[color:var(--gold-warm)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业-2.结果导向-对学生来说.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, borderColor: "rgba(244, 208, 63, 0.6)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-4">
                      <Users className="w-10 h-10 text-[color:var(--gold-warm)] mr-3" />
                      <h4 className="text-2xl font-bold text-[color:var(--gold-warm)]">对学生来说</h4>
                    </div>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      掌握从拍摄到后期的全流程技能，加上AI工具提升效率，快速进入职场。
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* 第二部分：为什么要分清企业类型 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-2xl mr-6">
              <TrendingUp className="w-8 h-8 text-[color:var(--bg-cinema-dark)]" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">为什么要分清企业类型</h2>
              <p className="text-[color:var(--gold-warm)] mt-2">理解产业链和企业分工，才能精准定位个人成长路径</p>
            </div>
          </motion.div>

          {/* 主内容区 - 阶梯式企业类型布局 */}
          <div className="relative max-w-5xl mx-auto">
            <div className="space-y-8">
              {/* 上游企业 */}
              <motion.div
                className="relative max-w-3xl mr-auto ml-0"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Building2 className="w-12 h-12 text-[color:var(--bg-cinema-dark)]" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-[color:var(--gold-cinema)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/二、为什么要分清企业类型？-上游企业.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[color:var(--gold-cinema)]/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-[color:var(--gold-cinema)]">上游企业</h3>
                        <span className="text-[color:var(--gold-cinema)]/60 text-sm font-semibold">技术基础</span>
                      </div>
                      <p className="text-gray-200 text-base mb-6">上游环节主要提供影视创作所需的核心"原材料"，包括硬件设备、软件系统、版权资源与基础内容库</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-gray-200 text-sm">影视器材公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-gray-200 text-sm">影像设备研发商</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-gray-200 text-sm">音乐版权库</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-gray-200 text-sm">素材平台</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-gray-200 text-sm">软件厂商</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 向下的流动箭头 */}
                <div className="flex justify-center mt-6">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <ChevronRight className="w-10 h-10 text-[color:var(--gold-cinema)]/50 rotate-90" />
                  </motion.div>
                </div>
              </motion.div>

              {/* 中游企业 */}
              <motion.div
                className="relative max-w-3xl mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: -5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Camera className="w-12 h-12 text-[color:var(--bg-cinema-dark)]" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-[color:var(--gold-cinema)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/二、为什么要分清企业类型？-中游企业.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[color:var(--gold-cinema)]/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-[color:var(--gold-cinema)]">中游企业</h3>
                        <span className="text-[color:var(--gold-cinema)]/60 text-sm font-semibold">技术集成</span>
                      </div>
                      <p className="text-gray-200 text-base mb-6">中游环节是影视创意的核心，负责将上游资源转化为实际作品，包括策划、拍摄、后期等一整套流程</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-gray-200 text-sm">影视制作公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-gray-200 text-sm">广告公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-gray-200 text-sm">视觉设计工作室</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-gray-200 text-sm">独立导演/创作团队</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-gray-200 text-sm">后期制作公司</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 向下的流动箭头 */}
                <div className="flex justify-center mt-6">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  >
                    <ChevronRight className="w-10 h-10 text-[color:var(--gold-cinema)]/50 rotate-90" />
                  </motion.div>
                </div>
              </motion.div>

              {/* 下游企业 */}
              <motion.div
                className="relative max-w-3xl ml-auto mr-0"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Users className="w-12 h-12 text-[color:var(--bg-cinema-dark)]" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-[color:var(--gold-cinema)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/二、为什么要分清企业类型？-下游企业.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, x: -10 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[color:var(--gold-cinema)]/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-[color:var(--gold-cinema)]">下游企业</h3>
                        <span className="text-[color:var(--gold-cinema)]/60 text-sm font-semibold">商业应用</span>
                      </div>
                      <p className="text-gray-200 text-base mb-6">下游环节决定作品能否触达观众，涵盖发行、推广、流量变现等多个渠道</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-gray-200 text-sm">电视台</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-gray-200 text-sm">新媒体平台</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-gray-200 text-sm">电商直播公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-gray-200 text-sm">文旅宣传公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-gray-200 text-sm">发行代理公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-gray-200 text-sm">公关传播公司</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-[color:var(--gold-cinema)]/10 to-[color:var(--gold-warm)]/10 rounded-2xl border border-[color:var(--gold-cinema)]/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-[color:var(--gold-cinema)] text-lg font-semibold text-center">
              上下游不同，所涉及的技术需求也有所不同。明晰个人定位，了解不同企业的技术需求，可以帮助你在影视行业中找到最适合自己发展的方向
            </p>
          </motion.div>
        </motion.section>

        {/* 第三部分：关于岗位你该知道的是 */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-2xl mr-6">
              <Briefcase className="w-8 h-8 text-[color:var(--bg-cinema-dark)]" />
            </div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r text-white bg-clip-text text-transparent">关于岗位你该知道的是</h2>
              <p className="text-[color:var(--gold-warm)] mt-2">影视制作行业岗位类别众多，涉及的技能和职责也多种多样</p>
            </div>
          </motion.div>

          {/* 岗位分类卡片 */}
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            {/* 前期策划 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-[color:var(--gold-cinema)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是-（一）有哪些岗位？-1. 创意策划.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[color:var(--gold-cinema)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[color:var(--gold-cinema)] rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--gold-cinema)] ml-3">创意策划</h3>
                </div>
                <p className="text-gray-200 text-sm mb-4">负责前期创意与脚本设计，决定作品的风格与逻辑</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-gray-200 text-sm">导演</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-gray-200 text-sm">编剧</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-gray-200 text-sm">分镜师</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 中期拍摄 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-[color:var(--gold-cinema)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是-（一）有哪些岗位？-2. 拍摄执行.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[color:var(--gold-cinema)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[color:var(--gold-cinema)] rounded-xl flex items-center justify-center">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--gold-cinema)] ml-3">拍摄执行</h3>
                </div>
                <p className="text-gray-200 text-sm mb-4">负责现场执行与拍摄，确保影像质量与画面构成</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-gray-200 text-sm">摄影师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-gray-200 text-sm">摄像助理</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-gray-200 text-sm">灯光师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-gray-200 text-sm">导演</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-gray-200 text-sm">录音师</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 后期制作 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-[color:var(--gold-cinema)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是-（一）有哪些岗位？-3. 后期制作.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[color:var(--gold-cinema)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[color:var(--gold-cinema)] rounded-xl flex items-center justify-center">
                    <Edit3 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--gold-cinema)] ml-3">后期制作</h3>
                </div>
                <p className="text-gray-200 text-sm mb-4">负责后期的画面加工与视听效果提升，呈现最终作品</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-gray-200 text-sm">剪辑师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-gray-200 text-sm">调色师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-gray-200 text-sm">特效师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-gray-200 text-sm">音效设计师</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 宣传运营 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-[color:var(--gold-cinema)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是-（一）有哪些岗位？-4. 宣传运营.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[color:var(--gold-cinema)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[color:var(--gold-cinema)] rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--gold-cinema)] ml-3">宣传运营</h3>
                </div>
                <p className="text-gray-200 text-sm mb-4">负责作品的推广与传播，结合文旅、电商平台运营</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-gray-200 text-sm">新媒体运营师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-gray-200 text-sm">品牌宣传</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 普遍要求与待遇 */}
          <motion.div
            className="glass-cinema p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[color:var(--gold-cinema)]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[color:var(--gold-cinema)] mb-6 text-center">普遍要求与待遇</h3>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[color:var(--gold-cinema)]/20 to-[color:var(--gold-warm)]/20 border border-[color:var(--gold-cinema)]/30">
                  <div className="text-2xl font-bold text-[color:var(--gold-cinema)] mb-2">技术经验 &gt; 学历</div>
                  <p className="text-gray-200 text-sm">企业更看重实操能力和作品集，而不是学历背景</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[color:var(--gold-cinema)]/20 to-[color:var(--gold-warm)]/20 border border-[color:var(--gold-cinema)]/30">
                  <div className="text-2xl font-bold text-[color:var(--gold-cinema)] mb-2">多能协作</div>
                  <p className="text-gray-200 text-sm">既懂拍摄、会后期，又能沟通甲方，更受企业欢迎</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[color:var(--gold-cinema)]/20 to-[color:var(--gold-warm)]/20 border border-[color:var(--gold-cinema)]/30">
                  <div className="text-2xl font-bold text-[color:var(--gold-cinema)] mb-2">AI应用</div>
                  <p className="text-gray-200 text-sm">能熟练使用AI工具加速创作，竞争力显著增强</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[color:var(--gold-cinema)]/20 to-[color:var(--gold-warm)]/20 border border-[color:var(--gold-cinema)]/30">
                  <div className="text-2xl font-bold text-[color:var(--gold-cinema)] mb-2">6K–8K</div>
                  <p className="text-gray-200 text-sm">随着经验增长会快速提升</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* 第四部分：通过学习，你能学到什么 */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-tech-blue-500 to-tech-purple-500 rounded-2xl mr-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r text-white bg-clip-text text-transparent">通过学习，你能学到什么</h2>
              <p className="text-[color:var(--gold-warm)] mt-2">系统学习影视创作全流程，掌握AI工具应用，快速提升专业技能</p>
            </div>
          </motion.div>

          {/* 主内容区 - 课程大纲和技能 */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* 课程核心内容卡片 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--gold-cinema)]/10 to-cyan-600/10 p-8 border border-[color:var(--gold-cinema)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/标题三_浓缩十余年的核心经验_背景图.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--gold-cinema)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-[color:var(--gold-cinema)] rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-[color:var(--gold-cinema)]">单元课程目录</h3>
                </div>

                <div className="space-y-4">
                  {/* 创意策划 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-[color:var(--gold-cinema)] font-semibold text-base">创意策划</span>
                    <div className="text-gray-200 text-sm mt-2 space-y-1">
                      <p>• 拍片不迷路：影视创作全流程指南（1节）</p>
                      <p>• 爆款故事从这里开始：剧本写作与分镜秘籍（1节）</p>
                      <p>• 一眼就懂镜头语言：摄影基础快速入门（1节）</p>
                    </div>
                  </div>

                  {/* 拍摄执行 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-[color:var(--gold-cinema)] font-semibold text-base">拍摄执行</span>
                    <div className="text-gray-200 text-sm mt-2 space-y-1">
                      <p>• 相机参数秒懂法：新手也能玩转专业拍摄（1节）</p>
                      <p>• 构图不求人：拍出高级感的黄金法则（1节）</p>
                      <p>• 运镜有套路：让画面动起来更有故事（1节）</p>
                      <p>• 打光就该这么玩：单灯到三灯的布光秘籍（1节）</p>
                      <p>• 航拍大片速成：无人机飞出电影感（1节）</p>
                    </div>
                  </div>

                  {/* 后期制作 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-[color:var(--gold-cinema)] font-semibold text-base">后期制作</span>
                    <div className="text-gray-200 text-sm mt-2 space-y-1">
                      <p>• 剪辑有节奏：学会用镜头讲故事（1节）</p>
                      <p>• 调色显功力：让画面风格一眼惊艳（2节）</p>
                      <p>• 特效加持：作品秒变高大上（1节）</p>
                      <p>• AI不是威胁：影视创作的效率神器（2节）</p>
                    </div>
                  </div>

                  {/* 宣传运营 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-[color:var(--gold-cinema)] font-semibold text-base">宣传运营</span>
                    <div className="text-gray-200 text-sm mt-2 space-y-1">
                      <p>• 与甲方沟通及项目管理（1节）</p>
                      <p>• 内容运营全攻略：让视频在各平台持续出圈（1节）</p>
                      <p>• 数据说话：用分析抓住用户心（1节）</p>
                      <p>• 从曝光到转化：影视宣传的闭环打法（1节）</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 实战技能卡片 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--gold-warm)]/10 to-[color:var(--gold-cinema)]/10 p-8 border border-[color:var(--gold-warm)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/标题三_更加精准，清晰的职业方向_背景图.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--gold-warm)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-[color:var(--gold-warm)] rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-[color:var(--gold-warm)]">本节课课程内容</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text-[color:var(--gold-warm)]" />
                      <span className="text-[color:var(--gold-warm)] font-semibold text-base">影视行业的现状与机遇</span>
                    </div>
                    <p className="text-gray-200 text-sm">深入了解影视传媒市场发展趋势与人才需求</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-[color:var(--gold-warm)]" />
                      <span className="text-[color:var(--gold-warm)] font-semibold text-base">影视企业类型与岗位分布</span>
                    </div>
                    <p className="text-gray-200 text-sm">了解上中下游企业分工与创意策划、拍摄执行、后期制作、宣传运营等岗位</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-5 h-5 text-[color:var(--gold-warm)]" />
                      <span className="text-[color:var(--gold-warm)] font-semibold text-base">导师二十年导演经验与案例分享</span>
                    </div>
                    <p className="text-gray-200 text-sm">学习行业资深导演的实战经验与成功案例</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Sparkles className="w-5 h-5 text-[color:var(--gold-warm)]" />
                      <span className="text-[color:var(--gold-warm)] font-semibold text-base">AI工具如何助力影视创作</span>
                    </div>
                    <p className="text-gray-200 text-sm">掌握ChatGPT、N8N、Runway、TemPolor等AI工具在影视创作中的应用</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-[color:var(--gold-warm)]" />
                      <span className="text-[color:var(--gold-warm)] font-semibold text-base">学生如何快速构建作品集与职业路径</span>
                    </div>
                    <p className="text-gray-200 text-sm">学习如何积累作品、规划职业发展，快速进入影视行业</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 案例分析和工具应用 */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 涉及到的大型案例 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-tech-blue-500/10 to-tech-purple-500/10 p-8 border border-[color:var(--gold-cinema)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/标题三_在企业中才会了解到的工作流程_背景图.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--gold-cinema)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-[color:var(--gold-cinema)] rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-[color:var(--gold-cinema)]">涉及到的大型案例</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-[color:var(--gold-cinema)]" />
                      <span className="text-[color:var(--gold-cinema)] font-semibold text-base">万达影都多灯布光全记录</span>
                    </div>
                    <p className="text-gray-200 text-sm">专业影棚多灯布光技术的完整实战演示</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-[color:var(--gold-cinema)]" />
                      <span className="text-[color:var(--gold-cinema)] font-semibold text-base">Mini4K带你飞越酒店大片</span>
                    </div>
                    <p className="text-gray-200 text-sm">无人机航拍技术在商业宣传片中的应用实例</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-[color:var(--gold-cinema)]" />
                      <span className="text-[color:var(--gold-cinema)] font-semibold text-base">河西走廊历史史诗剧工业化制作全流程实战</span>
                    </div>
                    <p className="text-gray-200 text-sm">大型历史题材电视剧的完整工业化制作流程</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-[color:var(--gold-cinema)]" />
                      <span className="text-[color:var(--gold-cinema)] font-semibold text-base">星尘漂流硬科幻系列剧制作全流程实战</span>
                    </div>
                    <p className="text-gray-200 text-sm">硬科幻题材系列剧从策划到后期的全流程制作</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 涉及到 AI 工具教学 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-tech-blue-500/10 to-tech-purple-500/10 p-8 border border-[color:var(--gold-cinema)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/标题三_前沿的AI工具_背景图.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--gold-cinema)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-[color:var(--gold-cinema)] rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-[color:var(--gold-cinema)]">涉及到AI工具教学</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <GPT className="w-5 h-5 text-[color:var(--gold-cinema)]" />
                      <span className="text-[color:var(--gold-cinema)] font-semibold text-base">ChatGPT</span>
                    </div>
                    <p className="text-gray-200 text-sm mt-1">辅助编写剧本与广告文案，快速生成创意分镜思路</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <N8N className="w-5 h-5 text-[color:var(--gold-cinema)]" />
                      <span className="text-[color:var(--gold-cinema)] font-semibold text-base">N8N</span>
                    </div>
                    <p className="text-gray-200 text-sm mt-1">建立自动化工作流，如批量视频转码与发布</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Runway className="w-5 h-5 text-[color:var(--gold-cinema)]" />
                      <span className="text-[color:var(--gold-cinema)] font-semibold text-base">Runway</span>
                    </div>
                    <p className="text-gray-200 text-sm mt-1">AI 视频生成与背景抠像，加速后期效率</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <LumaAI className="w-5 h-5 text-[color:var(--gold-cinema)]" />
                      <span className="text-[color:var(--gold-cinema)] font-semibold text-base">TemPolor</span>
                    </div>
                    <p className="text-gray-200 text-sm mt-1">可通过输入文本或图像快速创建个性化音乐</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 第五部分：岗位晋升路径 */}
        <motion.section className="mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <motion.div
            className="bg-gradient-to-r from-[color:var(--gold-cinema)]/10 to-[color:var(--gold-warm)]/10 rounded-3xl p-8 border border-[color:var(--gold-cinema)]/20"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Trophy className="w-10 h-10 text-[color:var(--gold-cinema)]" />
              <h2 className="text-3xl font-bold text-white">岗位晋升路径</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="bg-gradient-to-br from-[color:var(--gold-cinema)]/10 to-cyan-500/10 rounded-2xl p-6 border border-[color:var(--gold-cinema)]/20 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl font-bold text-[color:var(--gold-cinema)] mb-2">初级职位</div>
                <div className="text-3xl font-bold text-white mb-4">8K-15K</div>
                <div className="text-[color:var(--gold-warm)] text-sm">
                  <div>助理导演/制片助理</div>
                  <div>场记/剪辑助理</div>
                  <div>执行制片/现场制片</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-[color:var(--gold-warm)]/10 to-[color:var(--gold-vintage)]/10 rounded-2xl p-6 border border-[color:var(--gold-warm)]/20 text-center"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-[color:var(--gold-warm)] mb-2">中级职位</div>
                <div className="text-3xl font-bold text-white mb-4">15K-30K</div>
                <div className="text-[color:var(--gold-vintage)] text-sm">
                  <div>副导演/制片主任</div>
                  <div>摄影指导/剪辑师</div>
                  <div>特效总监/后期主管</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-[color:var(--gold-cinema)]/10 to-[color:var(--gold-vintage)]/10 rounded-2xl p-6 border border-[color:var(--gold-cinema)]/20 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl font-bold text-[color:var(--gold-cinema)] mb-2">高级职位</div>
                <div className="text-3xl font-bold text-white mb-4">30K+</div>
                <div className="text-[color:var(--gold-warm)] text-sm">
                  <div>导演/制片人</div>
                  <div>视效总监/总制片</div>
                  <div>创意总监/监制</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* 第五部分:本单元涉及的岗位 */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 页面标题 */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-full mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <Users className="w-10 h-10 text-[color:var(--bg-cinema-dark)]" />
            </motion.div>
            <motion.h1
              className="title-cinema text-4xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              职业发展
            </motion.h1>
            <motion.p
              className="text-xl text-[color:var(--gold-warm)] max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              深入了解影视制作团队中的各个关键岗位，
              掌握每个角色的核心职责和专业技能要求，
              为您的职业发展规划提供清晰的方向指引
            </motion.p>
          </motion.div>

          {/* 岗位介绍 - 一行两个 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {careerPaths.map((career, index) => {
              const IconComponent = career.icon;
              return (
                <motion.div
                  key={career.title}
                  className="card-cinema overflow-hidden h-full"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* 岗位信息 - 上部分 */}
                  <div className="p-6 bg-gradient-to-br from-[color:var(--bg-cinema-dark)]/30 to-[color:var(--bg-cinema-dark)]/10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-full ${getColorClasses(career.color)} flex items-center justify-center cinema-glow flex-shrink-0`}>
                        <IconComponent className="w-8 h-8 text-[color:var(--bg-cinema-dark)]" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-[color:var(--gold-cinema)] mb-1">{career.title}</h2>
                        <p className="text-sm text-[color:var(--gold-warm)]/90 leading-relaxed">
                          {career.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 技能要求 - 下部分 */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[color:var(--gold-warm)] mb-4">核心技能要求</h3>
                    <div className="space-y-3">
                      {career.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          className={`p-3 rounded-lg transition-all duration-300 ${
                            skill.highlight
                              ? 'bg-[color:var(--gold-cinema)]/10 border-2 border-[color:var(--gold-cinema)]'
                              : 'bg-[color:var(--bg-cinema-dark)]/5'
                          }`}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 * skillIndex, duration: 0.4 }}
                        >
                          <div className="flex items-start">
                            <CheckCircle className={`w-4 h-4 mt-0.5 mr-2 flex-shrink-0 ${
                              skill.highlight ? 'text-[color:var(--gold-cinema)]' : 'text-[color:var(--gold-warm)]/60'
                            }`} />
                            <div>
                              <h4 className={`font-semibold text-sm mb-0.5 ${
                                skill.highlight ? 'text-[color:var(--gold-cinema)]' : 'text-[color:var(--gold-warm)]'
                              }`}>
                                {skill.name}
                              </h4>
                              <p className="text-xs text-[color:var(--gold-warm)]/70 leading-relaxed">
                                {skill.desc}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* 学习路径指引 - 弹簧动画 */}
        <motion.div 
                      className="glass-cinema rounded-2xl p-12 text-center max-w-4xl mx-auto relative overflow-hidden cinema-hover"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15,
            delay: 0.2 
          }}
          viewport={{ once: true }}
          whileHover={{ 
            boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.6)",
            borderColor: "rgba(255, 255, 255, 0.3)"
          }}
        >
          {/* 背景动画粒子效果 */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <motion.h2 
                            className="title-cinema title-cinema-medium mb-6 relative z-10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            开始你的影视制作学习之旅
          </motion.h2>
          
          <motion.p 
            className="text-xl text-base-50/80 mb-8 max-w-2xl mx-auto relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            按照模块顺序学习，从电影工业史到实践操作，循序渐进掌握影视制作精髓。
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/course/automation-industry"
                className="btn-primary rounded-xl font-semibold transition-all duration-300 shadow-lg inline-block"
              >
                开始学习第一章
              </Link>
            </motion.div>
            

          </motion.div>
        </motion.div>
              </div>
            </div>
  );
  };
  
export default HomePage; 