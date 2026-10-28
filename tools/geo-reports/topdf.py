# Open a .docx in LibreOffice, refresh the table of contents, export PDF.
import subprocess, sys, time, os, uno, tempfile
from com.sun.star.beans import PropertyValue
def pv(n, v):
    p = PropertyValue(); p.Name = n; p.Value = v; return p
src, dst = os.path.abspath(sys.argv[1]), os.path.abspath(sys.argv[2])
prof = tempfile.mkdtemp(prefix='lo_')
proc = subprocess.Popen(['soffice', '-env:UserInstallation=file://' + prof, '--headless', '--invisible',
                         '--accept=socket,host=127.0.0.1,port=2002;urp;'], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
ctx = None
for _ in range(60):
    try:
        local = uno.getComponentContext()
        res = local.ServiceManager.createInstanceWithContext('com.sun.star.bridge.UnoUrlResolver', local)
        ctx = res.resolve('uno:socket,host=127.0.0.1,port=2002;urp;StarOffice.ComponentContext'); break
    except Exception:
        time.sleep(0.5)
desk = ctx.ServiceManager.createInstanceWithContext('com.sun.star.frame.Desktop', ctx)
doc = desk.loadComponentFromURL('file://' + src, '_blank', 0, (pv('Hidden', True),))
idx = doc.getDocumentIndexes()
for i in range(idx.getCount()):
    idx.getByIndex(i).update()
doc.refresh()
for i in range(idx.getCount()):
    idx.getByIndex(i).update()
doc.storeToURL('file://' + dst, (pv('FilterName', 'writer_pdf_Export'),))
doc.close(True)
try: desk.terminate()
except Exception: pass
proc.wait(timeout=30)
print('pdf', dst)
