import {useEffect} from 'react';

export const usePageColors = (backgroundColor: string, themeColor: string) => {
  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', themeColor);
    }

    return () => {
      // Restore background color and meta tag when the component is unmounted
      document.body.style.backgroundColor = '';
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '');
      }
    };
  }, [backgroundColor, themeColor]);
};
