async function visitPage(u, t) {
    return fetch('https://localhost:7157/visitor', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: u, destination: t })
    })
        .catch(err => {
            console.log(err);
        });
}

export function RoutingLink(tar) {
    const active = sessionStorage.getItem('user');
    if (tar == null) {
        visitPage(active, "empty");
    }
    else {
        visitPage(active, tar);
    }
}