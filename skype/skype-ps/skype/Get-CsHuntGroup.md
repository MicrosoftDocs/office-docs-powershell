---
external help file: 
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

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsHuntGroup
```

This example gets all call queues in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsHuntGroup -PrimaryUri "sip:helpdesk@litwareinc.com"
```

This example gets all call queues for helpdesk@litwareinc.com.


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
The PrimaryUri parameter represents the SIP address for the call queue.

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
{{Fill AsJob Description}}

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
