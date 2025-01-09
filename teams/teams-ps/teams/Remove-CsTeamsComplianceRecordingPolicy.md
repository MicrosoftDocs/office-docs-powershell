---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamscompliancerecordingpolicy
applicable: Microsoft Teams
title: Remove-CsTeamsComplianceRecordingPolicy
schema: 2.0.0
manager: nakumar
author: aditdalvi
ms.author: aditd
ms.reviewer:
---

# Remove-CsTeamsComplianceRecordingPolicy

## SYNOPSIS
Deletes an existing Teams recording policy that is used to govern automatic policy-based recording in your tenant.
Automatic policy-based recording is only applicable to Microsoft Teams users.

## SYNTAX

```
Remove-CsTeamsComplianceRecordingPolicy [-Tenant <System.Guid>] [-Identity <XdsIdentity>]
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
PS C:\> Remove-CsTeamsComplianceRecordingPolicy -Identity 'ContosoPartnerComplianceRecordingPolicy'
```

The command shown in Example 1 deletes the Teams recording policy ContosoPartnerComplianceRecordingPolicy.

### Example 2
```powershell
PS C:\> Get-CsTeamsComplianceRecordingPolicy -Filter 'Tag:*' | Remove-CsTeamsComplianceRecordingPolicy
```

In Example 2, all the Teams recording policies configured at the per-user scope are removed.
The Filter value "Tag:*" limits the returned data to Teams recording policies configured at the per-user scope. Those per-user policies are then removed.

## PARAMETERS

### -Identity
Unique identifier to be assigned to the new Teams recording policy.

Use the "Global" Identity if you wish to assign this policy to the entire tenant.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
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

### Microsoft.Rtc.Management.Xds.XdsIdentity

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamscompliancerecordingpolicy)

[New-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamscompliancerecordingpolicy)

[Set-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamscompliancerecordingpolicy)

[Grant-CsTeamsComplianceRecordingPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamscompliancerecordingpolicy)

[Get-CsTeamsComplianceRecordingApplication](https://learn.microsoft.com/powershell/module/teams/get-csteamscompliancerecordingapplication)

[New-CsTeamsComplianceRecordingApplication](https://learn.microsoft.com/powershell/module/teams/new-csteamscompliancerecordingapplication)

[Set-CsTeamsComplianceRecordingApplication](https://learn.microsoft.com/powershell/module/teams/set-csteamscompliancerecordingapplication)

[Remove-CsTeamsComplianceRecordingApplication](https://learn.microsoft.com/powershell/module/teams/remove-csteamscompliancerecordingapplication)

[New-CsTeamsComplianceRecordingPairedApplication](https://learn.microsoft.com/powershell/module/teams/new-csteamscompliancerecordingpairedapplication)
