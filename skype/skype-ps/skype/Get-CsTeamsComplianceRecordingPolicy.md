---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/get-csteamscompliancerecordingpolicy
applicable: Skype for Business Online
title: Get-CsTeamsComplianceRecordingPolicy
schema: 2.0.0
manager: nakumar
author: aditdalvi
ms.author: aditd
ms.reviewer:
---

# Get-CsTeamsComplianceRecordingPolicy

## SYNOPSIS
Returns information about the policies configured for governing automatic policy-based recording in your tenant.
Automatic policy-based recording is only applicable to Microsoft Teams users.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsComplianceRecordingPolicy [-Tenant <System.Guid>] [-Identity <XdsIdentity>]
 [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsComplianceRecordingPolicy [-Tenant <System.Guid>] [-Filter <String>]
 [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Teams compliance recording policies are used in automatic policy-based recording scenarios.
When Microsoft Teams users participate in meetings or make or receive calls, the policy-based recording applications i.e. bots associated with the user's Teams compliance recording policy are invited into the call or meeting to record audio, video and video-based screen sharing activity.

Note that simply assigning a Teams compliance recording policy to a Microsoft Teams user will not activate automatic policy-based recording for all Microsoft Teams calls and meetings that the user participates in.
Among other things, you will need to create an application instance of a policy-based recording application i.e. a bot in your tenant and will then need to assign an appropriate policy to the user.

Please work with your Microsoft certified policy-based recording application provider to obtain an instance of their recording application.
Please refer to the documentation of the CsOnlineApplicationInstance cmdlets for information on how to create an application instance of a policy-based recording application.

Assigning your Microsoft Teams users a Teams compliance recording policy activates automatic policy-based recording for all new Microsoft Teams calls and meetings that the users participate in.
Existing calls and meetings are unaffected.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsComplianceRecordingPolicy
```

The command shown in Example 1 returns information for all the Teams compliance recording policies configured for use in the tenant.

### Example 2
```powershell
PS C:\> Get-CsTeamsComplianceRecordingPolicy -Identity 'ContosoPartnerComplianceRecordingPolicy'
```

In Example 2, information is returned for a single Teams compliance recording policy: the policy with the Identity ContosoPartnerComplianceRecordingPolicy.

### Example 3
```powershell
PS C:\> Get-CsTeamsComplianceRecordingPolicy -Filter 'Tag:*'
```

The command shown in Example 3 returns information about all the Teams compliance recording policies configured at the per-user scope.
To do this, the command uses the Filter parameter and the filter value "Tag:\*"; that filter value limits the returned data to policies that have an Identity that begins with the string value "Tag:".

## PARAMETERS

### -Filter
Enables you to use wildcards when retrieving one or more Teams compliance recording policies.
For example, to return all the policies configured at the per-user scope, use this syntax:

-Filter "Tag:\*"

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: True
```

### -Identity
Unique identifier of the Teams compliance recording policy to be retrieved.
To return the global policy, use this syntax:

-Identity "Global"

To return a policy configured at the per-user scope, use syntax like this:

-Identity "ContosoPartnerComplianceRecordingPolicy"

You cannot use wildcard characters when specifying the Identity.

If neither the Identity nor the Filter parameters are specified, then Get-CsTeamsComplianceRecordingPolicy returns all the Teams compliance recording policies configured for use in the tenant.

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

### -LocalStore
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the tenant account whose Teams compliance recording policies are being queried.
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## RELATED LINKS

[New-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/powershell/module/skype/new-csteamscompliancerecordingpolicy?view=skype-ps)

[Set-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/powershell/module/skype/set-csteamscompliancerecordingpolicy?view=skype-ps)

[Grant-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/powershell/module/skype/grant-csteamscompliancerecordingpolicy?view=skype-ps)

[Remove-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/powershell/module/skype/remove-csteamscompliancerecordingpolicy?view=skype-ps)

[Get-CsTeamsComplianceRecordingApplication](https://docs.microsoft.com/powershell/module/skype/get-csteamscompliancerecordingapplication?view=skype-ps)

[New-CsTeamsComplianceRecordingApplication](https://docs.microsoft.com/powershell/module/skype/new-csteamscompliancerecordingapplication?view=skype-ps)

[Set-CsTeamsComplianceRecordingApplication](https://docs.microsoft.com/powershell/module/skype/set-csteamscompliancerecordingapplication?view=skype-ps)

[Remove-CsTeamsComplianceRecordingApplication](https://docs.microsoft.com/powershell/module/skype/remove-csteamscompliancerecordingapplication?view=skype-ps)

[New-CsTeamsComplianceRecordingPairedApplication](https://docs.microsoft.com/powershell/module/skype/new-csteamscompliancerecordingpairedapplication?view=skype-ps)
