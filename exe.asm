section .data
    message db "Hello, World!", 0xA   ; Define string with newline
    len equ $ - message               ; Calculate string length

section .text
    global _start

_start:
    ; Write syscall: sys_write (syscall number 1)
    mov eax, 4      ; syscall number for sys_write
    mov ebx, 1      ; file descriptor 1 = stdout
    mov ecx, message ; pointer to string
    mov edx, len    ; length of string
    int 0x80        ; call kernel

    ; Exit syscall: sys_exit (syscall number 60)
    mov eax, 1      ; syscall number for sys_exit
    xor ebx, ebx    ; exit code 0
    int 0x80        ; call kernel
