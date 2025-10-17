import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, BookOpen, RefreshCw, Target, CheckCircle, ArrowRight } from '../components/Icons';

interface Line {
  start: { x: number; y: number };
  end: { x: number; y: number };
  leftId: string;
  rightId: string;
}

interface ActiveLine {
  start: { x: number; y: number };
  end?: { x: number; y: number };
  leftId: string;
}

// 打乱数组顺序的辅助函数
const shuffleArray = <T extends any>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const CourseTestPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('multiple');
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<{ [key: string]: string | string[] }>({});
  const [lines, setLines] = useState<Line[]>([]);
  const [activeLine, setActiveLine] = useState<ActiveLine | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const itemRefs = useRef<{ [key: string]: HTMLDivElement }>({});
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof matchingQuestions>([]);
  const [sequenceAnswers, setSequenceAnswers] = useState<{ [key: string]: string[] }>({});
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [fillInAnswers, setFillInAnswers] = useState<{ [key: string]: string }>({});

  // 计时器
  const [timeRemaining, setTimeRemaining] = useState(30 * 60); // 30分钟

  useEffect(() => {
    if (timeRemaining > 0 && !showResults) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0) {
      setShowResults(true);
    }
  }, [timeRemaining, showResults]);

  // 选择题数据 - 基于课程讲义
  const multipleChoice = [
    {
      id: 'q1',
      question: '影视片创作一般流程的第一步通常是？',
      options: [
        'A. 后期制作',
        'B. 剧本创作',
        'C. 选角',
        'D. 场地选址'
      ],
      correct: 'B'
    },
    {
      id: 'q2',
      question: '以下哪个环节属于影视片创作流程中的前期筹备阶段？',
      options: [
        'A. 剪辑',
        'B. 拍摄素材的整理',
        'C. 分镜头脚本的撰写',
        'D. 音效合成'
      ],
      correct: 'C'
    },
    {
      id: 'q3',
      question: '在影视片创作流程中，从拍摄完成到最终成片输出，依次经过的后期环节正确顺序是？',
      options: [
        'A. 粗剪、调色、特效合成、配音配乐、精剪',
        'B. 粗剪、特效合成、调色、配音配乐、精剪',
        'C. 粗剪、调色、配音配乐、特效合成、精剪',
        'D. 精剪、粗剪、调色、特效合成、配音配乐'
      ],
      correct: 'A'
    }
  ];

  // 填空题数据
  const fillInQuestions = [
    {
      id: 'f1',
      question: '规范化影视片创作一般流程包括前期筹备、______、后期制作三个大的阶段。',
      correct: '拍摄阶段'
    },
    {
      id: 'f2',
      question: '前期筹备阶段的重要工作有剧本分析、______、制定拍摄计划等。',
      correct: '分镜头脚本创作'
    }
  ];

  // 匹配题数据 - 基于课程讲义的影视制作环节与阶段对应
  const matchingQuestions = useMemo(() => [
    {
      id: 'm1',
      leftItems: [
        { id: 'l1', text: '前期筹备阶段' },
        { id: 'l2', text: '拍摄阶段' },
        { id: 'l3', text: '后期制作阶段' }
      ],
      rightItems: [
        { id: 'r1', text: '拍摄素材整理' },
        { id: 'r2', text: '剧本创作' },
        { id: 'r3', text: '剪辑合成' }
      ],
      correctMatches: {
        'l1': 'r2', // 前期筹备阶段 - 剧本创作
        'l2': 'r1', // 拍摄阶段 - 拍摄素材整理
        'l3': 'r3'  // 后期制作阶段 - 剪辑合成
      }
    }
  ], []);

  // 顺序题数据 - 基于课程讲义
  const sequenceQuestions = useMemo(() => [
    {
      id: 'seq1',
      question: '请将规范化影视片创作的一般流程按照正确顺序进行排序：',
      items: [
        { id: 'stage1', text: '后期制作' },
        { id: 'stage2', text: '前期筹备' },
        { id: 'stage3', text: '拍摄' }
      ],
      correctOrder: ['stage2', 'stage3', 'stage1'] // 前期筹备 → 拍摄 → 后期制作
    }
  ], []);

  // 初始化时打乱题目顺序
  useEffect(() => {
    const shuffled = matchingQuestions.map(question => ({
      ...question,
      leftItems: shuffleArray(question.leftItems),
      rightItems: shuffleArray(question.rightItems)
    }));
    setShuffledQuestions(shuffled);

    // 初始化顺序题答案（打乱顺序）
    const initialSequenceAnswers: { [key: string]: string[] } = {};
    sequenceQuestions.forEach(question => {
      initialSequenceAnswers[question.id] = shuffleArray([...question.items]).map(item => item.id);
    });
    setSequenceAnswers(initialSequenceAnswers);
  }, [matchingQuestions, sequenceQuestions]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleMultipleChoice = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleFillInAnswer = (questionId: string, answer: string) => {
    setFillInAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  // 拖拽处理函数
  const handleDragStart = (e: React.DragEvent, itemId: string) => {
    setDraggedItem(itemId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetItemId: string, questionId: string) => {
    e.preventDefault();
    if (!draggedItem || draggedItem === targetItemId) return;

    setSequenceAnswers(prev => {
      const items = [...prev[questionId]];
      const draggedIndex = items.indexOf(draggedItem);
      const targetIndex = items.indexOf(targetItemId);
      
      items.splice(draggedIndex, 1);
      items.splice(targetIndex, 0, draggedItem);
      
      return {
        ...prev,
        [questionId]: items
      };
    });
    
    setDraggedItem(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const resetSequence = (questionId: string) => {
    const question = sequenceQuestions.find(q => q.id === questionId);
    if (question) {
      setSequenceAnswers(prev => ({
        ...prev,
        [questionId]: shuffleArray([...question.items]).map(item => item.id)
      }));
    }
  };

  const getItemCenter = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const svgRect = svgRef.current?.getBoundingClientRect() || { left: 0, top: 0 };
    return {
      x: rect.left + rect.width / 2 - svgRect.left,
      y: rect.top + rect.height / 2 - svgRect.top
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (activeLine) {
      const svgRect = svgRef.current?.getBoundingClientRect();
      if (svgRect) {
        setActiveLine({
          ...activeLine,
          end: {
            x: e.clientX - svgRect.left,
            y: e.clientY - svgRect.top
          }
        });
      }
    }
  };

  const handleLeftItemClick = (leftId: string, e: React.MouseEvent) => {
    const element = itemRefs.current[leftId];
    if (element) {
      if (lines.some(line => line.leftId === leftId)) {
        setLines(prev => prev.filter(line => line.leftId !== leftId));
        setAnswers(prev => {
          const newAnswers = { ...prev };
          delete newAnswers[`${leftId}_match`];
          return newAnswers;
        });
      }
      
      const center = getItemCenter(element);
      setActiveLine({
        start: center,
        leftId
      });
    }
  };

  const handleRightItemClick = (rightId: string, e: React.MouseEvent) => {
    if (activeLine) {
      const element = itemRefs.current[rightId];
      if (element) {
        if (lines.some(line => line.rightId === rightId)) {
          return;
        }

        const existingLine = lines.find(line => line.leftId === activeLine.leftId);
        if (existingLine) {
          setLines(prev => prev.filter(line => line.leftId !== activeLine.leftId));
          setAnswers(prev => {
            const newAnswers = { ...prev };
            delete newAnswers[`${activeLine.leftId}_match`];
            return newAnswers;
          });
        }

        const center = getItemCenter(element);
        setLines(prev => [...prev, {
          start: activeLine.start,
          end: center,
          leftId: activeLine.leftId,
          rightId
        }]);
        setActiveLine(null);
        
        setAnswers(prev => ({
          ...prev,
          [`${activeLine.leftId}_match`]: rightId
        }));
      }
    }
  };

  const handleReset = (question: any) => {
    setLines([]);
    setAnswers(prev => {
      const newAnswers = { ...prev };
      question.leftItems.forEach((item: any) => {
        delete newAnswers[`${item.id}_match`];
      });
      return newAnswers;
    });
    
    setShuffledQuestions(prev => 
      prev.map(q => 
        q.id === question.id 
          ? {
              ...q,
              leftItems: shuffleArray(q.leftItems),
              rightItems: shuffleArray(q.rightItems)
            }
          : q
      )
    );
  };

  const calculateScore = () => {
    let totalQuestions = 0;
    let correctAnswers = 0;
    const details: any = {
      multipleChoice: [],
      fillIn: [],
      matching: [],
      sequence: []
    };

    multipleChoice.forEach(q => {
      totalQuestions++;
      const isCorrect = answers[q.id] === q.correct;
      if (isCorrect) {
        correctAnswers++;
      }
      details.multipleChoice.push({
        id: q.id,
        question: q.question,
        userAnswer: answers[q.id],
        correctAnswer: q.correct,
        isCorrect,
        options: q.options
      });
    });

    fillInQuestions.forEach(q => {
      totalQuestions++;
      const userAnswer = answers[q.id] || fillInAnswers[q.id];
      const isCorrect = userAnswer && userAnswer.includes(q.correct);
      if (isCorrect) {
        correctAnswers++;
      }
      details.fillIn.push({
        id: q.id,
        question: q.question,
        userAnswer: userAnswer || '未作答',
        correctAnswer: q.correct,
        isCorrect
      });
    });

    matchingQuestions.forEach(q => {
      Object.keys(q.correctMatches).forEach(leftId => {
        totalQuestions++;
        const isCorrect = answers[`${leftId}_match`] === (q.correctMatches as any)[leftId];
        if (isCorrect) {
          correctAnswers++;
        }
        const leftItem = q.leftItems.find(item => item.id === leftId);
        const userRightId = answers[`${leftId}_match`];
        const userRightItem = q.rightItems.find(item => item.id === userRightId);
        const correctRightItem = q.rightItems.find(item => item.id === (q.correctMatches as any)[leftId]);
        
        details.matching.push({
          leftId,
          leftText: leftItem?.text,
          userRightText: userRightItem?.text || '未匹配',
          correctRightText: correctRightItem?.text,
          isCorrect
        });
      });
    });

    sequenceQuestions.forEach(q => {
      totalQuestions++;
      const userOrder = answers[q.id] || sequenceAnswers[q.id];
      const isCorrect = userOrder && JSON.stringify(userOrder) === JSON.stringify(q.correctOrder);
      if (isCorrect) {
        correctAnswers++;
      }
      
      const userOrderText = userOrder && Array.isArray(userOrder) ? userOrder.map((id: string) => q.items.find(item => item.id === id)?.text).filter(Boolean) : [];
      const correctOrderText = q.correctOrder.map((id: string) => q.items.find(item => item.id === id)?.text).filter(Boolean);
      
      details.sequence.push({
        id: q.id,
        question: q.question,
        userOrder: userOrderText,
        correctOrder: correctOrderText,
        isCorrect
      });
    });

    return {
      total: totalQuestions,
      correct: correctAnswers,
      percentage: Math.round((correctAnswers / totalQuestions) * 100),
      score: Math.round((correctAnswers / totalQuestions) * 100),
      details
    };
  };

  const handleSubmitTest = () => {
    Object.keys(sequenceAnswers).forEach(questionId => {
      setAnswers(prev => ({
        ...prev,
        [questionId]: sequenceAnswers[questionId]
      }));
    });
    
    Object.keys(fillInAnswers).forEach(questionId => {
      setAnswers(prev => ({
        ...prev,
        [questionId]: fillInAnswers[questionId]
      }));
    });
    
    setTimeout(() => {
      setShowResults(true);
      setCurrentSection('results');
      setTimeout(() => {
        const resultsElement = document.querySelector('[data-testid="test-navigation"]');
        if (resultsElement) {
          resultsElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100);
    }, 1500);
  };

  const resetTest = () => {
    setAnswers({});
    setFillInAnswers({});
    setShowResults(false);
    setCurrentSection('multiple');
    setLines([]);
    setActiveLine(null);
    setTimeRemaining(30 * 60);
    
    const shuffled = matchingQuestions.map(question => ({
      ...question,
      leftItems: shuffleArray(question.leftItems),
      rightItems: shuffleArray(question.rightItems)
    }));
    setShuffledQuestions(shuffled);

    const initialSequenceAnswers: { [key: string]: string[] } = {};
    sequenceQuestions.forEach(question => {
      initialSequenceAnswers[question.id] = shuffleArray([...question.items]).map(item => item.id);
    });
    setSequenceAnswers(initialSequenceAnswers);
  };

  const score = showResults ? calculateScore() : null;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 页面标题 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-gold-cinema to-yellow-400 rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <Award className="w-10 h-10 text-cinema-dark" />
          </motion.div>
          <motion.h1 
            className="title-cinema text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            课程综合测试
          </motion.h1>
          <motion.p 
            className="text-xl text-gold-warm max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            检验您对规范化影视片创作一般流程的掌握程度
          </motion.p>
          
          {/* 计时器 */}
          <motion.div 
            className="mt-8 inline-flex items-center cinema-frame rounded-full px-6 py-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <RefreshCw className="w-5 h-5 text-gold-cinema mr-2" />
            <span className={`font-mono text-lg ${timeRemaining < 300 ? 'text-red-400' : 'text-gold-cinema'}`}>
              剩余时间: {formatTime(timeRemaining)}
            </span>
          </motion.div>
        </motion.div>

        {/* 测试导航 */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          data-testid="test-navigation"
        >
          <div className="cinema-frame rounded-2xl p-2">
            <div className="flex space-x-2">
              {[
                { key: 'multiple', label: '选择题', color: 'bg-gold-cinema' },
                { key: 'fillIn', label: '填空题', color: 'bg-gold-cinema' },
                { key: 'matching', label: '连线题', color: 'bg-gold-cinema' },
                { key: 'sequence', label: '排序题', color: 'bg-gold-cinema' }
              ].map((section) => (
                <motion.button
                  key={section.key}
                  onClick={() => setCurrentSection(section.key as any)}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                    currentSection === section.key
                      ? `${section.color} text-cinema-dark shadow-lg cinema-glow`
                      : 'text-gold-warm hover:text-gold-cinema hover:bg-white/5'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: currentSection === section.key ? 1.05 : 1,
                  }}
                >
                  {section.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 测试内容区域 */}
        <div className="max-w-4xl mx-auto px-4">
          <AnimatePresence mode="wait">
            {/* 选择题部分 */}
            {currentSection === 'multiple' && (
              <motion.div
                key="multiple-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-bold text-gold-cinema text-center mb-8">
                  选择题（每题10分，共30分）
                </h2>
                {multipleChoice.map((question, index) => (
                  <div key={question.id} className="card-cinema p-6 space-y-4">
                    <h3 className="text-lg font-medium text-gold-warm">
                      {index + 1}. {question.question}
                    </h3>
                    <div className="space-y-2">
                      {question.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleMultipleChoice(question.id, option[0])}
                          className={`w-full text-left p-4 rounded-lg transition-colors ${
                            answers[question.id] === option[0]
                              ? 'bg-gold-cinema/20 cinema-glow backdrop-blur-sm'
                              : 'bg-cinema-dark/20 hover:bg-cinema-dark/30 cinema-frame backdrop-blur-sm'
                          }`}
                        >
                          <span className="text-gold-warm">{option}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setCurrentSection('fillIn')}
                    className="btn-cinema rounded-lg flex items-center space-x-2"
                  >
                    <span>填空题</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* 填空题部分 */}
            {currentSection === 'fillIn' && (
              <motion.div
                key="fillIn-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-bold text-gold-cinema text-center mb-8">
                  填空题（每题10分，共20分）
                </h2>
                {fillInQuestions.map((question, index) => (
                  <div key={question.id} className="card-cinema p-6 space-y-4">
                    <h3 className="text-lg font-medium text-gold-warm">
                      {index + 1}. {question.question}
                    </h3>
                    <div className="mt-4">
                      <input
                        type="text"
                        value={fillInAnswers[question.id] || ''}
                        onChange={(e) => handleFillInAnswer(question.id, e.target.value)}
                        placeholder="请输入答案"
                        className="w-full px-4 py-3 bg-cinema-dark/30 border border-gold-cinema/30 rounded-lg text-gold-warm placeholder-gold-warm/50 focus:outline-none focus:border-gold-cinema focus:ring-1 focus:ring-gold-cinema"
                      />
                    </div>
                  </div>
                ))}
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setCurrentSection('matching')}
                    className="btn-cinema rounded-lg flex items-center space-x-2"
                  >
                    <span>连线题</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* 连线题部分 */}
            {currentSection === 'matching' && (
              <motion.div
                key="matching-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-bold text-gold-cinema text-center mb-8">
                  连线题（每题20分，共20分）
                </h2>
                {shuffledQuestions.map((question) => (
                  <div key={question.id} className="card-cinema p-8">
                    <h3 className="text-lg font-semibold text-gold-warm mb-6 text-center">
                      将影视片创作一般流程的环节与对应的阶段连线
                    </h3>
                    <div 
                      className="relative grid md:grid-cols-2 gap-8 min-h-[300px]"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={() => setActiveLine(null)}
                    >
                      <svg
                        ref={svgRef}
                        className="absolute inset-0 pointer-events-none"
                        style={{ zIndex: 1, width: '100%', height: '100%' }}
                      >
                        {lines.map((line, i) => (
                          <g key={i}>
                            <line
                              x1={line.start.x}
                              y1={line.start.y}
                              x2={line.end.x}
                              y2={line.end.y}
                              stroke="#FFD700"
                              strokeWidth="2"
                              className="transition-all duration-300"
                            />
                            <circle
                              cx={line.start.x}
                              cy={line.start.y}
                              r="4"
                              fill="#FFD700"
                            />
                            <circle
                              cx={line.end.x}
                              cy={line.end.y}
                              r="4"
                              fill="#FFD700"
                            />
                          </g>
                        ))}
                        {activeLine && (
                          <g>
                            <line
                              x1={activeLine.start.x}
                              y1={activeLine.start.y}
                              x2={activeLine.end?.x || activeLine.start.x}
                              y2={activeLine.end?.y || activeLine.start.y}
                              stroke="#FFD700"
                              strokeWidth="2"
                              strokeDasharray="5,5"
                              className="animate-pulse"
                            />
                            <circle
                              cx={activeLine.start.x}
                              cy={activeLine.start.y}
                              r="4"
                              fill="#FFD700"
                            />
                          </g>
                        )}
                      </svg>

                      <div className="relative z-10">
                        <h4 className="text-gold-cinema font-medium mb-4">创作流程阶段</h4>
                        <div className="space-y-3">
                          {question.leftItems.map(item => (
                            <div
                              key={item.id}
                              ref={el => el && (itemRefs.current[item.id] = el)}
                              onClick={(e) => handleLeftItemClick(item.id, e)}
                              className={`cinema-frame bg-gold-cinema/10 p-4 cursor-pointer transition-all duration-300 hover:transform hover:scale-105 ${
                                lines.some(line => line.leftId === item.id)
                                  ? 'bg-gold-cinema/30 cinema-glow'
                                  : 'hover:bg-gold-cinema/20'
                              }`}
                            >
                              <span className="text-gold-warm font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="relative z-10">
                        <h4 className="text-gold-vintage font-medium mb-4">具体工作内容</h4>
                        <div className="space-y-3">
                          {question.rightItems.map(item => (
                            <div
                              key={item.id}
                              ref={el => el && (itemRefs.current[item.id] = el)}
                              onClick={(e) => handleRightItemClick(item.id, e)}
                              className={`cinema-frame bg-gold-vintage/10 p-4 cursor-pointer transition-all duration-300 hover:transform hover:scale-105 ${
                                lines.some(line => line.rightId === item.id)
                                  ? 'bg-gold-vintage/30 cinema-glow'
                                  : 'hover:bg-gold-vintage/20'
                              }`}
                            >
                              <span className="text-gold-warm">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={() => handleReset(question)}
                        className="text-sm text-red-400 hover:text-red-300 transition-colors"
                      >
                        重置连线
                      </button>
                    </div>
                  </div>
                ))}

                <div className="flex justify-center mt-8">
                  <motion.button
                    onClick={() => setCurrentSection('sequence')}
                    className="btn-cinema rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                    <span>继续到排序题</span>
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* 排序题部分 */}
            {currentSection === 'sequence' && (
              <motion.div
                key="sequence-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ 
                  duration: 0.5, 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 25
                }}
                className="flex justify-center items-start min-h-[80vh]"
              >
                <div className="w-full max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold text-gold-cinema text-center mb-8">
                    排序题（每题30分，共30分）
                  </h2>
                  {sequenceQuestions.map((question) => (
                    <div key={question.id} className="card-cinema p-8 mb-8">
                      <h3 className="text-lg font-semibold text-gold-warm mb-6 text-center">
                        {question.question}
                      </h3>
                      <div className="space-y-3">
                        {(sequenceAnswers[question.id] || []).map((itemId, index) => {
                          const item = question.items.find(i => i.id === itemId);
                          if (!item) return null;
                          return (
                            <div
                              key={itemId}
                              draggable
                              onDragStart={(e) => handleDragStart(e, itemId)}
                              onDragOver={handleDragOver}
                              onDrop={(e) => handleDrop(e, itemId, question.id)}
                              onDragEnd={handleDragEnd}
                              className={`cinema-frame bg-gold-cinema/10 p-4 cursor-move transition-all duration-300 hover:bg-gold-cinema/20 hover:transform hover:scale-105 flex items-center ${
                                draggedItem === itemId ? 'opacity-50 scale-95' : ''
                              }`}
                            >
                              <span className="text-gold-cinema font-bold mr-4 text-lg">
                                {index + 1}.
                              </span>
                              <span className="text-gold-warm font-medium">
                                {item.text}
                              </span>
                              <div className="ml-auto text-gold-cinema">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                                </svg>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-6 flex justify-between items-center">
                        <button
                          onClick={() => resetSequence(question.id)}
                          className="text-sm text-red-400 hover:text-red-300 transition-colors flex items-center"
                        >
                          <RefreshCw className="w-4 h-4 mr-2" />
                          重新排序
                        </button>
                        <div className="text-sm text-gold-warm/60">
                          提示：拖拽上述选项来安排正确的顺序
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* 提交测试按钮 */}
                  <div className="flex justify-center mt-12">
                    <motion.button
                      onClick={handleSubmitTest}
                      className="btn-cinema rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-3 px-12 py-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Award className="w-6 h-6" />
                      <span className="text-lg">提交测试</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* 测试结果 */}
            {currentSection === 'results' && score && (
              <motion.div
                key="results-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gold-cinema mb-8" data-testid="test-results">测试结果</h2>
                  <div className="card-cinema p-8 max-w-2xl mx-auto">
                    <div className="mb-6">
                      <div className={`text-6xl font-bold mb-4 ${
                        score.score >= 80 ? 'text-green-400' : 
                        score.score >= 60 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {score.score}分
                      </div>
                      <p className="text-xl text-gold-warm">
                        总分：100分 | 答对 {score.correct} 题，共 {score.total} 题
                      </p>
                    </div>
                    
                    <div className={`p-6 rounded-lg mb-6 cinema-frame ${
                      score.score >= 80 ? 'bg-green-900/10' :
                      score.score >= 60 ? 'bg-yellow-900/10' :
                      'bg-red-900/10'
                    }`}>
                      <h3 className={`text-lg font-semibold mb-3 ${
                        score.score >= 80 ? 'text-green-300' :
                        score.score >= 60 ? 'text-yellow-300' : 'text-red-300'
                      }`}>
                        {score.score >= 80 ? '优秀！' : 
                         score.score >= 60 ? '良好' : '需要加强'}
                      </h3>
                      <p className="text-gold-warm text-sm leading-relaxed">
                        {score.score >= 80 ? 
                          '恭喜您！您已经很好地掌握了规范化影视片创作的一般流程知识，可以进入下一阶段的学习。' :
                          score.score >= 60 ?
                          '您对影视片创作流程有一定掌握，建议复习薄弱环节，加强实践练习。' :
                          '建议您重新学习相关章节，特别关注影视制作的基本概念、流程和各环节职责。'
                        }
                      </p>
                    </div>
                  </div>
                </div>

                {/* 重新测试按钮 */}
                <div className="flex justify-center mt-8">
                  <motion.button
                    onClick={resetTest}
                    className="btn-cinema rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <RefreshCw className="w-5 h-5" />
                    <span>重新测试</span>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 导航链接 */}
        <div className="mt-16 flex justify-between items-center">
          <Link
            to="/course/program-development"
            className="flex items-center space-x-2 px-6 py-3 cinema-frame rounded-xl text-gold-warm hover:bg-white/5 transition-all duration-300"
          >
            <Target className="w-5 h-5" />
            <span>返回：程序开发流程</span>
          </Link>

          <Link
            to="/"
            className="btn-cinema rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-2"
          >
            <span>回到首页</span>
            <BookOpen className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseTestPage;