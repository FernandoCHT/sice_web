import React from "react";
import * as Md from "react-icons/md";
import * as Fa from "react-icons/fa";

export const DatosMenu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Fa.FaChalkboardTeacher />,
    CName: "nav-text",
  },
  {
    title: "Registrar Alumno",
    path: "/registrar_alumno",
    icon: <Md.MdSchool />,
    CName: "nav-text",
  },
  {
    title: "Registrar Maestro",
    path: "/registrar_maestro",
    icon: <Fa.FaChalkboardTeacher />,
    CName: "nav-text",
  },
];

export default DatosMenu;
