import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from "clsx";

const slides = [
  {
    name: "khu đô thi new center",
    desc: "khởi đầu thịnh vượng",
    image: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-1440-x-609-0125.png",
  },
  {
    name: "khu phố chợ đêm nam trung",
    desc: "hạnh phúc trọn vẹn",
    image: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-1440-x-609.png",
  },
  {
    name: "khu đô thi new center",
    desc: "khởi đầu thịnh vượng",
    image: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-web-novagroup-1440x609px---florida---resize.jpg",
  },
  {
    name: "khu phố chợ đêm nam trung",
    desc: "hạnh phúc trọn vẹn",
    image: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/web-nvl-hotram.jpg ",
  },
  {
    name: "khu đô thi new center",
    desc: "khởi đầu thịnh vượng",
    image: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-1440-x-609-100.jpg",
  },
]
function Slider() {
  const [activeIndex, setActiveIndex] = useState(0)

  
  useEffect(()=> {
    const interval = setInterval(()=> {
      setActiveIndex(prev => {
        if(prev < slides.length - 1) {
          return prev + 1
        }
        if (prev >= slides.length - 1) {
          return 0
        }
      })
    }, 4000)
    return ()=> clearInterval(interval)
  }, [activeIndex])


  const handleClickLeft = () => {
    setActiveIndex(prev => {
      if(prev > 0) {
        return prev - 1 
      }
      if (prev === 0) {
        return Number(slides.length - 1)
      }
    })
  }
  const handleClickRight = () => {
    setActiveIndex(prev => {
      if(prev < slides.length - 1) {
        return prev + 1
      }
      if (prev >= slides.length - 1) {
        return 0
      }
    })
  }
  return (
      <div className={styles.slider}>
        <div className={styles.wrapper}>
          {slides
            .filter((item, index)=> index === Number(activeIndex))
            .map((item, index)=> (

              <div key={index} className={styles.bg}
                style={{
                  backgroundImage: `url(${item.image})`
                }}
              >
                <div className={styles.controls}>
                  <div className={styles.btn}
                    onClick={handleClickLeft}
                  >
                    <ChevronLeftIcon className={styles.icon}/>
                  </div>
                  <div className={styles.btn}
                    onClick={handleClickRight}

                  >
                    <ChevronRightIcon className={styles.icon}/>
                    
                  </div>

                </div>
              </div>
            ))
          }
          <div className={styles.contents}>
            {slides.map((item, index) => (
              <div key={index} className={clsx(styles.content, {
                [styles.active] : index === Number(activeIndex)
              })}
              
              >
                <h2>{item.name.toUpperCase()}</h2>
                <div className={styles.desc}>
                  <h3>{item.desc.toUpperCase()}</h3>
                  <div className={styles.button}>
                    <h4>XEM THÊM</h4>
                    <div className={styles.btn}>
                      <ChevronRightIcon className={styles.icon}/>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default Slider;