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
  TweenLite,
} from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin, TweenLite);

import "../styles/main.scss";

import "./common";
import "./about";
import "./contact";
