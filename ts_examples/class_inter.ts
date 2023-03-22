// TS has a keyword 'interface' also 'type'
type drink = 'Coffee' | 'Tea'
const d:drink = 'Coffee' // or 'Tea'
const e = d as string

interface Photo { // TS prefers Interface rather than type
    albumId      : number
    id           : number
    title        : string
    url          : string
    thumbnailUrl : string
    ooblywoobly? : object // this is an optional member
    // we can also declare methods in our interface
    prettyPrint? : (x:boolean)=>{}
}

class Snap implements Photo {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
    ooblywoobly?: object | undefined
    constructor(snap:Photo){
        this.albumId = snap.albumId
        this.id      = snap.id
        this.title   = snap.title
        this.url     = snap.url
        this.thumbnailUrl = snap.thumbnailUrl
    }
    prettyPrint (x:boolean):string {
        return `${this.title} ${this.url}`
    }
}

let photos:Photo[] = [ // or Array<Photo>
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    }
]

// use the code
const snap1:Snap = new Snap(photos[3])
console.info(snap1.prettyPrint(false))


