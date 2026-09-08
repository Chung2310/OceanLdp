import React, { useState } from 'react';
import { Link } from 'wouter';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { branchRegions, branchesData } from '../../data/branchesData';
import { Branch } from '../../types';

export default function BranchMapSection(): JSX.Element {
  const [selectedRegion, setSelectedRegion] = useState<string>('ha-noi');
  const [activeBranch, setActiveBranch] = useState<Branch>(branchesData[0]);

  const filteredBranches = branchesData.filter(b => b.region === selectedRegion);

  return (
    <section className="w-full bg-[#f8fafc] py-16" aria-label="Hệ thống cơ sở">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#EAF5EE] text-[#1B7E45] font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
            HỆ THỐNG CƠ SỞ
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#1E293B] tracking-tight">
            20+ Cơ Sở Đào Tạo <span className="text-[#1B7E45]">Thuận Tiện Toàn Quốc</span>
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto mt-2">
            Không gian phòng học hiện đại, máy lạnh 100%, trang bị bảng tương tác và bãi đỗ xe rộng rãi.
          </p>
        </div>

        {/* Region Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {branchRegions.map((region) => (
            <button
              key={region.id}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedRegion === region.id 
                  ? 'bg-[#1B7E45] text-white shadow-md' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
              onClick={() => {
                setSelectedRegion(region.id);
                const firstInRegion = branchesData.find(b => b.region === region.id);
                if (firstInRegion) setActiveBranch(firstInRegion);
              }}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Branch Interactive Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 items-start">
          {/* Left Branch List */}
          <div className="space-y-3 max-h-[520px] overflow-y-auto pr-2">
            {filteredBranches.map((branch) => {
              const isActive = activeBranch.id === branch.id;
              return (
                <div 
                  key={branch.id} 
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-white border-[#1B7E45] shadow-md -translate-y-0.5' 
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                  onClick={() => setActiveBranch(branch)}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={16} className={isActive ? 'text-[#1B7E45]' : 'text-slate-400'} />
                    <h4 className={`text-sm font-bold ${isActive ? 'text-[#1B7E45]' : 'text-[#1E293B]'}`}>
                      {branch.name}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-1 mb-2 pl-6">{branch.address}</p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#F37021] pl-6">
                    <Phone size={12} /> {branch.hotline}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Branch Preview Detail */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg flex flex-col">
            <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
              <img src={activeBranch.image} alt={activeBranch.name} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-md">
                ĐANG MỞ CỬA: 08:00 - 21:30
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-4">
              <div>
                <h3 className="text-xl font-black text-[#1E293B] mb-1">{activeBranch.name}</h3>
                <p className="text-xs text-slate-600 flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#1B7E45] flex-shrink-0" /> {activeBranch.address}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 py-3 border-y border-slate-100">
                <div className="flex items-center gap-2">
                  <Phone size={15} className="text-[#F37021]" />
                  <span>Hotline: <strong className="text-slate-900">{activeBranch.hotline}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-[#1B7E45]" />
                  <span>Giờ mở cửa: {activeBranch.hours}</span>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Tiện ích phòng học:</div>
                <div className="flex flex-wrap gap-1.5">
                  {activeBranch.facilities.map((fac, i) => (
                    <span key={i} className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-lg">
                      ✓ {fac}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a 
                  href={activeBranch.mapUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-[#1B7E45] text-slate-700 hover:text-[#1B7E45] text-xs font-bold transition-colors cursor-pointer bg-slate-50"
                >
                  <ExternalLink size={14} /> Chỉ đường Google Maps
                </a>
                <Link 
                  href="/he-thong-co-so" 
                  className="inline-flex items-center gap-1.5 bg-[#1B7E45] hover:bg-[#156637] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors cursor-pointer shadow-sm"
                >
                  Xem tất cả 20+ cơ sở
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
