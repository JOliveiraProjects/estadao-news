import React from 'react';
import './html-view.css';

interface HtmlViewProps {
  htmlContent: string;
}

const HtmlView: React.FC<HtmlViewProps> = ({ htmlContent }) => {
  return (
    <div className="html-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default HtmlView;