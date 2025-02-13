import { useState } from "react";
// // // // // // // // // icons importing from components
import { LucideIcon, LucideProps } from "lucide-react";
// // // // // react
import {
  MoonIcon2,
  ShareIcon2,
  SunMediumIcon,
  ExternalLinkIcon,
  BookmarkIconComponent,
  LinkIcon,
  FacebookIcon,
  LinkedinIcon,
  MoreVerticalIcon,
  EyeOffIcon,
  BanIcon,
  FlagIconComponent,
  ChevronLeftIconComponent,
  ChevronRightIconComponent,
  FlameIcon,
  Xclose,
  ArrowBigUpIcon,
  MessagesSquareIcon,
  SearchIcon,
  BellIcon,
  HistoryIcon,
  UserIcon,
  SettingsIcon,
  DoorOpenIcon,
  BookOpenCheckIcon,
  ChevronLeftIconComponent2,
  ChevronRightIconComponent2,
  Settings2Icon,
  NewspaperIcon,
  Loader2IconComponent,
  CheckCircle2Icon,
  PencilIcon,
  HomeIcon,
  LogOutIcon,
  SquareIcon,
  circleIcon,
  triangleIcon,
  triangleRightIcon,
  hexagonIcon,
  FishIcon,
  RibbonIcon,
  DonutIcon,
  MusicIcon,
  MusicIcon2,
  diamondIcon,
  SunAltIcon,
  circleAltIcon,
  hexagonAltIcon,
  SquareAltIcon,
  triangleAltIcon,
  triangleRightAltIcon,
  diamondAltIcon,
  Star1Icon,
  StarAltIcon,
} from "./ReactIcons";
// // // // // shadcn
import {
  ArrowRight,
  BookingLogo,
  BookingTripsIcon,
  CardXIcon,
  Discount,
  EmptyCalendarImg,
  FacebookWhiteIcon,
  IconApple,
  IconError,
  IconFacebook,
  IconGoogle,
  IconGuest,
  IconHamburger,
  IconHeart,
  IconPlusMinus,
  Information,
  LocationIcon,
  MyAccountIcon,
  SmallUpDown,
  Stars,
  UpDown,
  UpDownHeads,
  Vi,
  ViIcon,
  Xicon,
  XIcon,
  ShareIcon,
  Unlock,
  Copy,
  Heart,
  LockIcon,
  Bag,
  CommentIcon,
  Email,
  Hands,
  IconCounterMinus,
  IconCounterPlus,
  IconMen,
  Note,
  Question,
  Safety,
  ViBorder,
  XregularIcon,
  YellowCube,
  YellowVi,
  Coins,
  Command,
  HousePlus,
  Volume,
  BlackMen,
  Bottle,
  CheckIn,
  CheckOut,
  Cigar,
  CofeeCup,
  Groups,
  Payment,
  Person,
  Persons,
  Pet,
  QuestionMarkInfoIcon,
  SmallIconVi,
  Tower,
  MoonIcon,
  Plus,
  AgodaIcon,
  BeachIcon,
  BookingLogoBlue,
  CityIcon,
  CribIcon,
  DownIcon,
  FiltersIcon,
  GeniusLoyaltyIcon,
  KayakIcon,
  OpenTableIcon,
  OutdoorsIcon,
  PricelineIcon,
  ReviewsIcon,
  RewardsWalletIcon,
  SavedIcon,
  SignoutIcon,
  UpIcon,
  DeleteIcon,
  EditIcon,
  MapIcon,
} from "./CNIcons";
// // // // // feather
import {
  Activity,
  Airplay,
  Alert_circle,
  Alert_octagon,
  Alert_triangle,
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Anchor,
  Aperture,
  Archive,
  ArrowDown,
  ArrowDownCircle,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowLeft,
  ArrowLeftCircle,
  ArrowRight2,
  ArrowRightCircle,
  ArrowUp,
  ArrowUpCircle,
  ArrowUpLeft,
  ArrowUpRight,
  AtSign,
  Award,
  BarChart,
  BarChart2,
  Battery,
  BatteryCharging,
  Bell2,
  BellOff,
  Bluetooth,
  Bold,
  Book,
  Bookmark,
  BookOpen,
  Box,
  Briefcase,
  Calendar,
  Camera,
  CameraOff,
  Cast,
  Check,
  CheckCircle,
  CheckSquare,
  ChevronDown,
  ChevronLeft2,
  ChevronRight2,
  ChevronsDown,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUp,
  ChevronUp,
  Chrome,
  Circle,
  Clipboard2,
  Clock,
  Cloud,
  CloudDrizzle,
  CloudLightning,
  CloudOff,
  CloudRain,
  CloudSnow,
  Code,
  Codepen,
  Codesandbox,
  Coffee,
  Columns,
  Compass,
  CornerDownLeft,
  CornerDownRight,
  CornerLeftDown,
  CornerLeftUp,
  CornerRightDown,
  CornerRightUp,
  CornerUpLeft,
  CornerUpRight,
  Cpu,
  CreditCard,
  Crop,
  Crosshair,
  Database,
  Delete,
  Disc,
  Divide,
  DivideCircle,
  DivideSquare,
  DollarSign,
  Download,
  DownloadCloud,
  Dribbble,
  Droplet,
  Edit2,
  Edit3,
  Edit4,
  ExternalLink2,
  Eye,
  EyeOff2,
  Facebook2,
  FastForward,
  Feather,
  Figma,
  File2,
  FileMinus,
  FilePlus,
  FileText,
  Film,
  Filter,
  Flag,
  Folder,
  FolderMinus,
  FolderPlus,
  Framer,
  Frown,
  Gift,
  GitBranch,
  GitCommit,
  Github,
  Gitlab,
  GitMerge,
  GitPullRequest,
  Globe,
  Grid,
  HardDrive,
  Hash,
  Headphones,
  Heart3,
  HelpCircle,
  Hexagon,
  Home2,
  Image2,
  Inbox,
  Info,
  Instagram,
  Italic,
  Key,
  Layers,
  Layout,
  LifeBuoy,
  Link2,
  Link3,
  Linkedin2,
  List,
  Loader,
  Lock2,
  LogIn,
  LogOut2,
  Mail,
  Map2,
  MapPin,
  Maximize,
  Maximize2,
  Meh,
  Menu,
  MessageCircle,
  MessageSquare,
  Mic,
  MicOff,
  Minimize,
  Minimize2,
  Minus,
  MinusCircle,
  MinusSquare,
  Monitor,
  Moon3,
  MoreHorizontal,
  MoreVertical2,
  MousePointer,
  Move,
  Music,
  Navigation,
  Navigation2,
  Octagon,
  Package,
  Paperclip,
  Pause,
  PauseCircle,
  PenTool,
  Percent,
  Phone,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneMissed,
  PhoneOff,
  PhoneOutgoing,
  PieChart,
  Play,
  PlayCircle,
  Plus2,
  PlusCircle,
  PlusSquare,
  Pocket,
  Power,
  Printer,
  Radio,
  RefreshCcw,
  RefreshCw,
  Repeat,
  Rewind,
  RotateCcw,
  RotateCw,
  Rss,
  Save,
  Scissors,
  Search2,
  Send,
  Server,
  Settings3,
  Share3,
  Share4,
  Shield,
  ShieldOff,
  ShoppingBag,
  ShoppingCart,
  Shuffle,
  Sidebar,
  SkipBack,
  SkipForward,
  Slack,
  Slash,
  Sliders,
  Smartphone,
  Smile,
  Speaker,
  Square,
  Star,
  StopCircle,
  Sun,
  Sunrise,
  Sunset,
  Table,
  Tablet,
  Tag,
  Target,
  Terminal,
  Thermometer,
  ThumbsDown,
  ThumbsUp,
  ToggleLeft,
  ToggleRight,
  Tool,
  Trash,
  Trash2,
  Trello,
  TrendingDown,
  TrendingUp,
  Triangle,
  Truck,
  Tv,
  Twitch,
  Twitter,
  Type,
  Umbrella,
  Underline,
  Unlock2,
  Upload,
  UploadCloud,
  User2,
  UserCheck,
  UserMinus,
  UserPlus,
  Users,
  UserX,
  Video,
  VideoOff,
  Voicemail,
  Volume1,
  Volume2,
  Volume3,
  VolumeX,
  Watch,
  Wifi,
  WifiOff,
  Wind,
  X3,
  XCircle,
  XOctagon,
  XSquare,
  Youtube,
  Zap,
  ZapOff,
  ZoomIn,
  ZoomOut,
} from "./FeatherIcons";
//  // / // // hero icons
import {
  AcademicCap,
  AdjustmentsHorizontal,
  AdjustmentsVertical,
  ArchiveBox,
  ArchiveBoxArrowDown,
  ArchiveBoxXMark,
  ArrowDownOnSquare,
  ArrowDownOnSquareStack,
  ArrowDownTray,
  ArrowLeftEndOnRectangle,
  ArrowLeftStartOnRectangle,
  ArrowLongDown,
  ArrowLongLeft,
  ArrowLongRight,
  ArrowLongUp,
  ArrowPath,
  ArrowPathRoundedSquare,
  ArrowRightEndOnRectangle,
  ArrowRightStartOnRectangle,
  ArrowsPointingIn,
  ArrowsPointingOut,
  ArrowsRightLeft,
  ArrowsUpDown,
  ArrowTopRightOnSquare,
  ArrowTrendingDown,
  ArrowTrendingUp,
  ArrowTurnDownLeft,
  ArrowTurnDownRight,
  ArrowTurnLeftDown,
  ArrowTurnLeftUp,
  ArrowTurnRightDown,
  ArrowTurnRightUp,
  ArrowTurnUpLeft,
  ArrowTurnUpRight,
  ArrowUpOnSquare,
  ArrowUpOnSquareStack,
  ArrowUpTray,
  ArrowUturnDown,
  ArrowUturnLeft,
  ArrowUturnRight,
  ArrowUturnUp,
  AtSymbol,
  Backspace,
  Backward,
  Banknotes,
  Bars2,
  Bars3,
  Bars3BottomLeft,
  Bars3BottomRight,
  Bars3CenterLeft,
  Bars4,
  BarsArrowDown,
  BarsArrowUp,
  Battery0,
  Battery100,
  Battery50,
  Beaker,
  Bell,
  BellAlert,
  BellSlash,
  BellSnooze,
  Bolt,
  BoltSlash,
  BookmarkSlash,
  BookmarkSquare,
  BugAnt,
  BuildingLibrary,
  BuildingOffice,
  BuildingOffice2,
  BuildingStorefront,
  Cake,
  Calculator,
  Calendar2,
  CalendarDateRange,
  CalendarDays,
  Camera2,
  ChartBar,
  ChartBarSquare,
  ChartPie,
  ChatBubbleBottomCenter,
  ChatBubbleBottomCenterText,
  ChatBubbleLeft,
  ChatBubbleLeftEllipsis,
  ChatBubbleLeftRight,
  ChatBubbleOvalLeft,
  ChatBubbleOvalLeftEllipsis,
  Check2,
  CheckBadge,
  ChevronDoubleDown,
  ChevronDoubleLeft,
  ChevronDoubleRight,
  ChevronDoubleUp,
  ChevronLeft,
  ChevronRight,
  ChevronUpDown,
  CircleStack,
  Clipboard3,
  ClipboardDocument,
  ClipboardDocumentCheck,
  ClipboardDocumentList,
  Clock2,
  Cloud3,
  CloudArrowDown,
  CloudArrowUp,
  CodeBracket,
  CodeBracketSquare,
  Cog,
  Cog6Tooth,
  Cog8Tooth,
  CommandLine,
  ComputerDesktop,
  CpuChip,
  Cube,
  CubeTransparent,
  CurrencyBangladeshi,
  CurrencyDollar,
  CurrencyEuro,
  CurrencyPound,
  CurrencyRupee,
  CurrencyYen,
  CursorArrowRays,
  CursorArrowRipple,
  DevicePhoneMobile,
  DeviceTablet,
  Divide2,
  Document2,
  DocumentArrowDown,
  DocumentArrowUp,
  DocumentChartBar,
  DocumentCheck,
  DocumentCurrencyBangladeshi,
  DocumentCurrencyDollar,
  DocumentCurrencyEuro,
  DocumentCurrencyPound,
  DocumentCurrencyRupee,
  DocumentCurrencyYen,
  DocumentDuplicate,
  DocumentMagnifyingGlass,
  DocumentMinus,
  DocumentPlus,
  DocumentText,
  EllipsisHorizontal,
  EllipsisHorizontalCircle,
  EllipsisVertical,
  Envelope,
  EnvelopeOpen,
  Equals,
  ExclamationCircle,
  ExclamationTriangle,
  Eye2,
  EyeDropper,
  EyeSlash,
  FaceFrown,
  FaceSmile,
  Film2,
  FingerPrint,
  Fire,
  Flag2,
  Folder2,
  FolderArrowDown,
  FolderMinus2,
  FolderOpen,
  FolderPlus2,
  Forward,
  Funnel,
  Gif,
  Gift2,
  GiftTop,
  GlobeAlt,
  GlobeAmericas,
  GlobeAsiaAustralia,
  GlobeEuropeAfrica,
  H1,
  H2,
  H3,
  HandRaised,
  HandThumbDown,
  HandThumbUp,
  Hashtag,
  Heart2,
  Home,
  HomeModern,
  Identification,
  Inbox2,
  InboxArrowDowns2,
  InboxStack,
  InformationCircle,
  Italic2,
  Key2,
  Language,
  Lifebuoy,
  LightBulb,
  Link,
  LinkSlash,
  ListBullet,
  LockClosed,
  LockOpen,
  MagnifyingGlass,
  MagnifyingGlassCircle,
  MagnifyingGlassMinus,
  MagnifyingGlassPlus,
  Map3,
  MapPin2,
  Megaphone,
  Microphone,
  Minus2,
  MinusCircle2,
  Moon4,
  MusicalNote,
  Newspaper,
  NoSymbol,
  NumberedList,
  PaintBrush,
  PaperAirplane,
  PaperClip,
  Pause2,
  PauseCircle2,
  Pencil,
  PencilSquare,
  PercentBadge,
  Phone2,
  PhoneArrowDownLeft,
  PhoneArrowUpRight,
  PhoneXMark,
  Photo,
  Play2,
  PlayCircle2,
  PlayPause,
  Plus3,
  PlusCircle2,
  Power2,
  PresentationChartBar,
  PresentationChartLine,
  Printer2,
  PuzzlePiece,
  QrCode,
  QuestionMarkCircle,
  QueueList,
  Radio2,
  ReceiptPercent,
  ReceiptRefund,
  RectangleGroup,
  RectangleStack,
  RocketLaunch,
  Rss2,
  Scale,
  Scissors2,
  Server2,
  ServerStack,
  Share,
  ShieldCheck,
  ShieldExclamation,
  ShoppingBag2,
  ShoppingCart2,
  Signal,
  SignalSlash,
  Slash2,
  Sparkles,
  SpeakerWave,
  SpeakerXMark,
  Square2Stack,
  Square3Stack3D,
  Squares2X2,
  SquaresPlus,
  Star2,
  Stop,
  StopCircle2,
  Strikethrough,
  Sun2,
  Swatch,
  TableCells,
  Tag2,
  Ticket,
  Trash3,
  Trophy,
  Truck2,
  Tv2,
  Underline2,
  User5,
  UserCircle,
  UserGroup,
  UserMinus2,
  UserPlus2,
  Users2,
  Variable,
  VideoCamera,
  VideoCameraSlash,
  ViewColumns,
  ViewfinderCircle,
  Wallet,
  Wifi2,
  Window2,
  Wrench,
  WrenchScrewdriver,
  XCircle2,
  XMark,
} from "./HeroIcons";
// // // // // fontAwesome
import { AwesomeIconsMap } from "./ListFontAwesome";
// // /// // // / // // / /// // // / // / // // // // // // // // / // // // // // / // // / / // // //
export type Icon = LucideIcon;

