import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import {
  gsap,
  ScrollTrigger,
  Draggable,
  Flip,
  MotionPathPlugin,  
} from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

import "../styles/main.scss";

import "@script/common";
import "@script/about";
import "@script/contact.js"
