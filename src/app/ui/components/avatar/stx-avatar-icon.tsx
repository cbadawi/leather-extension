import { Avatar, type AvatarProps } from './avatar';

export function StxAvatarIcon(props: AvatarProps) {
  return (
    <Avatar.Root {...props}>
      <Avatar.Svg>
        <rect width="100%" height="100%" rx="16" fill="#5546FF" />
        <circle cx="16" cy="16" r="15.5" stroke="#B1977B" strokeOpacity="0.1" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.1379 13.9305C18.092 13.8523 18.0985 13.7545 18.1511 13.6763L20.3448 10.4498C20.4039 10.3585 20.4105 10.2477 20.358 10.1564C20.3054 10.0587 20.2069 10.0065 20.1018 10.0065H19.2479C19.156 10.0065 19.064 10.0521 19.0049 10.1369L16.4434 13.9174C16.3777 14.0152 16.2726 14.0674 16.1544 14.0674H15.8325C15.7143 14.0674 15.6092 14.0087 15.5435 13.9174L12.9951 10.1304C12.9425 10.0456 12.844 10 12.7521 10H11.8982C11.7931 10 11.688 10.0587 11.642 10.1564C11.5895 10.2542 11.6026 10.365 11.6552 10.4498L13.8489 13.6828C13.9015 13.7545 13.908 13.8523 13.8621 13.9305C13.8161 14.0152 13.7373 14.0608 13.6453 14.0608H10.289C10.1248 14.0608 10 14.1912 10 14.3476V15.0516C10 15.2146 10.1314 15.3384 10.289 15.3384H21.711C21.8752 15.3384 22 15.208 22 15.0516V14.3476C22 14.1977 21.8883 14.0804 21.7438 14.0608C21.7307 14.0608 21.7176 14.0608 21.7044 14.0608H18.3547C18.2627 14.0608 18.1773 14.0152 18.1379 13.9305ZM15.5501 18.0826L12.9885 21.8631C12.936 21.9479 12.8374 21.9935 12.7455 21.9935H11.8916C11.7865 21.9935 11.688 21.9348 11.6355 21.8436C11.5829 21.7523 11.5895 21.635 11.6486 21.5502L13.8358 18.3237C13.8883 18.2455 13.8949 18.1543 13.8489 18.0695C13.803 17.9913 13.7241 17.9392 13.6322 17.9392H10.289C10.1314 17.9392 10 17.8153 10 17.6524V16.9484C10 16.792 10.1248 16.6616 10.289 16.6616H21.6847C21.6847 16.6616 21.7044 16.6616 21.711 16.6616C21.8686 16.6616 22 16.7854 22 16.9484V17.6524C22 17.8088 21.8752 17.9392 21.711 17.9392H18.3612C18.2627 17.9392 18.1839 17.9848 18.1445 18.0695C18.0985 18.1543 18.1051 18.2455 18.1576 18.3172L20.3514 21.5502C20.4039 21.635 20.4171 21.7458 20.3645 21.8436C20.312 21.9413 20.2135 22 20.1084 22H19.2545C19.156 22 19.0706 21.9544 19.0181 21.8762L16.4565 18.0956C16.3908 17.9978 16.2857 17.9457 16.1675 17.9457H15.8456C15.7274 17.9457 15.6223 18.0043 15.5567 18.0956L15.5501 18.0826Z"
          fill="white"
        />
      </Avatar.Svg>
    </Avatar.Root>
  );
}
