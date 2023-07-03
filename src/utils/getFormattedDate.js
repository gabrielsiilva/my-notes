const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
}

export default function getFormattedDate () {
    const formattedDate = new Date().toLocaleDateString('en-us', options)
    const parts = formattedDate.split(' ');
    const rearrangedFormat = `${parts[0]} ${parts[2]} ${parts[1]}`;
    return rearrangedFormat;
}