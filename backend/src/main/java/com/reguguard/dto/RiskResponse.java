package com.reguguard.dto;

public class RiskResponse {
    public String riskLevel;
    public String reason;
    public RiskResponse(String level, String reason) { this.riskLevel = level; this.reason = reason; }
}
