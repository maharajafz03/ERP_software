section .data
    hello db 'Hello, World!', 0xA  ; String to print with newline

section .text
    global _start  ; Entry point for the program

_start:
    ; write system call
    mov rax, 1         ; syscall number for sys_write (1)
    mov rdi, 1         ; file descriptor 1 (stdout)
    mov rsi, hello     ; address of the string to print
    mov rdx, 14        ; length of the string
    syscall            ; invoke syscall

    ; exit system call
    mov rax, 60        ; syscall number for sys_exit (60)
    xor rdi, rdi       ; return code 0
    syscall            ; invoke syscall
