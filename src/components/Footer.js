import React from 'react'
import { Box, Heading, Image, Text } from '@chakra-ui/react';


const Footer = () => {
  return (
    <footer
    >
      <Box
        className="box-border block p-[20px] md:p-[40px] md:grid gap-y-[40px] gap-x-[24px] justify-between grid-cols-[35%,auto,auto,auto]"
      >
        {/* logo and footer text */}
        <Box className="footer__col" style={{ boxSizing: "border-box" }}>
          {/* logo */}
          <Box
            className="footer__logoWrap"
            style={{ boxSizing: "border-box", marginBottom: "40px" }}
          >
            <Image
              className="border-0 box-content max-w-full align-middle h-[48px] w-[48px]"
              alt="App Logo"
              src='/logo.png'
            />
          </Box>{" "}

          {/* footer description texts */}
          <p
            className="box-border mb-0 mt-0 text-gray-700 font-inter text-[16px] -5 break-words"
          >
            {
              "BTCA FARM is a registered trademark of PLATINEX Limited Liability Company. Its use does not imply any affiliation with or endorsement by it."
            }
          </p>{" "}

          <p
            className="box-border mb-0 text-gray-700 font-inter text-[16px] leading-5 break-words mt-6"
          >
            {
              "The BTCA FARM image was created via a logo contest. The BTCA FARM is a registered logo and brand identity. Its unauthorized use is prohibited."
            }
          </p>

        </Box>{" "}

        {/* Language col */}
        <Box
          className="box-border hidden md:block order-1"
        >
          <h3
            className="box-border mt-0 flex items-center text-gray-900 font-inter text-[16px] font-bold leading-6 cursor-default mb-4"
          >
            Language
          </h3>{" "}

          <ul
            className="box-border mb-0 mt-0 pl-0"
          >
            <li
              className="box-border block relative"
            >
              <Box
                className="box-border text-gray-700 font-inter text-[16px]  leading-5 break-words flex items-center cursor-pointer"
              >
                <span
                  className="footerMenu__icon flagRounded flagRounded--en"
                  style={{
                    boxSizing: "border-box",
                    outline: "none",
                    background: "50% center / cover no-repeat",
                    display: "inline-block",
                    backgroundImage:
                      'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDI0YzYuNjI3IDAgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTJ6IiBmaWxsPSIjRjBGMEYwIi8+PHBhdGggZD0iTTIuNDggNC42OTVBMTEuOTU2IDExLjk1NiAwIDAwLjQxMyA4Ljg3aDYuMjQzTDIuNDggNC42OTV6TTIzLjU4NyA4Ljg3YTExLjk1NSAxMS45NTUgMCAwMC0yLjA2Ny00LjE3NkwxNy4zNDMgOC44N2g2LjI0M3pNLjQxMyAxNS4xM2ExMS45NTcgMTEuOTU3IDAgMDAyLjA2NyA0LjE3Nmw0LjE3Ni00LjE3NUguNDEzek0xOS4zMDYgMi40OEExMS45NTcgMTEuOTU3IDAgMDAxNS4xMy40MTV2Ni4yNDJsNC4xNzYtNC4xNzV6TTQuNjk0IDIxLjUyYTExLjk1NyAxMS45NTcgMCAwMDQuMTc1IDIuMDY3di02LjI0M0w0LjY5NCAyMS41MnpNOC44NjkuNDE0QTExLjk1OCAxMS45NTggMCAwMDQuNjk0IDIuNDhsNC4xNzUgNC4xNzVWLjQxNHptNi4yNjEgMjMuMTczYTExLjk1NiAxMS45NTYgMCAwMDQuMTc2LTIuMDY4bC00LjE3Ni00LjE3NXY2LjI0M3ptMi4yMTQtOC40NTdsNC4xNzUgNC4xNzZhMTEuOTU1IDExLjk1NSAwIDAwMi4wNjgtNC4xNzVoLTYuMjQzeiIgZmlsbD0iIzAwNTJCNCIvPjxwYXRoIGQ9Ik0yMy44OTggMTAuNDM1SDEzLjU2NVYuMTAyYTEyLjEyIDEyLjEyIDAgMDAtMy4xMyAwdjEwLjMzM0guMTAyYTEyLjEyIDEyLjEyIDAgMDAwIDMuMTNoMTAuMzMzdjEwLjMzM2ExMi4xMiAxMi4xMiAwIDAwMy4xMyAwVjEzLjU2NWgxMC4zMzNhMTIuMTIgMTIuMTIgMCAwMDAtMy4xM3oiIGZpbGw9IiNEODAwMjciLz48cGF0aCBkPSJNMTUuMTMgMTUuMTNsNS4zNTUgNS4zNTVjLjI0Ni0uMjQ2LjQ4MS0uNTAzLjcwNS0uNzdsLTQuNTg0LTQuNTg1SDE1LjEzem0tNi4yNiAwaC0uMDAxbC01LjM1NSA1LjM1NWMuMjQ2LjI0Ni41MDQuNDgxLjc3LjcwNmw0LjU4NS00LjU4NVYxNS4xM3ptMC02LjI2TDMuNTE1IDMuNTE1Yy0uMjQ2LjI0Ni0uNDgxLjUwMy0uNzA1Ljc3TDcuMzk0IDguODdIOC44N3ptNi4yNiAwbDUuMzU1LTUuMzU1YTEyLjAyMyAxMi4wMjMgMCAwMC0uNzctLjcwNkwxNS4xMyA3LjM5NFY4Ljg3eiIgZmlsbD0iI0Q4MDAyNyIvPjwvc3ZnPg==")',
                    color: "#aaabad",
                    flexShrink: 0,
                    height: "16px",
                    marginRight: "8px",
                    width: "16px",
                  }}
                />
                {"English"}
              </ Box>{" "}
            </li>
          </ul>
        </Box>{" "}

        {/* Help col */}
        <Box className="hidden md:block" style={{ boxSizing: "border-box" }}>
          <h3
            className="box-border mt-0 flex items-center text-gray-900 font-inter text-[16px] font-bold leading-6 cursor-default mb-4"
          >
            {"Help"}
          </h3>{" "}

          <ul
            className="box-border mb-0 mt-0 pl-0"
          >
            <li
              className="footerMenu__item"
              style={{ boxSizing: "border-box", display: "block" }}
            >
              <a
                className="box-border text-gray-700 font-inter text-[16px]  leading-5 break-words flex items-center cursor-pointer"
              >
                {"Our Support"}
              </a>
            </li>

            <li
              className="box-border block mt-4"
            >
              <a
                className="box-border text-gray-700 font-inter text-[16px]  leading-5 break-words flex items-center cursor-pointer"
                href="#"
                target="_blank"
              >
                {"Imprint"}
              </a>
            </li>

            <li
              className="box-border block mt-4"
            >
              <a
                className="box-border text-gray-700 font-inter text-[16px] leading-5 break-words flex items-center cursor-pointer"
                href="#"
                target="_blank"
              >
                {"Privacy Policy"}
              </a>
            </li>

            <li
              className="box-border block mt-4"
            >
              <a
                className="box-border text-gray-700 font-inter text-[16px]  leading-5 break-words flex items-center cursor-pointer"
                href="#"
                target="_blank"
              >
                {"Terms and Conditions"}
              </a>
            </li>
            <li
              className="box-border block mt-4"
            >
              <a
                className="box-border text-gray-700 font-inter text-[16px]  leading-5 break-words flex items-center cursor-pointer"
                href="#"
                target="_blank"
              >
                {"Terms of Use"}
              </a>
            </li>

          </ul>
        </Box>{" "}

        {/* social networks col */}
        <Box  className='mt-12 md:mt-0' style={{ boxSizing: "border-box" }}>
          <h3
            className="box-border mt-0 items-center flex text-gray-900 font-inter text-[16px] font-bold leading-6 cursor-default mb-4"
          >
            Social Network
          </h3>{" "}

          <ul
            className="box-border grid grid-cols-2 gap-8 justify-center content-center md:block mb-0 mt-0 pl-0 "
          >
            <li
              className="footerMenu__item"
              style={{ boxSizing: "border-box", display: "block" }}
            >
              <a
                className="box-border text-gray-700 font-inter text-[16px] leading-5 break-words flex items-center cursor-pointer"
                href="#"
                target="_blank"
              >
                <svg
                  className="box-border text-gray-400 flex-shrink-0 h-4 w-4 mr-2"
                  height="24"
                  width="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.278 9.989l-.264 3.384c.378 0 .542-.148.739-.325l1.775-1.543 3.68 2.45c.674.341 1.15.161 1.331-.565l2.415-10.286c.215-.907-.36-1.262-1.018-1.04L.744 7.005c-.969.342-.954.833-.165 1.056l3.629 1.026 8.429-4.795c.396-.239.757-.106.46.132L6.278 9.99z"
                    style={{ boxSizing: "border-box" }}
                  />
                </svg>
                {"Telegram"}
              </a>
            </li>
            <li
              className="box-border block mt-4"
            >
              <a
                className="box-border text-gray-700 font-inter text-[16px] leading-5 break-words flex items-center cursor-pointer"
                href="#"
                target="_blank"
              >
                <svg
                  className="box-border text-gray-400 flex-shrink-0 h-4 w-4 mr-2"
                  height="24"
                  width="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    clipPath="url(#svg914823466__a)"
                    style={{ boxSizing: "border-box" }}
                  >
                    <path
                      d="M14.099 7.262c-.514-.534-1.09-.537-1.354-.567-1.889-.135-4.722-.135-4.722-.135h-.006s-2.833 0-4.724.135c-.264.03-.838.033-1.352.567-.405.408-.537 1.332-.537 1.332S1.27 9.68 1.27 10.765v1.019c0 1.085.134 2.171.134 2.171s.132.924.537 1.33c.514.535 1.188.518 1.488.574 1.08.103 4.59.135 4.59.135s2.838-.004 4.726-.14c.265-.031.84-.034 1.354-.569.405-.406.537-1.33.537-1.33s.134-1.086.134-2.171v-1.019c0-1.085-.134-2.17-.134-2.17s-.132-.925-.537-1.333zM4.245 14.19h-.911v-5.2h-.963v-.852h2.854v.851h-.98v5.2zm3.228 0h-.82v-.492c-.325.372-.635.555-.935.555-.264 0-.446-.108-.528-.337-.045-.136-.072-.352-.072-.67V9.679h.819V13c0 .192 0 .291.006.318.02.127.084.192.193.192.164 0 .335-.127.517-.383V9.679h.82v4.51zm3.11-1.352c0 .415-.028.716-.083.907-.11.336-.329.508-.653.508-.292 0-.574-.162-.847-.5v.437h-.82V8.137H9v1.976c.264-.325.545-.489.847-.489.324 0 .543.172.653.51.055.181.082.479.082.906v1.797zm3.044-.754H11.99v.8c0 .417.137.626.418.626.202 0 .319-.11.366-.328.007-.044.018-.227.018-.555h.835v.12c0 .263-.01.444-.018.527-.027.18-.091.344-.191.488-.226.328-.563.49-.99.49-.429 0-.754-.154-.99-.463-.175-.225-.264-.581-.264-1.06v-1.58c0-.482.08-.833.254-1.062.236-.309.562-.462.98-.462.41 0 .737.153.966.462.171.229.253.58.253 1.062v.935zM5.859 6.109V3.632L6.962-.006h-.927l-.626 2.4-.651-2.4h-.966c.194.567.395 1.136.589 1.704.293.852.477 1.495.56 1.933v2.477h.918zm2.153.062c.414 0 .735-.156.964-.466.173-.227.258-.586.258-1.071V3.037c0-.486-.085-.842-.258-1.072-.229-.313-.55-.468-.964-.468-.414 0-.736.155-.964.468-.176.23-.258.586-.258 1.072v1.597c0 .485.082.844.258 1.071.228.31.55.466.964.466zm-.395-3.3c0-.42.128-.632.395-.632.265 0 .393.211.393.633v1.917c0 .422-.128.632-.393.632-.267 0-.395-.21-.395-.632V2.872zm4.63 3.238V1.55h-.827v3.484c-.183.258-.357.387-.522.387-.111 0-.177-.067-.194-.194-.01-.027-.01-.127-.01-.32V1.55h-.826v3.604c0 .323.027.54.074.678.083.23.267.338.533.338.3 0 .615-.183.945-.56v.498h.827z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M9.409 10.36c-.136 0-.272.064-.409.198v2.75c.137.135.273.2.409.2.235 0 .355-.2.355-.608v-1.924c0-.408-.12-.616-.355-.616zm2.991 0c-.273 0-.41.208-.41.626v.417h.818v-.417c0-.418-.136-.626-.408-.626z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </g>
                  <defs style={{ boxSizing: "border-box" }}>
                    <clippath
                      id="svg914823466__a"
                      style={{ boxSizing: "border-box" }}
                    >
                      <path
                        d="M0 0h16v16H0z"
                        fill="#fff"
                        style={{ boxSizing: "border-box" }}
                      />
                    </clippath>
                  </defs>
                </svg>
                {"Youtube"}
              </a>
            </li>
            <li
              className="box-border block mt-4"
            >
              <a
                className="box-border text-gray-700 font-inter text-[16px]  leading-5 break-words flex items-center cursor-pointer"
                href="#"
                target="_blank"
              >
                <svg
                  className="box-border text-gray-400 flex-shrink-0 h-4 w-4 mr-2"
                  height="24"
                  width="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    clipPath="url(#svg3459294183__a)"
                    style={{ boxSizing: "border-box" }}
                  >
                    <path
                      d="M5.88 3.099v2.203H4.268v2.693H5.88V16h3.316V7.996h2.225s.208-1.292.309-2.704H9.208V3.45c0-.275.362-.646.719-.646h1.806V0H9.277C5.8 0 5.881 2.696 5.881 3.1z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </g>
                  <defs style={{ boxSizing: "border-box" }}>
                    <clippath
                      id="svg3459294183__a"
                      style={{ boxSizing: "border-box" }}
                    >
                      <path
                        d="M0 0h16v16H0z"
                        fill="#fff"
                        style={{ boxSizing: "border-box" }}
                      />
                    </clippath>
                  </defs>
                </svg>
                {"Facebook"}
              </a>
            </li>

            <li
              className="box-border block mt-4"
            >
              <a
                className="box-border text-gray-700 no-underline font-inter text-sm leading-5 break-words flex items-center cursor-pointer"
                href="#"
                target="_blank"
              >
                <svg
                  className="box-border text-gray-400 flex-shrink-0 h-4 w-4 mr-2"
                  height="24"
                  width="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.762 3.291a6.22 6.22 0 01-1.783.489 3.114 3.114 0 001.365-1.719 6.2 6.2 0 01-1.972.754A3.107 3.107 0 008.08 5.648a8.82 8.82 0 01-6.4-3.245 3.104 3.104 0 00-.054 3.027c.241.45.59.835 1.015 1.12a3.098 3.098 0 01-1.407-.39v.04a3.107 3.107 0 002.492 3.046 3.128 3.128 0 01-1.403.053 3.107 3.107 0 002.901 2.156 6.231 6.231 0 01-4.598 1.287 8.783 8.783 0 004.76 1.395c5.713 0 8.836-4.732 8.836-8.836 0-.133-.003-.268-.009-.401a6.315 6.315 0 001.549-1.607l.001-.002z"
                    style={{ boxSizing: "border-box" }}
                  />
                </svg>
                {"Twitter"}
              </a>
            </li>

            {/* <li
              className="box-border block mt-4"
            >
              <a
                className="box-border text-gray-700 no-underline font-inter text-sm leading-5 break-words flex items-center cursor-pointer"
                href="#"
                target="_blank"
              >
                <svg
                  className="box-border text-gray-400 flex-shrink-0 h-4 w-4 mr-2"
                  height="24"
                  width="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    clipPath="url(#svg1874697586__a)"
                    style={{ boxSizing: "border-box" }}
                  >
                    <path
                      d="M15.915 11.68a1.123 1.123 0 00-.054-.104c-.278-.5-.808-1.114-1.591-1.841l-.017-.017-.008-.008-.008-.009h-.009c-.355-.338-.58-.566-.675-.683-.172-.222-.21-.447-.116-.675.066-.172.316-.535.75-1.09.227-.295.408-.531.54-.709.962-1.277 1.378-2.094 1.25-2.45l-.05-.082c-.032-.05-.118-.096-.257-.138a1.312 1.312 0 00-.534-.02l-2.399.016a.311.311 0 00-.166.004l-.109.025-.041.021-.034.025a.37.37 0 00-.091.088.569.569 0 00-.083.146 13.603 13.603 0 01-.892 1.874c-.205.344-.394.643-.566.895a4.3 4.3 0 01-.434.558 3.02 3.02 0 01-.316.288c-.095.072-.167.103-.217.092a6.075 6.075 0 01-.141-.034.554.554 0 01-.188-.204.914.914 0 01-.096-.325 3.583 3.583 0 01-.029-.337 7.046 7.046 0 01.005-.4c.005-.172.008-.289.008-.35 0-.211.004-.44.012-.687l.021-.588c.006-.144.008-.297.008-.458 0-.16-.01-.287-.029-.379a1.297 1.297 0 00-.087-.266.449.449 0 00-.17-.2.963.963 0 00-.28-.113 5.543 5.543 0 00-1.125-.108c-1.032-.011-1.696.056-1.99.2a1.122 1.122 0 00-.317.25c-.1.122-.114.189-.042.2.333.05.57.169.708.358l.05.1c.04.072.078.2.117.383.039.183.064.386.075.608.028.406.028.753 0 1.041-.028.29-.054.514-.08.675a1.35 1.35 0 01-.212.575.143.143 0 01-.041.042.624.624 0 01-.225.041c-.078 0-.172-.039-.283-.116a1.999 1.999 0 01-.346-.321 4.288 4.288 0 01-.404-.57 9.956 9.956 0 01-.467-.867l-.133-.242a20.786 20.786 0 01-.341-.679 13.089 13.089 0 01-.384-.862.55.55 0 00-.2-.266l-.041-.026a.884.884 0 00-.325-.125l-2.283.017c-.233 0-.391.053-.475.159l-.033.05A.27.27 0 000 4.194c0 .06.017.136.05.225.333.783.696 1.538 1.087 2.266.392.727.732 1.313 1.02 1.757.29.445.584.864.884 1.258.3.394.498.647.595.758.097.111.174.195.23.25l.208.2c.133.133.329.293.587.479.258.186.544.37.858.55.314.18.679.327 1.095.441.417.114.822.16 1.217.138h.958c.194-.017.341-.078.441-.183l.033-.042a.554.554 0 00.063-.154c.02-.07.03-.146.03-.23a2.746 2.746 0 01.053-.645c.042-.191.089-.336.142-.433a1.067 1.067 0 01.32-.366.543.543 0 01.067-.03c.133-.044.29 0 .471.13.18.13.35.291.508.483.159.192.349.407.57.646.223.238.417.416.584.533l.167.1c.11.066.255.127.433.183.177.055.333.07.466.042l2.133-.034c.21 0 .375-.035.491-.104.117-.07.186-.146.209-.229a.646.646 0 00.004-.283 1.046 1.046 0 00-.059-.221z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </g>
                  <defs style={{ boxSizing: "border-box" }}>
                    <clippath
                      id="svg1874697586__a"
                      style={{ boxSizing: "border-box" }}
                    >
                      <path
                        d="M0 0h16v16H0z"
                        fill="#fff"
                        style={{ boxSizing: "border-box" }}
                      />
                    </clippath>
                  </defs>
                </svg>
                {"VK"}
              </a>
            </li> */}

          </ul>
        </Box>{" "}

      </Box>
    </footer>
  )
}

export default Footer