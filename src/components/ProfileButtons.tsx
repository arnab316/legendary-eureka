import { Button } from "@/components/ui/button";

export const ProfileButtons: React.FC<{
  onProfileClick?: () => void;
  onSignOutClick?: () => void;
}> = ({ onProfileClick, onSignOutClick }) => {
  return (
    <div className="absolute right-6 top-[72px] flex gap-3">
      <Button 
        onClick={onProfileClick}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-sm font-semibold rounded shadow-md"
      >
        Profile
      </Button>
      <Button 
        onClick={onSignOutClick}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-sm font-semibold rounded shadow-md"
      >
        Sign out
      </Button>
    </div>
  );
};
