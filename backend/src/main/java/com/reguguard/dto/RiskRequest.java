package com.reguguard.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

public class RiskRequest {
    @NotNull
    @PositiveOrZero
    public Double transactionVolume;

    @NotNull
    @PositiveOrZero
    public Double errorRate;

    public RiskRequest() {}
}
