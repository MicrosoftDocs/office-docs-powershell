---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamscompliancerecordingpolicy
applicable: Microsoft Teams
title: Set-CsTeamsComplianceRecordingPolicy
schema: 2.0.0
manager: nakumar
author: aditdalvi
ms.author: aditd
ms.reviewer:
---

# Set-CsTeamsComplianceRecordingPolicy

## SYNOPSIS
Modifies an existing Teams recording policy for governing automatic policy-based recording in your tenant.
Automatic policy-based recording is only applicable to Microsoft Teams users.

## SYNTAX

### Identity (Default)
```
Set-CsTeamsComplianceRecordingPolicy [-Tenant <System.Guid>] [-Identity <XdsIdentity>]
 [-Enabled <Boolean>] [-WarnUserOnRemoval <Boolean>] [-Description <String>]
 [-DisableComplianceRecordingAudioNotificationForCalls <Boolean>] [-RecordReroutedCalls <Boolean>]
 [-ComplianceRecordingApplications <ComplianceRecordingApplication[]>] [-CustomBanner <Guid>]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTeamsComplianceRecordingPolicy [-Tenant <System.Guid>] [-Instance <PSObject>]
 [-Enabled <Boolean>] [-WarnUserOnRemoval <Boolean>] [-Description <String>]
 [-ComplianceRecordingApplications <ComplianceRecordingApplication[]>]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Teams recording policies are used in automatic policy-based recording scenarios.
When Microsoft Teams users participate in meetings or make or receive calls, the policy-based recording applications i.e. bots associated with the user's Teams recording policy are invited into the call or meeting to record audio, video and video-based screen sharing activity.

Note that simply assigning a Teams recording policy to a Microsoft Teams user will not activate automatic policy-based recording for all Microsoft Teams calls and meetings that the user participates in.
Among other things, you will need to create an application instance of a policy-based recording application i.e. a bot in your tenant and will then need to assign an appropriate policy to the user.

Please work with your Microsoft certified policy-based recording application provider to obtain an instance of their recording application.
Please refer to the documentation of the CsOnlineApplicationInstance cmdlets for information on how to create an application instance of a policy-based recording application.

Assigning your Microsoft Teams users a Teams recording policy activates automatic policy-based recording for all new Microsoft Teams calls and meetings that the users participate in.
The system will load the recording application and join it to appropriate calls and meetings in order for it to enforce compliance with the administrative set policy.
Existing calls and meetings are unaffected.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsComplianceRecordingPolicy -Identity 'ContosoPartnerComplianceRecordingPolicy' -ComplianceRecordingApplications @(New-CsTeamsComplianceRecordingApplication -Parent 'ContosoPartnerComplianceRecordingPolicy' -Id 'd93fefc7-93cc-4d44-9a5d-344b0fff2899')
```

The command shown in Example 1 modifies an existing per-user Teams recording policy with the Identity ContosoPartnerComplianceRecordingPolicy.
This policy is re-assigned a single application instance of a policy-based recording application: d93fefc7-93cc-4d44-9a5d-344b0fff2899, which is the ObjectId of the application instance as obtained from the Get-CsOnlineApplicationInstance cmdlet.

Any Microsoft Teams users who are assigned this policy will have their calls and meetings recorded by that application instance. Existing calls and meetings are unaffected.

### Example 2

```powershell
PS C:\> Set-CsTeamsComplianceRecordingPolicy -Identity 'ContosoPartnerComplianceRecordingPolicy' -ComplianceRecordingApplications @(New-CsTeamsComplianceRecordingApplication -Parent 'ContosoPartnerComplianceRecordingPolicy' -Id 'd93fefc7-93cc-4d44-9a5d-344b0fff2899'), @(New-CsTeamsComplianceRecordingApplication -Parent 'ContosoPartnerComplianceRecordingPolicy' -Id '39dc3ede-c80e-4f19-9153-417a65a1f144')
```

Example 2 is a variation of Example 1.
In this case, the Teams recording policy is re-assigned two application instances of policy-based recording applications.

