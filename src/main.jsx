import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Same style of barrel import the calculator uses, to exercise the same bundling work.
import {
  Milk, Plus, AlertTriangle, Edit2, Trash2, Info, Syringe, Activity,
  CheckSquare, Square, Calculator, Droplet, Heart, Thermometer, Baby,
  Pill, FlaskConical, Scale, Clock, Settings, Printer, QrCode, Search,
  ChevronDown, ChevronUp, X, Check, RefreshCw, Save, Upload, Download,
  FileText, Layers, Zap, Wind, Sun, Moon, Star, Bell, Lock, Unlock,
  Eye, EyeOff, Home, Menu, MoreVertical, Copy, Share, Link, ExternalLink
} from 'lucide-react';

function fib(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) [a, b] = [b, a + b];
  return a;
}

const icons = [Milk, Plus, AlertTriangle, Edit2, Trash2, Info, Syringe, Activity, CheckSquare, Square,
  Calculator, Droplet, Heart, Thermometer, Baby, Pill, FlaskConical, Scale, Clock, Settings, Printer,
  QrCode, Search, ChevronDown, ChevronUp, X, Check, RefreshCw, Save, Upload, Download, FileText, Layers,
  Zap, Wind, Sun, Moon, Star, Bell, Lock, Unlock, Eye, EyeOff, Home, Menu, MoreVertical, Copy, Share,
  Link, ExternalLink];

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
