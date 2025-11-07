export interface ProfileSectionProps {
  user: {
    name: string;
    email: string;
    role: string;
    avatar: string;
  };
  onProfileClick?: () => void;
  onSignOutClick?: () => void;
}


export const user = {
    name: "AVIJIT BANERJEE",
    email: "ad25.doflb-wb@gov.in",
    role: "Inspector of Factories",
    avatar: "/api/placeholder/80/80"
  };


  export interface SummaryCardProps {
  value: string;
  label: string;
  icon: string;
}


export interface Factory {
  id: number;
  name: string;
  section: string;
  address: string;
  zone: string;
  dateOfAmenability: string;
  regNo: string;
  regDate: string;
  licenseNo: string;
  licenseDate: string;
  licenseExpireDate: string;
  commAddress: string;
  telephone: string;
  mobile: string;
  fax: string;
  email: string;
  status: string;
  statusDate: string;
}