// // // props
interface IconsProps {
  className?: string;
}
// // // // // // // // icons map for search render // // // // // // // //
export const IconsMap: Record<string, React.FC<IconsProps>> = {
  gitHubCompany: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  //   // // // // // // // // react
  squareShape: SquareIcon,
  circleShape: circleIcon,
  triangleShape: triangleIcon,
  triangleRightShape: triangleRightIcon,
  hexagonShape: hexagonIcon,
  diamondShape: diamondIcon,
  starShape: Star1Icon,
  squareShapeFull: SquareAltIcon,
  circleShapeFull: circleAltIcon,
  triangleShapeFull: triangleAltIcon,
  triangleRightShapeFull: triangleRightAltIcon,
  hexagonShapeFull: hexagonAltIcon,
  diamondShapeFull: diamondAltIcon,
  starshape: StarAltIcon,
  fishAnimal: FishIcon,
  dountFood: DonutIcon,
  ribbon: RibbonIcon,
  music: MusicIcon,
  Music: MusicIcon2,
  musicalNote: MusicalNote,
  SunDimWeather: SunAltIcon,
  moonWeather: MoonIcon2,
  share: ShareIcon2,
  sunWeather: SunMediumIcon,
  homeBuilding: HomeIcon,
  logoutComputer: LogOutIcon,
  readMoreLink: ExternalLinkIcon,
  bookmark: BookmarkIconComponent,
  copyLink: LinkIcon,
  facebookCompany: FacebookIcon,
  linkedinCompany: LinkedinIcon,
  moreVertical: MoreVerticalIcon,
  hideEye: EyeOffIcon,
  blockBan: BanIcon,
  flag: FlagIconComponent,
  left: ChevronLeftIconComponent,
  right: ChevronRightIconComponent,
  fireFlame: FlameIcon,
  arrowBigUp: ArrowBigUpIcon,
  messagesSquare: MessagesSquareIcon,
  search: SearchIcon,
  notificationBell: BellIcon,
  history: HistoryIcon,
  user: UserIcon,
  Xclose: Xclose,
  settings: SettingsIcon,
  dooropen: DoorOpenIcon,
  readBookOpenCheck: BookOpenCheckIcon,
  chevronLeft: ChevronLeftIconComponent2,
  chevronRight: ChevronRightIconComponent2,
  articlesSettings: Settings2Icon,
  newspaper: NewspaperIcon,
  loadingComputer: Loader2IconComponent,
  checkCircle: CheckCircle2Icon,
  editPencil: PencilIcon,
  Cloudweather: Cloud,
  //   // // // // // // // // //  shadcn
  booking: BookingLogo,
  Calendar: EmptyCalendarImg,
  heart: IconHeart,
  x: CardXIcon,
  plusminus: IconPlusMinus,
  stars: Stars,
  info: Information,
  vi: Vi,
  UpDown: UpDown,
  UpDownHeads: UpDownHeads,
  X: XIcon,
  Vi: ViIcon,
  SmallUpDown: SmallUpDown,
  googleCompany: IconGoogle,
  appleCompany: IconApple,
  facebook2Company: IconFacebook,
  errorComputer: IconError,
  guestUser: IconGuest,
  hamburgerSign: IconHamburger,
  locationSign: LocationIcon,
  Heart: Heart,
  Share2: ShareIcon,
  Discount: Discount,
  Copy: Copy,
  FacebookWhiteCompany: FacebookWhiteIcon,
  X2: Xicon,
  Unlock: Unlock,
  Lock: LockIcon,
  Xregular: XregularIcon,
  HousePlus: HousePlus,
  Note: Note,
  ViBorder: ViBorder,
  Hands: Hands,
  Safety: Safety,
  comment: CommentIcon,
  Bag: Bag,
  Question: Question,
  Email: Email,
  Volume: Volume,
  Coins: Coins,
  menPerson: IconMen,
  CounterPlus: IconCounterPlus,
  CounterMinus: IconCounterMinus,
  YellowVi: YellowVi,
  YellowCubeSquare: YellowCube,
  command: Command,
  ArrowRight: ArrowRight,
  Plus: Plus,
  SmallVi: SmallIconVi,
  BlackMen: BlackMen,
  CofeeCupFood: CofeeCup,
  QuestionMarkInfo: QuestionMarkInfoIcon,
  CheckIn: CheckIn,
  CheckOut: CheckOut,
  Persons: Persons,
  Person: Person,
  Groups: Groups,
  Payment: Payment,
  Cigar: Cigar,
  BottleFood: Bottle,
  Moon2: MoonIcon,
  PetAnimal: Pet,
  TowerBuilding: Tower,
  Edit: EditIcon,
  Delete: DeleteIcon,
  Filters: FiltersIcon,
  Map: MapIcon,
  Up: UpIcon,
  Down: DownIcon,
  BookingLogoBlueCompany: BookingLogoBlue,
  Crib: CribIcon,
  OpenTable: OpenTableIcon,
  AgodaCompany: AgodaIcon,
  Priceline: PricelineIcon,
  KayakCompany: KayakIcon,
  account: MyAccountIcon,
  bookingTripsCompany: BookingTripsIcon,
  RewardsWallet: RewardsWalletIcon,
  Reviews: ReviewsIcon,
  Saved: SavedIcon,
  SignoutComputer: SignoutIcon,
  BeachWeather: BeachIcon,
  OutdoorsCar: OutdoorsIcon,
  CityBuilding: CityIcon,
  GeniusLoyaltyCompany: GeniusLoyaltyIcon,
  //   // // // // // // //  font awesome
  ...AwesomeIconsMap,
  //   // // // // // // // // // feather
  Activity: Activity,
  Airplay: Airplay,
  Alert_circle: Alert_circle,
  Alert_octagon: Alert_octagon,
  Alert_triangle: Alert_triangle,
  Align_center: AlignCenter,
  Align_justify: AlignJustify,
  Align_left: AlignLeft,
  Align_right: AlignRight,
  Anchor: Anchor,
  Aperture: Aperture,
  Archive: Archive,
  Arrow_down_circle: ArrowDownCircle,
  Arrow_down_left: ArrowDownLeft,
  Arrow_down_right: ArrowDownRight,
  Arrow_down: ArrowDown,
  Arrow_left_circle: ArrowLeftCircle,
  Arrow_left: ArrowLeft,
  Arrow_right_circle: ArrowRightCircle,
  Arrow_right: ArrowRight2,
  Arrow_up_circle: ArrowUpCircle,
  Arrow_up_left: ArrowUpLeft,
  Arrow_up_right: ArrowUpRight,
  Arrow_up: ArrowUp,
  At_sign: AtSign,
  AwardMedalWin: Award,
  Bar_chart_2: BarChart2,
  Bar_chart: BarChart,
  Battery_charging: BatteryCharging,
  Battery: Battery,
  Bell_off: BellOff,
  Bell: Bell2,
  Bluetooth: Bluetooth,
  Bold: Bold,
  Book_open: BookOpen,
  Book: Book,
  Bookmark: Bookmark,
  Box: Box,
  Briefcase: Briefcase,
  Calendar2: Calendar,
  Camera_off: CameraOff,
  Camera: Camera,
  Cast: Cast,
  Check_circle: CheckCircle,
  Check_square: CheckSquare,
  Check: Check,
  Chevron_down: ChevronDown,
  Chevron_left: ChevronLeft2,
  Chevron_right: ChevronRight2,
  Chevron_up: ChevronUp,
  Chevrons_down: ChevronsDown,
  Chevrons_left: ChevronsLeft,
  Chevrons_right: ChevronsRight,
  Chevrons_up: ChevronsUp,
  Chrome: Chrome,
  Circle: Circle,
  clipboard: Clipboard2,
  Clock: Clock,
  Cloud_drizzle: CloudDrizzle,
  Cloud_lightning: CloudLightning,
  Cloud_off: CloudOff,
  Cloud_rain: CloudRain,
  Cloud_snow: CloudSnow,
  Cloud: Cloud,
  Code: Code,
  Codepen: Codepen,
  Codesandbox: Codesandbox,
  Coffee: Coffee,
  Columns: Columns,
  Command: Command,
  Compass: Compass,
  Copy2: Copy,
  Corner_down_left: CornerDownLeft,
  Corner_down_right: CornerDownRight,
  Corner_left_down: CornerLeftDown,
  Corner_left_up: CornerLeftUp,
  Corner_right_down: CornerRightDown,
  Corner_right_up: CornerRightUp,
  Corner_up_left: CornerUpLeft,
  Corner_up_right: CornerUpRight,
  Cpu: Cpu,
  Credit_card: CreditCard,
  Crop: Crop,
  Crosshair: Crosshair,
  Database: Database,
  Delete2: Delete,
  Disc: Disc,
  Divide_circle: DivideCircle,
  Divide_square: DivideSquare,
  Divide: Divide,
  Dollar_sign: DollarSign,
  Download_cloud: DownloadCloud,
  Download: Download,
  Dribbble: Dribbble,
  Droplet: Droplet,
  Edit_2: Edit2,
  Edit_3: Edit3,
  Edit_4: Edit4,
  External_link: ExternalLink2,
  Eye_off: EyeOff2,
  Eye: Eye,
  Facebook: Facebook2,
  FastForward: FastForward,
  Feather: Feather,
  Figma: Figma,
  FileMinus: FileMinus,
  FilePlus: FilePlus,
  FileText: FileText,
  File: File2,
  Film: Film,
  Filter: Filter,
  Flag: Flag,
  FolderMinus: FolderMinus,
  FolderPlus: FolderPlus,
  Folder: Folder,
  Framer: Framer,
  sadFrown: Frown,
  Gift: Gift,
  GitBranch: GitBranch,
  GitCommit: GitCommit,
  GitMerge: GitMerge,
  GitPullRequest: GitPullRequest,
  Github: Github,
  Gitlab: Gitlab,
  Globe: Globe,
  Grid: Grid,
  HardDrive: HardDrive,
  Hash: Hash,
  Headphones: Headphones,
  Heart3: Heart3,
  HelpCircle: HelpCircle,
  Hexagon: Hexagon,
  Home2: Home2,
  Image2: Image2,
  Inbox: Inbox,
  Info: Info,
  Instagram: Instagram,
  Italic: Italic,
  Key: Key,
  Layers: Layers,
  Layout: Layout,
  LifeBuoy: LifeBuoy,
  Link2: Link2,
  Link3: Link3,
  Linkedin2: Linkedin2,
  List: List,
  Loader: Loader,
  Lock2: Lock2,
  LogIn: LogIn,
  LogOut2: LogOut2,
  Mail: Mail,
  MapPin: MapPin,
  Map2: Map2,
  Maximize2: Maximize2,
  Maximize: Maximize,
  docileNeutral: Meh,
  Menu: Menu,
  MessageCircle: MessageCircle,
  MessageSquare: MessageSquare,
  MicOff: MicOff,
  Mic: Mic,
  Minimize2: Minimize2,
  Minimize: Minimize,
  MinusCircle: MinusCircle,
  MinusSquare: MinusSquare,
  Minus: Minus,
  Monitor: Monitor,
  Moon3: Moon3,
  MoreHorizontal: MoreHorizontal,
  MoreVertical2: MoreVertical2,
  MousePointer: MousePointer,
  Move: Move,
  Mmusic: Music,
  Navigation2: Navigation2,
  Navigation: Navigation,
  Octagon: Octagon,
  Package: Package,
  Paperclip: Paperclip,
  PauseCircle: PauseCircle,
  Pause: Pause,
  PenTool: PenTool,
  Percent: Percent,
  PhoneCall: PhoneCall,
  PhoneForwarded: PhoneForwarded,
  PhoneIncoming: PhoneIncoming,
  PhoneMissed: PhoneMissed,
  PhoneOff: PhoneOff,
  PhoneOutgoing: PhoneOutgoing,
  Phone: Phone,
  PieChart: PieChart,
  PlayCircle: PlayCircle,
  Play: Play,
  PlusCircle: PlusCircle,
  PlusSquare: PlusSquare,
  Plus2: Plus2,
  Pocket: Pocket,
  Power: Power,
  Printer: Printer,
  Radio: Radio,
  RefreshCcw: RefreshCcw,
  RefreshCw: RefreshCw,
  Repeat: Repeat,
  Rewind: Rewind,
  RotateCcw: RotateCcw,
  RotateCw: RotateCw,
  Rss: Rss,
  Save: Save,
  Scissors: Scissors,
  Search2: Search2,
  Send: Send,
  Server: Server,
  Settings3: Settings3,
  Share3: Share3,
  Share4: Share4,
  ShieldOff: ShieldOff,
  Shield: Shield,
  ShoppingBag: ShoppingBag,
  ShoppingCart: ShoppingCart,
  Shuffle: Shuffle,
  Sidebar: Sidebar,
  SkipBack: SkipBack,
  SkipForward: SkipForward,
  Slack: Slack,
  Slash: Slash,
  Sliders: Sliders,
  Smartphone: Smartphone,
  Smile: Smile,
  Speaker: Speaker,
  Square: Square,
  Star: Star,
  StopCircle: StopCircle,
  Sun: Sun,
  Sunrise: Sunrise,
  Sunset: Sunset,
  Table: Table,
  Tablet: Tablet,
  Tag: Tag,
  Target: Target,
  Terminal: Terminal,
  Thermometer: Thermometer,
  ThumbsDown: ThumbsDown,
  ThumbsUp: ThumbsUp,
  ToggleLeft: ToggleLeft,
  ToggleRight: ToggleRight,
  Tool: Tool,
  Trash2: Trash2,
  Trash: Trash,
  Trello: Trello,
  TrendingDown: TrendingDown,
  TrendingUp: TrendingUp,
  Triangle: Triangle,
  Truck: Truck,
  Tv: Tv,
  Twitch: Twitch,
  Twitter: Twitter,
  Type: Type,
  Umbrella: Umbrella,
  Underline: Underline,
  Unlock2: Unlock2,
  UploadCloud: UploadCloud,
  Upload: Upload,
  UserCheck: UserCheck,
  UserMinus: UserMinus,
  UserPlus: UserPlus,
  UserX: UserX,
  User2: User2,
  Users: Users,
  VideoOff: VideoOff,
  Video: Video,
  Voicemail: Voicemail,
  Volume1: Volume1,
  Volume2: Volume2,
  VolumeX: VolumeX,
  Volume3: Volume3,
  Watch: Watch,
  WifiOff: WifiOff,
  Wifi: Wifi,
  Wind: Wind,
  XCircle: XCircle,
  XOctagon: XOctagon,
  XSquare: XSquare,
  X3: X3,
  Youtube: Youtube,
  ZapOff: ZapOff,
  Zap: Zap,
  ZoomIn: ZoomIn,
  ZoomOut: ZoomOut,
  //   // // // // // heroIcons
  AcademicCapCloth: AcademicCap,
  AdjustmentsHorizontalSettings: AdjustmentsHorizontal,
  AdjustmentsVerticalSettings: AdjustmentsVertical,
  ArchiveBoxArrowDown: ArchiveBoxArrowDown,
  ArchiveBoxXMark: ArchiveBoxXMark,
  ArchiveBox: ArchiveBox,
  ArrowDownCircle: ArrowDownCircle,
  ArrowDownLeft: ArrowDownLeft,
  ArrowDownOnSquareStack: ArrowDownOnSquareStack,
  ArrowDownOnSquare: ArrowDownOnSquare,
  ArrowDownRight: ArrowDownRight,
  ArrowDownTray: ArrowDownTray,
  ArrowDown: ArrowDown,
  ArrowLeftCircle: ArrowLeftCircle,
  ArrowLeftEndOnRectangle: ArrowLeftEndOnRectangle,
  ArrowLeftStartOnRectangle: ArrowLeftStartOnRectangle,
  ArrowLeft: ArrowLeft,
  ArrowLongDown: ArrowLongDown,
  ArrowLongLeft: ArrowLongLeft,
  ArrowLongRight: ArrowLongRight,
  ArrowLongUp: ArrowLongUp,
  ArrowPathRoundedSquare,
  ArrowPath: ArrowPath,
  ArrowRightCircle: ArrowRightCircle,
  ArrowRightEndOnRectangle: ArrowRightEndOnRectangle,
  ArrowRightStartOnRectangle: ArrowRightStartOnRectangle,
  arrowRight: ArrowRight,
  ArrowTopRightOnSquare: ArrowTopRightOnSquare,
  ArrowTrendingDown: ArrowTrendingDown,
  ArrowTrendingUp: ArrowTrendingUp,
  ArrowTurnDownLeft: ArrowTurnDownLeft,
  ArrowTurnDownRight: ArrowTurnDownRight,
  ArrowTurnLeftDown: ArrowTurnLeftDown,
  ArrowTurnLeftUp: ArrowTurnLeftUp,
  ArrowTurnRightDown: ArrowTurnRightDown,
  ArrowTurnRightUp: ArrowTurnRightUp,
  ArrowTurnUpLeft: ArrowTurnUpLeft,
  ArrowTurnUpRight: ArrowTurnUpRight,
  ArrowUpCircle: ArrowUpCircle,
  ArrowUpLeft: ArrowUpLeft,
  ArrowUpOnSquareStack: ArrowUpOnSquareStack,
  ArrowUpOnSquare: ArrowUpOnSquare,
  ArrowUpRight: ArrowUpRight,
  ArrowUpTray: ArrowUpTray,
  ArrowUp: ArrowUp,
  ArrowUturnDown: ArrowUturnDown,
  ArrowUturnLeft: ArrowUturnLeft,
  ArrowUturnRight: ArrowUturnRight,
  ArrowUturnUp: ArrowUturnUp,
  ArrowsPointingIn: ArrowsPointingIn,
  ArrowsPointingOut: ArrowsPointingOut,
  ArrowsRightLeft: ArrowsRightLeft,
  ArrowsUpDown: ArrowsUpDown,
  AtSymbol: AtSymbol,
  Backspace: Backspace,
  Backward: Backward,
  Banknotes: Banknotes,
  Bars2: Bars2,
  Bars3BottomLeft: Bars3BottomLeft,
  Bars3BottomRight: Bars3BottomRight,
  Bars3CenterLeft: Bars3CenterLeft,
  Bars3: Bars3,
  Bars4: Bars4,
  BarsArrowDown: BarsArrowDown,
  BarsArrowUp: BarsArrowUp,
  Battery0: Battery0,
  Battery100: Battery100,
  Battery50: Battery50,
  Beaker: Beaker,
  BellAlert: BellAlert,
  BellSlash: BellSlash,
  BellSnooze: BellSnooze,
  bell: Bell,
  bold: Bold,
  BoltSlash: BoltSlash,
  Bolt: Bolt,
  BookOpen: BookOpen,
  BookmarkSlash: BookmarkSlash,
  BookmarkSquare: BookmarkSquare,
  BookMark: Bookmark,
  BriefCase: Briefcase,
  BugAntAnimal: BugAnt,
  BuildingLibrary: BuildingLibrary,
  Buildingoffice: BuildingOffice2,
  BuildingOffice: BuildingOffice,
  BuildingStorefront: BuildingStorefront,
  CakeFood: Cake,
  Calculator: Calculator,
  CalendarDateRange: CalendarDateRange,
  CalendarDays: CalendarDays,
  calendar: Calendar2,
  camera: Camera2,
  ChartBarSquare: ChartBarSquare,
  ChartBar: ChartBar,
  ChartPie: ChartPie,
  ChatBubbleBottomCenterText: ChatBubbleBottomCenterText,
  ChatBubbleBottomCenter: ChatBubbleBottomCenter,
  ChatBubbleLeftEllipsis: ChatBubbleLeftEllipsis,
  ChatBubbleLeftRight: ChatBubbleLeftRight,
  ChatBubbleLeft: ChatBubbleLeft,
  ChatBubbleOvalLeftEllipsis: ChatBubbleOvalLeftEllipsis,
  ChatBubbleOvalLeft: ChatBubbleOvalLeft,
  CheckBadge: CheckBadge,
  CheckCircle: CheckCircle,
  CheckMore: Check2,
  ChevronDoubleDown: ChevronDoubleDown,
  ChevronDoubleLeft: ChevronDoubleLeft,
  ChevronDoubleRight: ChevronDoubleRight,
  ChevronDoubleUp: ChevronDoubleUp,
  ChevronDown: ChevronDown,
  ChevronLeft: ChevronLeft,
  ChevronRight: ChevronRight,
  ChevronUpDown: ChevronUpDown,
  ChevronUp: ChevronUp,
  CircleStack: CircleStack,
  ClipboardDocumentCheck: ClipboardDocumentCheck,
  ClipboardDocumentList: ClipboardDocumentList,
  ClipboardDocument: ClipboardDocument,
  Clipboard3: Clipboard3,
  clock: Clock2,
  CloudArrowDown: CloudArrowDown,
  CloudArrowUp: CloudArrowUp,
  CloudWeather: Cloud3,
  CodeBracketSquare: CodeBracketSquare,
  CodeBracket: CodeBracket,
  Cog6ToothSettings: Cog6Tooth,
  Cog8ToothSettings: Cog8Tooth,
  Cog: Cog,
  CommandLine: CommandLine,
  ComputerDesktopCode: ComputerDesktop,
  CpuChipCode: CpuChip,
  CreditCard: CreditCard,
  CubeTransparentSquare: CubeTransparent,
  CubeSquare: Cube,
  CurrencyBangladeshiSign: CurrencyBangladeshi,
  CurrencyDollarSign: CurrencyDollar,
  CurrencyEuroSign: CurrencyEuro,
  CurrencyPoundSign: CurrencyPound,
  CurrencyRupeeSign: CurrencyRupee,
  CurrencyYenSign: CurrencyYen,
  CursorArrowRays: CursorArrowRays,
  CursorArrowRipple: CursorArrowRipple,
  DevicePhoneMobile: DevicePhoneMobile,
  DeviceTablet: DeviceTablet,
  divide: Divide2,
  DocumentArrowDown: DocumentArrowDown,
  DocumentArrowUp: DocumentArrowUp,
  DocumentChartBar: DocumentChartBar,
  DocumentCheck: DocumentCheck,
  DocumentCurrencyBangladeshiSign: DocumentCurrencyBangladeshi,
  DocumentCurrencyDollarSign: DocumentCurrencyDollar,
  DocumentCurrencyEuroSign: DocumentCurrencyEuro,
  DocumentCurrencyPoundSign: DocumentCurrencyPound,
  DocumentCurrencyRupeeSign: DocumentCurrencyRupee,
  DocumentCurrencyYenSign: DocumentCurrencyYen,
  DocumentDuplicate: DocumentDuplicate,
  DocumentMagnifyingGlass: DocumentMagnifyingGlass,
  DocumentMinus: DocumentMinus,
  DocumentPlus: DocumentPlus,
  DocumentText: DocumentText,
  document: Document2,
  EllipsisHorizontalCircleSign: EllipsisHorizontalCircle,
  EllipsisHorizontalSign: EllipsisHorizontal,
  EllipsisVerticalSign: EllipsisVertical,
  EnvelopeOpenSymbol: EnvelopeOpen,
  EnvelopeSymbol: Envelope,
  EqualsMath: Equals,
  ExclamationCircle: ExclamationCircle,
  ExclamationTriangle: ExclamationTriangle,
  EyeDropper: EyeDropper,
  EyeSlash: EyeSlash,
  eye: Eye2,
  FaceFrown: FaceFrown,
  FaceSmile: FaceSmile,
  film: Film2,
  FingerPrintSymbol: FingerPrint,
  FireBurn: Fire,
  flagg: Flag2,
  FolderArrowDown: FolderArrowDown,
  Folderminus: FolderMinus2,
  FolderOpen: FolderOpen,
  Folderplus: FolderPlus2,
  folder: Folder2,
  Forward: Forward,
  Funnel: Funnel,
  Gif: Gif,
  GiftTop: GiftTop,
  gift: Gift2,
  GlobeAlt: GlobeAlt,
  GlobeAmericas: GlobeAmericas,
  GlobeAsiaAustralia: GlobeAsiaAustralia,
  GlobeEuropeAfrica: GlobeEuropeAfrica,
  letterH1: H1,
  letterH2: H2,
  letterH3: H3,
  HandRaised: HandRaised,
  HandThumbDown: HandThumbDown,
  HandThumbUp: HandThumbUp,
  HashtagSign: Hashtag,
  Hheart: Heart2,
  HomeModern: HomeModern,
  Home: Home,
  Identification: Identification,
  InboxArrowDown: InboxArrowDowns2,
  InboxStack: InboxStack,
  inbox: Inbox2,
  InformationCircle: InformationCircle,
  italic: Italic2,
  key: Key2,
  LanguageSign: Language,
  LifebuoySymbol: Lifebuoy,
  LightBulbSymbol: LightBulb,
  LinkSlash: LinkSlash,
  Link: Link,
  ListBullet: ListBullet,
  LockClosed: LockClosed,
  LockOpen: LockOpen,
  MagnifyingGlassCircle: MagnifyingGlassCircle,
  MagnifyingGlassMinus: MagnifyingGlassMinus,
  MagnifyingGlassPlus: MagnifyingGlassPlus,
  MagnifyingGlass: MagnifyingGlass,
  Mappin: MapPin2,
  Mmap: Map3,
  Megaphone: Megaphone,
  MicrophoneMusic: Microphone,
  Minuscircle: MinusCircle2,
  minus: Minus2,
  Moon: Moon4,
  MusicalNote: MusicalNote,
  Newspaper: Newspaper,
  NoSymbol: NoSymbol,
  NumberedList: NumberedList,
  PaintBrush: PaintBrush,
  PaperAirplane: PaperAirplane,
  PaperClip: PaperClip,
  Pausecircle: PauseCircle2,
  pauseSymbol: Pause2,
  PencilSquare: PencilSquare,
  Pencil: Pencil,
  PercentBadge: PercentBadge,
  PhoneArrowDownLeft: PhoneArrowDownLeft,
  PhoneArrowUpRight: PhoneArrowUpRight,
  PhoneXMark: PhoneXMark,
  phoneSymbol: Phone2,
  PhotoSymbol: Photo,
  Playcircle: PlayCircle2,
  PlayPause: PlayPause,
  Pplay: Play2,
  Pluscircle: PlusCircle2,
  Pplus: Plus3,
  power: Power2,
  PresentationChartBar: PresentationChartBar,
  PresentationChartLine: PresentationChartLine,
  printer: Printer2,
  PuzzlePieceSymbol: PuzzlePiece,
  QrCode: QrCode,
  QuestionMarkCircle: QuestionMarkCircle,
  QueueList: QueueList,
  Radio2: Radio2,
  ReceiptPercent: ReceiptPercent,
  ReceiptRefund: ReceiptRefund,
  RectangleGroup: RectangleGroup,
  RectangleStack: RectangleStack,
  RocketLaunchSymbol: RocketLaunch,
  rss: Rss2,
  Scale: Scale,
  scissors: Scissors2,
  ServerStack: ServerStack,
  server: Server2,
  Share: Share,
  ShieldCheck: ShieldCheck,
  ShieldExclamation: ShieldExclamation,
  Shoppingbag: ShoppingBag2,
  Shoppingcart: ShoppingCart2,
  SignalSlash: SignalSlash,
  Signal: Signal,
  slash: Slash2,
  SparklesStars: Sparkles,
  SpeakerWaveVolume: SpeakerWave,
  SpeakerXMarkVolume: SpeakerXMark,
  Square2Stack: Square2Stack,
  Square3Stack3D: Square3Stack3D,
  Squares2X2: Squares2X2,
  SquaresPlus: SquaresPlus,
  star: Star2,
  Stopcircle: StopCircle2,
  Stop: Stop,
  Strikethrough: Strikethrough,
  sun: Sun2,
  Swatch: Swatch,
  TableCells: TableCells,
  tag: Tag2,
  Ticket: Ticket,
  trash: Trash3,
  Trophy: Trophy,
  truck: Truck2,
  tv: Tv2,
  underlineSymbol: Underline2,
  UserCircle: UserCircle,
  UserGroup: UserGroup,
  UserMinus2: UserMinus2,
  UserPlus2: UserPlus2,
  User: User5,
  users: Users2,
  VariableMath: Variable,
  VideoCameraSlash: VideoCameraSlash,
  VideoCameraSymbol: VideoCamera,
  ViewColumns: ViewColumns,
  ViewfinderCircle: ViewfinderCircle,
  Wallet: Wallet,
  wifi: Wifi2,
  window: Window2,
  WrenchScrewdriver: WrenchScrewdriver,
  Wrench: Wrench,
  xcircle: XCircle2,
  XMath: XMark,
};

