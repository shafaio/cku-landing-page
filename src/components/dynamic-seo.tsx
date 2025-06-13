"use client";

import { useEffect } from "react";
import { CompanyInformation, SEOSetting } from "@/type";

export const DynamicSEO = (props: SEOSetting & CompanyInformation) => {
  useEffect(() => {
    if (props.SiteTitle) {
      document.title = props.SiteTitle;
    }

    const setMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    const setProperty = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setMeta("description", props.SiteDescription);
    setMeta("keywords", props.SiteKeywords);
    setProperty("og:title", props.SiteTitle);
    setProperty("og:description", props.SiteDescription);
    setProperty(
      "og:image",
      `${process.env.NEXT_PUBLIC_BASE_API}${props.OGImage.url}`
    );
  }, [props]);

  return null; // nothing rendered visually
};
