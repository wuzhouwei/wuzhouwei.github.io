import React, {memo} from "react";
import {data, point} from './_data'
import styles from './index.module.css'
import Email from  '../Email'

const Index = memo(() => {


  return (

    <section className={styles.section}>
      <div className={styles.leftWrap}>
        {
          data.map(item => (
            <div className={styles.item} key={item.id}>
              <span className={styles.key}>{item.keys}</span>
              <span className={styles.value}> {item.values}</span>
            </div>
          ))
        }
      </div>
      <div className={styles.rightWrap}>
        {
          point
        }
        <Email/>
      </div>
    </section>

  )
})

export default Index;
