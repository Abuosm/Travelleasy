export const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("ticketDB", 1);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore("tickets", { keyPath: "id" });
    };

    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
};

export const saveTicket = async (ticket) => {
  const db = await openDB();
  const tx = db.transaction("tickets", "readwrite");
  tx.objectStore("tickets").put(ticket);
  return tx.complete;
};

export const getTicket = async (id) => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("tickets", "readonly");
    const store = tx.objectStore("tickets");
    const request = store.get(id);
    
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};
