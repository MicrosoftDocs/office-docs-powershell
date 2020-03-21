---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/new-csteamscompliancerecordingpairedapplication
applicable: Skype for Business Online
title: New-CsTeamsComplianceRecordingPairedApplication
schema: 2.0.0
manager: nakumar
author: aditdalvi
ms.author: aditd
ms.reviewer:
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
When Microsoft Teams users participate in meetings or make or receive calls, the policy-based recording applications i.e. bots associated with the user's Teams compliance recording policy are invited into the call or meeting to record audio, video and video-based screen sharing activity.

Instances of these applications are created using CsOnlineApplicationInstance cmdlets and are then associated with Teams compliance recording policies.

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

This cmdlet is only used in conjunction with New-CsTeamsComplianceRecordingApplication and Set-CsTeamsComplianceRecordingApplication to create associations between multiple application instances of policy-based recording applications.
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

## RELATED LINKS

[Get-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/powershell/module/skype/get-csteamscompliancerecordingpolicy?view=skype-ps)

[New-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/powershell/module/skype/new-csteamscompliancerecordingpolicy?view=skype-ps)

[Set-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/powershell/module/skype/set-csteamscompliancerecordingpolicy?view=skype-ps)

[Grant-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/powershell/module/skype/grant-csteamscompliancerecordingpolicy?view=skype-ps)

[Remove-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/powershell/module/skype/remove-csteamscompliancerecordingpolicy?view=skype-ps)

[Get-CsTeamsComplianceRecordingApplication](https://docs.microsoft.com/powershell/module/skype/get-csteamscompliancerecordingapplication?view=skype-ps)

[Set-CsTeamsComplianceRecordingApplication](https://docs.microsoft.com/powershell/module/skype/set-csteamscompliancerecordingapplication?view=skype-ps)

[New-CsTeamsComplianceRecordingApplication](https://docs.microsoft.com/powershell/module/skype/new-csteamscompliancerecordingapplication?view=skype-ps)

[Remove-CsTeamsComplianceRecordingApplication](https://docs.microsoft.com/powershell/module/skype/remove-csteamscompliancerecordingapplication?view=skype-ps)