interface IconDisplayProps {
  searchQuery: string;
}

interface SearchKeyWordsProps {
  onItemSelect: (item: string) => void;
}
// // // // // // // key words
export const items = [
  "number",
  "letter",
  "angle",
  "Shape",
  "face",
  "symbol",
  "arrow",
  "sign",
  "book",
  "car",
  "box",
  "food",
  "ball",
  "fire",
  "heart",
  "weather",
  "eye",
  "hand",
  "star",
  "person",
  "people",
  "user",
  "Magic",
  "vi",
  "x",
  "Code",
  "Cloth",
  "math",
  "building",
  "company",
];

// // // // // // // // key words
export function SearchKeyWords({ onItemSelect }: SearchKeyWordsProps) {
  const [hoverColors, setHoverColors] = useState<{ [key: number]: string }>({});

  const getRandomColor = () => {
    const colors = [
      // Reds & Oranges
      "#FF6347",
      "#FF4500",
      "#DC143C",
      "#FF5733",
      "#FF0000",
      "#FF8C00",
      "#FF1493",

      // Browns
      "#F4A300",
      "#D2B48C",
      "#E4B169",

      // Blues
      "#1E3A8A",
      "#4169E1",
      "#1E90FF",
      "#00BFFF",
      "#ADD8E6",
      "#4682B4",

      // Cyans
      "#20B2AA",
      "#5F9EA0",
      "#40E0D0",
      "#00FFFF",
      "#00CED1",
      "#48D1CC",

      // Greens
      "#32CD32",
      "#3CB371",
      "#00FF00",
      "#98FB98",

      // Yellows & Golds
      "#FFD700",
      "#F0E68C",
      "#FFFF00",
      "#F9A602",
      "#D4AF37",

      // Purples
      "#8A2BE2",
      "#9370DB",
      "#BA55D3",
      "#D8BFD8",
      "#663399",

      // Bright colors (added)
      "#FF69B4",
      "#00FF7F",
      "#FF1493",
      "#32CD32",
      "#00FA9A",
      "#FFB6C1",
      "#00CED1",

      // Extra Bright Colors
      "#FF00FF",
      "#FF7F50",
      "#FF6347",
      "#FFD700",
      "#00FFFF",
      "#FF1493",
      "#DA70D6",
      "#F5A9B8",
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleClick = (item: string) => {
    onItemSelect(item);
  };
  return (
    <ul className="grid grid-cols-3 gap-2 p-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="text-gray-900 text-lg cursor-pointer transition-colors duration-75"
          style={{ color: hoverColors[index] || "inherit" }}
          onMouseEnter={() =>
            setHoverColors((prev: Record<number, string>) => ({
              ...prev,
              [index]: getRandomColor(),
            }))
          }
          onMouseLeave={() =>
            setHoverColors((prev: Record<number, string>) => ({
              ...prev,
              [index]: "inherit",
            }))
          }
          onClick={() => handleClick(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
// // // // // // // // all icons
export const IconDisplay: React.FC<IconDisplayProps> = ({ searchQuery }) => {
  const allIcons = Object.keys(IconsMap);
  const filteredIcons = allIcons.filter((icon) =>
    icon.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {filteredIcons.map((icon) => {
        const IconComponent = IconsMap[icon];
        return IconComponent ? (
          <div
            key={icon}
            className="flex flex-col items-center cursor-grab active:cursor-grabbing"
          >
            <IconComponent className="opacity-50 hover:opacity-100 w-[58px] min-h-10" />
            {/* <span className="text-xs mt-2">{icon}</span> */}
          </div>
        ) : null;
      })}
    </div>
  );
};

export default IconDisplay;
