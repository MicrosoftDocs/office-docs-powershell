---
applicable: Microsoft Teams
author: aditdalvi
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: nakumar
Module Name: MicrosoftTeams
ms.author: aditd
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamscompliancerecordingapplication
schema: 2.0.0
title: New-CsTeamsComplianceRecordingApplication
---

# New-CsTeamsComplianceRecordingApplication

## SYNOPSIS
Creates a new association between an application instance of a policy-based recording application and a Teams recording policy for administering automatic policy-based recording in your tenant.
Automatic policy-based recording is only applicable to Microsoft Teams users.

## SYNTAX

### Identity (Default)
```
New-CsTeamsComplianceRecordingApplication [-Tenant <System.Guid>] [-Identity <XdsIdentity>]
 [-RequiredBeforeMeetingJoin <Boolean>] [-RequiredDuringMeeting <Boolean>]
 [-RequiredBeforeCallEstablishment <Boolean>] [-RequiredDuringCall <Boolean>]
 [-ConcurrentInvitationCount <UInt32>] [-ComplianceRecordingPairedApplications <ComplianceRecordingPairedApplication[]>]
 [-Priority <Int32>] [-InMemory] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsTeamsComplianceRecordingApplication [-Tenant <System.Guid>] -Parent <String> -Id <String>
 [-RequiredBeforeMeetingJoin <Boolean>] [-RequiredDuringMeeting <Boolean>]
 [-RequiredBeforeCallEstablishment <Boolean>] [-RequiredDuringCall <Boolean>]
 [-ConcurrentInvitationCount <UInt32>] [-ComplianceRecordingPairedApplications <ComplianceRecordingPairedApplication[]>]
 [-Priority <Int32>] [-InMemory] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Policy-based recording applications are used in automatic policy-based recording scenarios.
When Microsoft Teams users participate in meetings or make or receive calls, the policy-based recording applications i.e. bots associated with the user's Teams recording policy are invited into the call or meeting to enforce compliance with the administrative set policy.

Instances of these applications are created using CsOnlineApplicationInstance cmdlets and are then associated with Teams recording policies.

Note that application instances of policy-based recording applications must be associated with a Teams recording policy using the CsTeamsComplianceRecordingApplication cmdlets.
Once the association is done, the Identity of these application instances becomes \<Identity of the associated Teams recording policy\>/\<ObjectId of the application instance\>.
For example, the Identity of an application instance can be \"Tag:ContosoPartnerComplianceRecordingPolicy/39dc3ede-c80e-4f19-9153-417a65a1f144\", which indicates that the application instance with ObjectId 39dc3ede-c80e-4f19-9153-417a65a1f144 is associated with the Teams recording policy with Identity ContosoPartnerComplianceRecordingPolicy.

Please work with your Microsoft certified policy-based recording application provider to obtain an instance of their recording application.
Please refer to the documentation of the CsOnlineApplicationInstance cmdlets for information on how to create an application instance of a policy-based recording application.
Please also refer to the documentation of CsTeamsComplianceRecordingPolicy cmdlets for further information.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsComplianceRecordingApplication -Identity 'Tag:ContosoPartnerComplianceRecordingPolicy/d93fefc7-93cc-4d44-9a5d-344b0fff2899'
```

The command shown in Example 1 creates a new association between an application instance of a policy-based recording application with ObjectId d93fefc7-93cc-4d44-9a5d-344b0fff2899 and a Teams recording policy with the Identity ContosoPartnerComplianceRecordingPolicy.

### Example 2
```powershell
PS C:\> New-CsTeamsComplianceRecordingApplication -Parent 'Tag:ContosoPartnerComplianceRecordingPolicy' -Id 'd93fefc7-93cc-4d44-9a5d-344b0fff2899'
```

The command shown in Example 2 is a variation of Example 1.
It also creates a new association between an application instance of a policy-based recording application with ObjectId d93fefc7-93cc-4d44-9a5d-344b0fff2899 and a Teams recording policy with the Identity ContosoPartnerComplianceRecordingPolicy, but it does this by using the Parent and Id parameters instead of the Identity parameter.

### Example 3
```powershell
PS C:\> New-CsTeamsComplianceRecordingApplication -Parent 'Tag:ContosoPartnerComplianceRecordingPolicy' -Id 'd93fefc7-93cc-4d44-9a5d-344b0fff2899' -RequiredBeforeMeetingJoin $false -RequiredDuringMeeting $false
```

The command shown in Example 3 creates a new association between an application instance of a policy-based recording application with ObjectId d93fefc7-93cc-4d44-9a5d-344b0fff2899 and a Teams recording policy with the Identity ContosoPartnerComplianceRecordingPolicy.

