﻿import $ from 'jquery';
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {CartModal} from "../CartModal/CartModal";

export const App = () => {
    return `
        <div>
            <h1 class="visually-hidden">Elegant e-commerce store</h1>
            
            ${Header()}
            
            <main class="app-main">
                <article class="page-content">
                    <h2 class="visually-hidden">Page Content</h2>
                </article>
            </main>
            
            ${Footer()}
            
            <div class="scroll-top-wrapper">
                <button class="scroll-top" id="scroll-top">
                    <svg class="scroll-svg-icon" viewBox="0 0 384 512">
                        <path
                                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                        ></path>
                    </svg>
                </button>
            </div>
            
            ${CartModal()}
        </div>
    `
}