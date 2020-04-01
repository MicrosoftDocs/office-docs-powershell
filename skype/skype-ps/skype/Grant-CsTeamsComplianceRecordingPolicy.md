---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/grant-csteamscompliancerecordingpolicy
applicable: Skype for Business Online
title: Grant-CsTeamsComplianceRecordingPolicy
schema: 2.0.0
manager: nakumar
author: aditdalvi
ms.author: aditd
ms.reviewer:
---

# Grant-CsTeamsComplianceRecordingPolicy

## SYNOPSIS
Assigns a per-user Teams recording policy to one or more users.
This policy is used to govern automatic policy-based recording in your tenant.
Automatic policy-based recording is only applicable to Microsoft Teams users.

## SYNTAX

### Identity (Default)
```
Grant-CsTeamsComplianceRecordingPolicy [-Identity <UserIdParameter>] [-PolicyName <String>]
 [-Tenant <System.Guid>] [-DomainController <Fqdn>]
 [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsTeamsComplianceRecordingPolicy [-Global] [-PolicyName <String>]
 [-Tenant <System.Guid>] [-DomainController <Fqdn>]
 [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
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
PS C:\> Grant-CsTeamsComplianceRecordingPolicy -Identity 'Ken Myer' -PolicyName 'ContosoPartnerComplianceRecordingPolicy'
```

The command shown in Example 1 assigns the per-user Teams recording policy ContosoPartnerComplianceRecordingPolicy to the user with the display name "Ken Myer".

### Example 2
```powershell
PS C:\> Grant-CsTeamsComplianceRecordingPolicy -Identity 'Ken Myer' -PolicyName $null
```

In Example 2, any per-user Teams recording policy previously assigned to the user "Ken Myer" is revoked.
As a result, the user will be managed by the global Teams recording policy.

## PARAMETERS

### -Identity
Indicates the Identity of the user account to be assigned the per-user Teams recording policy.
User Identities can be specified using one of the following formats:
1) the user's SIP address;
2) the user's user principal name (UPN);
3) the user's Active Directory display name (for example, Ken Myer).

```yaml
Type: UserIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Global
When you use this cmdlet without specifying a user identity, the policy applies to all users in your tenant.
To skip a warning when you do this operation, specify "-Global".

```yaml
Type: SwitchParameter
Parameter Sets: GrantToTenant
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
Name of the policy to be assigned.
The PolicyName is simply the policy Identity without the policy scope i.e. the "Tag:" prefix.
For example, a policy with the Identity Tag:ContosoPartnerComplianceRecordingPolicy has a PolicyName equal to ContosoPartnerComplianceRecordingPolicy.

To revoke a per-user policy previously assigned to a user, set the PolicyName to a null value ($null).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
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

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a user object through the pipeline that represents the user account being assigned the Teams recording policy.
By default, the Grant-CsTeamsComplianceRecordingPolicy cmdlet does not pass objects through the pipeline.

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

### Microsoft.Rtc.Management.AD.UserIdParameter

## OUTPUTS

### System.Object

## RELATED LINKS

[Get-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/powershell/module/skype/get-csteamscompliancerecordingpolicy?view=skype-ps)

[New-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/powershell/module/skype/new-csteamscompliancerecordingpolicy?view=skype-ps)

[Set-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/powershell/module/skype/set-csteamscompliancerecordingpolicy?view=skype-ps)

[Remove-CsTeamsComplianceRecordingPolicy](https://docs.microsoft.com/powershell/module/skype/remove-csteamscompliancerecordingpolicy?view=skype-ps)

[Get-CsTeamsComplianceRecordingApplication](https://docs.microsoft.com/powershell/module/skype/get-csteamscompliancerecordingapplication?view=skype-ps)

[New-CsTeamsComplianceRecordingApplication](https://docs.microsoft.com/powershell/module/skype/new-csteamscompliancerecordingapplication?view=skype-ps)

[Set-CsTeamsComplianceRecordingApplication](https://docs.microsoft.com/powershell/module/skype/set-csteamscompliancerecordingapplication?view=skype-ps)

[Remove-CsTeamsComplianceRecordingApplication](https://docs.microsoft.com/powershell/module/skype/remove-csteamscompliancerecordingapplication?view=skype-ps)

[New-CsTeamsComplianceRecordingPairedApplication](https://docs.microsoft.com/powershell/module/skype/new-csteamscompliancerecordingpairedapplication?view=skype-ps)
