import React from 'react';
import useSidebar from '../../Hooks/useSidebar'; 
import { Button } from 'primereact/button';
import './SidebarDemo.css'; 

export default function SidebarDemo() {
  // Sử dụng hook useSidebar để lấy các hàm và component Sidebar
  const { showSidebar: showLeftSidebar, Sidebar: LeftSidebar } = useSidebar();
  const { showSidebar: showRightSidebar, Sidebar: RightSidebar } = useSidebar();
  const { showSidebar: showTopSidebar, Sidebar: TopSidebar } = useSidebar();
  const { showSidebar: showBottomSidebar, Sidebar: BottomSidebar } = useSidebar();

  return (
    <div className="card">
      {/* Các nút để hiển thị sidebar */}
      <div className="flex gap-2 justify-content-center">
        <Button icon="pi pi-arrow-right" onClick={() => showLeftSidebar('left')} />
        <Button icon="pi pi-arrow-left" onClick={() => showRightSidebar('right')} />
        <Button icon="pi pi-arrow-down" onClick={() => showTopSidebar('top')} />
        <Button icon="pi pi-arrow-up" onClick={() => showBottomSidebar('bottom')} />
      </div>

      {/* Các sidebar */}
      <LeftSidebar>
        <h2>Left Sidebar</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </LeftSidebar>

      <RightSidebar>
        <h2>Right Sidebar</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </RightSidebar>

      <TopSidebar>
        <h2>Top Sidebar</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </TopSidebar>

      <BottomSidebar>
        <h2>Bottom Sidebar</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </BottomSidebar>
    </div>
  );
}
