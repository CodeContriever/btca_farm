// <nav
    // className='bg-[#ffffff] flex justify-between p-4 '
    //   // style={{
    //   //   display: "flex",
    //   //   height: "100%",
    //   //   WebkitBoxPack: "justify",
    //   //   justifyContent: "space-between",
    //   // }}
    // >
    //   {/* Logo */}
    //   <Box
    //     style={{
    //       boxSizing: "border-box",
    //       textDecoration: "none",
    //       color: "inherit",
    //       alignSelf: "center",
    //       display: "flex",
    //       height: "24px",
    //     }}
    //   >
    //     <a
    //       // className="headerLogo linkRouterActive"
    //       href="#"
    //     >
    //       <Image
    //         src='/logo.png'
    //         alt='BTCA_FARM LOGO'
    //         style={{
    //           border: "0px",
    //           boxSizing: "content-box",
    //           height: "36px",
    //           maxWidth: "100%",
    //           verticalAlign: "middle",
    //         }} />
    //     </a>
    //   </Box>{" "}

    //   {/* Header navlinks */}
    //   <Wrap
    //     // className="headerNav header__nav"
    //     style={{
    //       boxSizing: "border-box",
    //       marginBottom: "0px",
    //       marginTop: "0px",
    //       paddingLeft: "0px",
    //       display: "flex",
    //       gap: "16px",
    //     }}
    //   >

    //     {/* Notification bell & counter */}
    //     <WrapItem
    //       // className="headerNav__item"
    //       style={{
    //         boxSizing: "border-box",
    //         display: "flex",
    //         position: "relative",
    //       }}
    //     >
    //       <Button
    //         // className="headerNav__btn"
    //         style={{
    //           boxSizing: "border-box",
    //           background: "none",
    //           border: "0px",
    //           margin: "0px",
    //           overflow: "visible",
    //           WebkitFontSmoothing: "inherit",
    //           letterSpacing: "inherit",
    //           textAlign: "inherit",
    //           textTransform: "inherit",
    //           font: "inherit",
    //           fontFamily: "Inter",
    //           borderRadius: "6px",
    //           outline: "none",
    //           padding: "8px",
    //           transition:
    //             "color 0.3s ease 0s, background-color 0.3s ease 0s",
    //           alignSelf: "center",
    //           color: "#55575c",
    //           cursor: "pointer",
    //           display: "flex",
    //         }}
    //       >
    //         <BellIcon w={8} h={8} className="plc-svgIcon" style={{ boxSizing: "border-box" }} />

    //         <span
    //           // className="counter"
    //           style={{
    //             boxSizing: "border-box",
    //             outline: "none",
    //             border: "2px solid #fff",
    //             borderRadius: "14px",
    //             padding: "1px 3px",
    //             backgroundColor: "#A020F0",
    //             color: "rgb(255, 255, 255)",
    //             display: "inline-block",
    //             fontFamily: "Inter",
    //             fontSize: "10px",
    //             fontWeight: 700,
    //             height: "18px",
    //             maxWidth: "32px",
    //             minWidth: "18px",
    //             position: "absolute",
    //             right: "1px",
    //             textAlign: "center",
    //             top: "calc(50% - 18px)",
    //           }}
    //         >
    //           124
    //         </span>
    //       </Button>
    //     </WrapItem>{" "}

    //     {/* Color mode */}
    //     <WrapItem
    //       // className="headerNav__item headerNav__item--theme"
    //       style={{
    //         boxSizing: "border-box",
    //         display: "flex",
    //         position: "relative",
    //       }}
    //     >
    //       <Button
    //         onClick={toggleColorMode}
    //         // className="headerNav__btn"
    //         style={{
    //           boxSizing: "border-box",
    //           background: "none",
    //           border: "0px",
    //           margin: "0px",
    //           overflow: "visible",
    //           WebkitFontSmoothing: "inherit",
    //           letterSpacing: "inherit",
    //           textAlign: "inherit",
    //           textTransform: "inherit",
    //           font: "inherit",
    //           fontFamily: "Inter",
    //           borderRadius: "6px",
    //           outline: "none",
    //           padding: "8px",
    //           transition:
    //             "color 0.3s ease 0s, background-color 0.3s ease 0s",
    //           alignSelf: "center",
    //           color: "#55575c",
    //           cursor: "pointer",
    //           display: "flex",
    //         }}
    //       >
    //         <svg
    //           // className="plc-svgIcon"
    //           height="24"
    //           width="24"
    //           fill="currentColor"
    //           viewBox="0 0 24 24"
    //           xmlns="http://www.w3.org/2000/svg"
    //           style={{ boxSizing: "border-box" }}
    //         >
    //           <path
    //             d="M20.147 8.836A.5.5 0 0120 8.483V4.5a.5.5 0 00-.5-.5h-3.982a.5.5 0 01-.354-.147l-2.81-2.81a.5.5 0 00-.707 0l-2.81 2.81A.5.5 0 018.483 4H4.5a.5.5 0 00-.5.5v3.983a.5.5 0 01-.146.353l-2.81 2.81a.5.5 0 000 .707l2.81 2.81a.5.5 0 01.146.354V19.5a.5.5 0 00.5.5h3.983a.5.5 0 01.354.146l2.81 2.81a.5.5 0 00.707 0l2.81-2.81a.5.5 0 01.354-.146H19.5a.5.5 0 00.5-.5v-3.983a.5.5 0 01.147-.353l2.81-2.81a.5.5 0 000-.708l-2.81-2.81zM12 18a5.976 5.976 0 01-1.479-.187c-.413-.106-.43-.658-.081-.903A5.99 5.99 0 0013 12a5.99 5.99 0 00-2.56-4.91c-.35-.245-.332-.797.081-.903.474-.122.97-.187 1.48-.187 3.31 0 6 2.69 6 6s-2.69 6-6 6z"
    //             style={{ boxSizing: "border-box" }}
    //           />
    //         </svg>
    //       </Button>{" "}
    //     </WrapItem>{" "}

    //     {/* flag */}
    //     <WrapItem
    //       // className="headerNav__item"
    //       style={{
    //         boxSizing: "border-box",
    //         display: "flex",
    //         position: "relative",
    //       }}
    //     >
    //       <Button
    //         // className="headerNav__btn"
    //         style={{
    //           boxSizing: "border-box",
    //           background: "none",
    //           border: "0px",
    //           margin: "0px",
    //           overflow: "visible",
    //           WebkitFontSmoothing: "inherit",
    //           letterSpacing: "inherit",
    //           textAlign: "inherit",
    //           textTransform: "inherit",
    //           font: "inherit",
    //           fontFamily: "Inter",
    //           borderRadius: "6px",
    //           outline: "none",
    //           padding: "8px",
    //           transition:
    //             "color 0.3s ease 0s, background-color 0.3s ease 0s",
    //           alignSelf: "center",
    //           color: "#55575c",
    //           cursor: "pointer",
    //           display: "flex",
    //         }}
    //       >
    //         <span
    //           className="headerNav__flag flagRounded flagRounded--en"
    //           style={{
    //             boxSizing: "border-box",
    //             outline: "none",
    //             background: "50% center / cover no-repeat",
    //             display: "inline-block",
    //             height: "24px",
    //             width: "24px",
    //             backgroundImage:
    //               'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDI0YzYuNjI3IDAgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTJ6IiBmaWxsPSIjRjBGMEYwIi8+PHBhdGggZD0iTTIuNDggNC42OTVBMTEuOTU2IDExLjk1NiAwIDAwLjQxMyA4Ljg3aDYuMjQzTDIuNDggNC42OTV6TTIzLjU4NyA4Ljg3YTExLjk1NSAxMS45NTUgMCAwMC0yLjA2Ny00LjE3NkwxNy4zNDMgOC44N2g2LjI0M3pNLjQxMyAxNS4xM2ExMS45NTcgMTEuOTU3IDAgMDAyLjA2NyA0LjE3Nmw0LjE3Ni00LjE3NUguNDEzek0xOS4zMDYgMi40OEExMS45NTcgMTEuOTU3IDAgMDAxNS4xMy40MTV2Ni4yNDJsNC4xNzYtNC4xNzV6TTQuNjk0IDIxLjUyYTExLjk1NyAxMS45NTcgMCAwMDQuMTc1IDIuMDY3di02LjI0M0w0LjY5NCAyMS41MnpNOC44NjkuNDE0QTExLjk1OCAxMS45NTggMCAwMDQuNjk0IDIuNDhsNC4xNzUgNC4xNzVWLjQxNHptNi4yNjEgMjMuMTczYTExLjk1NiAxMS45NTYgMCAwMDQuMTc2LTIuMDY4bC00LjE3Ni00LjE3NXY2LjI0M3ptMi4yMTQtOC40NTdsNC4xNzUgNC4xNzZhMTEuOTU1IDExLjk1NSAwIDAwMi4wNjgtNC4xNzVoLTYuMjQzeiIgZmlsbD0iIzAwNTJCNCIvPjxwYXRoIGQ9Ik0yMy44OTggMTAuNDM1SDEzLjU2NVYuMTAyYTEyLjEyIDEyLjEyIDAgMDAtMy4xMyAwdjEwLjMzM0guMTAyYTEyLjEyIDEyLjEyIDAgMDAwIDMuMTNoMTAuMzMzdjEwLjMzM2ExMi4xMiAxMi4xMiAwIDAwMy4xMyAwVjEzLjU2NWgxMC4zMzNhMTIuMTIgMTIuMTIgMCAwMDAtMy4xM3oiIGZpbGw9IiNEODAwMjciLz48cGF0aCBkPSJNMTUuMTMgMTUuMTNsNS4zNTUgNS4zNTVjLjI0Ni0uMjQ2LjQ4MS0uNTAzLjcwNS0uNzdsLTQuNTg0LTQuNTg1SDE1LjEzem0tNi4yNiAwaC0uMDAxbC01LjM1NSA1LjM1NWMuMjQ2LjI0Ni41MDQuNDgxLjc3LjcwNmw0LjU4NS00LjU4NVYxNS4xM3ptMC02LjI2TDMuNTE1IDMuNTE1Yy0uMjQ2LjI0Ni0uNDgxLjUwMy0uNzA1Ljc3TDcuMzk0IDguODdIOC44N3ptNi4yNiAwbDUuMzU1LTUuMzU1YTEyLjAyMyAxMi4wMjMgMCAwMC0uNzctLjcwNkwxNS4xMyA3LjM5NFY4Ljg3eiIgZmlsbD0iI0Q4MDAyNyIvPjwvc3ZnPg==")',
    //           }}
    //         />
    //       </Button>{" "}
    //     </WrapItem>{" "}

    //     {/* Avatar profile */}
    //     <WrapItem
    //       // className="headerNav__item profileNav"
    //       style={{
    //         boxSizing: "border-box",
    //         padding: "0px 16px",
    //         WebkitBoxAlign: "center",
    //         alignItems: "center",
    //         display: "flex",
    //         position: "relative",
    //         boxShadow: "inset 1px 0 #e9eaea,inset -1px 0 #e9eaea",
    //       }}
    //     >
          // <Button
          //   // id="menu-profile"
          //   // className="profileNav__btn"
          //   style={{
          //     boxSizing: "border-box",
          //     background: "none",
          //     border: "0px",
          //     margin: "0px",
          //     overflow: "visible",
          //     padding: "0px",
          //     cursor: "pointer",
          //     WebkitFontSmoothing: "inherit",
          //     letterSpacing: "inherit",
          //     textAlign: "inherit",
          //     textTransform: "inherit",
          //     font: "inherit",
          //     fontFamily: "Inter",
          //     outline: "none",
          //     borderRadius: "99px",
          //     gap: "8px",
          //     transition: "background-color 0.3s ease 0s",
          //     WebkitBoxAlign: "center",
          //     alignItems: "center",
          //     display: "grid",
          //     gridTemplateColumns: "max-content auto max-content",
          //     maxWidth: "300px",
          //     paddingRight: "16px",
          //   }}
          // >
          //   <span
          //     // className="profileNav__ava"
          //     style={{
          //       boxSizing: "border-box",
          //       outline: "none",
          //       padding: "4px",
          //     }}
          //   >
          //     <Wrap
          //       // className="profileNav__ava"
          //       style={{
          //         boxSizing: "border-box",
          //         outline: "none",
          //         padding: "4px",
          //       }}
          //     >
          //       <WrapItem>
          //         <Avatar
          //           size='xs'
          //           name='Kola Tioluwani'
          //           src='https://www.gravatar.com/avatar/7689b26d715e07c5602cc5fd8ec48481?s=300&d=mm&r=g'
          //           className="profileNav__img"
          //           style={{
          //             border: "0px",
          //             boxSizing: "content-box",
          //             maxWidth: "100%",
          //             verticalAlign: "middle",
          //             borderRadius: "50%",
          //             height: "32px",
          //             width: "32px",
          //           }}
          //         />{' '}
          //       </WrapItem>
          //     </Wrap>

          //   </span>{" "}
          //   <span
          //     className="profileNav__info txt-cut"
          //     style={{
          //       boxSizing: "border-box",
          //       outline: "none",
          //       whiteSpace: "nowrap",
          //       overflow: "hidden",
          //       textOverflow: "ellipsis",
          //       display: "flex",
          //       WebkitBoxOrient: "vertical",
          //       WebkitBoxDirection: "normal",
          //       flexDirection: "column",
          //     }}
          //   >
          //     <span
          //       // className="profileNav__name txt-cut"
          //       style={{
          //         boxSizing: "border-box",
          //         outline: "none",
          //         whiteSpace: "nowrap",
          //         overflow: "hidden",
          //         textOverflow: "ellipsis",
          //         color: "#2b2d33",
          //         fontFamily: "Inter",
          //         fontSize: "16px",
          //         lineHeight: "24px",
          //         wordBreak: "break-word",
          //       }}
          //     >
          //       Waris Azeez
          //     </span>
          //   </span>{" "}
          //   <svg
          //     // className="plc-svgIcon profileNav__icon"
          //     height="16"
          //     width="16"
          //     fill="currentColor"
          //     viewBox="0 0 16 16"
          //     xmlns="http://www.w3.org/2000/svg"
          //     style={{ boxSizing: "border-box", color: "#55575c" }}
          //   >
          //     <path
          //       d="M3.5 5L8 10l4.5-5h-9z"
          //       style={{ boxSizing: "border-box" }}
          //     />
          //   </svg>
          // </Button>{" "}
    //     </WrapItem>

    //   </Wrap>

    // </nav>