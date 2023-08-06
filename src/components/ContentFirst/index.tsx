import React, {memo} from "react";
import Link from '@docusaurus/Link';
import Logo from "@site/static/img/logo.svg";
import Github from '@site/static/img/github.svg'
import styles from './index.module.css'


const Index = memo(() => {


  return (
    <div className={styles.content}>
      <section className={styles.section}>
        <div>
          <Logo className={styles.headPortrait}/>
        </div>
        <div className={styles.name}>吴某人</div>
        <div className={styles.job}>(前端开发)</div>
        <div>
          <Link href='//github.com/wuzhouwei'>
            <Github className={styles.githubIcon} />
          </Link>
        </div>
      </section>

    </div>

  )
})

export default Index;