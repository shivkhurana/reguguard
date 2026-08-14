package com.reguguard.controller;

import com.reguguard.dto.RiskRequest;
import com.reguguard.dto.RiskResponse;
import com.reguguard.service.RiskEvaluationService;
import jakarta.validation.Valid;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/risk")
public class RiskController {
    private final RiskEvaluationService svc;
    public RiskController(RiskEvaluationService svc) { this.svc = svc; }

    @PostMapping("/evaluate")
    @PreAuthorize("hasRole('COMPLIANCE_OFFICER')")
    public RiskResponse evaluate(@Valid @RequestBody RiskRequest req) {
        return svc.evaluate(req);
    }
}
