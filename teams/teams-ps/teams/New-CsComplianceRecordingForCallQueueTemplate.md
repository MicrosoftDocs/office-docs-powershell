---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/New-CsComplianceRecordingForCallQueueTemplate
applicable: Microsoft Teams
title: New-CsComplianceRecordingForCallQueueTemplate
schema: 2.0.0
manager: 
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# New-CsComplianceRecordingForCallQueueTemplate

## SYNTAX

```powershell
New-CsComplianceRecordingForCallQueueTemplate -Name <String> -Description <String> -BotId <String> [-RequiredDuringCall <Boolean>] [-RequiredBeforeCall <Boolean>] [-CurrentInvitationCount <Int32>] [-PairedApplication <String>] [<CommonParameters>]
```

## DESCRIPTION
Use the New-CsComplianceRecordingForCallQueueTemplate cmdlet to create a Compliance Recording for Call Queues template.

> [!CAUTION]
> This cmdlet will only work for customers that are participating in the Voice Applications private preview for this feature. General Availability for this functionality has not been determined at this time.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-CsComplianceRecordingForCallQueueTemplate -Name "Customer Service" -Description "Required before/during call" -BotId 14732826-8206-42e3-b51e-6693e2abb698 -RequiredDuringCall $true -RequiredBeforeCall $true
```

This example creates a new Compliance Recording for Call Queue template.

## PARAMETERS

### -Name
The name of the compliance recording for call queue template.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
A description for the compliance recording for call queues template.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BotId
The Application Instand Id of the compliance recording bot to invite.

For more information, see: [Create and manage your compliance recording policy](./microsoftteams/teams-recording-compliance#create-and-manage-your-compliance-recording-policy.md)

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequiredDuringCall
Indicates if the compliance recording for call queues bot must remain part of the call.
*Strict recording* - if the bot leaves the call, the call will end.

```yaml
Type: System.Booleen
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequiredBeforeCall
Indicates if the compliance recording for call queues bot must be able to join the call.
*Strict recording* - if the bot can't join the call, the call will end.

```yaml
Type: System.Booleen
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConcurrentInvitationCount
The number of concurrent invitations to send to the compliance recording for call queue bot.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: 1
Accept pipeline input: False
Accept wildcard characters: False
```

### -PairedApplication
The PairedApplication parameter specifies the paired application for the call queue.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.OAA.Models.AutoAttendant

## NOTES

## RELATED LINKS

[Get-CsComplianceRecordingForCallQueueTemplate](./Get-CsComplianceRecordingForCallQueueTemplate.md)

[Set-CsComplianceRecordingForCallQueueTemplate](./Set-CsComplianceRecordingForCallQueueTemplate.md)

[Remove-CsComplianceRecordingForCallQueueTemplate](./Remove-CsComplianceRecordingForCallQueueTemplate.md)

[Get-CsCallQueue](./Get-CsCallQueue.md)

[New-CsCallQueue](./New-CsCallQueue.md)

[Set-CsCallQueue](./Set-CsCallQueue.md)

[Remove-CsCallQueue](./Remove-CsCallQueue.md)



