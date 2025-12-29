
const clips =
    { "items": [{ "id": 178, "type": 1, "title": "\u65e5\u672c\u306e\u7d4c\u6e08\u6210\u9577\u3068\u305d\u306e\u672a\u6765\u306b\u5411\u3051\u305f\u5c55\u671b", "author": { "id": 18, "name": "\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u30cb\u30c3\u30af\u30cd\u30fc\u30e0", "avatar_url": "https:\/\/d16ncvmf3upt5o.cloudfront.net\/media\/profile\/18\/3DyEVMuzSZAPbNYsG2ZlZUPmS5UDtBbaBinyxsvO.jpg", "introduction": null, "avatar_mode": 2, "icon_id": "icon_4", "user_type": 2, "status": 1 }, "image_thumbnail": "https:\/\/d16ncvmf3upt5o.cloudfront.net\/media\/clip\/thumbnail\/VHub2CWxLwiMvN4s1wwfQVR17UMvmGMSfqvvt0pW.jpg", "thumbnail_height": 3240, "thumbnail_width": 4320, "published_at": "2025-10-22T15:44:21+00:00", "is_pinned": false, "view_count": 617, "is_bookmarked": true }, { "id": 47, "type": 1, "title": "Title", "author": { "id": 4, "name": "Ton Khanh2", "avatar_url": null, "introduction": null, "avatar_mode": 1, "icon_id": "icon_2", "user_type": 2, "status": 1 }, "image_thumbnail": null, "thumbnail_height": null, "thumbnail_width": null, "published_at": "2025-10-06T03:11:28+00:00", "is_pinned": false, "view_count": 146, "is_bookmarked": false }, { "id": 144, "type": 1, "title": "Xin ch\u00e0o, t\u00f4i l\u00e0 Linh boy ph\u1ed1", "author": { "id": 3, "name": "bsv_doanhnguyen", "avatar_url": "https:\/\/d16ncvmf3upt5o.cloudfront.net\/media\/profile\/3\/jM0Vwosu1nQhyiQtulwS8986cxiVwK5s4sBMsVkO.jpg", "introduction": null, "avatar_mode": 2, "icon_id": null, "user_type": 1, "status": 1 }, "image_thumbnail": "https:\/\/d16ncvmf3upt5o.cloudfront.net\/media\/clip\/thumbnail\/ciqZSEPPT7rUHIqUny5GDyJBUGDJNiSzP7yWt6Qt.jpg", "thumbnail_height": 1120, "thumbnail_width": 928, "published_at": "2025-10-10T08:16:51+00:00", "is_pinned": false, "view_count": 234, "is_bookmarked": true }] }

function ClipItem({clip, onClick}) {
    
    return (
        <div key={clip.id}>
            <h2 onClick={() => onClick(clip)}>{clip.title}</h2>
            <img src={clip.image_thumbnail} alt={clip.title} width="300" />
            <p>Aguthor: {clip.author.name}</p>
            <p>Views: {clip.view_count}</p>
        </div>
    )
}

function ListClips() {

 const handleClickClip = (clip) => {
        alert(`Clicked clip: ${clip.title}`);
    }

    return (
        <div className="container">
            <h1>List of Clips</h1>
            {
                clips.items.map((clip) => (
                    <ClipItem key={clip.id} clip={clip} onClick={handleClickClip} />
                ))
            }
        </div>
    )
}

export default ListClips;