import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// One import per icon file, so the build reads only the icons used.
import Milk from 'lucide-react/dist/esm/icons/milk.js';
import Plus from 'lucide-react/dist/esm/icons/plus.js';
import TriangleAlert from 'lucide-react/dist/esm/icons/triangle-alert.js';
import Pencil from 'lucide-react/dist/esm/icons/pencil.js';
import Trash2 from 'lucide-react/dist/esm/icons/trash-2.js';
import Info from 'lucide-react/dist/esm/icons/info.js';
import Syringe from 'lucide-react/dist/esm/icons/syringe.js';
import Activity from 'lucide-react/dist/esm/icons/activity.js';
import SquareCheck from 'lucide-react/dist/esm/icons/square-check.js';
import Square from 'lucide-react/dist/esm/icons/square.js';
import Calculator from 'lucide-react/dist/esm/icons/calculator.js';
import Droplet from 'lucide-react/dist/esm/icons/droplet.js';
import Heart from 'lucide-react/dist/esm/icons/heart.js';
import Thermometer from 'lucide-react/dist/esm/icons/thermometer.js';
import Baby from 'lucide-react/dist/esm/icons/baby.js';
import Pill from 'lucide-react/dist/esm/icons/pill.js';
import FlaskConical from 'lucide-react/dist/esm/icons/flask-conical.js';
import Scale from 'lucide-react/dist/esm/icons/scale.js';
import Clock from 'lucide-react/dist/esm/icons/clock.js';
import Settings from 'lucide-react/dist/esm/icons/settings.js';
import Printer from 'lucide-react/dist/esm/icons/printer.js';
import QrCode from 'lucide-react/dist/esm/icons/qr-code.js';
import Search from 'lucide-react/dist/esm/icons/search.js';
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down.js';
import ChevronUp from 'lucide-react/dist/esm/icons/chevron-up.js';
import X from 'lucide-react/dist/esm/icons/x.js';
import Check from 'lucide-react/dist/esm/icons/check.js';
import RefreshCw from 'lucide-react/dist/esm/icons/refresh-cw.js';
import Save from 'lucide-react/dist/esm/icons/save.js';
import Upload from 'lucide-react/dist/esm/icons/upload.js';
import Download from 'lucide-react/dist/esm/icons/download.js';
import FileText from 'lucide-react/dist/esm/icons/file-text.js';
import Layers from 'lucide-react/dist/esm/icons/layers.js';
import Zap from 'lucide-react/dist/esm/icons/zap.js';
import Wind from 'lucide-react/dist/esm/icons/wind.js';
import Sun from 'lucide-react/dist/esm/icons/sun.js';
import Moon from 'lucide-react/dist/esm/icons/moon.js';
import Star from 'lucide-react/dist/esm/icons/star.js';
import Bell from 'lucide-react/dist/esm/icons/bell.js';
import Lock from 'lucide-react/dist/esm/icons/lock.js';
import LockOpen from 'lucide-react/dist/esm/icons/lock-open.js';
import Eye from 'lucide-react/dist/esm/icons/eye.js';
import EyeOff from 'lucide-react/dist/esm/icons/eye-off.js';
import House from 'lucide-react/dist/esm/icons/house.js';
import Menu from 'lucide-react/dist/esm/icons/menu.js';
import EllipsisVertical from 'lucide-react/dist/esm/icons/ellipsis-vertical.js';
import Copy from 'lucide-react/dist/esm/icons/copy.js';
import Share from 'lucide-react/dist/esm/icons/share.js';
import Link from 'lucide-react/dist/esm/icons/link.js';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link.js';

function fib(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) [a, b] = [b, a + b];
  return a;
}

const icons = [Milk, Plus, TriangleAlert, Pencil, Trash2, Info, Syringe, Activity, SquareCheck, Square, Calculator, Droplet, Heart, Thermometer, Baby, Pill, FlaskConical, Scale, Clock, Settings, Printer, QrCode, Search, ChevronDown, ChevronUp, X, Check, RefreshCw, Save, Upload, Download, FileText, Layers, Zap, Wind, Sun, Moon, Star, Bell, Lock, LockOpen, Eye, EyeOff, House, Menu, EllipsisVertical, Copy, Share, Link, ExternalLink];

function App() {
  const sequence = Array.from({ length: 15 }, (_, i) => fib(i));
  return (
    <main style={{ fontFamily: 'system-ui', padding: 24 }}>
      <h1>Fibonacci test</h1>
      <p>Fibonacci: {sequence.join(', ')}</p>
      <p>Icons loaded: {icons.length}</p>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode><App /></StrictMode>
);
