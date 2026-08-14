package com.reguguard.controller;

import com.reguguard.security.JwtUtil;
import jakarta.validation.Valid;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth")
@Validated
public class AuthController {
    private final AuthenticationManager authManager;
    private final JwtUtil jwtUtil;

    public AuthController(AuthenticationManager authManager, JwtUtil jwtUtil) { this.authManager = authManager; this.jwtUtil = jwtUtil; }

    record LoginRequest(String username, String password) {}
    record LoginResponse(String token, List<String> roles) {}

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest req) {
        Authentication auth = authManager.authenticate(new UsernamePasswordAuthenticationToken(req.username(), req.password()));
        var roles = auth.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList());
        String token = jwtUtil.generateToken(auth.getName(), roles);

        // set HttpOnly cookie as an option (demo):
        ResponseCookie cookie = ResponseCookie.from("RG-TOKEN", token)
                .httpOnly(true)
                .path("/")
                .maxAge(3600)
                .secure(false)
                .sameSite("Lax")
                .build();

        return ResponseEntity.ok().header("Set-Cookie", cookie.toString()).body(new LoginResponse(token, roles));
    }
}
