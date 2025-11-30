// =========================================
// 1. Reveal Animation (Intersection Observer)
// =========================================
const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const anim = entry.target.dataset.animate;
    const speed = entry.target.dataset.speed || "";

    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated");
      entry.target.classList.add(anim); 
      if (speed) entry.target.classList.add(speed);
    } else {
      entry.target.classList.remove("animate__animated");
      entry.target.classList.remove(anim);
      if (speed) entry.target.classList.remove(speed);
    }
  });
}, {
  threshold: 0.5
});

elements.forEach(el => observer.observe(el));


// =========================================
// Hero Invert Cursor Effect (Updated)
// =========================================

// document.addEventListener('DOMContentLoaded', () => {
//     const heroSection = document.getElementById('Hero');
//     const cursorTracker = document.querySelector('.hero-cursor-tracker');

//     if (!heroSection || !cursorTracker) return;

//     // 1. ฟังก์ชันขยับเมาส์ (อัปเดตแค่ตัวแปร CSS --x, --y)
//     const moveCursor = (e) => {
//         cursorTracker.style.setProperty('--x', `${e.clientX}px`);
//         cursorTracker.style.setProperty('--y', `${e.clientY}px`);
//     }

    // 2. ฟังก์ชันจับการ Hover ข้อความ
    // เลือก Tag ที่อยากให้ขยาย (h1, h2, b, span, a)
    // const textElements = heroSection.querySelectorAll('h1, h2, b, span, a');

    // textElements.forEach(el => {
    //     el.addEventListener('mouseenter', () => {
    //         cursorTracker.classList.add('is-expanding');
    //     });
    //     el.addEventListener('mouseleave', () => {
    //         cursorTracker.classList.remove('is-expanding');
    //     });
    // });

    // 3. Logic หลัก (เข้า/ออก Hero Section)
//     heroSection.addEventListener('mouseenter', () => {
//         cursorTracker.classList.add('is-active');
//         document.addEventListener('mousemove', moveCursor);
//     });

//     heroSection.addEventListener('mouseleave', () => {
//         cursorTracker.classList.remove('is-active');
//         cursorTracker.classList.remove('is-expanding');
//         document.removeEventListener('mousemove', moveCursor);
//     });
// });


// =========================================
// 2. Global Invert Cursor Effect (Active)
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    const cursorTracker = document.querySelector('.cursor-tracker');

    // ถ้าไม่มีตัว Tracker ให้จบการทำงาน
    if (!cursorTracker) return;

    // 1. ฟังก์ชันขยับเมาส์ (Global)
    document.addEventListener('mousemove', (e) => {
        cursorTracker.style.setProperty('--x', `${e.clientX}px`);
        cursorTracker.style.setProperty('--y', `${e.clientY}px`);
    });

    // 2. ฟังก์ชันขยายเมื่อเจอ "Target" (เพิ่ม th, td, tr เข้าไปแล้ว)
    // ตรงนี้คือจุดสำคัญ! ต้องมี th, td ครับ
    const targetSelectors = 'a, button, h1, h2, h3, h4, p, span, b, th, td, i, img, .profile, .timeline, .next, .why, .ln-card';

    // เมื่อเมาส์ "ชี้" (Mouse Over)
    document.addEventListener('mouseover', (e) => {
        // เช็คว่าสิ่งที่ชี้อยู่ คือ Tag ที่เราต้องการไหม?
        if (e.target.closest(targetSelectors)) {
            cursorTracker.classList.add('is-expanding');
        }
    });

    // เมื่อเมาส์ "ออก" (Mouse Out)
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(targetSelectors)) {
            cursorTracker.classList.remove('is-expanding');
        }
    });
});