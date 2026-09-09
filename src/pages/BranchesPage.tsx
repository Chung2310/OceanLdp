import React, { useState } from 'react';
import { Link } from 'wouter';
import { MapPin, Phone, Mail, ExternalLink, ArrowRight, Building2 } from 'lucide-react';
import { branchRegions, branchesData } from '../data/branchesData';

export default function BranchesPage(): JSX.Element {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const filteredBranches = selectedRegion === 'all' 
    ? branchesData 
    : branchesData.filter(b => b.region === selectedRegion);

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">
      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-br from-[#1E293B] to-[#0f172a] py-14 px-4 text-center text-white">
        <div className="max-w-[1280px] mx-auto">
          <span className="inline-block bg-[#1B7E45]/25 text-[#bbf0d2] border border-[#1B7E45]/40 text-xs font-extrabold px-3.5 py-1 rounded-md mb-3 uppercase tracking-wider">
            HỆ THỐNG CƠ SỞ
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
            Hệ Thống Cơ Sở Đào Tạo Green Ocean
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Hệ thống cơ sở hiện đại tại trung tâm TP. Bắc Ninh kết hợp chương trình đào tạo trực tuyến tương tác hai chiều phục vụ học viên trên toàn quốc.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 py-10">
        {/* Region Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <button 
            className={`px-5 py-2.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
              selectedRegion === 'all' 
                ? 'bg-[#1B7E45] text-white shadow-xs' 
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
            onClick={() => setSelectedRegion('all')}
          >
            Tất cả cơ sở ({branchesData.length})
          </button>
          {branchRegions.map((r) => (
            <button 
              key={r.id} 
              className={`px-5 py-2.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                selectedRegion === r.id 
                  ? 'bg-[#1B7E45] text-white shadow-xs' 
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
              onClick={() => setSelectedRegion(r.id)}
            >
              {r.name}
            </button>
          ))}
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map((branch) => (
            <div 
              key={branch.id} 
              className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col group"
            >
              <Link href={`/he-thong-co-so/${branch.id}`} className="relative aspect-[16/10] overflow-hidden bg-slate-100 block">
                <img 
                  src={branch.image} 
                  alt={branch.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute bottom-3 left-3 bg-slate-900/80 text-white text-[11px] font-medium px-2.5 py-1 rounded-md backdrop-blur-sm">
                  {branch.hours}
                </div>
              </Link>

              <div className="p-6 flex flex-col flex-grow">
                <Link href={`/he-thong-co-so/${branch.id}`}>
                  <h3 className="text-base md:text-lg font-bold text-[#1E293B] mb-3 group-hover:text-[#1B7E45] transition-colors leading-snug">
                    {branch.name}
                  </h3>
                </Link>
                
                <div className="space-y-2 text-xs text-slate-600 mb-4 flex-grow">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="text-[#1B7E45] flex-shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-[#F37021] flex-shrink-0" />
                    <span>Hotline: <strong className="text-slate-800">{branch.hotline}</strong></span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-[#1B7E45] flex-shrink-0" />
                    <span>{branch.email}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 mb-4">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Tiện ích:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {branch.facilities.map((fac, fi) => (
                      <span key={fi} className="bg-slate-100 text-slate-600 text-[11px] font-medium px-2 py-0.5 rounded-md">
                        ✓ {fac}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto space-y-2">
                  <Link 
                    href={`/he-thong-co-so/${branch.id}`}
                    className="w-full py-2.5 px-4 rounded-md bg-[#1B7E45] hover:bg-[#156637] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                  >
                    Xem chi tiết cơ sở & môi trường học <ArrowRight size={14} />
                  </Link>

                  <a 
                    href={branch.mapUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-full py-2 px-4 rounded-md border border-slate-200 hover:border-[#1B7E45] text-slate-600 hover:text-[#1B7E45] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer bg-slate-50 hover:bg-[#EAF5EE]"
                  >
                    <ExternalLink size={13} /> Chỉ đường Google Maps
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
