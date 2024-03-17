import React from 'react';
import GradientBorder from '../ui/GradientBorder';

interface GradientCardProps {
  title: string;
  Icon: React.ElementType; 
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void; 

}

const AdminCard: React.FC<GradientCardProps> = ({ title, Icon, className, onClick, children }) => {
  return (
    <GradientBorder className={`flex flex-col items-center p-1 rounded-lg overflow-hidden ${className}`}>
      <div className='bg-primary-bgD w-full flex flex-col items-center p-4' onClick={onClick}>
        <Icon className="h-6 w-6 mb-2" />
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        {children}
      </div>
    </GradientBorder>
  );
};

export default AdminCard;
