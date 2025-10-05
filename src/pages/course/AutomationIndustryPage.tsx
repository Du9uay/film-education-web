import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, 
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Shield,
  Camera,
  Film,
  Video,
  Cpu,
  Clapperboard,
  Star,
  Lightbulb,
  Settings
} from '../../components/Icons';

const AutomationIndustryPage: React.FC = () => {
  // 电影工业发展历程数据
  const filmHistory = [
    {
      era: "早期探索阶段",
      period: "1895年",
      title: "电影诞生",
      description: "卢米埃尔兄弟的《火车进站》等短片开启了电影的先河，彼时电影制作尚处于原始的单镜头记录阶段，技术手段极为匮乏，创作者主要聚焦于简单场景的捕捉。",
      keyFeatures: [
        "单镜头记录阶段",
        "技术手段匮乏",
        "简单场景捕捉",
        "原始制作方式"
      ],
      icon: Camera,
      color: "from-gold-cinema to-gold-warm"
    },
    {
      era: "好莱坞制片厂制度",
      period: "1920-1950年代",
      title: "工业化体系建立",
      description: "米高梅、派拉蒙等大型制片厂崛起，形成了高度分工的工业化体系，从剧本创作、演员签约、摄影棚搭建到后期制作，各环节紧密协作，例如米高梅的《乱世佳人》，依靠制片厂完善的流程体系，耗时数年完成拍摄与制作，成为经典之作。",
      keyFeatures: [
        "大型制片厂崛起",
        "高度分工协作",
        "完善流程体系",
        "工业化规模生产"
      ],
      icon: Settings,
      color: "from-blue-cinema to-blue-steel"
    },
    {
      era: "全球化发展阶段",
      period: "21世纪至今",
      title: "数字技术革命",
      description: "数字技术的飞速进步彻底改变了电影工业格局。以《阿凡达》为例，其开创性地运用了动作捕捉、3D渲染等数字技术，构建了宏大的潘多拉星球世界，同时全球化的发行模式使得影片能够在全球同步上映，打破了地域限制。",
      keyFeatures: [
        "数字技术飞速进步",
        "动作捕捉技术",
        "3D渲染技术",
        "全球化发行模式"
      ],
      icon: Video,
      color: "from-red-cinema to-red-vintage"
    },
    {
      era: "AI技术融合时代",
      period: "2024-2025年",
      title: "智能化制作",
      description: "AI技术开始深度渗透电影工业，如AI辅助的剧本创意生成、场景自动建模等，进一步加速了电影工业的变革。AI技术不仅提高了制作效率，还为创作者提供了更多可能性。",
      keyFeatures: [
        "AI辅助剧本创作",
        "场景自动建模",
        "智能化后期制作",
        "创作效率大幅提升"
      ],
      icon: Cpu,
      color: "from-gold-cinema to-blue-cinema"
    }
  ];

  // 流程规划化的意义
  const processSignificance = [
    {
      category: "降本增效",
      title: "科学的任务分解与资源调配",
      description: "流程规划化通过科学的任务分解与资源调配实现降本增效。例如，通过标准化的拍摄流程，提高了拍摄效率，原本可能需要数周完成的场景拍摄，在流程化规划下缩短至数天，大大降低了拍摄成本。",
      example: {
        title: "《复仇者联盟》系列制作案例",
        content: "采用模块化的制作流程，将不同场景的拍摄、特效制作等环节进行清晰划分。在前期筹备阶段，通过详细的预算规划和资源分配，确保每一笔资金都用在刀刃上，实现了成本与效率的双重优化。"
      },
      benefits: [
        "提高拍摄效率",
        "降低制作成本",
        "优化资源配置",
        "避免重复工作"
      ],
      icon: Target
    },
    {
      category: "质量控制",
      title: "严格的质量把控流程",
      description: "流程规划化为质量控制提供了坚实保障。从前期的剧本创作开始，就建立严格的质量把控流程，编剧团队反复打磨剧情逻辑。在拍摄阶段，摄影部门按照预先制定的镜头调度流程进行拍摄。",
      example: {
        title: "《阿凡达》制作质量管控",
        content: "从前期剧本创作到后期特效制作，建立了严格的质量把控流程。特效团队依据严格的流程对每一个数字角色和场景进行精细雕琢，采用流程化的调色标准，确保不同场景之间的色彩风格统一。"
      },
      benefits: [
        "确保画面构图标准",
        "统一视觉效果",
        "提升制作品质",
        "保证作品一致性"
      ],
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* 页面标题 */}
        <motion.div 
          className="card-cinema p-8 mb-8 relative overflow-hidden cinema-hover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-l-2xl" />
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <Film className="w-8 h-8 text-[color:var(--bg-cinema-dark)]" />
            </div>
            <div>
              <h1 className="title-cinema title-cinema-medium mb-2">
                电影工业史与流程规划化的意义
              </h1>
              <p className="text-[color:var(--text-cinema-secondary)] text-lg">
                探索电影工业发展历程，理解流程规划化的重要价值
              </p>
            </div>
          </div>
        </motion.div>

        {/* 电影工业发展历程 */}
        <section className="mb-12">
          <motion.div
            className="glass-cinema p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="title-cinema title-cinema-small mb-6 flex items-center">
              <Clapperboard className="w-6 h-6 text-[color:var(--gold-cinema)] mr-3" />
              电影工业发展历程
            </h2>

            <div className="space-y-8">
              {filmHistory.map((era, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* 时间线连接线 */}
                  {index < filmHistory.length - 1 && (
                    <div className={`absolute top-full h-8 w-0.5 bg-gradient-to-b from-[color:var(--gold-cinema)] to-transparent ${
                      index % 2 === 0 ? 'left-8' : 'right-8'
                    }`} />
                  )}
                  
                  <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className="relative max-w-4xl w-full">
                      <div className="relative group cinema-hover">
                        <div 
                          className="relative card-cinema p-8 overflow-hidden"
                          style={{
                            background: `linear-gradient(${index % 2 === 0 ? '135deg' : '-135deg'}, 
                              rgba(26, 27, 35, 0.8) 0%, 
                              rgba(26, 27, 35, 0.9) 100%)`,
                          }}
                        >
                          {/* 时代标记 */}
                          <div className={`absolute ${index % 2 === 0 ? '-left-4' : '-right-4'} top-8`}>
                            <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-2xl flex items-center justify-center shadow-xl">
                              <era.icon className="w-8 h-8 text-[color:var(--bg-cinema-dark)]" />
                            </div>
                          </div>

                          {/* 内容区域 */}
                          <div className={`${index % 2 === 0 ? 'ml-16' : 'mr-16'}`}>
                            <div className="flex items-center flex-wrap gap-3 mb-4">
                              <h3 className="title-cinema title-cinema-small">
                                {era.title}
                              </h3>
                              <span className="px-4 py-1.5 bg-gradient-to-r from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] text-[color:var(--bg-cinema-dark)] rounded-full text-sm font-bold">
                                {era.period}
                              </span>
                            </div>

                            <h4 className="text-lg font-semibold text-[color:var(--text-cinema-accent)] mb-3">
                              {era.era}
                            </h4>

                            <p className="text-[color:var(--text-cinema-secondary)] leading-relaxed mb-6">
                              {era.description}
                            </p>

                            {/* 关键特征 */}
                            <div className="grid md:grid-cols-2 gap-3">
                              {era.keyFeatures.map((feature, featureIndex) => (
                                <motion.div
                                  key={featureIndex}
                                  className="flex items-center"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.3 + featureIndex * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full mr-3 flex-shrink-0" />
                                  <span className="text-[color:var(--text-cinema-muted)] text-sm">{feature}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 流程规划化的意义 */}
        <section className="mb-12">
          <motion.div
            className="glass-cinema p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="title-cinema title-cinema-small mb-8 flex items-center">
              <Star className="w-6 h-6 text-[color:var(--gold-cinema)] mr-3" />
              流程规划化的意义
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {processSignificance.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="card-cinema p-8 h-full cinema-hover">
                    {/* 分类标题 */}
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-xl flex items-center justify-center shadow-lg mr-4">
                        <item.icon className="w-6 h-6 text-[color:var(--bg-cinema-dark)]" />
                      </div>
                      <div>
                        <span className="text-[color:var(--gold-cinema)] text-sm font-bold uppercase tracking-wider">
                          {item.category}
                        </span>
                        <h3 className="text-[color:var(--text-cinema-primary)] text-lg font-bold">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-[color:var(--text-cinema-secondary)] leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* 案例展示 */}
                    <div className="bg-gradient-to-br from-[color:var(--gold-muted)] to-transparent rounded-xl p-5 mb-6 border border-[color:var(--gold-cinema)]/20">
                      <h4 className="text-[color:var(--text-cinema-accent)] font-semibold mb-3 flex items-center">
                        <Lightbulb className="w-4 h-4 mr-2" />
                        {item.example.title}
                      </h4>
                      <p className="text-[color:var(--text-cinema-muted)] text-sm leading-relaxed">
                        {item.example.content}
                      </p>
                    </div>

                    {/* 效益列表 */}
                    <div>
                      <h5 className="text-[color:var(--text-cinema-primary)] font-semibold mb-3">核心效益</h5>
                      <div className="space-y-2">
                        {item.benefits.map((benefit, benefitIndex) => (
                          <motion.div
                            key={benefitIndex}
                            className="flex items-center"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + benefitIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle className="w-4 h-4 text-[color:var(--gold-cinema)] mr-3 flex-shrink-0" />
                            <span className="text-[color:var(--text-cinema-muted)] text-sm">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 页面导航 */}
        <div className="flex justify-between items-center mt-12">
          <Link 
            to="/" 
            className="btn-glass flex items-center group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            返回首页
          </Link>
          
          <Link 
            to="/course/plc-basics" 
            className="btn-cinema flex items-center group"
          >
            电影制作六大流程阶段
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AutomationIndustryPage;