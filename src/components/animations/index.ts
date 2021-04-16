import gsap from "gsap";

export const doorHide = (root: HTMLDivElement, logo: HTMLDivElement) => {
  return new Promise((resolve) => {
    gsap.to(logo, {
      y: "-200px",
      duration: 1,
      ease: "Power3.easeOut",
    });
    gsap.to(root, {
      opacity: 0,
      duration: 0.5,
      ease: "linear",
      onComplete: () => {
        gsap.set(root, {
          display: "none",
        });
        resolve(null);
      },
    });
  });
};

export const toggleLoading = (root: HTMLDivElement, dir: boolean = true) => {
  if (dir) {
    return new Promise((resolve) => {
      gsap.killTweensOf(root);
      gsap.set(root, {
        display: "block",
        opacity: "0",
      });
      gsap.to(root, {
        opacity: 1,
        duration: 0.2,
        ease: "linear",
        onComplete: () => {
          resolve(null);
        },
      });
    });
  } else {
    return new Promise((resolve) => {
      gsap.killTweensOf(root);
      gsap.to(root, {
        opacity: 0,
        duration: 0.2,
        ease: "linear",
        onComplete: () => {
          gsap.set(root, {
            display: "none",
          });
          resolve(null);
        },
      });
    });
  }
};

export const toggleMenu = (
  root: HTMLDivElement,
  panel: HTMLDivElement,
  overlay: HTMLDivElement,
  dir: boolean = true
) => {
  if (dir) {
    gsap.set(root, {
      display: "block",
    });
    gsap.set(overlay, {
      opacity: 0,
    });
    gsap.set(panel, {
      x: "100%",
    });
    gsap.to(overlay, {
      opacity: 1,
      duration: 0.3,
      ease: "Power1.easeInOut",
    });
    gsap.to(panel, {
      x: "0",
      duration: 0.3,
    });
  } else {
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.3,
    });
    gsap.to(panel, {
      x: "100%",
      duration: 0.3,
      ease: "Power1.easeInOut",
      onComplete: () => {
        root.style.display = "none";
      },
    });
    gsap.set(root, {
      display: "none",
      delay: 0.3,
    });
  }
};

export const toggleAccordion = (
  child: HTMLDivElement,
  inner: HTMLDivElement,
  dir: boolean = true
) => {
  const ease = "Power2.easeInOut";
  const duration = 0.3;

  if (dir) {
    gsap.set(child, {
      height: 0,
    });
    gsap.to(child, {
      height: inner.clientHeight,
      duration,
      ease,
    });
  } else {
    gsap.to(child, {
      height: 0,
      duration,
      ease,
    });
  }
};

export const toggleSearchPanel = (
  bg: HTMLDivElement,
  inner: HTMLDivElement,
  dir: boolean = true
) => {
  const ease = "Power2.easeOut";
  const duration = 0.3;

  if (dir) {
    gsap.set(bg, {
      display: "block",
      opacity: 0,
    });
    gsap.set(inner, {
      opacity: 0,
      y: "50px",
    });
    gsap.to(bg, {
      opacity: 1,
      duration,
      ease: "Power0.easeNone",
    });
    gsap.to(inner, {
      y: 0,
      opacity: 1,
      duration,
      ease,
      delay: 0.1,
    });
  } else {
    gsap.to(inner, {
      y: "50px",
      opacity: 0,
      duration,
      ease,
    });
    gsap.to(bg, {
      opacity: 0,
      duration,
      ease: "Power0.easeNone",
      // delay: .2,
      onComplete: () => {
        bg.style.display = "none";
      },
    });
  }
};

export const toggleModal = (
  root: HTMLDivElement,
  mask: HTMLDivElement,
  overlay: HTMLDivElement,
  dir: boolean = true
) => {
  const duration = 0.3;
  const ease = "Power2.easeOut";

  return new Promise((resolve) => {
    if (dir) {
      gsap.set(root, {
        display: "block",
      });
      gsap.set(overlay, {
        opacity: 0,
      });
      gsap.set(mask, {
        y: "50px",
        opacity: 0,
      });
      gsap.to(overlay, {
        opacity: 1,
        duration,
        ease: "Power0.easeNone",
      });
      gsap.to(mask, {
        y: 0,
        opacity: 1,
        duration,
        ease,
        onComplete() {
          resolve(null);
        },
      });
    } else {
      gsap.to(overlay, {
        opacity: 0,
        duration,
        ease: "Power0.easeNone",
      });
      gsap.to(mask, {
        y: "50px",
        opacity: 0,
        duration,
        ease,
        onComplete() {
          resolve(null);
        },
      });
    }
  });
};

export const toggleMessage = (
  root: HTMLDivElement,
  counter: HTMLSpanElement,
  isShow: boolean = true,
  count?: number
) => {
  return new Promise((resolve) => {
    if (isShow) {
      gsap.killTweensOf(counter);
      gsap.set(root, {
        display: "block",
        opacity: 0,
      });
      gsap.set(counter, {
        width: 0,
      });
      gsap.to(counter, {
        width: "100%",
        duration: count,
        ease: "linear",
      });
      gsap.to(root, {
        opacity: 1,
        duration: 0.3,
        ease: "Power0.easeNone",
        onComplete: () => {
          resolve(null);
        },
      });
    } else {
      gsap.to(root, {
        opacity: 0,
        duration: 0.3,
        ease: "Power0.easeNone",
        onComplete: () => {
          gsap.set(root, {
            display: "none",
          });
          resolve(null);
        },
      });
    }
  });
};

export const toggleCard = (
  root: HTMLDivElement,
  panel: HTMLDivElement,
  overlay: HTMLDivElement,
  dir: boolean = true
) => {
  const duration = 0.4;

  return new Promise((resolve) => {
    if (dir) {
      gsap.set(root, {
        display: "block",
      });
      gsap.set(overlay, {
        opacity: 0,
      });
      gsap.set(panel, {
        bottom: "-100%",
      });
      gsap.to(overlay, {
        opacity: 1,
        duration,
        ease: "linear",
      });
      gsap.to(panel, {
        bottom: 0,
        duration,
        ease: "Power3.easeOut",
        onComplete: () => {
          resolve(null);
        },
      });
    } else {
      gsap.to(panel, {
        bottom: "-100%",
        duration,
        ease: "Power3.easeIn",
      });
      gsap.to(overlay, {
        opacity: 0,
        duration,
        ease: "linear",
        onComplete: () => {
          gsap.set(root, {
            display: "none",
          });
          resolve(null);
        },
      });
    }
  });
};
