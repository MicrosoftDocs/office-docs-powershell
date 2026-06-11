---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallparkpolicy
schema: 2.0.0
title: Set-CsTeamsCallParkPolicy
---

# Set-CsTeamsCallParkPolicy

## SYNOPSIS
The Set-CsTeamsCallParkPolicy cmdlet lets you update a policy that has already been created for your organization.

## SYNTAX

```powershell
Set-CsTeamsCallParkPolicy [-AllowCallPark <Boolean>] [-Description <String>] [[-Identity] <String>]
 [-ParkTimeoutSeconds <Int64>] [-PickupRangeEnd <Int64>] [-PickupRangeStart <Int64>]
 [-MsftInternalProcessingMode <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Identity (Default)
```powershell
Set-CsTeamsCallParkPolicy [-Tenant <System.Guid>] [-AllowCallPark <Boolean>] [-PickupRangeStart <Integer>] [-PickupRangeEnd <Integer>] [-ParkTimeoutSeconds <Integer>] [[-Identity] <XdsIdentity>]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```powershell
Set-CsTeamsCallParkPolicy [-Tenant <System.Guid>] [-AllowCallPark <Boolean>] [-Instance <PSObject>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The TeamsCallParkPolicy controls whether or not users are able to leverage the call park feature in
Microsoft Teams. Call park allows enterprise voice customers to place a call on hold and then
perform a number of actions on that call: transfer to another department, retrieve via the same
phone, or retrieve via a different phone.

NOTE: The call park feature is currently available in desktop, mobile, and web clients. Supported with TeamsOnly mode.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsCallParkPolicy -Identity SalesPolicy -AllowCallPark $true
```

Update the existing policy "SalesPolicy" to enable the call park feature.

### Example 2
```powershell
PS C:\> Set-CsTeamsCallParkPolicy -Identity "SalesPolicy" -PickupRangeStart 500 -PickupRangeEnd 1500
```

Update the existing policy "SalesPolicy" to generate pickup numbers starting from 500 and up until 1500.

### Example 3
```powershell
PS C:\> New-CsTeamsCallParkPolicy -Identity "SalesPolicy" -ParkTimeoutSeconds 600
```

Update the existing policy "SalesPolicy" to ring back the parker after 600 seconds if the parked call is unanswered

## PARAMETERS

### -AllowCallPark
If set to true, customers will be able to leverage the call park feature to place calls on hold and then decide how the call should be handled - transferred to another department, retrieved using the same phone, or retrieved using a different phone.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Description of the policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppress all non-fatal errors

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The unique identifier of the policy being updated.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
This parameter is used when piping a specific policy retrieved from Get-CsTeamsCallParkPolicy that you then want to update.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -MsftInternalProcessingMode
For Internal use only.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ParkTimeoutSeconds
Specify the number of seconds to wait before ringing the parker when the parked call hasn't been picked up. Value can be from 120 to 1800 (seconds).

```yaml
Type: Integer
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: 300
Accept pipeline input: False
Accept wildcard characters: False
```

### -PickupRangeEnd
Specify the maximum value that a rendered pickup code can take. Value can be from 10 to 9999.

Note: PickupRangeStart must be smaller than PickupRangeEnd.

```yaml
Type: Integer
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: 99
Accept pipeline input: False
Accept wildcard characters: False
```

### -PickupRangeStart
Specify the minimum value that a rendered pickup code can take. Value can be from 10 to 9999.

Note: PickupRangeStart must be smaller than PickupRangeEnd.

```yaml
Type: Integer
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: 10
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Internal Microsoft use only.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
