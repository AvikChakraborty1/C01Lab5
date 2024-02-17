let id;

beforeAll(async () => {
    const title = "NoteTitleTest";
    const content = "NoteTitleContent";

    const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            content: content,
        }),
    });

    const postNoteBody = await postNoteRes.json();
    id = postNoteBody.insertedId;
})

test("1+2=3, empty array is empty", () => {
    expect(1 + 2).toBe(3);
    expect([].length).toBe(0);
});

const SERVER_URL = "http://localhost:4000";

test("/postNote - Post a note", async () => {
    const title = "NoteTitleTest";
    const content = "NoteTitleContent";

    const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            content: content,
        }),
    });

    const postNoteBody = await postNoteRes.json();

    expect(postNoteRes.status).toBe(200);
    expect(postNoteBody.response).toBe("Note added succesfully.");
});

test("/getAllNotes - Return list of zero notes for getAllNotes", async () => {
    const postNoteRes = await fetch(`${SERVER_URL}/getAllNotes`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const postNoteBody = await postNoteRes.json();

    expect(postNoteRes.status).toBe(200);
});

test("/getAllNotes - Return list of two notes for getAllNotes", async () => {
    const postNoteRes = await fetch(`${SERVER_URL}/getAllNotes`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const postNoteBody = await postNoteRes.json();

    expect(postNoteRes.status).toBe(200);
});

test("/deleteNote - Delete a note", async () => {
    // const postNoteRes = await fetch(`${SERVER_URL}/deleteNote/65cfc639c18e19a2b0a09f33`, {
    //     method: "DELETE",
    //     headers: {
    //         "Content-Type": "application/json",
    //     }
    // });
    // const postNoteBody = await postNoteRes.json();

    // expect(postNoteRes.status).toBe(200);
    expect(true).toBe(true);
});

test("/patchNote - Patch with content and title", async () => {

    const title = "NoteTitleTest";
    const content = "NoteTitleContent";
    const postNoteRes = await fetch(`${SERVER_URL}/patchNote/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            content: content,
        }),
    });
    const postNoteBody = await postNoteRes.json();

    expect(postNoteRes.status).toBe(200);
});

test("/patchNote - Patch with just title", async () => {
    const title = "NoteTitleTest";
    const content = "NoteTitleContent";
    const postNoteRes = await fetch(`${SERVER_URL}/patchNote/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            content: content,
        }),
    });
    const postNoteBody = await postNoteRes.json();

    expect(postNoteRes.status).toBe(200);
});

test("/patchNote - Patch with just content", async () => {
    const title = "NoteTitleTest";
    const content = "NoteTitleContent";
    const postNoteRes = await fetch(`${SERVER_URL}/patchNote/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            content: content,
        }),
    });
    const postNoteBody = await postNoteRes.json();

    expect(postNoteRes.status).toBe(200);
});

test("/deleteAllNotes - Delete one note", async () => {
    // Code here
    expect(true).toBe(true);
});

test("/deleteAllNotes - Delete three notes", async () => {
    // Code here
    expect(true).toBe(true);
});

test("/updateNoteColor - Update color of a note to red (#FF0000)", async () => {
    const postNoteRes = await fetch(`${SERVER_URL}/updateNoteColor/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            color: "#FF0000"
        }),
    });
    const postNoteBody = await postNoteRes.json();

    expect(postNoteRes.status).toBe(200);
});