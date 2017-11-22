---
external help file: Get-CsHuntGroup.xml
applicable: Skype for Business Online
title: Get-CsHuntGroup
schema: 2.0.0
---

# Get-CsHuntGroup

## SYNOPSIS
The Get-CsHuntGroup cmdlet returns the identified call queues.

## SYNTAX

```
Get-CsHuntGroup [-BypassDualWrite <Object>] [-DomainController <Object>] [-Force] [-PrimaryUri <Object>]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsHuntGroup cmdlet lets you retrieve information about the call queues in your organization. Call queue output contains statistical data on the number of active calls that are in the queue.

If called without parameters, Get-CsHuntgroup returns a collection of all call queues configured to be used in your organization.

If you are a hybrid tenant, you may need to execute additional cmdlets on your on-premise deployments. The Get-CsHuntGroup will request further steps, if those steps are necessary for you.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsHuntGroup
```

This example gets all call queues in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsHuntGroup -PrimaryUri "sip:hg_a82e2406b9b5474a9878e9659f32dbc3@litwareinc.com"
```

This example gets the call queue with the primary uri "sip:hg_a82e2406b9b5474a9878e9659f32dbc3@litwareinc.com". If no call queue exists with the primary uri "sip:hg_a82e2406b9b5474a9878e9659f32dbc3@litwareinc.com", then this example generates an error.


## PARAMETERS

### -BypassDualWrite
PARAMVALUE: $true | $false

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
PARAMVALUE: Fqdn

```yaml
Type: Object
Parameter Sets: (All)
Aliases: DC
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimaryUri
The PrimaryUri parameter represents the SIP address for the call queue. It must start with "sip:".

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
PARAMVALUE: Guid

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Uri
Represents the SIP uri of a call queue.


## OUTPUTS

### Microsoft.Skype.Rgs.Configuration.Huntgroup


## NOTES


## RELATED LINKS
