import tkinter as tk
from tkinter import ttk, messagebox

# ===========================
#  Algoritmo e stato dati
# ===========================
lista_pezzi = []   # lista di liste, es: [[3500,3500],[1700,1700,1700,1700]]

def aggiungi_pezzi(lunghezza_str, quantita_str, listbox_barre, entry_lung, entry_qta):
    if not lunghezza_str or not quantita_str:
        messagebox.showwarning("Attenzione", "Inserisci dei valori")
        return
    try:
        lung = float(lunghezza_str)
        qta = int(float(quantita_str))
        if lung <= 0 or qta <= 0:
            raise ValueError
    except ValueError:
        messagebox.showerror("Errore", "Inserisci numeri validi (lunghezza > 0, quantità intera > 0)")
        return

    pezzi = [lung for _ in range(qta)]
    lista_pezzi.insert(0, pezzi)

    # aggiorna UI
    listbox_barre.delete(0, tk.END)
    for sottolista in lista_pezzi:
        listbox_barre.insert(tk.END, str(sottolista))

    # pulisci input
    entry_lung.delete(0, tk.END)
    entry_qta.delete(0, tk.END)

def calcola_barre(listbox_risultati, label_msg, lunghezza_barra=6000.0):
    # flattens
    lista_singola = []
    for sub in lista_pezzi:
        lista_singola.extend(sub)

    if not lista_singola:
        messagebox.showinfo("Info", "Non ci sono pezzi da calcolare.")
        return

    barre = []
    lista_singola = list(lista_singola)  # copia
    cont = 0

    while len(lista_singola) > 0:
        lista_new = []

        # prendi ripetutamente il massimo finché entra
        while lista_singola:
            massimo = max(lista_singola)
            if sum(lista_new) + massimo <= lunghezza_barra:
                lista_singola.remove(massimo)
                lista_new.append(massimo)
            else:
                break

        # poi prova a riempire con i minimi
        while lista_singola:
            minimo = min(lista_singola)
            if sum(lista_new) + minimo <= lunghezza_barra:
                lista_singola.remove(minimo)
                lista_new.append(minimo)
            else:
                break

        barre.insert(cont, lista_new)
        cont += 1

    # Aggiorna UI
    listbox_risultati.delete(0, tk.END)
    for b in barre:
        listbox_risultati.insert(tk.END, str(b))

    if len(barre) > 1:
        messaggio = f"Servono: {len(barre)} barre da {int(lunghezza_barra)}"
    else:
        messaggio = f"Serve: {len(barre)} barra da {int(lunghezza_barra)}"

    label_msg.config(text=messaggio)

