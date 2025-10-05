import React from 'react';
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
  ArrowRight,
  Camera,
  Film,
  Clapperboard,
  Edit3,
  Megaphone,
  Lightbulb,
  Star
} from '../../components/Icons';

const PLCBasicsPage: React.FC = () => {
  // 六大流程阶段数据
  const productionStages = [
    {
      stage: "策划筹备",
      order: "第一阶段",
      title: "项目构思与立项",
      description: "策划筹备阶段是影视片创作的起始环节。首先是剧本开发，编剧团队进行创意构思，通过头脑风暴、市场调研等方式确定故事框架，然后进行剧本的撰写与多轮修改。接着是项目立项，需要进行资金预算编制、拍摄场地选址、演员选角等工作。",
      keyTasks: [
        "剧本创意构思与撰写",
        "项目预算编制",
        "拍摄场地选址",
        "演员选角工作",
        "团队组建"
      ],
      example: {
        title: "《沙丘》策划筹备案例",
        content: "编剧团队深入研究弗兰克·赫伯特的原著小说，反复打磨剧本，确保剧情的逻辑性和吸引力。制定详细的项目预算表，涵盖拍摄设备租赁、演员片酬、场地租赁等各项费用。"
      },
      requirements: [
        "剧本具有独特创意和清晰叙事结构",
        "项目预算合理且具有可操作性", 
        "场地选址符合剧情设定需求"
      ],
      icon: BookOpen,
      color: "from-gold-cinema to-gold-warm"
    },
    {
      stage: "前期准备",
      order: "第二阶段",
      title: "各部门筹备工作",
      description: "前期准备阶段各部门需要充分配合，确保拍摄顺利进行。导演部门进行分镜创作，摄影部门测试镜头选择，灯光部门设计灯光方案，美术部门构建场景概念，录音部门制定录音方案，制片部门统筹协调各项事务。",
      keyTasks: [
        "导演分镜创作",
        "摄影镜头测试与选择",
        "灯光设计与设备准备",
        "美术场景设计与道具制作",
        "录音方案制定与设备调试",
        "制片统筹协调"
      ],
      departments: [
        {
          name: "导演部门",
          role: "核心创作引领",
          responsibilities: "导演部门在前期准备中承担着核心职责。导演首先要进行分镜创作，将剧本中的文字描述转化为可视化的镜头脚本，详细规划每个镜头的景别、拍摄角度、运动方式等。同时，导演要与编剧、摄影、美术等部门进行充分沟通，明确影片的整体风格和视觉基调，协调各部门围绕导演的创作意图开展工作。",
          example: "在拍摄《盗梦空间》时，克里斯托弗·诺兰导演精心绘制分镜图，为影片复杂的梦境场景拍摄提供了精准的指导。",
          icon: Film
        },
        {
          name: "摄影部门",
          role: "视觉呈现设计",
          responsibilities: "摄影部门前期准备工作包括镜头测试与选择。摄影师需要根据剧本的风格和导演的要求，测试不同焦距、光圈的镜头，选择最适合拍摄场景的镜头组合。此外，摄影部门还需搭建摄影设备，确保相机、三脚架、稳定器等设备处于良好的工作状态。",
          example: "在拍摄自然风光类影片时，会选择广角镜头来展现宏大的场景；而在拍摄特写镜头时，则会选用定焦镜头以保证画质清晰。",
          icon: Camera
        },
        {
          name: "灯光部门",
          role: "氛围营造设计",
          responsibilities: "灯光部门前期准备主要是灯光设计与设备准备。灯光师根据剧本设定的场景氛围进行灯光设计，确定主光、辅光、逆光等的布置方案。同时，要准备好各类灯光设备，如柔光灯、聚光灯等，并进行调试，确保灯光效果能够精准实现。",
          example: "在拍摄悬疑影片时，会运用低照度、阴影浓重的灯光效果来营造紧张氛围。",
          icon: Lightbulb
        },
        {
          name: "美术部门",
          role: "场景道具构建",
          responsibilities: "美术部门前期准备包括场景设计与道具制作。美术指导根据剧本构建场景概念图，确定场景的风格、色彩、布局等。同时，要制作相关道具，确保道具的质感和细节符合剧情要求，如制作特定年代的家具、服饰等道具。",
          example: "在《布达佩斯大饭店》中，美术部门构建了极具复古奢华风格的场景。",
          icon: Settings
        },
        {
          name: "录音部门",
          role: "声音方案制定",
          responsibilities: "录音部门前期准备涉及录音方案制定与设备调试。录音师根据场景需求制定录音方案，确定是采用同期录音还是后期配音等方式。同时，要调试录音设备，如麦克风的摆放位置、音频接口的连接等，确保能够获取清晰、高质量的音频素材。",
          example: "在拍摄动作片时，可能会采用同期录音来增强真实感。",
          icon: Settings
        },
        {
          name: "制片部门",
          role: "统筹协调管理",
          responsibilities: "制片部门前期准备主要是统筹协调各项事务。制片主任负责制定拍摄日程表，合理安排拍摄时间，确保各部门工作有序进行；同时要进行后勤保障，如安排剧组人员的食宿、交通等，为拍摄工作提供稳定的后勤支持。",
          example: "制片部门需要协调各部门的工作时间，确保拍摄计划顺利执行。",
          icon: Users
        }
      ],
      example: {
        title: "《盗梦空间》前期准备",
        content: "克里斯托弗·诺兰导演精心绘制分镜图，为影片复杂的梦境场景拍摄提供了精准的指导。摄影师测试不同焦距、光圈的镜头，选择最适合拍摄场景的镜头组合。"
      },
      requirements: [
        "各部门充分沟通协调",
        "设备处于良好工作状态",
        "所有准备工作按时完成"
      ],
      icon: Settings,
      color: "from-blue-cinema to-blue-steel"
    },
    {
      stage: "中期拍摄",
      order: "第三阶段", 
      title: "现场执行与监控",
      description: "中期拍摄需严格按计划执行，拍摄团队要按照预先制定的拍摄日程表，依次完成各个场景的拍摄。编剧负责现场剧本调整，DIT进行数字影像管理与监控，剪辑师开始粗剪工作，及时发现问题并补拍。",
      keyTasks: [
        "按计划执行拍摄",
        "现场剧本调整",
        "数字影像管理监控",
        "粗剪与及时补拍",
        "现场问题解决"
      ],
      shootingRoles: [
        {
          name: "按计划执行",
          role: "整体协调管理",
          responsibilities: "中期拍摄需严格按计划执行，拍摄团队要按照预先制定的拍摄日程表，依次完成各个场景的拍摄。在拍摄过程中，要及时根据实际情况调整拍摄计划，确保拍摄进度不受较大影响，同时保证拍摄质量符合前期设定的标准。",
          example: "每天明确拍摄的场景、参与的演员和工作人员等信息，确保每个环节都按时完成。",
          icon: Target
        },
        {
          name: "编剧",
          role: "现场剧本调整",
          responsibilities: "编剧在中期拍摄阶段主要负责现场剧本调整。当拍摄过程中发现剧情逻辑存在漏洞或场景与剧本设定有偏差时，编剧要及时与导演沟通，对剧本进行适当修改。",
          example: "在拍摄现场发现某场戏的台词无法很好地推动剧情发展，编剧会迅速提出修改意见，确保影片叙事的流畅性。",
          icon: BookOpen
        },
        {
          name: "DIT（数字影像技师）",
          role: "数字影像管理监控",
          responsibilities: "DIT的职责是进行数字影像的管理与监控。其作用在于确保数字素材的质量稳定，对拍摄过程中的数字画面进行实时监控，检查画面的曝光、色彩、分辨率等参数是否符合要求。技术要求方面，DIT需要熟练掌握数字影像处理软件，如Adobe Premiere Pro中的相关功能，能够快速对拍摄素材进行备份、分类和初步调色等操作。",
          example: "在2024-2025年，AI辅助的DIT技术逐渐兴起，AI可以自动检测画面中的瑕疵并进行初步修复，提高了工作效率。",
          icon: Monitor
        },
        {
          name: "剪辑",
          role: "粗剪与补拍协调",
          responsibilities: "剪辑在中期拍摄阶段就开始参与，主要是进行粗剪工作，若有片段不合适，就立马及时补拍。剪辑师根据拍摄的原始素材，选取合适的镜头进行初步剪辑，构建影片的大致框架。",
          example: "将不同场景的镜头按照剧情顺序拼接起来，形成一个具有初步叙事结构的样片，为后期深入剪辑提供基础。",
          icon: Edit3
        }
      ],
      example: {
        title: "DIT数字影像技师作用",
        content: "确保数字素材的质量稳定，对拍摄过程中的数字画面进行实时监控，检查画面的曝光、色彩、分辨率等参数是否符合要求。2024-2025年，AI辅助的DIT技术逐渐兴起。"
      },
      requirements: [
        "严格按拍摄计划执行",
        "保证拍摄质量符合标准",
        "及时调整拍摄计划"
      ],
      icon: Camera,
      color: "from-red-cinema to-red-vintage"
    },
    {
      stage: "后期制作",
      order: "第四阶段",
      title: "技术加工与完善",
      description: "后期制作包括剪辑、特效、声音、音乐、调色等多个环节。剪辑工作包括精剪、音效同步；特效制作包括建模、动画、渲染；声音处理包括录音、混音；音乐制作包括作曲、编曲、录制；调色工作包括基础调色、精细调整。",
      keyTasks: [
        "精剪与音效同步",
        "特效建模动画渲染",
        "声音录音混音",
        "音乐作曲编曲录制",
        "调色基础与精细调整"
      ],
      postProductionRoles: [
        {
          name: "剪辑",
          role: "精剪与音效同步",
          responsibilities: "剪辑工作流程包括精剪、音效同步等环节。首先进行精剪，剪辑师对粗剪样片进行细致打磨，调整镜头顺序、节奏等。然后进行音效同步，将拍摄的同期声、后期配音等音频与画面进行精准匹配。技术要求方面，剪辑师要熟练运用非线性编辑软件，如Avid Media Composer，掌握剪辑节奏的把控技巧，能够通过剪辑手法增强影片的戏剧性和观赏性。",
          example: "剪辑师需要掌握精准的时间线控制，确保各个镜头之间的转场自然流畅。",
          icon: Edit3
        },
        {
          name: "特效",
          role: "建模动画渲染",
          responsibilities: "特效制作流程包括建模、动画、渲染等步骤。首先进行3D建模，构建虚拟角色或场景的模型；然后进行动画制作，为模型赋予运动效果；最后进行渲染，生成具有真实感的特效画面。技术要求上，特效师需要精通3D制作软件，如Maya，掌握光影效果、材质纹理等的制作技术，确保特效与实拍画面无缝融合。",
          example: "在科幻电影中，特效师需要创建复杂的外星环境和生物模型，并与实拍镜头完美结合。",
          icon: Settings
        },
        {
          name: "声音",
          role: "录音混音处理",
          responsibilities: "声音处理流程包括录音、混音等环节。首先对拍摄素材中的音频进行录音整理，然后进行混音，将对话、音效、音乐等不同音频轨道进行混合，打造出立体的声音效果。技术要求是混音师要熟悉5.1或7.1声道的混音技术，能够精准调节各音频轨道的音量、平衡等参数，使声音具有层次感和空间感。",
          example: "在动作片中，声音师需要将爆炸声、脚步声、对话和背景音乐完美融合，创造沉浸式的听觉体验。",
          icon: Settings
        },
        {
          name: "音乐",
          role: "作曲编曲录制",
          responsibilities: "音乐制作流程包括作曲、编曲、录制等步骤。作曲者根据影片的风格和情感需求进行作曲，然后进行编曲，丰富音乐的层次。接着进行录制，邀请音乐家或乐队进行演奏录制。在2024-2025年，AI音乐创作工具逐渐应用，作曲者可以利用AI辅助生成初步的音乐旋律，再进行优化完善。",
          example: "在爱情片中，作曲师需要创作温馨浪漫的主题音乐，配合情侣的情感变化设计不同的音乐段落。",
          icon: Settings
        },
        {
          name: "调色",
          role: "基础调色精细调整",
          responsibilities: "调色工作流程包括基础调色、精细调整等环节。首先进行基础调色，调整画面的整体色彩基调，如色温、色调等。然后进行精细调整，对画面的局部色彩、对比度等进行细致优化。技术要求是调色师要熟练掌握调色软件，如DaVinci Resolve，能够根据影片的风格精准把控色彩效果，营造出不同的氛围。",
          example: "在拍摄文艺片时，通常会采用柔和、温暖的调色风格来增强影片的情感氛围。",
          icon: Settings
        }
      ],
      example: {
        title: "AI技术在后期制作中的应用",
        content: "2024-2025年，AI音乐创作工具逐渐应用，作曲者可以利用AI辅助生成初步的音乐旋律，再进行优化完善。AI系统自动审核信用证、发票、提单等单证，快速检查条款符合性。"
      },
      requirements: [
        "熟练运用专业软件",
        "掌握技术制作规范",
        "确保各环节质量控制"
      ],
      icon: Edit3,
      color: "from-gold-cinema to-blue-cinema"
    },
    {
      stage: "营销宣发",
      order: "第五阶段", 
      title: "市场推广与宣传",
      description: "营销宣发策略包括社交媒体营销、预告片发布、线下活动推广等。通过社交媒体平台进行影片预热，制作精彩的预告片在各大视频平台发布，举办线下首映礼、粉丝见面会等活动，增加影片的曝光度。",
      keyTasks: [
        "社交媒体预热营销",
        "预告片制作发布",
        "线下活动推广",
        "媒体采访宣传",
        "大数据精准投放"
      ],
      example: {
        title: "现代影片宣发模式",
        content: "制定详细的营销宣发计划，明确各阶段的宣传重点和渠道，利用大数据分析观众的喜好和行为，精准调整宣发策略，最大化提升影片知名度和观众期待。"
      },
      requirements: [
        "制定详细宣发计划",
        "多渠道整合营销",
        "数据驱动策略调整"
      ],
      icon: Megaphone,
      color: "from-gold-vintage to-gold-cinema"
    },
    {
      stage: "发行放映",
      order: "第六阶段",
      title: "市场投放与收益",
      description: "发行放映流程包括与院线签订放映协议、影片排片等。首先发行方与各大院线沟通，确定影片的放映档期和排片数量。在流媒体时代，还包括与视频平台合作进行线上发行，为观众提供多样化的观影渠道。",
      keyTasks: [
        "院线合作谈判",
        "排片档期确定", 
        "流媒体平台合作",
        "票房数据监控",
        "观众反馈收集"
      ],
      example: {
        title: "多元化发行模式",
        content: "通过院线系统进行影片的发行，观众通过院线购票系统购买电影票进行观影。同时与腾讯视频、爱奇艺等视频平台合作进行线上发行，形成线上线下全覆盖的发行网络。"
      },
      requirements: [
        "与院线建立合作关系",
        "多平台发行渠道",
        "持续的市场监控"
      ],
      icon: Monitor,
      color: "from-blue-steel to-gold-cinema"
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
              <Clapperboard className="w-8 h-8 text-[color:var(--bg-cinema-dark)]" />
            </div>
            <div>
              <h1 className="title-cinema title-cinema-medium mb-2">
                电影制作的六大流程阶段
              </h1>
              <p className="text-[color:var(--text-cinema-secondary)] text-lg">
                深入了解从策划筹备到发行放映的完整制作流程
              </p>
            </div>
          </div>
        </motion.div>

        {/* 流程概述 */}
        <section className="mb-12">
          <motion.div
            className="glass-cinema p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="title-cinema title-cinema-small mb-6 flex items-center">
              <Film className="w-6 h-6 text-[color:var(--gold-cinema)] mr-3" />
              制作流程概述
            </h2>

            <p className="text-[color:var(--text-cinema-secondary)] text-lg leading-relaxed mb-6">
              电影制作涵盖前期策划、筹备、拍摄、后期制作、宣传发行六大阶段，各岗位人员需明确职责、紧密协作，共同推动项目顺利完成。每个阶段都有其特定的工作重点和质量要求，环环相扣，缺一不可。
            </p>

            {/* 流程时间线 */}
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[color:var(--gold-cinema)] via-[color:var(--gold-warm)] to-[color:var(--gold-cinema)] rounded-full -translate-x-1/2" />
              
              <div className="space-y-0">
                {productionStages.map((stage, index) => (
                  <motion.div
                    key={index}
                    className="relative flex items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* 时间线节点 */}
                    <div className="absolute left-1/2 w-6 h-6 bg-gradient-to-br from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-full shadow-lg -translate-x-1/2 z-10 border-4 border-[color:var(--bg-cinema-dark)]">
                      <div className="absolute inset-1 bg-[color:var(--bg-cinema-dark)] rounded-full" />
                    </div>

                    {/* 阶段卡片 */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'} py-6`}>
                      <div className="card-cinema p-6 cinema-hover">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-[color:var(--gold-cinema)] text-sm font-bold uppercase tracking-wider">
                            {stage.order}
                          </span>
                          <div className="w-8 h-8 bg-gradient-to-br from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-lg flex items-center justify-center">
                            <stage.icon className="w-4 h-4 text-[color:var(--bg-cinema-dark)]" />
                          </div>
                        </div>
                        <h3 className="title-cinema title-cinema-small mb-2">
                          {stage.stage}
                        </h3>
                        <p className="text-[color:var(--text-cinema-muted)] text-sm">
                          {stage.title}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* 详细流程阶段 */}
        <section className="mb-12">
          <div className="space-y-12">
            {productionStages.map((stage, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="glass-cinema p-8 rounded-2xl">
                  {/* 阶段标题 */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-2xl flex items-center justify-center shadow-lg">
                        <stage.icon className="w-8 h-8 text-[color:var(--bg-cinema-dark)]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[color:var(--gold-cinema)] text-sm font-bold uppercase tracking-wider">
                            {stage.order}
                          </span>
                          <div className="w-1 h-5 bg-[color:var(--gold-cinema)] rounded-full" />
                        </div>
                        <h3 className="title-cinema title-cinema-small">
                          {stage.stage}
                        </h3>
                        <p className="text-[color:var(--text-cinema-accent)] font-semibold">
                          {stage.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 阶段描述 */}
                  <p className="text-[color:var(--text-cinema-secondary)] text-lg leading-relaxed mb-8">
                    {stage.description}
                  </p>

                  {/* 前期准备各部门详细职责 */}
                  {stage.departments && (
                    <div className="mb-12">
                      <h4 className="text-[color:var(--text-cinema-primary)] font-bold text-xl mb-6 flex items-center">
                        <div className="w-2 h-8 bg-gradient-to-b from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-full mr-4" />
                        各部门详细职责
                      </h4>
                      <div className="grid lg:grid-cols-2 gap-6">
                        {stage.departments.map((dept, deptIndex) => {
                          const DeptIcon = dept.icon;
                          return (
                            <motion.div
                              key={deptIndex}
                              className="card-cinema p-6 cinema-hover border border-[color:var(--gold-cinema)]/20"
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: deptIndex * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.02, y: -5 }}
                            >
                              {/* 部门标题 */}
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-lg flex items-center justify-center shadow-md">
                                  <DeptIcon className="w-5 h-5 text-[color:var(--bg-cinema-dark)]" />
                                </div>
                                <div>
                                  <h5 className="text-[color:var(--gold-cinema)] font-bold text-lg">
                                    {dept.name}
                                  </h5>
                                  <p className="text-[color:var(--text-cinema-muted)] text-sm">
                                    {dept.role}
                                  </p>
                                </div>
                              </div>

                              {/* 部门职责详情 */}
                              <div className="space-y-4">
                                <div className="bg-gradient-to-r from-[color:var(--gold-muted)] to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold-cinema)]">
                                  <p className="text-[color:var(--text-cinema-secondary)] text-sm leading-relaxed">
                                    {dept.responsibilities}
                                  </p>
                                </div>
                                
                                {/* 具体案例 */}
                                <div className="cinema-frame p-4 rounded-lg bg-[color:var(--bg-cinema-dark)]/20">
                                  <div className="flex items-start gap-2 mb-2">
                                    <Lightbulb className="w-4 h-4 text-[color:var(--gold-cinema)] mt-0.5 flex-shrink-0" />
                                    <span className="text-[color:var(--gold-cinema)] text-xs font-semibold uppercase tracking-wider">案例示例</span>
                                  </div>
                                  <p className="text-[color:var(--text-cinema-muted)] text-xs leading-relaxed">
                                    {dept.example}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* 中期拍摄各岗位详细职责 */}
                  {stage.shootingRoles && (
                    <div className="mb-12">
                      <h4 className="text-[color:var(--text-cinema-primary)] font-bold text-xl mb-6 flex items-center">
                        <div className="w-2 h-8 bg-gradient-to-b from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-full mr-4" />
                        中期拍摄各岗位职责
                      </h4>
                      <div className="grid lg:grid-cols-2 gap-6">
                        {stage.shootingRoles.map((role, roleIndex) => {
                          const RoleIcon = role.icon;
                          return (
                            <motion.div
                              key={roleIndex}
                              className="card-cinema p-6 cinema-hover border border-[color:var(--gold-cinema)]/20"
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: roleIndex * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.02, y: -5 }}
                            >
                              {/* 岗位标题 */}
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-lg flex items-center justify-center shadow-md">
                                  <RoleIcon className="w-5 h-5 text-[color:var(--bg-cinema-dark)]" />
                                </div>
                                <div>
                                  <h5 className="text-[color:var(--gold-cinema)] font-bold text-lg">
                                    {role.name}
                                  </h5>
                                  <p className="text-[color:var(--text-cinema-muted)] text-sm">
                                    {role.role}
                                  </p>
                                </div>
                              </div>

                              {/* 岗位职责详情 */}
                              <div className="space-y-4">
                                <div className="bg-gradient-to-r from-[color:var(--gold-muted)] to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold-cinema)]">
                                  <p className="text-[color:var(--text-cinema-secondary)] text-sm leading-relaxed">
                                    {role.responsibilities}
                                  </p>
                                </div>
                                
                                {/* 具体案例 */}
                                <div className="cinema-frame p-4 rounded-lg bg-[color:var(--bg-cinema-dark)]/20">
                                  <div className="flex items-start gap-2 mb-2">
                                    <Lightbulb className="w-4 h-4 text-[color:var(--gold-cinema)] mt-0.5 flex-shrink-0" />
                                    <span className="text-[color:var(--gold-cinema)] text-xs font-semibold uppercase tracking-wider">案例示例</span>
                                  </div>
                                  <p className="text-[color:var(--text-cinema-muted)] text-xs leading-relaxed">
                                    {role.example}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* 后期制作各岗位详细职责 */}
                  {stage.postProductionRoles && (
                    <div className="mb-12">
                      <h4 className="text-[color:var(--text-cinema-primary)] font-bold text-xl mb-6 flex items-center">
                        <div className="w-2 h-8 bg-gradient-to-b from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-full mr-4" />
                        后期制作各岗位职责
                      </h4>
                      <div className="grid lg:grid-cols-2 gap-6">
                        {stage.postProductionRoles.map((role, roleIndex) => {
                          const RoleIcon = role.icon;
                          return (
                            <motion.div
                              key={roleIndex}
                              className="card-cinema p-6 cinema-hover border border-[color:var(--gold-cinema)]/20"
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: roleIndex * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.02, y: -5 }}
                            >
                              {/* 岗位标题 */}
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-lg flex items-center justify-center shadow-md">
                                  <RoleIcon className="w-5 h-5 text-[color:var(--bg-cinema-dark)]" />
                                </div>
                                <div>
                                  <h5 className="text-[color:var(--gold-cinema)] font-bold text-lg">
                                    {role.name}
                                  </h5>
                                  <p className="text-[color:var(--text-cinema-muted)] text-sm">
                                    {role.role}
                                  </p>
                                </div>
                              </div>

                              {/* 岗位职责详情 */}
                              <div className="space-y-4">
                                <div className="bg-gradient-to-r from-[color:var(--gold-muted)] to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold-cinema)]">
                                  <p className="text-[color:var(--text-cinema-secondary)] text-sm leading-relaxed">
                                    {role.responsibilities}
                                  </p>
                                </div>
                                
                                {/* 具体案例 */}
                                <div className="cinema-frame p-4 rounded-lg bg-[color:var(--bg-cinema-dark)]/20">
                                  <div className="flex items-start gap-2 mb-2">
                                    <Lightbulb className="w-4 h-4 text-[color:var(--gold-cinema)] mt-0.5 flex-shrink-0" />
                                    <span className="text-[color:var(--gold-cinema)] text-xs font-semibold uppercase tracking-wider">案例示例</span>
                                  </div>
                                  <p className="text-[color:var(--text-cinema-muted)] text-xs leading-relaxed">
                                    {role.example}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* 内容网格 */}
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* 关键任务 */}
                    <div className="space-y-4">
                      <h4 className="text-[color:var(--text-cinema-primary)] font-bold text-lg mb-4 flex items-center">
                        <div className="w-1 h-6 bg-[color:var(--gold-cinema)] rounded-full mr-3" />
                        关键任务
                      </h4>
                      <div className="space-y-3">
                        {stage.keyTasks.map((task, taskIndex) => (
                          <motion.div
                            key={taskIndex}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + taskIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-6 h-6 bg-[color:var(--gold-muted)] rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                              <CheckCircle className="w-3 h-3 text-[color:var(--gold-cinema)]" />
                            </div>
                            <span className="text-[color:var(--text-cinema-muted)] text-sm leading-relaxed">
                              {task}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* 实际案例 */}
                    <div className="space-y-4">
                      <h4 className="text-[color:var(--text-cinema-primary)] font-bold text-lg mb-4 flex items-center">
                        <div className="w-1 h-6 bg-[color:var(--gold-cinema)] rounded-full mr-3" />
                        实际案例
                      </h4>
                      <div className="bg-gradient-to-br from-[color:var(--gold-muted)] to-transparent rounded-xl p-6 border border-[color:var(--gold-cinema)]/20">
                        <h5 className="text-[color:var(--text-cinema-accent)] font-semibold mb-3 flex items-center">
                          <Lightbulb className="w-4 h-4 mr-2" />
                          {stage.example.title}
                        </h5>
                        <p className="text-[color:var(--text-cinema-muted)] text-sm leading-relaxed">
                          {stage.example.content}
                        </p>
                      </div>
                    </div>

                    {/* 质量要求 */}
                    <div className="space-y-4">
                      <h4 className="text-[color:var(--text-cinema-primary)] font-bold text-lg mb-4 flex items-center">
                        <div className="w-1 h-6 bg-[color:var(--gold-cinema)] rounded-full mr-3" />
                        质量要求
                      </h4>
                      <div className="space-y-3">
                        {stage.requirements.map((req, reqIndex) => (
                          <motion.div
                            key={reqIndex}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + reqIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-6 h-6 bg-gradient-to-br from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                              <Star className="w-3 h-3 text-[color:var(--bg-cinema-dark)]" />
                            </div>
                            <span className="text-[color:var(--text-cinema-muted)] text-sm leading-relaxed">
                              {req}
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
        </section>

        {/* 总结 */}
        <motion.div
          className="glass-cinema p-8 rounded-2xl mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="title-cinema title-cinema-small mb-6 text-center">
            流程协作的重要性
          </h3>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-[color:var(--text-cinema-secondary)] text-lg leading-relaxed mb-6">
              影视制作的六大流程阶段环环相扣，前期准备为中期拍摄奠定基础，中期拍摄推进后续制作，各环节专业知识需系统掌握。只有各部门密切配合，才能确保影片的高质量完成。
            </p>
            <div className="flex justify-center items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-[color:var(--bg-cinema-dark)]" />
              </div>
              <span className="text-[color:var(--text-cinema-accent)] font-semibold text-lg">
                团队协作 · 流程规范 · 质量保障
              </span>
            </div>
          </div>
        </motion.div>

        {/* 页面导航 */}
        <div className="flex justify-between items-center mt-12">
          <Link 
            to="/course/automation-industry" 
            className="btn-glass flex items-center group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            电影工业史与流程意义
          </Link>
          
          <Link 
            to="/course/program-development" 
            className="btn-cinema flex items-center group"
          >
            流程化创作对媒体行业的影响
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PLCBasicsPage;