## Project P3: Public pages

### Instructions
We'd like to assess your ability to use modern frontend frameworks to build a super simple web app (with only one page).
As an example, we'd like you to use Next.js to build a simple page that displays the information about a source.

#### Why Next.js?
Next.js is able to implement incremental static generation (ISG). This means that the page is built once and then cached. This is useful for pages that are not updated frequently and can be served from a cache without querying the database all the time, perfect for public facing pages.

#### Here's the "fake" data that we want you to use:

```javascript
const source = {
  objectID: 'ZTF21aaqjyho',
    id: 'ZTF21aaqjyho',
    ra: 0.0,
    dec: 0.0,
    redshift: 0.0,
    summary: 'This is a fake source, bla bla bla',
    cutouts: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fweb.ipac.caltech.edu%2Fstaff%2Ffmasci%2Fztf%2Fmasci_pasadena_05.04.18.pdf&psig=AOvVaw3gqvPQ6B8KclpZOIQHVOw-&ust=1702258106371000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiit-Dbg4MDFQAAAAAdAAAAABAI',
    // feel free to use any image if you can't access the link above, it's just a placeholder image
};
```

####
Ideally, to test the incremental static generation (ISG) feature, we'd like you to come up with one additional field to this fake data that would change at every rendering (so we can verify that your page does render). That can be as simply as a random number or counter.

####
We'd like the full data of a source to be downloadable as a JSON file. For that, make sure to add a **Download** button that triggers the download of a JSON file with the full data of the source.
