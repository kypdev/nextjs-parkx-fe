interface CarPckageProps {
  className?: string;
}

const CarPckage = ({ className }: CarPckageProps) => {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.1035 15.0001C16.1444 15.0002 16.1856 15.0002 16.2271 15.0002H22.5229C22.5644 15.0002 22.6056 15.0002 22.6465 15.0001C23.229 14.9993 23.7402 14.9985 24.1958 15.1737C24.5941 15.3269 24.9467 15.5754 25.2213 15.8964C25.5354 16.2636 25.6963 16.7381 25.8797 17.2787C25.8925 17.3166 25.9055 17.3548 25.9187 17.3934L26.6908 19.6584L27.5164 19.2548C27.9374 19.049 28.4493 19.2158 28.6598 19.6275C28.8703 20.0391 28.6997 20.5397 28.2787 20.7455L27.7696 20.9944C28.013 21.2361 28.2188 21.5141 28.3783 21.8201C28.589 22.2246 28.673 22.6551 28.7122 23.1235C28.7498 23.5745 28.7498 24.1281 28.7498 24.7989V27.0833C28.7498 27.1069 28.7498 27.1301 28.7499 27.1532C28.7501 27.4705 28.7503 27.7437 28.7007 27.9877C28.4989 28.9794 27.7061 29.7546 26.6918 29.9519C26.4423 30.0004 26.1629 30.0002 25.8384 30C25.8148 29.9999 25.791 29.9999 25.7669 29.9999H25.3408C24.0739 29.9999 23.0222 29.099 22.8194 27.9166H15.9306C15.7278 29.099 14.6761 29.9999 13.4092 29.9999H12.9831C12.959 29.9999 12.9352 29.9999 12.9116 30C12.5871 30.0002 12.3077 30.0004 12.0582 29.9519C11.0439 29.7546 10.2511 28.9794 10.0493 27.9877C9.99967 27.7437 9.99989 27.4705 10.0001 27.1532C10.0002 27.1302 10.0002 27.1069 10.0002 27.0833L10.0002 24.799C10.0002 24.1282 10.0002 23.5745 10.0379 23.1235C10.077 22.6551 10.161 22.2246 10.3717 21.8201C10.5312 21.5141 10.737 21.2361 10.9804 20.9944L10.4713 20.7455C10.0503 20.5397 9.87966 20.0391 10.0902 19.6275C10.3007 19.2158 10.8126 19.049 11.2336 19.2548L12.0592 19.6584L12.8313 17.3934C12.8445 17.3548 12.8575 17.3166 12.8703 17.2787C13.0537 16.7381 13.2146 16.2636 13.5287 15.8964C13.8033 15.5754 14.1559 15.3269 14.5542 15.1737C15.0098 14.9985 15.521 14.9993 16.1035 15.0001ZM13.7361 20.0097C14.0805 20.0001 14.4698 20.0001 14.9081 20.0001H23.8419C24.2802 20.0001 24.6695 20.0001 25.0139 20.0097L24.3016 17.9204C24.0551 17.1973 23.9923 17.0574 23.9138 16.9656C23.8222 16.8586 23.7047 16.7758 23.5719 16.7247C23.458 16.6809 23.3024 16.6669 22.5229 16.6669H16.2271C15.4476 16.6669 15.292 16.6809 15.1781 16.7247C15.0453 16.7758 14.9278 16.8586 14.8362 16.9656C14.7577 17.0574 14.6949 17.1973 14.4484 17.9204L13.7361 20.0097ZM13.3334 21.6981C12.9597 21.7279 12.7687 21.782 12.6354 21.8484C12.3147 22.0082 12.0539 22.2632 11.8905 22.5768C11.8226 22.7071 11.7672 22.8939 11.7367 23.2593C11.7054 23.6343 11.7047 24.1196 11.7047 24.8334V27.0833C11.7047 27.5105 11.7088 27.6023 11.7211 27.6625C11.7883 27.9931 12.0526 28.2515 12.3907 28.3173C12.4523 28.3293 12.5462 28.3333 12.9831 28.3333H13.4092C13.8799 28.3333 14.2615 27.9602 14.2615 27.5C14.2615 26.8096 14.8338 26.25 15.5398 26.25H23.2102C23.9162 26.25 24.4885 26.8096 24.4885 27.5C24.4885 27.9602 24.8701 28.3333 25.3408 28.3333H25.7669C26.2038 28.3333 26.2977 28.3293 26.3593 28.3173C26.6974 28.2515 26.9617 27.9931 27.0289 27.6626C27.0412 27.6023 27.0453 27.5105 27.0453 27.0833V24.8334C27.0453 24.1196 27.0446 23.6343 27.0133 23.2593C26.9828 22.8939 26.9274 22.7071 26.8595 22.5768C26.6961 22.2632 26.4353 22.0082 26.1146 21.8484C25.9813 21.782 25.7902 21.7279 25.4166 21.6981C25.033 21.6674 24.5368 21.6668 23.8067 21.6668H14.9433C14.2132 21.6668 13.717 21.6674 13.3334 21.6981ZM12.557 23.3334C12.557 22.8732 12.9385 22.5001 13.4092 22.5001H15.966C16.4367 22.5001 16.8182 22.8732 16.8182 23.3334C16.8182 23.7936 16.4367 24.1667 15.966 24.1667H13.4092C12.9385 24.1667 12.557 23.7936 12.557 23.3334ZM21.9318 23.3334C21.9318 22.8732 22.3133 22.5001 22.784 22.5001H25.3408C25.8115 22.5001 26.193 22.8732 26.193 23.3334C26.193 23.7936 25.8115 24.1667 25.3408 24.1667H22.784C22.3133 24.1667 21.9318 23.7936 21.9318 23.3334Z"
        fill="#FEFEFE"
      />
      <g clip-path="url(#clip0_1180_9343)">
        <path
          d="M10.0947 1H2.9053C1.30285 1 0 2.33573 0 3.97863V11.3506C0 12.9924 1.30285 14.3292 2.9053 14.3292H5.92981V29.416C5.92981 29.7383 6.18616 30.0011 6.50053 30.0011C6.8149 30.0011 7.07125 29.7383 7.07125 29.416V14.3281H10.0958C11.6972 14.3281 13.0011 12.9924 13.0011 11.3495V3.97863C13.0011 2.33681 11.6982 1 10.0958 1H10.0947ZM2.9053 2.17025H10.0958C11.0684 2.17025 11.8596 2.98143 11.8596 3.97863V11.3506C11.8596 12.3478 11.0684 13.159 10.0958 13.159H2.9053C1.93265 13.159 1.14144 12.3478 1.14144 11.3506V3.97863C1.14144 2.98143 1.93265 2.17025 2.9053 2.17025Z"
          fill="#FEFEFE"
        />
        <path
          d="M4.96135 11.3296C5.27572 11.3296 5.53207 11.0668 5.53207 10.7445V8.56841H7.27483C8.44581 8.56841 9.39841 7.59176 9.39841 6.39122V6.10785C9.39841 4.90732 8.44581 3.93066 7.27483 3.93066H4.96135C4.64697 3.93066 4.39062 4.19348 4.39062 4.51579V10.7456C4.39062 11.0679 4.64697 11.3307 4.96135 11.3307V11.3296ZM7.27483 7.39924H5.53207V5.10092H7.27483C7.81706 5.10092 8.25803 5.55301 8.25803 6.10894V6.39231C8.25803 6.94823 7.81706 7.40032 7.27483 7.40032V7.39924Z"
          fill="#FEFEFE"
        />
      </g>
      <defs>
        <clipPath id="clip0_1180_9343">
          <rect
            width="13"
            height="29"
            fill="white"
            transform="translate(0 1)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CarPckage;