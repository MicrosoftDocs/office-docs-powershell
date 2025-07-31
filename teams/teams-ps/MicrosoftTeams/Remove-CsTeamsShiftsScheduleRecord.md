---
author: gucsun
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
manager: navinth
Module Name: MicrosoftTeams
ms.author: gucsun
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamsshiftsschedulerecord
schema: 2.0.0
title: Remove-CsTeamsShiftsScheduleRecord
---

# Remove-CsTeamsShiftsScheduleRecord

## SYNOPSIS

This cmdlet enqueues the clear schedule message.

## SYNTAX

### RemoveExpanded (Default)
```powershell
Remove-CsTeamsShiftsScheduleRecord [-ClearSchedulingGroup] -EntityType <String[]> -TeamId <String>
 [-DateRangeEndDate <DateTime>] [-DateRangeStartDate <DateTime>] [-DesignatedActorId <String>]
 [-TimeZone <String>] [-Break] [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>]
 [-PassThru] [-Proxy <Uri>] [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

### Remove
```powershell
Remove-CsTeamsShiftsScheduleRecord -Body <IClearScheduleRequest> [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-PassThru] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet sends a request of removing Shifts schedule with specified time range.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsShiftsScheduleRecord -TeamId "eddc3b94-21d5-4ef0-a76a-2e4d632e50be" -DateRangeStartDate "2021-09-30T00:00:00" -DateRangeEndDate "2021-10-01T00:00:00" -ClearSchedulingGroup:$false -EntityType "swapRequest", "openShiftRequest" -DesignatedActorId "683af6f2-4f72-4770-b8e1-4ec31836156ad"
```

Removes the Shifts schedule record of swapRequest and openShiftRequest scenarios in the team with ID `eddc3b94-21d5-4ef0-a76a-2e4d632e50be` from 09/30/2021 to 10/01/2021.

## PARAMETERS

### -Body
The request body.

```yaml
Type: IClearScheduleRequest
Parameter Sets: Remove
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Break
Wait for .NET debugger to attach.

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

### -ClearSchedulingGroup

> Applicable: Microsoft Teams

A value indicating whether to clear schedule group.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Required: True
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

### -DateRangeEndDate

> Applicable: Microsoft Teams

The end date of removing schedule record.

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

### -DateRangeStartDate

> Applicable: Microsoft Teams

The start date of removing schedule record.

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

### -DesignatedActorId

> Applicable: Microsoft Teams

The user ID of designated actor.

```yaml
Type: String
Parameter Sets: RemoveExpanded
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EntityType

> Applicable: Microsoft Teams

The entity types.

```yaml
Type: String[]
Parameter Sets: RemoveExpanded
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HttpPipelineAppend
SendAsync Pipeline Steps to be appended to the front of the pipeline

```yaml
Type: SendAsyncStep[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HttpPipelinePrepend
SendAsync Pipeline Steps to be prepended to the front of the pipeline

```yaml
Type: SendAsyncStep[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Used to return an object that represents the item being modified.

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

### -Proxy
The URI for the proxy server to use

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyCredential
Credentials for a proxy server to use for the remote call.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyUseDefaultCredentials
Use the default credentials for the proxy.

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

### -TeamId

> Applicable: Microsoft Teams

The Teams team ID where you want to remove schedule record.

```yaml
Type: String
Parameter Sets: RemoveExpanded
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeZone
The Timezone parameter ensures that the shifts are displayed in the correct time zone based on your team's location.

```yaml
Type: String
Parameter Sets: RemoveExpanded
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
The parameters of start time, end time and designated actor ID are optional only when removing the schedule record of a linked team.

## RELATED LINKS
