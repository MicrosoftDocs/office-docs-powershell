---
applicable: Microsoft Teams
author: aditdalvi
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: nakumar
Module Name: MicrosoftTeams
ms.author: aditd
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamscompliancerecordingpairedapplication
schema: 2.0.0
title: New-CsTeamsComplianceRecordingPairedApplication
---

# New-CsTeamsComplianceRecordingPairedApplication

## SYNOPSIS
Creates a new association between multiple application instances of policy-based recording applications to achieve application resiliency in automatic policy-based recording scenarios.
Automatic policy-based recording is only applicable to Microsoft Teams users.

## SYNTAX

```
New-CsTeamsComplianceRecordingPairedApplication -Id <String>
 [<CommonParameters>]
```

## DESCRIPTION
Policy-based recording applications are used in automatic policy-based recording scenarios.
When Microsoft Teams users participate in meetings or make or receive calls, the policy-based recording applications i.e. bots associated with the user's Teams recording policy are invited into the call or meeting to enforce compliance with the administrative set policy.

Instances of these applications are created using CsOnlineApplicationInstance cmdlets and are then associated with Teams recording policies.

In situations where application resiliency is a necessity, invites can be sent to separate paired applications for the same call or meeting.
If multiple such invites are accepted, then it means that multiple instances of this application are in the call or meeting and each of those instances can record independent of the others.

If all of the invites are rejected, the application invitation process is deemed a failure and the other flags for this application control what happens next.
Please refer to the documentation of the RequiredBeforeMeetingJoin and RequiredBeforeCallEstablishment parameters.

If at least one of the invites is accepted and the others are rejected, the application invitation process is still deemed a success.

If multiple invites are accepted and all of the instances leave or get dropped from the call or meeting, then the application is no longer in the call or meeting and the other flags for this application control what happens next.
Please refer to the documentation of the RequiredDuringMeeting and RequiredDuringCall parameters.

If multiple invites are accepted and at least one of the instances remains in the call or meeting, then the application is in the call or meeting.

Please work with your Microsoft certified policy-based recording application provider to obtain an instance of their recording application, to determine if application resiliency is needed for your workflows, and how best to achieve application resiliency.
Please also refer to the documentation of CsTeamsComplianceRecordingApplication cmdlets for further information.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsComplianceRecordingPairedApplication -Id '39dc3ede-c80e-4f19-9153-417a65a1f144'
```

The command shown in Example 1 creates an in-memory instance of an application instance of a policy-based recording application that can be associated with other such application instances to achieve application resiliency.

Note that this cmdlet is only used in conjunction with New-CsTeamsComplianceRecordingApplication and Set-CsTeamsComplianceRecordingApplication to create associations between multiple application instances of policy-based recording applications.
Please refer to the documentation of CsTeamsComplianceRecordingApplication cmdlets for examples and further information.

## PARAMETERS

### -Id
The ObjectId of the application instance of a policy-based recording application as exposed by the Get-CsOnlineApplicationInstance cmdlet.
For example, the Id of an application instance can be \"39dc3ede-c80e-4f19-9153-417a65a1f144\", which indicates that the application instance has ObjectId 39dc3ede-c80e-4f19-9153-417a65a1f144.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamscompliancerecordingpolicy)

[New-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamscompliancerecordingpolicy)

[Set-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamscompliancerecordingpolicy)

[Grant-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamscompliancerecordingpolicy)

[Remove-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamscompliancerecordingpolicy)

[Get-CsTeamsComplianceRecordingApplication](https://learn.microsoft.com/powershell/module/teams/get-csteamscompliancerecordingapplication)

[Set-CsTeamsComplianceRecordingApplication](https://learn.microsoft.com/powershell/module/teams/set-csteamscompliancerecordingapplication)

[New-CsTeamsComplianceRecordingApplication](https://learn.microsoft.com/powershell/module/teams/new-csteamscompliancerecordingapplication)

[Remove-CsTeamsComplianceRecordingApplication](https://learn.microsoft.com/powershell/module/teams/remove-csteamscompliancerecordingapplication)
