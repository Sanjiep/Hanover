'use client'

import PrelineScript from '../PrelineScript';
import React from 'react'
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {

  const { isLogIn } = useSelector(state => state.user);

  return (
    <div className="sticky top-0 flex shadow-sm backdrop-filter border-b backdrop-blur-lg bg-opacity-80 flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm py-3 md:py-2 dark:bg-gray-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8" aria-label="Global">
        <div className="relative md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <Link href='/'>
              {/* <img className='w-60 select-none' src="hanover.svg"/> */}
              <svg className='w-60' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="588" zoomAndPan="magnify" viewBox="0 0 440.88 171.750001" height="100" preserveAspectRatio="xMidYMid meet" version="1.0">
                <defs>
                  <g />
                </defs>
                <g fill="#dc291e" fillOpacity="1">
                  <g transform="translate(33.212526, 109.379107)">
                    <g>
                      <path d="M 5.3125 0 L 5.3125 -76.0625 L 20.96875 -76.0625 L 20.96875 -40.59375 L 21.140625 -40.59375 C 25.210938 -44.664062 29.546875 -46.703125 34.140625 -46.703125 C 36.378906 -46.703125 38.601562 -46.40625 40.8125 -45.8125 C 43.03125 -45.226562 45.15625 -44.316406 47.1875 -43.078125 C 49.21875 -41.835938 50.867188 -40.082031 52.140625 -37.8125 C 53.410156 -35.539062 54.046875 -32.898438 54.046875 -29.890625 L 54.046875 0 L 38.390625 0 L 38.390625 -25.65625 C 38.390625 -28.007812 37.632812 -30.070312 36.125 -31.84375 C 34.625 -33.613281 32.664062 -34.5 30.25 -34.5 C 27.894531 -34.5 25.757812 -33.582031 23.84375 -31.75 C 21.925781 -29.925781 20.96875 -27.894531 20.96875 -25.65625 L 20.96875 0 Z M 5.3125 0 " />
                    </g>
                  </g>
                </g>
                <g fill="#dc291e" fillOpacity="1">
                  <g transform="translate(83.367749, 109.379107)">
                    <g>
                      <path d="M 8.390625 -5.609375 C 4.148438 -10.242188 2.03125 -15.921875 2.03125 -22.640625 C 2.03125 -29.367188 4.148438 -35.0625 8.390625 -39.71875 C 12.640625 -44.375 18.039062 -46.703125 24.59375 -46.703125 C 30.601562 -46.703125 35.554688 -44.816406 39.453125 -41.046875 L 39.453125 -45.375 L 55.109375 -45.375 L 55.109375 0 L 39.625 0 L 39.625 -5.125 L 39.453125 -5.125 C 35.554688 -0.820312 30.601562 1.328125 24.59375 1.328125 C 18.039062 1.328125 12.640625 -0.984375 8.390625 -5.609375 Z M 21.703125 -30.328125 C 19.671875 -28.328125 18.65625 -25.765625 18.65625 -22.640625 C 18.65625 -19.515625 19.628906 -16.960938 21.578125 -14.984375 C 23.523438 -13.015625 26.09375 -12.03125 29.28125 -12.03125 C 32.34375 -12.03125 34.859375 -13.03125 36.828125 -15.03125 C 38.804688 -17.039062 39.796875 -19.578125 39.796875 -22.640625 C 39.796875 -25.765625 38.78125 -28.328125 36.75 -30.328125 C 34.71875 -32.335938 32.226562 -33.34375 29.28125 -33.34375 C 26.269531 -33.34375 23.742188 -32.335938 21.703125 -30.328125 Z M 21.703125 -30.328125 " />
                    </g>
                  </g>
                </g>
                <g fill="#dc291e" fillOpacity="1">
                  <g transform="translate(135.469059, 109.379107)">
                    <g>
                      <path d="M 5.3125 0 L 5.3125 -45.375 L 20.96875 -45.375 L 20.96875 -40.59375 L 21.140625 -40.59375 C 25.210938 -44.664062 29.546875 -46.703125 34.140625 -46.703125 C 36.378906 -46.703125 38.601562 -46.40625 40.8125 -45.8125 C 43.03125 -45.226562 45.15625 -44.316406 47.1875 -43.078125 C 49.21875 -41.835938 50.867188 -40.082031 52.140625 -37.8125 C 53.410156 -35.539062 54.046875 -32.898438 54.046875 -29.890625 L 54.046875 0 L 38.390625 0 L 38.390625 -25.65625 C 38.390625 -28.007812 37.632812 -30.070312 36.125 -31.84375 C 34.625 -33.613281 32.664062 -34.5 30.25 -34.5 C 27.894531 -34.5 25.757812 -33.582031 23.84375 -31.75 C 21.925781 -29.925781 20.96875 -27.894531 20.96875 -25.65625 L 20.96875 0 Z M 5.3125 0 " />
                    </g>
                  </g>
                </g>
                <g fill="#dc291e" fillOpacity="1">
                  <g transform="translate(185.624283, 109.379107)">
                    <g>
                      <path d="M 9.59375 -5.390625 C 4.550781 -9.878906 2.03125 -15.628906 2.03125 -22.640625 C 2.03125 -29.660156 4.65625 -35.425781 9.90625 -39.9375 C 15.15625 -44.445312 21.640625 -46.703125 29.359375 -46.703125 C 36.972656 -46.703125 43.390625 -44.429688 48.609375 -39.890625 C 53.828125 -35.347656 56.4375 -29.597656 56.4375 -22.640625 C 56.4375 -15.679688 53.882812 -9.945312 48.78125 -5.4375 C 43.675781 -0.925781 37.203125 1.328125 29.359375 1.328125 C 21.222656 1.328125 14.632812 -0.910156 9.59375 -5.390625 Z M 21.703125 -30.328125 C 19.671875 -28.328125 18.65625 -25.765625 18.65625 -22.640625 C 18.65625 -19.515625 19.628906 -16.960938 21.578125 -14.984375 C 23.523438 -13.015625 26.09375 -12.03125 29.28125 -12.03125 C 32.34375 -12.03125 34.859375 -13.03125 36.828125 -15.03125 C 38.804688 -17.039062 39.796875 -19.578125 39.796875 -22.640625 C 39.796875 -25.765625 38.78125 -28.328125 36.75 -30.328125 C 34.71875 -32.335938 32.226562 -33.34375 29.28125 -33.34375 C 26.269531 -33.34375 23.742188 -32.335938 21.703125 -30.328125 Z M 21.703125 -30.328125 " />
                    </g>
                  </g>
                </g>
                <g fill="#dc291e" fillOpacity="1">
                  <g transform="translate(235.779506, 109.379107)">
                    <g>
                      <path d="M 16.8125 -45.375 L 27.859375 -20.703125 L 38.921875 -45.375 L 57.5 -45.375 L 33.171875 0 L 22.5625 0 L -1.765625 -45.375 Z M 16.8125 -45.375 " />
                    </g>
                  </g>
                </g>
                <g fill="#dc291e" fillOpacity="1">
                  <g transform="translate(283.192534, 109.379107)">
                    <g>
                      <path d="M 51.21875 -20.515625 L 18.3125 -20.515625 C 18.3125 -17.335938 19.34375 -14.976562 21.40625 -13.4375 C 23.46875 -11.90625 25.707031 -11.140625 28.125 -11.140625 C 30.664062 -11.140625 32.671875 -11.476562 34.140625 -12.15625 C 35.617188 -12.832031 37.300781 -14.175781 39.1875 -16.1875 L 50.5 -10.53125 C 45.789062 -2.625 37.953125 1.328125 26.984375 1.328125 C 20.140625 1.328125 14.269531 -1.015625 9.375 -5.703125 C 4.476562 -10.390625 2.03125 -16.035156 2.03125 -22.640625 C 2.03125 -29.242188 4.476562 -34.90625 9.375 -39.625 C 14.269531 -44.34375 20.140625 -46.703125 26.984375 -46.703125 C 34.171875 -46.703125 40.019531 -44.625 44.53125 -40.46875 C 49.039062 -36.3125 51.296875 -30.367188 51.296875 -22.640625 C 51.296875 -21.578125 51.269531 -20.867188 51.21875 -20.515625 Z M 18.75 -29.1875 L 36 -29.1875 C 35.644531 -31.550781 34.710938 -33.363281 33.203125 -34.625 C 31.703125 -35.894531 29.773438 -36.53125 27.421875 -36.53125 C 24.828125 -36.53125 22.757812 -35.851562 21.21875 -34.5 C 19.6875 -33.144531 18.863281 -31.375 18.75 -29.1875 Z M 18.75 -29.1875 " />
                    </g>
                  </g>
                </g>
                <g fill="#dc291e" fillOpacity="1">
                  <g transform="translate(328.217199, 109.379107)">
                    <g>
                      <path d="M 5.3125 0 L 5.3125 -45.375 L 20.96875 -45.375 L 20.96875 -38.828125 L 21.140625 -38.828125 C 21.253906 -39.066406 21.441406 -39.363281 21.703125 -39.71875 C 21.972656 -40.070312 22.550781 -40.691406 23.4375 -41.578125 C 24.320312 -42.460938 25.265625 -43.253906 26.265625 -43.953125 C 27.273438 -44.660156 28.570312 -45.296875 30.15625 -45.859375 C 31.75 -46.421875 33.375 -46.703125 35.03125 -46.703125 C 36.738281 -46.703125 38.414062 -46.460938 40.0625 -45.984375 C 41.71875 -45.515625 42.929688 -45.046875 43.703125 -44.578125 L 44.9375 -43.875 L 38.390625 -30.609375 C 36.441406 -32.253906 33.726562 -33.078125 30.25 -33.078125 C 28.363281 -33.078125 26.742188 -32.664062 25.390625 -31.84375 C 24.035156 -31.019531 23.078125 -30.015625 22.515625 -28.828125 C 21.953125 -27.648438 21.550781 -26.648438 21.3125 -25.828125 C 21.082031 -25.003906 20.96875 -24.351562 20.96875 -23.875 L 20.96875 0 Z M 5.3125 0 " />
                    </g>
                  </g>
                </g>
                <g fill="#dc291e" fillOpacity="1">
                  <g transform="translate(363.953745, 109.379107)">
                    <g />
                  </g>
                </g>
                <g fill="#dc291e" fillOpacity="1">
                  <g transform="translate(379.787224, 109.379107)">
                    <g>
                      <path d="M 15.390625 -18.921875 C 18.222656 -18.921875 20.625 -17.929688 22.59375 -15.953125 C 24.570312 -13.984375 25.5625 -11.582031 25.5625 -8.75 C 25.5625 -5.976562 24.570312 -3.601562 22.59375 -1.625 C 20.625 0.34375 18.222656 1.328125 15.390625 1.328125 C 12.617188 1.328125 10.242188 0.34375 8.265625 -1.625 C 6.296875 -3.601562 5.3125 -5.976562 5.3125 -8.75 C 5.3125 -11.582031 6.296875 -13.984375 8.265625 -15.953125 C 10.242188 -17.929688 12.617188 -18.921875 15.390625 -18.921875 Z M 15.390625 -18.921875 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fillOpacity="1">
                  <g transform="translate(37.372845, 141.817818)">
                    <g>
                      <path d="M 5.585938 0.304688 C 8.355469 0.304688 10.167969 -1.089844 10.167969 -3.078125 C 10.167969 -5.871094 7.59375 -6.21875 5.609375 -6.457031 C 4.210938 -6.632812 3.273438 -6.9375 3.273438 -7.832031 C 3.273438 -8.640625 4.125 -9.097656 5.476562 -9.097656 C 6.589844 -9.097656 7.527344 -8.902344 8.402344 -8.09375 L 9.667969 -9.578125 C 8.445312 -10.625 7.179688 -10.996094 5.519531 -10.996094 C 3.511719 -10.996094 1.046875 -10.125 1.046875 -7.769531 C 1.046875 -5.410156 3.425781 -4.734375 5.433594 -4.539062 C 7.003906 -4.386719 7.921875 -4.015625 7.921875 -3.097656 C 7.921875 -2.074219 6.675781 -1.679688 5.628906 -1.679688 C 4.34375 -1.679688 2.878906 -2.160156 1.855469 -3.273438 L 0.675781 -1.679688 C 2.09375 -0.0859375 3.839844 0.304688 5.585938 0.304688 Z M 5.585938 0.304688 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fillOpacity="1">
                  <g transform="translate(51.533408, 141.817818)">
                    <g>
                      <path d="M 6.394531 0.285156 C 7.703125 0.285156 9.40625 -0.347656 10.101562 -1.746094 L 10.210938 0 L 12.351562 0 L 12.351562 -10.777344 L 10.167969 -10.777344 L 10.101562 -9.054688 C 9.425781 -10.277344 7.984375 -10.996094 6.4375 -10.996094 C 3.359375 -10.996094 0.871094 -8.988281 0.871094 -5.390625 C 0.871094 -1.722656 3.25 0.285156 6.394531 0.285156 Z M 6.613281 -1.8125 C 4.691406 -1.8125 3.121094 -3.1875 3.121094 -5.390625 C 3.121094 -7.570312 4.691406 -8.945312 6.613281 -8.945312 C 8.945312 -8.945312 10.101562 -7.15625 10.101562 -5.390625 C 10.101562 -3.601562 8.945312 -1.8125 6.613281 -1.8125 Z M 6.613281 -1.8125 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fillOpacity="1">
                  <g transform="translate(68.682908, 141.817818)">
                    <g>
                      <path d="M 2.660156 -12.570312 C 3.359375 -12.570312 4.058594 -13.027344 4.058594 -13.964844 C 4.058594 -14.902344 3.359375 -15.339844 2.660156 -15.339844 C 1.964844 -15.339844 1.265625 -14.902344 1.265625 -13.964844 C 1.265625 -13.027344 1.964844 -12.570312 2.660156 -12.570312 Z M 0.371094 5.390625 C 2.816406 5.390625 3.773438 3.992188 3.773438 1.265625 L 3.773438 -10.777344 L 1.527344 -10.777344 L 1.527344 1.265625 C 1.527344 2.574219 1.332031 3.273438 0.175781 3.273438 C -0.21875 3.273438 -0.632812 3.164062 -1.089844 2.945312 L -1.898438 4.714844 C -1.132812 5.214844 -0.394531 5.390625 0.371094 5.390625 Z M 0.371094 5.390625 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fillOpacity="1">
                  <g transform="translate(77.258295, 141.817818)">
                    <g>
                      <path d="M 2.660156 -12.523438 C 3.359375 -12.523438 4.058594 -12.984375 4.058594 -13.921875 C 4.058594 -14.859375 3.359375 -15.296875 2.660156 -15.296875 C 1.964844 -15.296875 1.265625 -14.859375 1.265625 -13.921875 C 1.265625 -12.984375 1.964844 -12.523438 2.660156 -12.523438 Z M 1.527344 0 L 3.773438 0 L 3.773438 -10.777344 L 1.527344 -10.777344 Z M 1.527344 0 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fillOpacity="1">
                  <g transform="translate(85.833686, 141.817818)">
                    <g>
                      <path d="M 1.613281 0 L 3.863281 0 L 3.863281 -15.273438 L 1.613281 -15.273438 Z M 1.613281 0 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fillOpacity="1">
                  <g transform="translate(94.583607, 141.817818)">
                    <g>
                      <path d="M 6.394531 0.238281 C 9.796875 0.238281 11.980469 -2.160156 11.980469 -5.367188 C 11.980469 -8.511719 9.710938 -10.976562 6.394531 -10.976562 C 3.054688 -10.976562 0.851562 -8.511719 0.851562 -5.367188 C 0.851562 -2.160156 3.011719 0.238281 6.394531 0.238281 Z M 6.394531 -1.855469 C 4.363281 -1.855469 3.097656 -3.449219 3.097656 -5.367188 C 3.097656 -7.265625 4.363281 -8.902344 6.394531 -8.902344 C 8.378906 -8.902344 9.710938 -7.265625 9.710938 -5.367188 C 9.710938 -3.449219 8.464844 -1.855469 6.394531 -1.855469 Z M 6.394531 -1.855469 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fillOpacity="1">
                  <g transform="translate(110.685888, 141.817818)">
                    <g />
                  </g>
                </g>
                <g fill="#000000" fillOpacity="1">
                  <g transform="translate(119.392173, 141.817818)">
                    <g>
                      <path d="M 6.371094 0.21875 C 7.789062 0.21875 9.25 -0.328125 10.101562 -1.703125 L 10.234375 0 L 12.351562 0 L 12.351562 -15.273438 L 10.101562 -15.273438 L 10.101562 -9.078125 C 9.40625 -10.363281 7.636719 -10.996094 6.328125 -10.996094 C 3.207031 -10.996094 0.871094 -9.054688 0.871094 -5.390625 C 0.871094 -1.8125 3.25 0.21875 6.371094 0.21875 Z M 6.523438 -1.875 C 4.605469 -1.875 3.121094 -3.207031 3.121094 -5.390625 C 3.121094 -7.570312 4.605469 -8.878906 6.523438 -8.878906 C 8.378906 -8.878906 9.949219 -7.484375 9.949219 -5.390625 C 9.949219 -3.273438 8.378906 -1.875 6.523438 -1.875 Z M 6.523438 -1.875 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fillOpacity="1">
                  <g transform="translate(136.541674, 141.817818)">
                    <g>
                      <path d="M 6.675781 0.304688 C 8.335938 0.304688 10.191406 -0.285156 11.304688 -1.527344 L 9.839844 -2.945312 C 9.164062 -2.183594 7.832031 -1.789062 6.71875 -1.789062 C 4.734375 -1.789062 3.402344 -2.835938 3.207031 -4.496094 L 11.9375 -4.496094 C 11.957031 -4.824219 11.980469 -5.148438 11.980469 -5.453125 C 11.980469 -9.164062 9.730469 -10.996094 6.523438 -10.996094 C 3.164062 -10.996094 0.871094 -8.664062 0.871094 -5.390625 C 0.871094 -1.941406 3.140625 0.304688 6.675781 0.304688 Z M 3.25 -6.394531 C 3.601562 -8.117188 4.929688 -8.988281 6.589844 -8.988281 C 8.421875 -8.988281 9.621094 -8.117188 9.777344 -6.394531 Z M 3.25 -6.394531 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fillOpacity="1">
                  <g transform="translate(152.513061, 141.817818)">
                    <g>
                      <path d="M 1.613281 0 L 3.863281 0 L 3.863281 -15.273438 L 1.613281 -15.273438 Z M 1.613281 0 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fillOpacity="1">
                  <g transform="translate(161.262976, 141.817818)">
                    <g>
                      <path d="M 2.660156 -12.523438 C 3.359375 -12.523438 4.058594 -12.984375 4.058594 -13.921875 C 4.058594 -14.859375 3.359375 -15.296875 2.660156 -15.296875 C 1.964844 -15.296875 1.265625 -14.859375 1.265625 -13.921875 C 1.265625 -12.984375 1.964844 -12.523438 2.660156 -12.523438 Z M 1.527344 0 L 3.773438 0 L 3.773438 -10.777344 L 1.527344 -10.777344 Z M 1.527344 0 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fillOpacity="1">
                  <g transform="translate(169.83836, 141.817818)">
                    <g>
                      <path d="M 4.976562 0 L 7.441406 0 L 12 -10.777344 L 9.535156 -10.777344 L 7.921875 -6.785156 L 6.21875 -2.355469 L 4.320312 -7.222656 L 2.878906 -10.777344 L 0.394531 -10.777344 Z M 4.976562 0 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fillOpacity="1">
                  <g transform="translate(185.504303, 141.817818)">
                    <g>
                      <path d="M 6.675781 0.304688 C 8.335938 0.304688 10.191406 -0.285156 11.304688 -1.527344 L 9.839844 -2.945312 C 9.164062 -2.183594 7.832031 -1.789062 6.71875 -1.789062 C 4.734375 -1.789062 3.402344 -2.835938 3.207031 -4.496094 L 11.9375 -4.496094 C 11.957031 -4.824219 11.980469 -5.148438 11.980469 -5.453125 C 11.980469 -9.164062 9.730469 -10.996094 6.523438 -10.996094 C 3.164062 -10.996094 0.871094 -8.664062 0.871094 -5.390625 C 0.871094 -1.941406 3.140625 0.304688 6.675781 0.304688 Z M 3.25 -6.394531 C 3.601562 -8.117188 4.929688 -8.988281 6.589844 -8.988281 C 8.421875 -8.988281 9.621094 -8.117188 9.777344 -6.394531 Z M 3.25 -6.394531 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fillOpacity="1">
                  <g transform="translate(201.475683, 141.817818)">
                    <g>
                      <path d="M 1.527344 0 L 3.773438 0 L 3.773438 -5.824219 C 3.773438 -7.8125 5.128906 -8.773438 6.675781 -8.773438 C 7.527344 -8.773438 8.03125 -8.554688 8.574219 -8.117188 L 9.601562 -10.082031 C 8.988281 -10.625 7.984375 -10.996094 6.9375 -10.996094 C 5.78125 -10.996094 4.558594 -10.714844 3.773438 -9.339844 L 3.621094 -10.777344 L 1.527344 -10.777344 Z M 1.527344 0 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fillOpacity="1">
                  <g transform="translate(214.349038, 141.817818)">
                    <g>
                      <path d="M 2.554688 5.019531 L 5.039062 5.019531 L 11.828125 -10.777344 L 9.316406 -10.777344 L 7.179688 -5.5625 L 6.023438 -2.617188 L 3.097656 -10.777344 L 0.480469 -10.777344 L 4.777344 -0.152344 Z M 2.554688 5.019531 " />
                    </g>
                  </g>
                </g>
              </svg>
            </Link>
            <div className="md:hidden">
              <button type="button" className="hs-collapse-toggle flex justify-center items-center w-9 h-9 text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
          </div>
          <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
              <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
                <a className="font-medium text-red-600 py-3 md:py-6 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-current="page">Home</a>


                <Link href='/track-order' className="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Track
                </Link>
                <Link href='/contact' className="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Contact
                </Link>

                <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6">
                  <button type="button" className="flex items-center w-full text-gray-800 hover:text-gray-600 font-medium dark:text-gray-200 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    Resources
                    <svg className="flex-shrink-0 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </button>

                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-[705px] lg:w-[750px] hidden z-10 top-full end-0 overflow-hidden bg-white md:shadow-2xl rounded-lg dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                    <div className="grid grid-cols-2 md:grid-cols-10">
                      <div className="md:col-span-3">
                        <div className="flex flex-col py-6 px-3 md:px-6">
                          <div className="space-y-4">
                            <span className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">About us</span>

                            <a className="flex gap-x-4 text-gray-800 hover:text-red-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                              <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                              <div className="grow">
                                <p>Support Docs</p>
                              </div>
                            </a>

                            <a className="flex gap-x-4 text-gray-800 hover:text-red-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                              <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="14" y="3" rx="1" /><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" /></svg>
                              <div className="grow">
                                <p>Integrations</p>
                              </div>
                            </a>

                            <a className="flex gap-x-4 text-gray-800 hover:text-red-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                              <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>
                              <div className="grow">
                                <p>Guides</p>
                              </div>
                            </a>

                            <a className="flex gap-x-4 text-gray-800 hover:text-red-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                              <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 11 2-2-2-2" /><path d="M11 13h4" /><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /></svg>
                              <div className="grow">
                                <p>API Reference</p>
                              </div>
                            </a>

                            <a className="flex gap-x-4 text-gray-800 hover:text-red-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                              <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                              <div className="grow">
                                <p>API Status</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-3">
                        <div className="flex flex-col py-6 px-3 md:px-6">
                          <div className="space-y-4">
                            <span className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">Support</span>

                            <a className="flex gap-x-4 text-gray-800 hover:text-red-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                              <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                              <div className="grow">
                                <p>Help Center</p>
                              </div>
                            </a>

                            <a className="flex gap-x-4 text-gray-800 hover:text-red-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                              <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" /></svg>
                              <div className="grow">
                                <p>Developer Hub</p>
                              </div>
                            </a>

                            <a className="flex gap-x-4 text-gray-800 hover:text-red-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                              <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                              <div className="grow">
                                <p>Community Forum</p>
                              </div>
                            </a>
                          </div>

                          <div className="mt-7 space-y-4">
                            <span className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">Partners</span>

                            <a className="flex gap-x-4 text-gray-800 hover:text-red-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                              <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6" /><polyline points="14 2 14 8 20 8" /><path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /><path d="M7 16.5 8 22l-3-1-3 1 1-5.5" /></svg>
                              <div className="grow">
                                <p>Become a Partner</p>
                              </div>
                            </a>

                            <a className="flex gap-x-4 text-gray-800 hover:text-red-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                              <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 5 4 4" /><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" /><path d="m8 6 2-2" /><path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z" /><path d="m18 16 2-2" /><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" /></svg>
                              <div className="grow">
                                <p>Build on Preline</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-full md:col-span-4">
                        <div className="flex flex-col bg-gray-50 p-6 dark:bg-gray-700">
                          <span className="text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">Customer stories</span>

                          <a className="mt-4 group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                            <div className="aspect-w-16 aspect-h-9">
                              <img className="w-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="Image Description" />
                            </div>
                            <div className="mt-2">
                              <p className="text-gray-800 dark:text-gray-200">Preline Projects has proved to be most efficient cloud based project tracking and bug tracking tool.</p>
                              <p className="mt-3 inline-flex items-center gap-x-1 text-sm text-red-600 decoration-2 hover:underline font-medium dark:text-red-400 dark:hover:text-red-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-slate-600">
                                Learn more
                                <svg className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link className="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/register">
                  Sign up
                  {/* <span className="py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-50 border border-red-200 text-red-600">4</span> */}
                </Link>

                <div className="pt-3 md:pt-0">
                  <Link className="py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href={isLogIn ? '/dashboard' : '/login'}>
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <PrelineScript />
    </div>
  )
}

export default Navbar