import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import anime from 'animejs'

export default function Home() {
  const router = useRouter();
  var loading = false;
  const THRESHOLD = 15;
  var confirm = 0;
  var focusedIndex = null;

  function expandedView(i) {
    if (focusedIndex != null) return;
    confirm = 1;
    focusedIndex = i;
    const expandedImg = document.getElementById("expandedImg");
    const expandedImgB = document.getElementById("expandedImgB");
    const expandedAbout = document.getElementById("expandedAbout");
    const expandedButton = document.getElementById("expandedButton");
    if (i == 0) {
      expandedImg.src = "0.png"
      expandedImgB.src = "0.png"
      expandedAbout.innerHTML = "Meet Accounts, the heart of everything RYGB. It allows you to use RYGB services, interact with other RYGB users and create your own Manager store."
      expandedStatus.innerHTML = "Done (for now)"
      expandedButton.innerHTML = "Go"
    } else if (i == 1) {
      expandedImg.src = "1.png"
      expandedImgB.src = "1.png"
      expandedAbout.innerHTML = "Could you imagine if you never had to give your phone number to sign up for a store's rewards again? Or not have to download tons of apps to get rewards. Access them all in one place without giving out personal info. Meet Points."
      expandedStatus.innerHTML = "In Development (~4 months)"
      expandedButton.innerHTML = "Go"
    } else if (i == 2) {
      expandedImg.src = "2.png"
      expandedImgB.src = "2.png"
      expandedAbout.innerHTML = "View all of your Kiosk Security Cameras, and other security cameras in one place. Meet Live."
      expandedStatus.innerHTML = "Needs Rebranding. In Paused Development (~2 months)"
      expandedButton.innerHTML = "Go"
    } else if (i == 3) {
      expandedImg.src = "3.png"
      expandedImgB.src = "3.png"
      expandedAbout.innerHTML = "Manage your Employees, Products, Points Store, Kiosk and more, all in one place. See helpful Analyitics at a glance and customize your Dashboard to you. Meet Manager."
      expandedStatus.innerHTML = "In Development (1 Year+ & going amazing)"
      expandedButton.innerHTML = "Go"
    } else if (i == 4) {
      expandedImg.src = "4.png"
      expandedImgB.src = "4.png"
      expandedAbout.innerHTML = "This was a project for my coach's photography buisiness, but it didn't end up working out."
      expandedStatus.innerHTML = "Unfinished."
      expandedButton.innerHTML = "Go"
    } else if (i == 5) {
      expandedImg.src = "5.png"
      expandedImgB.src = "5.png"
      expandedAbout.innerHTML = "This short documentary was made for a 8th grade school project. It is about the importance of the Holocaust memorial Yad Vashem."
      expandedStatus.innerHTML = "Done"
      expandedButton.innerHTML = "Watch"
    } else if (i == 6) {
      expandedImg.src = "6.png"
      expandedImgB.src = "6.png"
      expandedAbout.innerHTML = "This is a short documentary made for a National History Day project. It is about the impact of 9/11"
      expandedStatus.innerHTML = "Done"
      expandedButton.innerHTML = "Watch"
    } else if (i == 7) {
      expandedImg.src = "7.png"
      expandedImgB.src = "7png"
      expandedAbout.innerHTML = "This is a Tik Tok video I created for my birthday named 'recap.'. This video shows a recap of my life so far."
      expandedStatus.innerHTML = "Done"
      expandedButton.innerHTML = "Watch"
    } else if (i == 8) {
      expandedImg.src = "8.png"
      expandedImgB.src = "8.png"
      expandedAbout.innerHTML = "This is a Tik Tok video I created reviewing the popular beloved south chicken finger restaurant Raising Canes."
      expandedStatus.innerHTML = "Done"
      expandedButton.innerHTML = "Watch"
    } else if (i == 9) {
      expandedImg.src = "9.png"
      expandedImgB.src = "9.png"
      expandedAbout.innerHTML = "This is a 1 minute commercial for a school project. We had to create a 'fake' product and make a commercial for it. Kiosk nor Kiosk software are for sale. Elements of the 'Kiosk' (Kiosk Software; displayed in the video) are real however, and may be released at a later date. Music by Olivia Rodrigo."
      expandedStatus.innerHTML = "Done (9/27/23)"
      expandedButton.innerHTML = "Watch"
    }
    anime({
      targets: [backgroundVideos.children, "#chText"],
      scale: 0.8,
      filter: "blur(40px)",
      easing: "easeInOutQuad",
      delay: anime.stagger(30),
      duration: 500,
    })
    const expandedView = document.getElementById("expandedView");
    expandedView.style.display = "grid"
    anime({
      targets: expandedView,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      translateX: "-50%",
      translateY: "-50%",
      easing: "easeInOutQuad",
    })
  }

  function go() {
    if (focusedIndex == null) return;
    if (confirm == 1) {
      const expandedView = document.getElementById("expandedView");
      anime({
        targets: [backgroundVideos.children, "#chText"],
        opacity: 0,
        scale: 0,
        easing: "easeInOutQuad",
        duration: 500,
        delay: anime.stagger(30),
      })
      anime({
        targets: expandedView,
        scale: 0.5,
        filter: "blur(40px)",
        translateX: "-100%",
        translateY: "-100%",
        opacity: 0,
        easing: "easeInOutQuad",
        delay: 200,
      })
      setTimeout(() => {
        const video = document.createElement("video");
        video.src = "rygbtrans.mp4"
        video.muted = true;
        video.style.opacity = "0"
        video.className = styles.fsvideo;
        console.log("click")
        document.getElementById("main").appendChild(video);
        if (focusedIndex != 4 && focusedIndex != 1 && focusedIndex != 2 && confirm == 1) {
          anime({
            targets: video,
            opacity: 1,
            easing: "easeInOutQuad",
            duration: 300,
          })
        }

        video.play();
        setTimeout(() => {
          if (focusedIndex == 0) {
            router.push("https://accounts.rygb.tech");
          } else if (focusedIndex == 1) {
            router.push("https://points.rygb.tech");
          } else if (focusedIndex == 2) {
            router.push("https://live.rygb.tech");
          } else if (focusedIndex == 3) {
            router.push("https://manager.rygb.tech/dash?demo=true");
          } else if (focusedIndex == 4) {
            router.push("https://storyteller.pages.dev/")
          } else if (focusedIndex == 5) {
            router.push("https://assets.rygb.tech/mainassets/assets/elapbafinal.mp4");
          } else if (focusedIndex == 6) {
            router.push("https://assets.rygb.tech/mainassets/assets/nhdprojectfinal.mp4")
          } else if (focusedIndex == 7) {
            router.push("https://assets.rygb.tech/mainassets/assets/recap.mp4")
          } else if (focusedIndex == 8) {
            router.push("https://assets.rygb.tech/mainassets/assets/rcreview.mp4")
          } else if (focusedIndex == 9) {
            router.push("https://assets.rygb.tech/mainassets/assetso/meetKioskMediaProd-Final.mp4");
          }
        }, 500)
      }, 800)
    }
  }

  function back() {
    if (confirm == 1) {
      //goback
      confirm = 0;
      focusedIndex = null;
      const expandedView = document.getElementById("expandedView");
      anime({
        targets: [backgroundVideos.children, "#chText"],
        scale: 1,
        filter: "blur(0px)",
        easing: "easeInOutQuad",
        delay: anime.stagger(30),
      })

      anime({
        targets: expandedView,
        opacity: 0,
        filter: "blur(40px)",
        scale: 1.5,
        translateX: "-30%",
        translateY: "-50%",
        easing: "easeInOutQuad",
        complete: () => {
          expandedView.style.display = "none"
        }
      })
    }
  }

  function clickEvent(i) {
    console.log("click event")
    const backgroundVideos = document.getElementById("backgroundVideos");
    if (focusedIndex != null) return;
    if (confirm == 1) {
      anime({
        targets: backgroundVideos.children,
        opacity: 0,
        scale: 0,
        easing: "easeInOutQuad",
        duration: 500,
        delay: anime.stagger(30),
      })
    }
    const video = document.createElement("video");
    if (i <= 4 && confirm == 1) {
      video.src = "rygbtrans.mp4"
      video.muted = true;
      video.style.opacity = "0"
      video.className = styles.fsvideo;
      console.log("click")
      document.getElementById("main").appendChild(video);
    }
    setTimeout(() => {
      if (i <= 9) {
        if (i != 4 && i != 1 && i != 2 && confirm == 1) {
          anime({
            targets: video,
            opacity: 1,
            easing: "easeInOutQuad",
            duration: 300,
          })
        }

        video.play();
        setTimeout(() => {
          expandedView(i);
        }, 500)
      }
    }, 400)
  }

  function load() {
    if (loading) return;
    loading = true;
    console.log("load")
    const backgroundVideos = document.getElementById("backgroundVideos");
    for (let i = 0; i < 12; i++) {
      if (i > 9) {
        const video = document.createElement("video");
        video.src = "static.mp4"
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.play()
        video.style.opacity = "0";
        video.className = styles.video
        backgroundVideos.appendChild(video);
        const card = video;
        function handleHover(e) {
          const { clientX, clientY, currentTarget } = e;
          const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

          const horizontal = (clientX - offsetLeft) / clientWidth;
          const vertical = (clientY - offsetTop) / clientHeight;
          const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
          const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
          //`perspective(${clientWidth}px) scale(1.1) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`
          anime({
            targets: card,
            perspective: `${clientWidth}px`,
            rotateX: rotateY,
            rotateY: rotateX,
            scale: 1.1,
          })
        }

        function resetStyles(e) {
          anime({
            targets: card,
            perspective: `${e.currentTarget.clientWidth}px`,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
          })
          //`perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) scale(1) rotateY(0deg)`,
        }
        card.addEventListener("mousemove", handleHover);
        card.addEventListener("mouseleave", resetStyles);
      } else {
        const img = document.createElement("img");
        img.src = i + ".png"
        img.style.opacity = "0";
        img.className = styles.video
        img.style.cursor = "pointer"
        img.onclick = () => clickEvent(i);
        backgroundVideos.appendChild(img);
        const card = img;
        function handleHover(e) {
          const { clientX, clientY, currentTarget } = e;
          const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

          const horizontal = (clientX - offsetLeft) / clientWidth;
          const vertical = (clientY - offsetTop) / clientHeight;
          const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
          const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
          //`perspective(${clientWidth}px) scale(1.1) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`
          anime({
            targets: card,
            perspective: `${clientWidth}px`,
            rotateX: rotateY,
            rotateY: rotateX,
            scale: 1.1,
          })
        }

        function resetStyles(e) {
          anime({
            targets: card,
            perspective: `${e.currentTarget.clientWidth}px`,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
          })

        }
        card.addEventListener("mousemove", handleHover);
        card.addEventListener("mouseleave", resetStyles);
      }
    }
    setTimeout(() => {
      anime({
        targets: backgroundVideos.children,
        opacity: 1,
        easing: "easeInOutQuad",
        delay: anime.stagger(50),
      })
    }, 1000)
  }

  useEffect(() => {
    load();
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>Marcus Mauricio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="main" onClick={() => back()}>
        <div id="backgroundVideos" className={styles.bggrid}>

        </div>
        <h1 className={styles.text} id="chText">Click a channel to view a project | Marcus Mauricio - 410-596-6619 (Updated 9/28/23)</h1>
      </div>
      <div id="expandedView" className={styles.expandedView} style={{ transform: "scale(1.5) translateX(-30%) translateY(-50%)" }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <img id="expandedImg" className={styles.expandedImg}></img>
          <img id="expandedImgB" className={styles.expandedImgB}></img>
        </div>

        <div style={{ paddingRight: "20px" }}>
          <h1 className={styles.expandedHeader}>ABOUT</h1>
          <p id="expandedAbout" className={styles.expandedAbout}></p>
          <h1 className={styles.expandedHeader}>STATUS</h1>
          <p id="expandedStatus" className={styles.expandedAbout}></p>
          <button id="expandedButton" className={styles.dsbutton} onClick={() => go()}>Go</button>
          <button id="expandedButton" className={styles.dsbutton} onClick={() => back()}>Back</button>
        </div>
      </div>
    </>
  )
}
