const args = ['run build']
{ stdio: 'inherit', cwd: 'client', shell: true }
require('child_process').spawn('npm', args, opts)
