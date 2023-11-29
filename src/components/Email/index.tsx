import React, {memo, useEffect} from "react";

const Email = memo(() => {
  useEffect(() => {
    const script = document.createElement('script');
    script.text = `
      window.CustomSubstackWidget = {
        substackUrl: 'juvenilezw.substack.com',
        placeholder: 'Your Email',
        buttonText: 'Subscribe',
        theme: 'custom',
        colors: {
          primary: "#DABAC6",
          input: "#9D6F6F00",
          email: "#89874C",
          text: "#238963",
        },
      };
    `;
    document.head.appendChild(script);
    const widgetScript = document.createElement('script');
    widgetScript.src = 'https://substackapi.com/widget.js';
    widgetScript.async = true;
    document.head.appendChild(widgetScript);
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(widgetScript);
    };
  }, []);
  return (
    <div id="custom-substack-embed"/>
  )
})

export default Email;
