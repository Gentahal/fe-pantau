"use client";
import React from "react";

export default function Breadcrumb({
  homeText,
  currentPageText,
  isDashboard,
  onBackClick,
}) {
  return (
    <div className="flex items-center justify-end space-x-2 text-gray-500 text-lg mb-6 border-b border-gray-300 py-6 lg:justify-start">
      <span className="text-green-600 font-medium">{homeText}</span>
      <div className={`${isDashboard ? "hidden" : "block"}`}>
        <span className="text-gray-400">/</span>
      </div>
      <span className="text-gray-900 font-medium">{currentPageText}</span>
    </div>
  );
}
