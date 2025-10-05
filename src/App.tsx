import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import GlobalBackground from './components/GlobalBackground';
import PageVignette from './components/PageVignette';

import HomePage from './pages/HomePage';
import AutomationIndustryPage from './pages/course/AutomationIndustryPage';
import PLCBasicsPage from './pages/course/PLCBasicsPage';
import ProgramDevelopmentPage from './pages/course/ProgramDevelopmentPage';
import CourseTestPage from './pages/CourseTestPage';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative">
        <GlobalBackground />
        <PageVignette intensity="medium" />

        <Navigation />
        <div className="container mx-auto px-4 pt-20 relative z-10">
          <Routes>
            {/* 首页 */}
            <Route path="/" element={<HomePage />} />

            {/* 主要课程内容 - 基于讲义的四大模块 */}
            <Route path="/course/automation-industry" element={<AutomationIndustryPage />} />
            <Route path="/course/plc-basics" element={<PLCBasicsPage />} />
            <Route path="/course/program-development" element={<ProgramDevelopmentPage />} />

            {/* 课堂测试 */}
            <Route path="/course-test" element={<CourseTestPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;