import tkinter as tk
from tkinter import messagebox

# ===========================
#  Palette "Dark Blue 3"
# ===========================
BG      = "#5a6b7c"   # sfondo finestra
PANEL   = "#445464"   # pannelli/listbox border
BTN_BG  = "#2b3a4a"   # bottoni
BTN_FG  = "#e5e7eb"   # testo bottoni
LBL_FG  = "#e5e7eb"   # testo label
ENTRY_BG= "#eef1f5"   # input
LIST_BG = "#ffffff"   # listbox
BORDER  = "#223142"

lista_pezzi = []   # lista di liste (come nel tuo codice)

def aggiungi_pezzi(lunghezza_str, quantita_str, listbox_barre, e_lung, e_qta):
    if not lunghezza_str or not quantita_str:
        messagebox.showwarning("Attenzione", "Inserisci dei valori")
        return
    try:
        lung = float(lunghezza_str)
        qta  = int(float(quantita_str))
        if lung <= 0 or qta <= 0:
            raise ValueError
    except ValueError:
        messagebox.showerror("Errore", "Inserisci numeri validi (lunghezza > 0, quantità intera > 0)")
        return

    pezzi = [lung for _ in range(qta)]
    lista_pezzi.insert(0, pezzi)

    listbox_barre.delete(0, tk.END)
    for sottolista in lista_pezzi:
        listbox_barre.insert(tk.END, " ".join(str(x) for x in sottolista))

    e_lung.delete(0, tk.END)
    e_qta.delete(0, tk.END)

def calcola_barre(listbox_risultati, label_msg, lunghezza_barra=6000.0):
    # flatten
    lista_singola = []
    for sub in lista_pezzi:
        lista_singola.extend(sub)

    if not lista_singola:
        messagebox.showinfo("Info", "Non ci sono pezzi da calcolare.")
        return

    barre = []
    lista_singola = list(lista_singola)
    cont = 0

    while len(lista_singola) > 0:
        lista_new = []
        # massimi finché entrano
        while lista_singola:
            massimo = max(lista_singola)
            if sum(lista_new) + massimo <= lunghezza_barra:
                lista_singola.remove(massimo)
                lista_new.append(massimo)
            else:
                break
        # riempi coi minimi
        while lista_singola:
            minimo = min(lista_singola)
            if sum(lista_new) + minimo <= lunghezza_barra:
                lista_singola.remove(minimo)
                lista_new.append(minimo)
            else:
                break
        barre.insert(cont, lista_new)
        cont += 1

    listbox_risultati.delete(0, tk.END)
    for b in barre:
        listbox_risultati.insert(tk.END, " ".join(str(x) for x in b))

    msg = f"Servono: {len(barre)} barre da {int(lunghezza_barra)}" if len(barre) > 1 \
          else f"Serve: {len(barre)} barra da {int(lunghezza_barra)}"
    label_msg.config(text=msg)