# ===========================
#  UI (Tkinter)
# ===========================
def main():
    root = tk.Tk()
    root.title("CALCOLO BARRE")
    root.geometry("640x480")
    root.minsize(520, 380)

    # Tema semplice scuro (facoltativo, molto leggero)
    bg = "#0b1220"      # simile "Dark Blue 3"
    fg = "#e5e7eb"
    root.configure(bg=bg)

    # Contenitore principale
    frame = ttk.Frame(root, padding=12)
    frame.grid(row=0, column=0, sticky="nsew")

    # Resizing
    root.grid_rowconfigure(0, weight=1)
    root.grid_columnconfigure(0, weight=1)
    for i in range(6):
        frame.grid_rowconfigure(i, weight=0)
    frame.grid_rowconfigure(2, weight=1)  # riga listbox si espande
    frame.grid_columnconfigure(0, weight=1)
    frame.grid_columnconfigure(1, weight=1)

    # Stili ttk
    style = ttk.Style()
    try:
        style.theme_use("clam")
    except:
        pass
    style.configure("TLabel", background=bg, foreground=fg)
    style.configure("TButton", padding=6)
    style.configure("TEntry")

    # Riga titoli
    lbl1 = ttk.Label(frame, text="LISTA PEZZI:", anchor="w")
    lbl2 = ttk.Label(frame, text="LISTA SCATOLATI:", anchor="e")
    lbl1.grid(row=0, column=0, sticky="w", padx=(0, 8), pady=(0, 6))
    lbl2.grid(row=0, column=1, sticky="e", padx=(8, 0), pady=(0, 6))

    # Listbox + scrollbar (sinistra)
    lb_frame_left = ttk.Frame(frame)
    lb_frame_left.grid(row=1, column=0, rowspan=2, sticky="nsew", padx=(0, 8))
    frame.grid_rowconfigure(1, weight=1)  # per espandere
    lb_left = tk.Listbox(lb_frame_left, height=8, exportselection=False)
    sb_left_y = ttk.Scrollbar(lb_frame_left, orient="vertical", command=lb_left.yview)
    sb_left_x = ttk.Scrollbar(lb_frame_left, orient="horizontal", command=lb_left.xview)
    lb_left.configure(yscrollcommand=sb_left_y.set, xscrollcommand=sb_left_x.set)
    lb_left.grid(row=0, column=0, sticky="nsew")
    sb_left_y.grid(row=0, column=1, sticky="ns")
    sb_left_x.grid(row=1, column=0, sticky="ew")
    lb_frame_left.grid_rowconfigure(0, weight=1)
    lb_frame_left.grid_columnconfigure(0, weight=1)

    # Listbox + scrollbar (destra)
    lb_frame_right = ttk.Frame(frame)
    lb_frame_right.grid(row=1, column=1, rowspan=2, sticky="nsew", padx=(8, 0))
    lb_right = tk.Listbox(lb_frame_right, height=8, exportselection=False)
    sb_right_y = ttk.Scrollbar(lb_frame_right, orient="vertical", command=lb_right.yview)
    sb_right_x = ttk.Scrollbar(lb_frame_right, orient="horizontal", command=lb_right.xview)
    lb_right.configure(yscrollcommand=sb_right_y.set, xscrollcommand=sb_right_x.set)
    lb_right.grid(row=0, column=0, sticky="nsew")
    sb_right_y.grid(row=0, column=1, sticky="ns")
    sb_right_x.grid(row=1, column=0, sticky="ew")
    lb_frame_right.grid_rowconfigure(0, weight=1)
    lb_frame_right.grid_columnconfigure(0, weight=1)

    # Riga input
    input_frame = ttk.Frame(frame)
    input_frame.grid(row=3, column=0, columnspan=2, sticky="ew", pady=(8, 0))
    input_frame.grid_columnconfigure(1, weight=1)
    input_frame.grid_columnconfigure(3, weight=1)

    ttk.Label(input_frame, text="Lunghezza:").grid(row=0, column=0, sticky="w")
    e_lung = ttk.Entry(input_frame, width=12)
    e_lung.grid(row=0, column=1, sticky="w", padx=(6, 16))

    ttk.Label(input_frame, text="Quantità:").grid(row=0, column=2, sticky="w")
    e_qta = ttk.Entry(input_frame, width=12)
    e_qta.grid(row=0, column=3, sticky="w", padx=(6, 0))

    # Pulsante Aggiungi
    btn_aggiungi = ttk.Button(frame, text="Aggiungi",
                              command=lambda: aggiungi_pezzi(
                                  e_lung.get(), e_qta.get(), lb_left, e_lung, e_qta))
    btn_aggiungi.grid(row=4, column=0, sticky="w", pady=(10, 0))

    # Pulsante Calcola + label risultato
    result_frame = ttk.Frame(frame)
    result_frame.grid(row=4, column=1, sticky="e", pady=(10, 0))
    lbl_result = ttk.Label(result_frame, text="", anchor="e")
    btn_calcola = ttk.Button(result_frame, text="Calcola",
                             command=lambda: calcola_barre(lb_right, lbl_result, lunghezza_barra=6000.0))
    btn_calcola.grid(row=0, column=0, sticky="e", padx=(0, 12))
    lbl_result.grid(row=0, column=1, sticky="e")

    # Pulsante Esci
    def on_close():
        if messagebox.askyesno("Conferma", "Vuoi uscire?"):
            root.destroy()

    btn_esci = ttk.Button(frame, text="Esci", command=on_close)
    btn_esci.grid(row=5, column=0, sticky="w", pady=(16, 0))

    root.protocol("WM_DELETE_WINDOW", on_close)
    root.mainloop()

if __name__ == "__main__":
    main()
