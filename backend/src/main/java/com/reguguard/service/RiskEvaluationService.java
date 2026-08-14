package com.reguguard.service;

import com.reguguard.dto.RiskRequest;
import com.reguguard.dto.RiskResponse;
import org.springframework.stereotype.Service;

@Service
public class RiskEvaluationService {
    public RiskResponse evaluate(RiskRequest req) {
        // Mock rules engine: high if errorRate > 5% or volume spikes
        if (req.errorRate > 5.0) return new RiskResponse("High", "Error rate exceeds 5%.");
        if (req.transactionVolume > 1_000_000) return new RiskResponse("Medium", "High transaction volume.");
        return new RiskResponse("Low", "Within normal parameters.");
    }
}