def main():
    root = tk.Tk()
    root.title("CALCOLO BARRE")
    root.geometry("760x520")
    root.minsize(640, 440)
    root.configure(bg=BG)

    # ===========================
    #  Titoli sopra le listbox
    # ===========================
    top = tk.Frame(root, bg=BG)
    top.pack(fill="x", padx=10, pady=(10, 4))

    lbl_left  = tk.Label(top, text="LISTA PEZZI:", bg=BG, fg=LBL_FG)
    lbl_right = tk.Label(top, text="LISTA SCATOLATI:", bg=BG, fg=LBL_FG)

    lbl_left.pack(side="left")
    lbl_right.pack(side="right")

    # ===========================
    #  Listbox affiancate
    # ===========================
    lists = tk.Frame(root, bg=BG)
    lists.pack(fill="both", expand=True, padx=10)

    # contenitore sinistro
    left_wrap = tk.Frame(lists, bg=PANEL, bd=2, relief="sunken", highlightthickness=1, highlightbackground=BORDER)
    left_wrap.pack(side="left", fill="both", expand=True, padx=(0, 8), pady=4)

    lb_left = tk.Listbox(left_wrap, bg=LIST_BG, fg="#000", relief="flat")
    sb_left_y = tk.Scrollbar(left_wrap, orient="vertical", command=lb_left.yview)
    sb_left_x = tk.Scrollbar(left_wrap, orient="horizontal", command=lb_left.xview)
    lb_left.configure(yscrollcommand=sb_left_y.set, xscrollcommand=sb_left_x.set)

    lb_left.grid(row=0, column=0, sticky="nsew")
    sb_left_y.grid(row=0, column=1, sticky="ns")
    sb_left_x.grid(row=1, column=0, sticky="ew")
    left_wrap.grid_rowconfigure(0, weight=1)
    left_wrap.grid_columnconfigure(0, weight=1)

    # contenitore destro
    right_wrap = tk.Frame(lists, bg=PANEL, bd=2, relief="sunken", highlightthickness=1, highlightbackground=BORDER)
    right_wrap.pack(side="left", fill="both", expand=True, padx=(8, 0), pady=4)

    lb_right = tk.Listbox(right_wrap, bg=LIST_BG, fg="#000", relief="flat")
    sb_right_y = tk.Scrollbar(right_wrap, orient="vertical", command=lb_right.yview)
    sb_right_x = tk.Scrollbar(right_wrap, orient="horizontal", command=lb_right.xview)
    lb_right.configure(yscrollcommand=sb_right_y.set, xscrollcommand=sb_right_x.set)

    lb_right.grid(row=0, column=0, sticky="nsew")
    sb_right_y.grid(row=0, column=1, sticky="ns")
    sb_right_x.grid(row=1, column=0, sticky="ew")
    right_wrap.grid_rowconfigure(0, weight=1)
    right_wrap.grid_columnconfigure(0, weight=1)

    # ===========================
    #  Riga input (Lunghezza / Quantità)
    # ===========================
    inputs = tk.Frame(root, bg=BG)
    inputs.pack(fill="x", padx=10, pady=(6, 0))

    tk.Label(inputs, text="Lunghezza:", bg=BG, fg=LBL_FG).pack(side="left")
    e_lung = tk.Entry(inputs, width=10, bg=ENTRY_BG)
    e_lung.pack(side="left", padx=(6, 24))

    tk.Label(inputs, text="Quantità:", bg=BG, fg=LBL_FG).pack(side="left")
    e_qta = tk.Entry(inputs, width=10, bg=ENTRY_BG)
    e_qta.pack(side="left", padx=(6, 0))

    # ===========================
    #  Colonna pulsanti + messaggio accanto a "Calcola"
    # ===========================
    bottom = tk.Frame(root, bg=BG)
    bottom.pack(fill="x", padx=10, pady=(6, 10))

    # colonna sinistra bottoni
    btn_col = tk.Frame(bottom, bg=BG)
    btn_col.pack(side="left")

    def style_button(b):
        b.configure(bg=BTN_BG, fg=BTN_FG, activebackground=BTN_BG, activeforeground=BTN_FG, bd=1, relief="raised", width=10)
        return b

    btn_aggiungi = style_button(tk.Button(btn_col, text="Aggiungi",
                         command=lambda: aggiungi_pezzi(e_lung.get(), e_qta.get(), lb_left, e_lung, e_qta)))
    btn_aggiungi.pack(anchor="w", pady=(0, 6))

    # riga: [Calcola]  "Servono: X barre…"
    calc_row = tk.Frame(btn_col, bg=BG)
    calc_row.pack(anchor="w", pady=(0, 6), fill="x")

    lbl_result = tk.Label(calc_row, text="", bg=BG, fg=LBL_FG)

    btn_calcola = style_button(tk.Button(calc_row, text="Calcola",
                         command=lambda: calcola_barre(lb_right, lbl_result, lunghezza_barra=6000.0)))
    btn_calcola.pack(side="left")
    lbl_result.pack(side="left", padx=12)

    btn_esci = style_button(tk.Button(btn_col, text="Esci", command=lambda: on_close()))
    btn_esci.pack(anchor="w")

    def on_close():
        if messagebox.askyesno("Conferma", "Vuoi uscire?"):
            root.destroy()

    root.protocol("WM_DELETE_WINDOW", on_close)
    root.mainloop()

if __name__ == "__main__":
    main()
