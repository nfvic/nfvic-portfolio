
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <div className="flex flex-col space-y-3">
      <RadioGroup 
        value={theme}
        onValueChange={(value) => setTheme(value as 'blue' | 'red')}
        className="flex space-x-2"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="blue" id="theme-blue" className="border-blue-500" />
          <Label 
            htmlFor="theme-blue" 
            className={cn(
              "cursor-pointer flex items-center", 
              theme === 'blue' ? 'text-blue-500' : 'text-muted-foreground'
            )}
          >
            <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
            Blue
          </Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="red" id="theme-red" className="border-red-500" />
          <Label 
            htmlFor="theme-red" 
            className={cn(
              "cursor-pointer flex items-center", 
              theme === 'red' ? 'text-red-500' : 'text-muted-foreground'
            )}
          >
            <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
            Red
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default ThemeSelector;