Any Microsoft Teams users who are assigned this policy will have their calls and meetings recorded by both those application instances. Existing calls and meetings are unaffected.

### Example 3
```powershell
PS C:\> Set-CsTeamsComplianceRecordingPolicy -Identity 'ContosoPartnerComplianceRecordingPolicy' -Enabled $false
```

The command shown in Example 3 stops automatic policy-based recording for all new calls and meetings of all Microsoft Teams users who are assigned this policy. Existing calls and meetings are unaffected.

### Example 4
```powershell
PS C:\> Set-CsTeamsComplianceRecordingPolicy -Identity 'ContosoPartnerComplianceRecordingPolicy' -Enabled $true
```

The command shown in Example 4 causes automatic policy-based recording to occur for all new calls and meetings of all Microsoft Teams users who are assigned this policy. Existing calls and meetings are unaffected.

### Example 5
```powershell
PS C:\> Get-CsTeamsComplianceRecordingPolicy | Set-CsTeamsComplianceRecordingPolicy -Enabled $false
```

The command shown in Example 5 stops automatic policy-based recording for all Teams recording policies.
This effectively stops automatic policy-based recording for all new calls and meetings of all Microsoft Teams users who are assigned any Teams recording policy. Existing calls and meetings are unaffected.

## PARAMETERS

### -Identity
Unique identifier to be assigned to the new Teams recording policy.

Use the "Global" Identity if you wish to assign this policy to the entire tenant.

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
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

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

### CustomBanner
References the Custom Banner text in the storage.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
Controls whether this Teams recording policy is active or not.

Setting this to True and having the right set of ComplianceRecordingApplications will initiate automatic policy-based recording for all new calls and meetings of all Microsoft Teams users who are assigned this policy. Existing calls and meetings are unaffected.

Setting this to False will stop automatic policy-based recording for any new calls or meetings of all Microsoft Teams users who are assigned this policy. Existing calls and meetings are unaffected.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WarnUserOnRemoval
This parameter is reserved for future use.

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

### -Description
Enables administrators to provide explanatory text to accompany a Teams recording policy. For example, the Description might include information about the users the policy should be assigned to.

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

### -ComplianceRecordingApplications
A list of application instances of policy-based recording applications to assign to this policy.
The Id of each of these application instances must be the ObjectId of the application instance as obtained by the Get-CsOnlineApplicationInstance cmdlet.

Please work with your Microsoft certified policy-based recording application provider to obtain an instance of their recording application.
Please refer to the documentation of the CsOnlineApplicationInstance cmdlets for information on how to create an application instance of a policy-based recording application.

```yaml
Type: ComplianceRecordingApplication[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
### -DisableComplianceRecordingAudioNotificationForCalls
Setting this attribute to true disables recording audio notifications for 1:1 calls that are under compliance recording

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableComplianceRecordingAudioNotificationForCalls
Setting this attribute to true disables recording audio notifications for 1:1 calls that are under compliance recording.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecordReroutedCalls
Setting this attribute to true enables compliance recording for calls that have been re-routed from a compliance recording-enabled user. Supported call scenarios include forward, transfer, delegation, call groups, and simultaneous ring.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
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

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamscompliancerecordingpolicy)

[New-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamscompliancerecordingpolicy)

[Grant-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamscompliancerecordingpolicy)

[Remove-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamscompliancerecordingpolicy)

[Get-CsTeamsComplianceRecordingApplication](https://learn.microsoft.com/powershell/module/teams/get-csteamscompliancerecordingapplication)

[New-CsTeamsComplianceRecordingApplication](https://learn.microsoft.com/powershell/module/teams/new-csteamscompliancerecordingapplication)

[Set-CsTeamsComplianceRecordingApplication](https://learn.microsoft.com/powershell/module/teams/set-csteamscompliancerecordingapplication)

[Remove-CsTeamsComplianceRecordingApplication](https://learn.microsoft.com/powershell/module/teams/remove-csteamscompliancerecordingapplication)

[New-CsTeamsComplianceRecordingPairedApplication](https://learn.microsoft.com/powershell/module/teams/new-csteamscompliancerecordingpairedapplication)
