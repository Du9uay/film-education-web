import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Film, Play, X } from './Icons';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isLiveReplayOpen, setIsLiveReplayOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCoursesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const courseModules = [
    { name: '电影工业史与流程意义', path: '/course/automation-industry' },
    { name: '电影制作六大流程阶段', path: '/course/plc-basics' },
    { name: '流程化创作的行业影响', path: '/course/program-development' },
  ];


  const isActivePath = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 nav-cinema">
        {/* 直播回放按钮 - 绝对定位在最左侧 */}
        <button
          onClick={() => setIsLiveReplayOpen(true)}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <Play className="w-4 h-4" />
          <span>直播回放</span>
        </button>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-lg flex items-center justify-center shadow-lg">
                <Film className="w-6 h-6 text-[color:var(--bg-cinema-dark)]" />
              </div>
              <span className="text-cinema-primary font-bold text-lg bg-gradient-to-r from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] bg-clip-text text-transparent">规范化影视片创作</span>
            </Link>

          {/* Desktop Navigation - 右侧 */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <Link
              to="/"
              className={`relative text-sm font-medium transition-colors focus-accent ${
                isActivePath('/') ? 'text-base-50' : 'text-base-50/80 hover:text-base-50'
              }`}
              onClick={() => setIsCoursesOpen(false)}
            >
              课程首页
            </Link>

            {/* 课程章节下拉菜单 */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="text-sm font-medium text-base-50/80 hover:text-base-50 focus-accent transition-colors flex items-center space-x-1"
              >
                <span>课程章节</span>
                <svg className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 glass-effect shadow-glass-lg">
                  {courseModules.map((module, index) => (
                    <Link
                      key={index}
                      to={module.path}
                      className={`relative block px-4 py-3 text-sm transition-colors ${
                        isActivePath(module.path) 
                          ? 'text-base-50 bg-accent-500/10' 
                          : 'text-base-50/80 hover:text-base-50 hover:bg-white/5'
                      }`}
                      onClick={() => setIsCoursesOpen(false)}
                    >
                      {module.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/course-test"
              className={`relative text-sm font-medium transition-colors focus-accent ${
                isActivePath('/course-test') ? 'text-base-50' : 'text-base-50/80 hover:text-base-50'
              }`}
              onClick={() => setIsCoursesOpen(false)}
            >
              课堂测试
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-base-50/80 hover:text-base-50 hover:bg-white/5 transition-colors focus-accent"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              to="/"
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/') ? 'text-base-50 bg-accent-500/10' : 'text-base-50/80 hover:text-base-50 hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              课程首页
            </Link>

            {/* 移动端课程章节 */}
            <div className="px-4 py-2">
              <div className="text-sm font-medium text-base-50/60 mb-2">课程章节</div>
              <div className="pl-4 space-y-1">
                {courseModules.map((module, index) => (
                  <Link
                    key={index}
                    to={module.path}
                    className={`block py-2 text-sm transition-colors ${
                      isActivePath(module.path) ? 'text-accent-500' : 'text-base-50/70 hover:text-base-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {module.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/course-test"
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/course-test') ? 'text-base-50 bg-accent-500/10' : 'text-base-50/80 hover:text-base-50 hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              课堂测试
            </Link>
          </div>
        )}
        </div>
      </nav>

      {/* 直播回放模态框 */}
      {isLiveReplayOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* 背景遮罩 */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsLiveReplayOpen(false)}
          />

          {/* 视频容器 */}
          <div className="relative z-10 w-full max-w-5xl">
            {/* 关闭按钮 */}
            <button
              onClick={() => setIsLiveReplayOpen(false)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
              aria-label="关闭"
            >
              <X className="w-8 h-8" />
            </button>

            {/* 视频播放器 */}
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
              <video
                className="absolute inset-0 w-full h-full"
                controls
                autoPlay
                src="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYxDMFeObnB.mov"
              >
                您的浏览器不支持视频播放。
              </video>
            </div>

            {/* 视频标题 */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white">课程直播回放</h3>
              <p className="text-gray-300 mt-2">观看完整课程讲解</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation; 