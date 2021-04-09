export interface Mission {
    crew: null
    details: string
    flight_number: number
    is_tentative: boolean
    last_date_update: string
    last_ll_launch_date: null
    last_ll_update: null
    last_wiki_launch_date: string
    last_wiki_revision: string
    last_wiki_update: string
    launch_date_local: string
    launch_date_source: string
    launch_date_unix: number
    launch_date_utc: string
    launch_site: {
        site_id: string
        site_name: string
        site_name_long: string
    };
    launch_success: boolean
    launch_window: null
    launch_year: "2020"
    links: {
        article_link: string
        flickr_images: []
        mission_patch: string
        mission_patch_small: string
        presskit: null
        reddit_campaign:string
        reddit_launch: string
        reddit_media: null
        reddit_recovery: null
        video_link: string
        wikipedia: string
        youtube_id: string
    }
    mission_id: []
    mission_name: string
    rocket: {
        fairings: {
            recovered: null
            recovery_attempt: boolean
            reused: null
            ship: string
        }
        first_stage:{
            cores: []
        }
        rocket_id: string
        rocket_name: string
        rocket_type: string
        second_stage: {
            block: number
            payloads: []
        }
    }
    ships: []
    static_fire_date_unix: null
    static_fire_date_utc: null
    tbd: boolean
    telemetry: {
        flight_club: null
    }
    tentative_max_precision: string
    timeline: null
    upcoming: boolean
}