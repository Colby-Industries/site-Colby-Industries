'use client';

import styles from './Icon.module.css';
import air from '@/assets/icons/air.svg';
import arrows from '@/assets/icons/arrows.svg';
import pathIcon from '@/assets/icons/path.svg';
import tor from '@/assets/icons/tor.svg';
import signal from '@/assets/icons/signal.svg';
import signals from '@/assets/icons/signals.svg';
import electricity from '@/assets/icons/electricity.svg';
import water from '@/assets/icons/water.svg';
import energyMgmnt from '@/assets/icons/energy-mgmnt.svg';
import measurements from '@/assets/icons/measurements.svg';
import pieChart from '@/assets/icons/pie-chart.svg';
import barChart from '@/assets/icons/bar-chart.svg';
import dotChart from '@/assets/icons/dot-chart.svg';
import arrow from '@/assets/icons/arrow.svg';
import data from '@/assets/icons/data.svg';
import wall from '@/assets/icons/wall.svg';
import position from '@/assets/icons/position.svg';
import target from '@/assets/icons/target.svg';
import chart from '@/assets/icons/chart.svg';
import wheels from '@/assets/icons/wheels.svg';
import coins from '@/assets/icons/coins.svg';
import person from '@/assets/icons/person.svg';
import datacenter from '@/assets/icons/datacenter.svg';
import square from '@/assets/icons/square.svg';
import group from '@/assets/icons/group.svg';
import { clsx } from 'clsx';

const ICON_COMPONENTS = {
  air,
  arrows,
  path: pathIcon,
  tor,
  signal,
  signals,
  electricity,
  water,
  'energy-mgmnt': energyMgmnt,
  measurements,
  'pie-chart': pieChart,
  'bar-chart': barChart,
  'dot-chart': dotChart,
  arrow,
  data,
  wall,
  position,
  target,
  chart,
  wheels,
  coins,
  person,
  square,
  datacenter,
  group,
} as const;

export type IconName = keyof typeof ICON_COMPONENTS;

export interface IconProps {
  type: IconName;
  size?: number;
  color?: string;
  title?: string;
  className?: string;
  rotation?: number;
}

export default function Icon({ type, size = 24, color, title, className, rotation }: IconProps) {
  const SvgIcon = ICON_COMPONENTS[type];

  return (
    <span
      className={clsx(styles.iconWrapper, className)}
      style={{ width: `${size}px`, color: color, ['--icon-color' as string]: color }}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      title={title}
    >
      <SvgIcon
        className={styles.icon}
        style={
          rotation !== undefined
            ? { transform: `rotate(${rotation}deg)`, transformOrigin: 'center', transformBox: 'fill-box' }
            : undefined
        }
      />
    </span>
  );
}
