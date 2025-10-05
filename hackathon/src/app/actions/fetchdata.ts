"use server"

import { ApifyClient } from 'apify-client';
//import { APIFY_TOKEN } from '$env/static/private';

// Create Apify client with token from .env


const client = new ApifyClient({
    token: process.env.APIFY_API_TOKEN,
})

if (!process.env.APIFY_API_TOKEN) {
    throw new Error("APIFY_API_TOKEN is not set")
}


// Fetch trending TikTok creators by region
export async function fetchHashtags(region: string) {
    const input = {
        countryCode: region,
        maxItems: 20,
        period: "7"
    };
    return await client.actor('lexis-solutions/tiktok-trending-hashtags-scraper').call({
        countryCode: region,
        maxItems: 20,
        period: "7"
    });
}




// Fetch trending TikTok creators by region
export async function fetchMusic(region: string) {
    const input = {
        discoverMusic_run: true,
        searchPosts_useFilters: false,
        searchSounds_useFilters: false,
        trendingCreators_region: region,
        trendingCreators_run: false
    };
    return await client.actor('scraptik/tiktok-api').call({         discoverMusic_run: true,
        searchPosts_useFilters: false,
        searchSounds_useFilters: false,
        trendingCreators_region: region,
        trendingCreators_run: false });
}

// Fetch trending TikTok creators by region
export async function fetchCreators(region: string) {
    const input = {
        discoverMusic_run: false,
        searchPosts_useFilters: false,
        searchSounds_useFilters: false,
        trendingCreators_region: region,
        trendingCreators_run: true
    };
    return await client.actor('scraptik/tiktok-api').call({         discoverMusic_run: false,
        searchPosts_useFilters: false,
        searchSounds_useFilters: false,
        trendingCreators_region: region,
        trendingCreators_run: true });
}




///////////////////////////
// Fetch cur