In this example, the application is deemed optional for meetings but mandatory for calls.
Please refer to the documentation of the RequiredBeforeMeetingJoin and RequiredDuringMeeting parameters for more information.

### Example 4
```powershell
PS C:\> New-CsTeamsComplianceRecordingApplication -Parent 'Tag:ContosoPartnerComplianceRecordingPolicy' -Id 'd93fefc7-93cc-4d44-9a5d-344b0fff2899' -RequiredBeforeCallEstablishment $false -RequiredDuringCall $false
```

The command shown in Example 4 creates a new association between an application instance of a policy-based recording application with ObjectId d93fefc7-93cc-4d44-9a5d-344b0fff2899 and a Teams recording policy with the Identity ContosoPartnerComplianceRecordingPolicy.

In this example, the application is deemed optional for calls but mandatory for meetings.
Please refer to the documentation of the RequiredBeforeCallEstablishment and RequiredDuringCall parameters for more information.

### Example 5
```powershell
PS C:\> New-CsTeamsComplianceRecordingApplication -Parent 'Tag:ContosoPartnerComplianceRecordingPolicy' -Id 'd93fefc7-93cc-4d44-9a5d-344b0fff2899' -ConcurrentInvitationCount 2
```

The command shown in Example 5 creates a new association between an application instance of a policy-based recording application with ObjectId d93fefc7-93cc-4d44-9a5d-344b0fff2899 and a Teams recording policy with the Identity ContosoPartnerComplianceRecordingPolicy.

In this example, the application is made resilient by specifying that two invites must be sent to the same application for the same call or meeting.
Please refer to the documentation of the ConcurrentInvitationCount parameter for more information.

### Example 6
```powershell
PS C:\> New-CsTeamsComplianceRecordingApplication -Parent 'Tag:ContosoPartnerComplianceRecordingPolicy' -Id 'd93fefc7-93cc-4d44-9a5d-344b0fff2899' -ComplianceRecordingPairedApplications @(New-CsTeamsComplianceRecordingPairedApplication -Id '39dc3ede-c80e-4f19-9153-417a65a1f144')
```

The command shown in Example 6 creates a new association between an application instance of a policy-based recording application with ObjectId d93fefc7-93cc-4d44-9a5d-344b0fff2899 and a Teams recording policy with the Identity ContosoPartnerComplianceRecordingPolicy.

In this example, the application is made resilient by pairing it with another application instance of a policy-based recording application with ObjectId 39dc3ede-c80e-4f19-9153-417a65a1f144.
Separate invites are sent to the paired applications for the same call or meeting.
Please refer to the documentation of the ComplianceRecordingPairedApplications parameter for more information.

## PARAMETERS

### -ComplianceRecordingPairedApplications
Determines the other policy-based recording applications to pair with this application to achieve application resiliency. Can only have one paired application.

In situations where application resiliency is a necessity, invites can be sent to separate paired applications for the same call or meeting.
If multiple such invites are accepted, then it means that multiple instances of this application are in the call or meeting and each of those instances can record independent of the others.

If all of the invites are rejected, the application invitation process is deemed a failure and the other flags for this application control what happens next.
Please refer to the documentation of the RequiredBeforeMeetingJoin and RequiredBeforeCallEstablishment parameters.

If at least one of the invites is accepted and the others are rejected, the application invitation process is still deemed a success.

If multiple invites are accepted and all of the instances leave or get dropped from the call or meeting, then the application is no longer in the call or meeting and the other flags for this application control what happens next.
Please refer to the documentation of the RequiredDuringMeeting and RequiredDuringCall parameters.

If multiple invites are accepted and at least one of the instances remains in the call or meeting, then the application is in the call or meeting.

Note that application resiliency can be achieved either by sending multiple invites to the same application using ConcurrentInvitationCount or by sending invites to separate paired applications using ComplianceRecordingPairedApplications.
However, you cannot do both.
Please work with your Microsoft certified policy-based recording application provider to determine if application resiliency is needed for your workflows and how best to achieve application resiliency.

