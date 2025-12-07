// src/data/skills.js
import phpIcon from "../assets/icons/php.ico";
import jsIcon from "../assets/icons/javascript.ico";
import sqlIcon from "../assets/icons/sql.ico";
import htmlIcon from "../assets/icons/html.ico";
import cssIcon from "../assets/icons/css.ico";

import laravelIcon from "../assets/icons/laravel.ico";
import reactIcon from "../assets/icons/react.ico";
import mysqlIcon from "../assets/icons/mysql.ico";
import gitIcon from "../assets/icons/git.ico";
import githubIcon from "../assets/icons/github.ico";

import pythonIcon from "../assets/icons/python.ico";

export const skills = [
  {
    category: "Web Development",
    items: [
      { name: "PHP", icon: phpIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "SQL", icon: sqlIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
    ],
  },
  {
    category: "Frameworks & Tools",
    items: [
      { name: "Laravel", icon: laravelIcon },
      { name: "React", icon: reactIcon },
      { name: "MySQL", icon: mysqlIcon },
      { name: "Git", icon: gitIcon },
      { name: "GitHub", icon: githubIcon },
    ],
  },
  {
    category: "Programming Languages",
    items: [
      { name: "Python", icon: pythonIcon },
      { name: "PHP", icon: phpIcon },
    ],
  },
];
