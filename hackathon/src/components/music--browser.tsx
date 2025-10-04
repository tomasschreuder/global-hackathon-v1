"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Music, Users, Clock } from "lucide-react"

interface MusicTrack {
  title: string
  author: string
  album: string
  user_count: number
  duration: number
  cover_large: {
    url_list: string[]
  }
  artists: Array<{
    avatar: {
      url_list: string[]
    }
    nick_name: string
    handle: string
    is_verified: boolean
  }>
  create_time: number
  language: string
}

const musicData = {
  music_list: [
    {
      title: "Shiny",
      author: "Easykid & Dysbit",
      album: "I'M PART",
      user_count: 2104724,
      duration: 7,
      language: "Spanish",
      cover_large: {
        url_list: [
          "https://p16-common.tiktokcdn-us.com/tos-alisg-v-2774/o8DA7QV7EEWHlP373YairUBUKgiQAANEqAMAw~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9584&t=4d5b0474&ps=933b5bde&shp=08d74b56&shcp=544a444f&idc=useast5",
        ],
      },
      artists: [
        {
          avatar: {
            url_list: [
              "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/dc025fa51855788237911ed416b9050c~tplv-tiktokx-cropcenter:168:168.jpeg?dr=9638&refresh_token=6c41dc69&x-expires=1759687200&x-signature=GD4%2Be5e3jMzrHyVAujInU9sE2pY%3D&t=4d5b0474&ps=13740610&shp=544a444f&shcp=3d78c6bd&idc=useast5",
            ],
          },
          nick_name: "EASYKID",
          handle: "easykidgosling",
          is_verified: true,
        },
      ],
      create_time: 1757369467,
    },
    {
      title: "My Dawg",
      author: "Lil Baby",
      album: "Harder Than Hard",
      user_count: 43664,
      duration: 60,
      language: "English",
      cover_large: {
        url_list: [
          "https://p16-common.tiktokcdn-us.com/tos-alisg-v-2774/o07RA1ticeErNA3mCnAEZy5igfAHw1tQBB1BgD~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9584&t=4d5b0474&ps=933b5bde&shp=08d74b56&shcp=544a444f&idc=useast5",
        ],
      },
      artists: [
        {
          avatar: {
            url_list: [
              "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/4bf640db24ab72102199ebe7af8ea994~tplv-tiktokx-cropcenter:168:168.jpeg?dr=9638&refresh_token=5aacd156&x-expires=1759687200&x-signature=BqaL9ONS0iXgr25s59e3fG6qIpg%3D&t=4d5b0474&ps=13740610&shp=544a444f&shcp=3d78c6bd&idc=useast5",
            ],
          },
          nick_name: "Lil Baby",
          handle: "lilbaby",
          is_verified: true,
        },
      ],
      create_time: 1581208834,
    },
    {
      title: "Take Me Thru Dere",
      author: "Metro Boomin & Quavo & Breskii & YKNIECE & DJ Spinz",
      album: "Metro Boomin Presents: A Futuristic Summa (Hosted by DJ Spinz)",
      user_count: 73150,
      duration: 60,
      language: "English",
      cover_large: {
        url_list: [
          "https://p16-common.tiktokcdn-us.com/tos-alisg-v-2774/ooIaYLRyKCAKDXGWIee2AgAAIXp4MGf1tETFzP~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9584&t=4d5b0474&ps=933b5bde&shp=08d74b56&shcp=544a444f&idc=useast5",
        ],
      },
      artists: [
        {
          avatar: {
            url_list: [
              "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/b684190235751cbf66425caa6428b6b2~tplv-tiktokx-cropcenter:168:168.jpeg?dr=9638&refresh_token=d718d2e7&x-expires=1759687200&x-signature=TLcNBi9wOJUGuF3UeeZJ8myXVCA%3D&t=4d5b0474&ps=13740610&shp=544a444f&shcp=3d78c6bd&idc=useast5",
            ],
          },
          nick_name: "Metro Boomin",
          handle: "metroboomin",
          is_verified: true,
        },
      ],
      create_time: 1754016115,
    },
    {
      title: "Sky",
      author: "Playboi Carti",
      album: "Whole Lotta Red",
      user_count: 89275,
      duration: 60,
      language: "English",
      cover_large: {
        url_list: [
          "https://p16-common.tiktokcdn-us.com/tos-alisg-v-2774/o42mffQBeAWdieAY1xMRSWAIM8KMWGAZyFAYJI~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9584&t=4d5b0474&ps=933b5bde&shp=08d74b56&shcp=544a444f&idc=useast5",
        ],
      },
      artists: [
        {
          avatar: {
            url_list: [
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/6c0e54883b8e387cba7877b3e8425f43~tplv-tiktokx-cropcenter:168:168.jpeg?dr=9638&refresh_token=c86b7c06&x-expires=1759687200&x-signature=RhXr5o0tRPgUQOvUSEflkDYKGF4%3D&t=4d5b0474&ps=13740610&shp=544a444f&shcp=3d78c6bd&idc=useast5",
            ],
          },
          nick_name: "𝔍𝔬𝔰𝔥 ✱",
          handle: "͏‍͏‍͏‍͏‍uzi",
          is_verified: false,
        },
      ],
      create_time: 1609143798,
    },
    {
      title: "My Humps",
      author: "The Black Eyed Peas",
      album: "Monkey Business",
      user_count: 35124,
      duration: 60,
      language: "English",
      cover_large: {
        url_list: [
          "https://p19-common.tiktokcdn-us.com/tos-alisg-v-2774/owAf5F1DFrEz7DnZElzDefARAtEabQbgAAC3E2~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9584&t=4d5b0474&ps=933b5bde&shp=08d74b56&shcp=544a444f&idc=useast5",
        ],
      },
      artists: [
        {
          avatar: {
            url_list: [
              "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c940e56f63776a72f001f5d918722a2a~tplv-tiktokx-cropcenter:168:168.jpeg?dr=9638&refresh_token=9a9059cb&x-expires=1759687200&x-signature=%2FY1RU0ZSr1C8yoovfkdwjwtp77E%3D&t=4d5b0474&ps=13740610&shp=544a444f&shcp=3d78c6bd&idc=useast5",
            ],
          },
          nick_name: "Black Eyed Peas",
          handle: "blackeyedpeas",
          is_verified: true,
        },
      ],
      create_time: 1572485573,
    },
    {
      title: "Duvet",
      author: "bôa",
      album: "Twilight",
      user_count: 71375,
      duration: 38,
      language: "English",
      cover_large: {
        url_list: [
          "https://p16-common.tiktokcdn-us.com/tos-alisg-v-2774/ooAiUD4oAqrEBB25iA8AdaZ3AxEYoaWPAAnHJ~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9584&t=4d5b0474&ps=933b5bde&shp=08d74b56&shcp=544a444f&idc=useast5",
        ],
      },
      artists: [],
      create_time: 1584356782,
    },
    {
      title: "On Cam (feat. Moneybagg Yo)",
      author: "Yung Bleu",
      album: "Bleu Money",
      user_count: 91542,
      duration: 60,
      language: "English",
      cover_large: {
        url_list: [
          "https://p16-common.tiktokcdn-us.com/tos-alisg-v-2774/bd1757089b53433095868e23eb5a29c4~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9584&t=4d5b0474&ps=933b5bde&shp=08d74b56&shcp=544a444f&idc=useast5",
        ],
      },
      artists: [],
      create_time: 1606489209,
    },
    {
      title: "we fell in love in october",
      author: "girl in red",
      album: "we fell in love in october / forget her",
      user_count: 1271259,
      duration: 42,
      language: "English",
      cover_large: {
        url_list: [
          "https://p16-common.tiktokcdn-us.com/tos-alisg-v-2774/oYFncAVniCMcBUFAE4mXEZeBQXSfIRPAtjGgID~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9584&t=4d5b0474&ps=933b5bde&shp=08d74b56&shcp=544a444f&idc=useast5",
        ],
      },
      artists: [
        {
          avatar: {
            url_list: [
              "https://p16-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/a381eb029f6465c5dedac0d47ffa61ee~tplv-tiktokx-cropcenter:168:168.jpeg?dr=9638&refresh_token=d85bfe86&x-expires=1759687200&x-signature=a8ZWFabZJDc24osm6uiUbqGwXSc%3D&t=4d5b0474&ps=13740610&shp=544a444f&shcp=3d78c6bd&idc=useast5",
            ],
          },
          nick_name: "girl in red",
          handle: "girlinred",
          is_verified: true,
        },
      ],
      create_time: 1562754629,
    },
    {
      title: "DARKSIDE",
      author: "Neoni",
      album: "DARKSIDE",
      user_count: 951775,
      duration: 60,
      language: "English",
      cover_large: {
        url_list: [
          "https://p16-common.tiktokcdn-us.com/tos-alisg-v-2774/oEDkEohzAPtAbM1AMyJRW5FEiAfp4sBaqWArqw~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9584&t=4d5b0474&ps=933b5bde&shp=08d74b56&shcp=544a444f&idc=useast5",
        ],
      },
      artists: [
        {
          avatar: {
            url_list: [
              "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/f110ede0379731b9c12015e516996043~tplv-tiktokx-cropcenter:168:168.jpeg?dr=9638&refresh_token=6bc3dfa7&x-expires=1759687200&x-signature=a8djy4auuwQRDdI%2BBE%2Feh9j5LH0%3D&t=4d5b0474&ps=13740610&shp=544a444f&shcp=3d78c6bd&idc=useast5",
            ],
          },
          nick_name: "Neoni",
          handle: "weareneoni",
          is_verified: false,
        },
      ],
      create_time: 1608181208,
    },
    {
      title: "Marz",
      author: "DeeBaby",
      album: "Marz",
      user_count: 31929,
      duration: 60,
      language: "English",
      cover_large: {
        url_list: [
          "https://p16-common.tiktokcdn-us.com/tos-alisg-v-2774/oc9AJBfE5gLDm81QSEBwZfCXArEzFVtADwAKrs~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9584&t=4d5b0474&ps=933b5bde&shp=08d74b56&shcp=544a444f&idc=useast5",
        ],
      },
      artists: [],
      create_time: 1620734719,
    },
  ],
}

