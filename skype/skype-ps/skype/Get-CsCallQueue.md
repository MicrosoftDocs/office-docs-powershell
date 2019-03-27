---
external help file: Get-CsCallQueue.xml
applicable: Skype for Business Online
title: Get-CsCallQueue
schema: 2.0.0
---

# Get-CsCallQueue

## SYNOPSIS
The Get-CsCallQueue cmdlet returns the identified Call Queues.

## SYNTAX

```
Get-CsCallQueue [-BypassDualWrite <Object>] [-DomainController <Object>] [-Force] [-Identity <Object>]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsCallQueue cmdlet lets you retrieve information about the Call Queues in your organization. Call Queue output contains statistical data on the number of active calls that are in the queue.

If called without parameters, Get-CsCallQueue returns a collection of all Call Queues configured to be used in your organization.

The Get-CsCallQueue cmdlet may suggest additional steps required to complete the Call Queue setup.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsCallQueue
```

This example gets all Call Queues in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsCallQueue -Identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01
```

This example gets the Call Queue with the identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01. If no Call Queue exists with the identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01, then this example generates an error.


## PARAMETERS

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

### -Identity
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Identity
Represents the unique identifier of a Call Queue.


## OUTPUTS

### Microsoft.Rtc.Management.Hosted.CallQueue.Models.CallQueue

## NOTES


## RELATED LINKS
