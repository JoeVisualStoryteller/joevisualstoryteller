import React, { useState } from 'react';

export const usePDFExportResume2 = (fileName: string = 'Friend-Resume.pdf') => {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const exportToPDF = async (): Promise<void> => {
    setIsGenerating(true);

    try {
      // Dynamically import the PDF libraries only when needed
      const [{ pdf }, { default: PDFResume2 }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('../../components/ResumePage/PDFResume2')
      ]);

      // Use createElement instead of JSX to avoid erasable syntax error
      const blob = await pdf(React.createElement(PDFResume2)).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    exportToPDF,
    isGenerating
  };
};