export default function MusicBrowser() {
  const [searchQuery, setSearchQuery] = useState("")

  const musicList: MusicTrack[] = musicData.music_list

  const filteredMusic = useMemo(() => {
    if (!searchQuery) return musicList

    const query = searchQuery.toLowerCase()
    return musicList.filter(
      (track) =>
        track.title.toLowerCase().includes(query) ||
        track.author.toLowerCase().includes(query) ||
        track.album.toLowerCase().includes(query),
    )
  }, [searchQuery, musicList])

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-balance">TikTok Music Browser</h1>
        <p className="text-muted-foreground text-pretty">Explore {musicList.length} trending tracks from TikTok</p>
      </div>

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search by title, artist, or album..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMusic.map((track, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative aspect-square">
              <img
                src={track.cover_large.url_list[0] || "/placeholder.svg"}
                alt={track.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge variant="secondary" className="backdrop-blur-sm bg-background/80">
                  <Music className="h-3 w-3 mr-1" />
                  {track.language}
                </Badge>
              </div>
            </div>

            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-1 line-clamp-1 text-balance">{track.title}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-1">{track.author}</p>

              {track.album && <p className="text-xs text-muted-foreground mb-3 line-clamp-1">Album: {track.album}</p>}

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{formatNumber(track.user_count)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{formatDuration(track.duration)}</span>
                </div>
              </div>

              {track.artists && track.artists.length > 0 && (
                <div className="mt-3 pt-3 border-t">
                  <div className="flex items-center gap-2">
                    <img
                      src={track.artists[0].avatar.url_list[0] || "/placeholder.svg"}
                      alt={track.artists[0].nick_name}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-xs font-medium">{track.artists[0].nick_name}</span>
                    {track.artists[0].is_verified && (
                      <Badge variant="outline" className="text-xs h-5">
                        Verified
                      </Badge>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredMusic.length === 0 && (
        <div className="text-center py-12">
          <Music className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">No tracks found matching your search.</p>
        </div>
      )}
    </div>
  )
}
