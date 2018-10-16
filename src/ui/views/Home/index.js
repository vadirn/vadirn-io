import Link from 'components/controls/Link';
import Icon, { ICONS } from 'components/other/Icon';
import React from 'react';
import s from './styles.css';
import c from 'classnames';
import { withConsumer } from 'main';

function Home() {
  return (
    <div className={s.container}>
      <div className={s.cover} />
      <div className={s.v}>
        <Icon path={ICONS.CUSTOM.LETTER_V} size={'CUSTOM.LETTER_V'} />
      </div>
      <div className={s.a}>
        <Icon path={ICONS.CUSTOM.LETTER_A} size={'CUSTOM.LETTER_A'} />
      </div>
      <div className={s.d}>
        <Icon path={ICONS.CUSTOM.LETTER_D} size={'CUSTOM.LETTER_D'} />
      </div>
      <div className={s.i}>
        <Icon path={ICONS.CUSTOM.LETTER_I} size={'CUSTOM.LETTER_I'} />
      </div>
      <div className={s.r}>
        <Icon path={ICONS.CUSTOM.LETTER_R} size={'CUSTOM.LETTER_R'} />
      </div>
      <div className={s.n}>
        <Icon path={ICONS.CUSTOM.LETTER_N} size={'CUSTOM.LETTER_N'} />
      </div>
      <div className={s.text}>
        <p className="text-bold">
          Hi! I&apos;m Vadim. I design and code user interfaces.{' '}
          <Link
            href="https://www.amazon.com/dp/0804137501/ref=cm_sw_r_tw_dp_U_x_JvGXBb8H8WTJ8"
            target="_blank"
            rel="noopener noreferer">
            Remote
          </Link>{' '}
          only.
        </p>
        <ul className="m-s-b">
          <li>
            <Link href="https://github.com/vadirn" target="_blank" rel="noopener noreferer">
              Github
            </Link>
          </li>
          <li>
            Reach me out on{' '}
            <Link href="https://twitter.com/vadirn" target="_blank" rel="noopener noreferer">
              Twitter
            </Link>
          </li>
        </ul>
        <p className="color-neutral-4">Recent projects</p>
        <ul>
          <li>
            Browser client for{' '}
            <Link href="https://11sight.com/" target="_blank" rel="noopener noreferer">
              11sight.com
            </Link>{' '}
            video-messenger
          </li>
          <li>
            Design system and all frontend work for{' '}
            <Link href="https://sparcit.com/" target="_blank" rel="noopener noreferer">
              sparcit.com
            </Link>
          </li>
        </ul>
      </div>
      <div className={c(s.footer, 'color-neutral-4')}>
        This site is based on{' '}
        <Link href="https://github.com/vadirn/starter-pack" target="_blank" rel="noopener noreferer">
          starter-pack v0.0.4
        </Link>
        .{' '}
        <Link href="https://github.com/vadirn/vadirn-io" target="_blank" rel="noopener noreferer">
          Source
        </Link>
      </div>
    </div>
  );
}

function filter() {
  return {};
}

export default withConsumer(Home, filter);