```yaml
Type: ComplianceRecordingPairedApplication[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConcurrentInvitationCount
Determines the number of invites to send out to the application instance of the policy-based recording application. Can be set to 1 or 2 only.

In situations where application resiliency is a necessity, multiple invites can be sent to the same application for the same call or meeting.
If multiple such invites are accepted, then it means that multiple instances of this application are in the call or meeting and each of those instances can record independent of the others.

If all of the invites are rejected, the application invitation process is deemed a failure and the other flags for this application control what happens next.
Please refer to the documentation of the RequiredBeforeMeetingJoin and RequiredBeforeCallEstablishment parameters.

If at least one of the invites is accepted and the others are rejected, the application invitation process is still deemed a success.

If multiple invites are accepted and all of the instances leave or get dropped from the call or meeting, then the application is no longer in the call or meeting and the other flags for this application control what happens next.
Please refer to the documentation of the RequiredDuringMeeting and RequiredDuringCall parameters.

If multiple invites are accepted and at least one of the instances remains in the call or meeting, then the application is in the call or meeting.

Note that application resiliency can be achieved either by sending multiple invites to the same application using ConcurrentInvitationCount or by sending invites to separate paired applications using ComplianceRecordingPairedApplications.
However, you cannot do both.
Please work with your Microsoft certified policy-based recording application provider to determine if application resiliency is needed for your workflows and how best to achieve application resiliency.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: 1
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

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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

### -Id
The ObjectId of the application instance of a policy-based recording application as exposed by the Get-CsOnlineApplicationInstance cmdlet.
For example, the Id of an application instance can be \"39dc3ede-c80e-4f19-9153-417a65a1f144\", which indicates that the application instance has ObjectId 39dc3ede-c80e-4f19-9153-417a65a1f144.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
A name that uniquely identifies the application instance of the policy-based recording application.

Application instances of policy-based recording applications must be associated with a Teams recording policy using the CsTeamsComplianceRecordingApplication cmdlets.
To do this association correctly, the Identity of these application instances must be \<Identity of the associated Teams recording policy\>/\<ObjectId of the application instance\>.
For example, the Identity of an application instance can be \"Tag:ContosoPartnerComplianceRecordingPolicy/39dc3ede-c80e-4f19-9153-417a65a1f144\", which indicates that the application instance with ObjectId 39dc3ede-c80e-4f19-9153-417a65a1f144 is associated with the Teams recording policy with Identity ContosoPartnerComplianceRecordingPolicy.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.

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

### -Parent
The Identity of the Teams recording policy that this application instance of a policy-based recording application is associated with.
For example, the Parent of an application instance can be \"Tag:ContosoPartnerComplianceRecordingPolicy\", which indicates that the application instance is associated with the Teams recording policy with Identity ContosoPartnerComplianceRecordingPolicy.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
This priority determines the order in which the policy-based recording applications are displayed in the output of the Get-CsTeamsComplianceRecordingPolicy cmdlet.

All policy-based recording applications are invited in parallel to ensure low call setup and meeting join latencies.
So this parameter does not affect the order of invitations to the applications, or any other routing.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequiredBeforeCallEstablishment
Indicates whether the policy-based recording application must be in the call before the call is allowed to establish.

If this is set to True, the call will be cancelled if the policy-based recording application fails to join the call.

If this is set to False, call establishment will proceed normally if the policy-based recording application fails to join the call.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequiredBeforeMeetingJoin
Indicates whether the policy-based recording application must be in the meeting before the user is allowed to join the meeting.

If this is set to True, the user will not be allowed to join the meeting if the policy-based recording application fails to join the meeting.
The meeting will still continue for users who are in the meeting.

If this is set to False, the user will be allowed to join the meeting even if the policy-based recording application fails to join the meeting.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequiredDuringCall
Indicates whether the policy-based recording application must be in the call while the call is active.

If this is set to True, the call will be cancelled if the policy-based recording application leaves the call or is dropped from the call.

If this is set to False, call establishment will proceed normally if the policy-based recording application leaves the call or is dropped from the call.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequiredDuringMeeting
Indicates whether the policy-based recording application must be in the meeting while the user is in the meeting.

If this is set to True, the user will be ejected from the meeting if the policy-based recording application leaves the meeting or is dropped from the meeting.
The meeting will still continue for users who are in the meeting.

If this is set to False, the user will not be ejected from the meeting if the policy-based recording application leaves the meeting or is dropped from the meeting.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the tenant account whose Teams recording policies are being queried.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter.
Instead, the tenant ID will automatically be filled in for you based on your connection information.
The Tenant parameter is primarily for use in a hybrid deployment.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamscompliancerecordingpolicy)

[New-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamscompliancerecordingpolicy)

[Set-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscompliancerecordingpolicy)

[Grant-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamscompliancerecordingpolicy)

[Remove-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamscompliancerecordingpolicy)

[Get-CsTeamsComplianceRecordingApplication](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamscompliancerecordingapplication)

[Set-CsTeamsComplianceRecordingApplication](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscompliancerecordingapplication)

[Remove-CsTeamsComplianceRecordingApplication](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamscompliancerecordingapplication)

[New-CsTeamsComplianceRecordingPairedApplication](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamscompliancerecordingpairedapplication)
