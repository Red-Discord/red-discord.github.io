function copyIP() {
    const ip = "mac.axenthost.me";
    navigator.clipboard.writeText(ip).then(() => {
        
        const btn = document.getElementById('copyBtn');
        const icon = document.getElementById('icon');
        const text = document.getElementById('text');
        
        icon.classList.remove('fa-copy');
        icon.classList.add('fa-check');
        text.textContent = '¡Copiado!';
        
        btn.classList.add('!bg-emerald-400', '!text-white');
        
        setTimeout(() => {
            icon.classList.remove('fa-check');
            icon.classList.add('fa-copy');
            text.textContent = 'mac.axenthost.me';
            btn.classList.remove('!bg-emerald-400', '!text-white');
        }, 2000);
    });
}
